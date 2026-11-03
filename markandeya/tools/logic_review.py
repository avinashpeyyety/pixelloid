#!/usr/bin/env python3
"""
Markandeya Purana — panel-logic agent (GATE A/B) for plate-bible.json.

Forked in spirit from mahabharata/tools/logic_review.py, with the Mahabharata-only
rules (Krishna/Arjuna locks, Drona bleed, Ep10 field-master path, BORI/Ganguli
source families) replaced by series rules:

  * canvas 1536x1024 3:2; style lock not photoreal; prompt prefix/close/output present
  * series spine assets/spine/field-master.jpg is the quality bar and in every image's refs
  * <= 5 Imagine refs per image; refs are only the spine, scene master or _locks/*.jpg
    (never a finished plate-*.jpg or poster)
  * every cast_present id is in bible cast and has a character_lock_refs entry
  * every absent episode cast member is named in a "No X." clause of the prompt
  * family-friendly: no blood/gore/severed/skull/corpse words in positive spec
  * "exactly two arms" clause on plates with human cast; light declared and "NOT night"
  * beat_text matches script.js narration (same order), files plate-<id>.jpg
  * >= 2 source families per plate: gita_press / jagadiswarananda / pargiter

Usage:
  python3 tools/logic_review.py episodes/01-king-and-merchant/plate-bible.json --report
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
from dialogue_review import parse_beats  # noqa: E402

SPINE = "assets/spine/field-master.jpg"
MAX_REFS = 5
SOURCE_FAMILIES = {
    "gita_press": re.compile(r"\b(gita[\s_-]*press|gorakhpur|durga saptashati)\b", re.I),
    "jagadiswarananda": re.compile(r"\b(jagadiswarananda|jagadishwarananda|ramakrishna math)\b", re.I),
    "pargiter": re.compile(r"\bpargiter\b", re.I),
}
GORE = re.compile(r"\b(blood(y|ied)?|gore|gory|severed|decapitat\w*|skulls?|corpses?|entrails|dismember\w*)\b", re.I)
NEGATORS = re.compile(r"\b(no|not|never|without|instead of)\b[^.;]{0,60}$", re.I)
LIGHTS = {"dawn", "day", "morning", "afternoon", "sunset", "dusk"}
NONHUMAN_OK = {"lion", "mahishasura"}


def gore_hits(text: str) -> list[str]:
    hits = []
    for m in GORE.finditer(text or ""):
        before = text[max(0, m.start() - 80): m.start()]
        if not NEGATORS.search(before):
            hits.append(m.group(0))
    return hits


def check_refs(label: str, refs: list[str], fails: list[str]) -> None:
    if not refs:
        fails.append(f"{label}: no imagine_refs")
        return
    if len(refs) > MAX_REFS:
        fails.append(f"{label}: {len(refs)} refs > {MAX_REFS} (consumer Imagine limit)")
    if SPINE not in refs:
        fails.append(f"{label}: imagine_refs must include the series spine {SPINE}")
    for r in refs:
        name = Path(r).name
        if r != SPINE and "/_locks/" not in r:
            fails.append(f"{label}: ref {r} is not the spine or a _locks/ file")
        if name.startswith("plate-") or name.startswith("poster"):
            fails.append(f"{label}: finished plate/poster {r} used as an Imagine ref")


def review(bible: dict, ep_dir: Path) -> tuple[bool, list[str]]:
    fails: list[str] = []
    canvas = bible.get("canvas") or {}
    if (canvas.get("width", 0) < 1536 or canvas.get("height", 0) < 1024 or canvas.get("aspect") != "3:2"):
        fails.append(f"canvas must be >=1536x1024 3:2, got {canvas}")
    if bible.get("photoreal_allowed"):
        fails.append("photoreal_allowed must be false")
    if bible.get("quality_bar_ref") != SPINE:
        fails.append(f"quality_bar_ref must be {SPINE}")
    if not (ROOT / SPINE).exists():
        fails.append(f"missing series spine {SPINE}")
    if "api.x.ai" in json.dumps(bible.get("image_path", "")) and "never" not in bible.get("image_path", "").lower():
        fails.append("image_path must be SuperGrok consumer Imagine, never api.x.ai")
    prefix = bible.get("prompt_prefix") or ""
    output = bible.get("output") or "Output: native 3:2"

    cast = bible.get("cast") or {}
    locks = bible.get("character_lock_refs") or {}
    ep_cast = set(cast)
    for cid in cast:
        if cid not in locks:
            fails.append(f"cast {cid}: no character_lock_refs entry (every named face needs a lock)")
        spec = cast[cid]
        for k in ("face", "hair", "costume"):
            if not spec.get(k):
                fails.append(f"cast {cid}: missing {k}")

    # scene master + lock plan
    sm = bible.get("scene_master_prompt") or ""
    if sm and not sm.startswith(prefix):
        fails.append("scene_master_prompt must open with prompt_prefix")
    for cid, plan in (bible.get("local_lock_plan") or {}).items():
        check_refs(f"lock {cid}", plan.get("refs") or [], fails)
        p = plan.get("prompt") or ""
        if "exactly one adult" not in p:
            fails.append(f"lock {cid}: prompt must say 'exactly one adult'")
        for g in gore_hits(p):
            fails.append(f"lock {cid}: gore word `{g}` in positive spec")

    # script alignment
    script_beats = []
    sp = ep_dir / "script.js"
    if sp.exists():
        script_beats = [b for b in parse_beats(sp.read_text(encoding="utf-8")) if (b.get("text") or "").strip()]
    plates = bible.get("plates") or []
    if not plates:
        fails.append("no plates")
    if script_beats and len(script_beats) != len(plates):
        fails.append(f"script has {len(script_beats)} spoken beats but bible has {len(plates)} plates")

    seen_ids = set()
    for i, p in enumerate(plates):
        pid = p.get("id") or f"#{i}"
        if pid in seen_ids:
            fails.append(f"{pid}: duplicate plate id")
        seen_ids.add(pid)
        if p.get("file") != f"plate-{pid}.jpg":
            fails.append(f"{pid}: file must be plate-{pid}.jpg")
        present = p.get("cast_present") or []
        for cid in present:
            if cid not in ep_cast:
                fails.append(f"{pid}: cast_present {cid} not in bible cast")
        prompt = p.get("prompt") or ""
        if not prompt.startswith(prefix):
            fails.append(f"{pid}: prompt must open with prompt_prefix")
        if not prompt.rstrip().endswith("No watermark.") or output.split(",")[0] not in prompt:
            fails.append(f"{pid}: prompt must end with the 3:2 Output clause + No watermark.")
        if not prompt.isascii():
            fails.append(f"{pid}: prompt is not plain ASCII")
        if any(c not in NONHUMAN_OK for c in present) and "exactly two arms" not in prompt:
            fails.append(f"{pid}: human cast but no 'exactly two arms' clause")
        light = (p.get("light") or "").lower()
        if light not in LIGHTS:
            fails.append(f"{pid}: light `{light}` not declared as one of {sorted(LIGHTS)}")
        if "NOT night" not in prompt:
            fails.append(f"{pid}: prompt must say NOT night")
        for g in gore_hits(prompt) + gore_hits(" ".join(p.get("must_show") or [])):
            fails.append(f"{pid}: gore word `{g}` in positive spec")
        # absent cast must be excluded by name
        for cid in ep_cast - set(present):
            nm = (cast[cid].get("name") or cid)
            if f"No {nm}." not in prompt:
                fails.append(f"{pid}: absent cast `{cid}` not excluded ('No {nm}.')")
        check_refs(pid, p.get("imagine_refs") or [], fails)
        for cid in present:
            want = locks.get(cid)
            if want and want not in (p.get("imagine_refs") or []):
                fails.append(f"{pid}: {cid} on plate but its lock {want} is not attached")
        if not p.get("must_show"):
            fails.append(f"{pid}: must_show empty")
        if not p.get("must_not_show"):
            fails.append(f"{pid}: must_not_show empty")
        fams = set()
        for s in p.get("sources") or []:
            blob = f"{s.get('work','')} {s.get('cite','')}"
            for fam, pat in SOURCE_FAMILIES.items():
                if pat.search(blob) and (s.get("cite") or "").strip():
                    fams.add(fam)
        if len(fams) < 2:
            fails.append(f"{pid}: needs >=2 source families with cites (gita_press / jagadiswarananda / pargiter), got {sorted(fams)}")
        if script_beats and i < len(script_beats):
            sb = script_beats[i]
            if sb.get("plate") != pid:
                fails.append(f"{pid}: script beat {i} uses plate `{sb.get('plate')}`")
            if (sb.get("text") or "").strip() != (p.get("beat_text") or "").strip():
                fails.append(f"{pid}: beat_text differs from script.js beat {i}")

    poster = bible.get("poster") or {}
    if poster:
        check_refs("poster", poster.get("imagine_refs") or [], fails)
        for g in gore_hits(poster.get("prompt") or ""):
            fails.append(f"poster: gore word `{g}`")
    return not fails, fails


def write_report(ep_dir: Path, bible: dict, ok: bool, fails: list[str]) -> Path:
    out = ep_dir / "logic-reviews" / "RR-gateB-bible.md"
    out.parent.mkdir(parents=True, exist_ok=True)
    lines = [
        f"# Logic review — Markandeya Ep {bible.get('episode_id')} — GATE A/B (plate bible)",
        "",
        f"Status: **{'PASS' if ok else 'FAIL'}**",
        "",
        "Tool: `python3 tools/logic_review.py " + str((ep_dir / 'plate-bible.json').relative_to(ROOT)) + " --report`",
        "",
        f"- Plates: {len(bible.get('plates') or [])} · cast: {', '.join(bible.get('cast') or {})}",
        f"- Spine: `{SPINE}` · max refs {MAX_REFS} · sources: gita_press / jagadiswarananda / pargiter (>=2 per plate)",
        "- Family-friendly scan: no blood / gore / severed / skull / corpse in positive specs",
        "",
    ]
    if fails:
        lines += ["## Fails", ""] + [f"- {f}" for f in fails]
    else:
        lines += ["No fails."]
    out.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description="Markandeya GATE A/B plate-bible review")
    ap.add_argument("bible", type=Path)
    ap.add_argument("--report", action="store_true")
    args = ap.parse_args()
    path = args.bible if args.bible.is_absolute() else ROOT / args.bible
    bible = json.loads(path.read_text(encoding="utf-8"))
    ok, fails = review(bible, path.parent)
    print("PASS" if ok else "FAIL")
    for f in fails:
        print(f"  - {f}")
    if args.report:
        print(f"report: {write_report(path.parent, bible, ok, fails).relative_to(ROOT)}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
