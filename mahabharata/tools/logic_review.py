#!/usr/bin/env python3
"""
Panel-logic agent (GATE A/B) — validate plate-bible JSON against lore/prop/style rules.

Usage:
  python3 tools/logic_review.py episodes/02-swayamvara/plate-bible.json
  python3 tools/logic_review.py episodes/02-swayamvara/plate-bible.json --report
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Forbidden when used as *positive* prop directions (not in must_not / "no X")
ORPHAN_PROP_BAN = [
    "floating bow sculpture",
    "decorative bow beside throne",
    "random bow next to draupadi",
    "giant ornate bow on floor unused",
    "dry fish on stick",
    "dry fish on pole",
    "metal fish without glass",
    "fish swimming in floor pool as target",
]

# Style words that fail only if requested as the desired look (not negated)
STYLE_BAN_POSITIVE = re.compile(
    r"(?<!\bnot\s)(?<!\bno\s)(?<!never\s)\b(photoreal(?:istic)?|live-action face|cgi person|hyperrealistic)\b",
    re.I,
)

FISH_REQUIRED_KEYS = {
    "vessel": re.compile(r"glass|crystal|sealed", re.I),
    "water_in_vessel": re.compile(r"water|swim", re.I),
    "roof_mount": re.compile(r"roof|ceiling|high|overhead|beam", re.I),
    "floor_pool": re.compile(r"pool|reflection|mirror", re.I),
    "aim_eyes": re.compile(r"look.*pool|eyes? (on|at|to) (the )?(pool|water|reflection)|reflection", re.I),
}


def load(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def check_style(bible: dict) -> list[str]:
    fails = []
    style = (bible.get("style_lock") or "").lower()
    if "comic" not in style and "painted" not in style and "amar" not in style:
        fails.append("style_lock must require painted comic / Amar Chitra language")
    if bible.get("photoreal_allowed"):
        fails.append("photoreal_allowed must be false")
    master = bible.get("style_master_ref") or ""
    if "plate-wide-gold" not in master:
        fails.append("style_master_ref must point at Ep01 plate-wide-gold")
    return fails


def check_cast(bible: dict) -> list[str]:
    fails = []
    cast = bible.get("cast") or {}
    if not cast:
        fails.append("cast sheet empty")
    for role, spec in cast.items():
        if not isinstance(spec, dict):
            fails.append(f"cast.{role} must be object")
            continue
        for key in ("face", "costume", "hair"):
            if not (spec.get(key) or "").strip():
                fails.append(f"cast.{role} missing {key}")
        if role in ("arjuna", "arjuna_brahmin", "brahmin", "arjuna_revealed"):
            for field in ("costume", "hair", "face"):
                val = (spec.get(field) or "").lower()
                # Allow "no peacock" / "without peacock" / "absolutely no peacock"
                if re.search(r"\bpeacock\b", val) and not re.search(
                    r"\b(no|without|never|forbid\w*)\b[^.]*\bpeacock\b|\bpeacock\b[^.]*\b(no|forbidden|removed)\b",
                    val,
                ):
                    fails.append(f"cast.{role}.{field}: peacock forbidden (series lock)")
    return fails


def check_apparatus(bible: dict) -> list[str]:
    fails = []
    app = bible.get("apparatus") or {}
    if not app and any(p.get("has_fish_apparatus") for p in bible.get("plates", [])):
        fails.append("apparatus block required when any plate uses fish apparatus")
        return fails
    if not app:
        return fails
    blob = json.dumps(app).lower()
    for name, pat in [
        ("glass sealed vessel", re.compile(r"glass|crystal")),
        ("water + swimming fish", re.compile(r"swim|water")),
        ("roof/ceiling mount", re.compile(r"roof|ceiling|overhead")),
        ("floor pool reflection", re.compile(r"pool|reflection")),
    ]:
        if not pat.search(blob):
            fails.append(f"apparatus missing: {name}")
    if re.search(r"dry fish|pole-mounted fish without glass|metal fish on stick", blob):
        fails.append("apparatus forbids dry/pole fish without glass water")
    return fails


def check_plate(plate: dict, cast_ids: set[str], apparatus_on: bool) -> list[str]:
    fails = []
    pid = plate.get("id") or "?"
    if not plate.get("beat_text"):
        fails.append(f"{pid}: missing beat_text")
    if not plate.get("must_show"):
        fails.append(f"{pid}: missing must_show list")
    if not plate.get("must_not_show"):
        fails.append(f"{pid}: missing must_not_show list")
    if not plate.get("prompt"):
        fails.append(f"{pid}: missing prompt")

    must_show = " ".join(plate.get("must_show") or [])
    must_not = " ".join(plate.get("must_not_show") or []).lower()
    prompt = plate.get("prompt") or ""
    props = " ".join(plate.get("props") or [])
    # Positive-direction blob (exclude must_not_show — bans live there on purpose)
    positive = f"{prompt} {must_show} {props} {plate.get('notes') or ''}".lower()

    for ban in ORPHAN_PROP_BAN:
        if ban in positive and ban not in must_not:
            fails.append(f"{pid}: banned phrase in positive spec: {ban}")

    if STYLE_BAN_POSITIVE.search(positive):
        # Allow explicit "not photoreal" / "— not photoreal"
        if not re.search(r"\bnot\s+photoreal|never\s+photoreal|no\s+photoreal", positive):
            fails.append(f"{pid}: positive style must not request photoreal/CGI")

    # Orphan bow next to Draupadi (positive only)
    if "draupadi" in positive and re.search(
        r"bow (beside|next to|near) draupadi|bow sculpture beside|giant bow on (floor|dais)",
        positive,
    ):
        if "held by" not in positive and "archer" not in positive:
            fails.append(f"{pid}: bow must not be decorative junk next to Draupadi")

    if plate.get("has_fish_apparatus"):
        if not apparatus_on:
            fails.append(f"{pid}: has_fish_apparatus but bible.apparatus empty")
        field = f"{must_show} {prompt} {props}"
        for key, pat in FISH_REQUIRED_KEYS.items():
            if key == "aim_eyes" and not plate.get("is_aim_beat"):
                continue
            if not pat.search(field):
                fails.append(f"{pid}: fish apparatus must encode {key}")

    for cid in plate.get("cast_present") or []:
        if cid not in cast_ids:
            fails.append(f"{pid}: unknown cast id {cid}")

    if plate.get("style") and re.search(r"\bphotoreal|live-action|cgi\b", (plate.get("style") or ""), re.I):
        if not re.search(r"\bnot\b", (plate.get("style") or ""), re.I):
            fails.append(f"{pid}: photoreal style not allowed")

    return fails


def review(bible: dict) -> tuple[bool, list[str]]:
    fails: list[str] = []
    fails += check_style(bible)
    fails += check_cast(bible)
    fails += check_apparatus(bible)
    cast_ids = set((bible.get("cast") or {}).keys())
    apparatus_on = bool(bible.get("apparatus"))
    plates = bible.get("plates") or []
    if not plates:
        fails.append("no plates in bible")
    for p in plates:
        fails += check_plate(p, cast_ids, apparatus_on)
    # Continuity: same apparatus description id if flagged
    app_plates = [p["id"] for p in plates if p.get("has_fish_apparatus")]
    if len(app_plates) >= 2 and not bible.get("apparatus", {}).get("continuity_id"):
        fails.append("apparatus.continuity_id required when multiple fish plates")
    return (len(fails) == 0, fails)


def write_report(path: Path, bible: dict, ok: bool, fails: list[str]) -> Path:
    ep = bible.get("episode_id") or path.parent.name
    out_dir = path.parent / "logic-reviews"
    out_dir.mkdir(parents=True, exist_ok=True)
    out = out_dir / "RR-gateB-bible.md"
    lines = [
        f"# Logic review — Ep {ep} — GATE B (plate bible)",
        f"Status: {'PASS' if ok else 'FAIL'}",
        "Reviewer: panel-logic agent (tools/logic_review.py)",
        "",
        f"Plates: {len(bible.get('plates') or [])}",
        "",
    ]
    if ok:
        lines += ["## Result", "All automated checks passed.", ""]
    else:
        lines += ["## Blocking issues", ""]
        for i, f in enumerate(fails, 1):
            lines.append(f"{i}. {f}")
        lines.append("")
        lines += ["## Required fixes before Imagine", "Resolve every blocking issue in plate-bible.json, re-run this tool.", ""]
    out.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description="Panel logic review agent")
    ap.add_argument("bible", type=Path, help="path to plate-bible.json")
    ap.add_argument("--report", action="store_true", help="write logic-reviews/RR-gateB-bible.md")
    args = ap.parse_args()
    path = args.bible if args.bible.is_absolute() else ROOT / args.bible
    if not path.exists():
        print(f"FAIL: missing {path}", file=sys.stderr)
        return 2
    bible = load(path)
    ok, fails = review(bible)
    if args.report:
        rep = write_report(path, bible, ok, fails)
        print(f"report: {rep}")
    print("PASS" if ok else "FAIL")
    for f in fails:
        print(f"  - {f}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
