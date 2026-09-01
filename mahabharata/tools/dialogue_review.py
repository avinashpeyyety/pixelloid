#!/usr/bin/env python3
"""
Dialogue-logic agent (GATE D-dialogue) — spoken-beat validation.

Usage:
  python3 tools/dialogue_review.py episodes/<id> --report

Reads script.js beats (t, plate, who, text) and plate-bible.json.
FAIL (exit 1) blocks ship.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

OMNISCIENT = {"narrator", "kathavachak", "krishna"}

# Display names / epithets → bible cast id (or synthetic id like amba).
SPEAKER_ALIASES: dict[str, str] = {
    "arjuna": "arjuna",
    "partha": "arjuna",
    "krishna": "krishna",
    "bhishma": "bhishma",
    "pitamaha": "bhishma",
    "grandsire": "bhishma",
    "shikhandi": "shikhandi",
    "shikhandin": "shikhandi",
}

# Names that may appear in spoken text (intro / death tracking).
# armies is a background mass, not a named speaker.
NAME_ALIASES: dict[str, list[str]] = {
    "arjuna": ["arjuna", "partha"],
    "krishna": ["krishna"],
    "bhishma": ["bhishma", "pitamaha", "grandsire"],
    "shikhandi": ["shikhandi", "shikhandin"],
    "amba": ["amba"],
}

GENERIC_CAST = {"armies", "army", "ranks", "host"}

VOW_STATED_RE = re.compile(
    r"will not raise a shaft|"
    r"will not strike|"
    r"born (as )?amba|"
    r"\bvow\b",
    re.I,
)
VOW_EXPLAIN_RE = re.compile(
    r"born (as )?amba|"
    r"will not (raise a shaft|strike).{0,50}(amba|shikhandi)|"
    r"(amba|shikhandi).{0,50}will not (raise|strike)|"
    r"\bvow\b",
    re.I,
)
KRISHNA_PLAN_RE = re.compile(
    r"place\s+(that\s+)?(warrior|shikhandi).{0,40}(before|front|first)|"
    r"place\s+shikhandi|"
    r"shikhandi.{0,40}(before you|in front|first|take the front)",
    re.I,
)
ARJUNA_FOLLOWS_PLAN_RE = re.compile(
    r"\bshikhandi\b|\btake the front\b|\bthe front\b|\bbefore you\b",
    re.I,
)
BHISHMA_RESTS_RE = re.compile(
    r"will not strike|"
    r"will not raise (a )?shaft|"
    r"let my bow rest|"
    r"\bbow rest\b|"
    r"lower(s|ing)? (my |his )?(bow|weapons)",
    re.I,
)
BHISHMA_STRIKES_RE = re.compile(
    r"\bi (will |shall )?(strike|shoot|loose)\b|"
    r"\bi strike\b|"
    r"\braising (my |the )?bow\b|"
    r"\braise (a shaft|my bow|the bow)\b",
    re.I,
)
DEATH_RE = re.compile(
    r"\b(?:falls?|is slain|slain|dies|died|is killed|killed)\b",
    re.I,
)


def unescape_js_string(s: str) -> str:
    return (
        s.replace(r"\/", "/")
        .replace(r"\n", "\n")
        .replace(r"\t", "\t")
        .replace(r'\"', '"')
        .replace(r"\'", "'")
        .replace(r"\\", "\\")
    )


def extract_beats_blob(js: str) -> str:
    idx = js.find("beats:")
    if idx < 0:
        raise ValueError("script.js: no beats array")
    start = js.find("[", idx)
    if start < 0:
        raise ValueError("script.js: beats is not an array")
    depth = 0
    in_str = False
    quote = ""
    escape = False
    for j, ch in enumerate(js[start:], start):
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == quote:
                in_str = False
            continue
        if ch in ('"', "'"):
            in_str = True
            quote = ch
            continue
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                return js[start : j + 1]
    raise ValueError("script.js: unterminated beats array")


def split_objects(blob: str) -> list[str]:
    """Split a JS array blob into top-level { ... } object strings."""
    objs: list[str] = []
    depth = 0
    in_str = False
    quote = ""
    escape = False
    start = -1
    for i, ch in enumerate(blob):
        if in_str:
            if escape:
                escape = False
            elif ch == "\\":
                escape = True
            elif ch == quote:
                in_str = False
            continue
        if ch in ('"', "'"):
            in_str = True
            quote = ch
            continue
        if ch == "{":
            if depth == 0:
                start = i
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0 and start >= 0:
                objs.append(blob[start : i + 1])
                start = -1
    return objs


def field_str(obj: str, name: str) -> str | None:
    m = re.search(rf'{name}\s*:\s*"((?:\\.|[^"\\])*)"', obj)
    if m:
        return unescape_js_string(m.group(1))
    m = re.search(rf"{name}\s*:\s*'((?:\\.|[^'\\])*)'", obj)
    if m:
        return unescape_js_string(m.group(1))
    return None


def field_num(obj: str, name: str) -> float | None:
    m = re.search(rf"{name}\s*:\s*(-?\d+(?:\.\d+)?)", obj)
    if not m:
        return None
    raw = m.group(1)
    return float(raw) if "." in raw else int(raw)


def parse_beats(js: str) -> list[dict]:
    blob = extract_beats_blob(js)
    beats: list[dict] = []
    for obj in split_objects(blob):
        t = field_num(obj, "t")
        beats.append(
            {
                "t": t,
                "plate": field_str(obj, "plate"),
                "who": field_str(obj, "who"),
                "text": field_str(obj, "text"),
                "audio": field_str(obj, "audio"),
            }
        )
    return beats


def normalize_text(s: str) -> str:
    s = s or ""
    s = (
        s.replace("\u2014", "-")
        .replace("\u2013", "-")
        .replace("—", "-")
        .replace("–", "-")
        .replace("\u201c", '"')
        .replace("\u201d", '"')
        .replace("\u2018", "'")
        .replace("\u2019", "'")
        .replace("“", '"')
        .replace("”", '"')
        .replace("‘", "'")
        .replace("’", "'")
    )
    return re.sub(r"\s+", " ", s).strip()


def who_key(who: str | None) -> str:
    return (who or "").strip().lower()


def is_omniscient(who: str | None) -> bool:
    return who_key(who) in OMNISCIENT


def is_spoken(beat: dict) -> bool:
    return bool((beat.get("text") or "").strip())


def map_speaker(who: str | None, cast_ids: set[str]) -> str | None:
    """Map a dialogue `who` to a bible cast id. None = narrator/empty/omniscient-not-cast."""
    key = who_key(who)
    if not key or key in ("narrator", "kathavachak"):
        return None
    if key in SPEAKER_ALIASES:
        return SPEAKER_ALIASES[key]
    if key in cast_ids:
        return key
    return None


def names_in_text(text: str) -> set[str]:
    found: set[str] = set()
    blob = text or ""
    for cid, aliases in NAME_ALIASES.items():
        for alias in aliases:
            if re.search(rf"\b{re.escape(alias)}\b", blob, re.I):
                found.add(cid)
                break
    return found


def names_that_die(text: str) -> set[str]:
    dead: set[str] = set()
    blob = text or ""
    if not DEATH_RE.search(blob):
        return dead
    for cid, aliases in NAME_ALIASES.items():
        for alias in aliases:
            pat = re.compile(
                rf"\b{re.escape(alias)}\b.{{0,80}}\b(?:falls?|is slain|slain|dies|died|is killed|killed)\b",
                re.I,
            )
            if pat.search(blob):
                dead.add(cid)
                break
    return dead


def plate_by_id(bible: dict) -> dict[str, dict]:
    out: dict[str, dict] = {}
    for p in bible.get("plates") or []:
        pid = p.get("id")
        if pid:
            out[str(pid)] = p
    return out


def cast_living(bible: dict, cid: str) -> bool:
    spec = (bible.get("cast") or {}).get(cid) or {}
    if isinstance(spec, dict) and spec.get("living") is True:
        return True
    if str(spec.get("status") or "").lower() == "living":
        return True
    return False


def plate_living(plate: dict | None, cid: str) -> bool:
    if not plate:
        return False
    if plate.get("living") is True:
        return True
    living = plate.get("living_cast") or []
    return cid in living


def review(beats: list[dict], bible: dict, strict_bible: bool) -> list[str]:
    fails: list[str] = []
    plates = plate_by_id(bible)
    cast_ids = set((bible.get("cast") or {}).keys())
    named_cast = {c for c in cast_ids if c not in GENERIC_CAST}

    # --- 1. Beat order ---
    prev_t: float | None = None
    for i, b in enumerate(beats):
        t = b.get("t")
        if t is None:
            fails.append(f"beat[{i}]: missing t")
            continue
        if prev_t is not None and not (t > prev_t):
            fails.append(f"beat[{i}] t={t}: t is not strictly increasing (previous t={prev_t})")
        prev_t = t

        who = b.get("who")
        text = b.get("text") or ""
        spoken = bool(text.strip())
        who_s = (who or "").strip()
        if spoken and not who_s:
            fails.append(f"beat t={t}: non-empty text with empty who")
        if spoken:
            plate = b.get("plate")
            if not plate:
                fails.append(f"beat t={t}: spoken beat missing plate")
            elif plate not in plates:
                fails.append(f"beat t={t}: plate `{plate}` is not in plate-bible.json")

    # Running world state
    introduced: set[str] = set()  # names spoken by Narrator/Krishna already
    seen_on_plate: set[str] = set()  # cast ids that appeared on an earlier plate
    krishna_named_shikhandi = False
    krishna_named_amba = False
    vow_stated = False
    bhishma_rested_bow = False
    fallen: set[str] = set()
    krishna_plan_pending = False  # waiting for Arjuna's next spoken beat

    for i, b in enumerate(beats):
        t = b.get("t")
        t_lab = f"t={t}" if t is not None else f"beat[{i}]"
        who = b.get("who") or ""
        text = b.get("text") or ""
        plate_id = b.get("plate") or ""
        plate = plates.get(plate_id) or {}
        present = set(plate.get("cast_present") or [])
        spoken = bool(text.strip())
        speaker_id = map_speaker(who, cast_ids)
        omni = is_omniscient(who)
        wkey = who_key(who)

        # --- 2. Speaker present ---
        if spoken and wkey not in ("", "narrator", "kathavachak"):
            if speaker_id is None:
                fails.append(
                    f"{t_lab}: cannot map speaker `{who}` to a bible cast id"
                )
            elif speaker_id not in present:
                fails.append(
                    f"{t_lab}: speaker `{who}` ({speaker_id}) is not in plate `{plate_id}` cast_present {sorted(present)}"
                )

        named = names_in_text(text) if spoken else set()

        # --- 3. Broken causality / intro order ---
        if spoken and not omni:
            for cid in named:
                allowed = False
                # (a) Narrator or Krishna already said that name
                if cid in introduced:
                    allowed = True
                # (b) on this plate AND already placed on an earlier plate
                if cid in present and cid in seen_on_plate:
                    allowed = True
                # (c) they are the speaker themselves
                if speaker_id == cid:
                    allowed = True
                # Special: Bhishma may speak Amba after Krishna named Amba
                # OR reacting to Shikhandi present on the vow plate.
                if cid == "amba" and speaker_id == "bhishma":
                    if krishna_named_amba or (
                        plate_id == "vow" and "shikhandi" in present
                    ):
                        allowed = True
                if not allowed:
                    fails.append(
                        f"{t_lab}: `{who}` names `{cid}` before that character is introduced"
                    )

            # Extra: Arjuna must not say Shikhandi before Krishna names Shikhandi
            if speaker_id == "arjuna" and "shikhandi" in named and not krishna_named_shikhandi:
                fails.append(
                    f"{t_lab}: Arjuna must not say Shikhandi before Krishna names Shikhandi"
                )

        # --- 4. Impossible knowledge ---
        if spoken and speaker_id in ("arjuna", "shikhandi") and not omni:
            if VOW_EXPLAIN_RE.search(text) and not vow_stated:
                fails.append(
                    f"{t_lab}: `{who}` explains Bhishma's Amba vow before Krishna or Bhishma has stated it"
                )

        if spoken and speaker_id and speaker_id in fallen:
            if plate_id != "bed" and not cast_living(bible, speaker_id) and not plate_living(plate, speaker_id):
                fails.append(
                    f"{t_lab}: `{who}` speaks after a beat said they fell/died (plate `{plate_id}` is not `bed` and bible does not mark them living)"
                )

        # --- 5. Contradictions ---
        if spoken and speaker_id == "bhishma" and bhishma_rested_bow:
            if BHISHMA_STRIKES_RE.search(text):
                fails.append(
                    f"{t_lab}: Bhishma claims to strike/raise the bow after lowering it / vowing not to strike"
                )

        if spoken and speaker_id == "arjuna" and krishna_plan_pending:
            if not ARJUNA_FOLLOWS_PLAN_RE.search(text):
                fails.append(
                    f"{t_lab}: Krishna said place Shikhandi first, but Arjuna's next spoken beat does not address Shikhandi or taking the front"
                )
            krishna_plan_pending = False

        # --- 6. Bible sync ---
        if strict_bible and spoken:
            if plate_id in plates:
                bible_text = plate.get("beat_text") or ""
                if normalize_text(text) != normalize_text(bible_text):
                    fails.append(
                        f"{t_lab}: script text for plate `{plate_id}` does not match bible beat_text"
                    )

        # Advance world state AFTER checks for this beat
        if spoken:
            if omni or wkey in ("narrator", "kathavachak"):
                introduced |= named
            if wkey == "krishna":
                if "shikhandi" in named:
                    krishna_named_shikhandi = True
                if "amba" in named:
                    krishna_named_amba = True
                if KRISHNA_PLAN_RE.search(text):
                    krishna_plan_pending = True
            if wkey in ("krishna", "bhishma") or speaker_id in ("krishna", "bhishma"):
                if VOW_STATED_RE.search(text):
                    vow_stated = True
            if speaker_id == "bhishma" and BHISHMA_RESTS_RE.search(text):
                bhishma_rested_bow = True
            fallen |= names_that_die(text)

        seen_on_plate |= {c for c in present if c in named_cast or c in NAME_ALIASES}

    return fails


def write_report(ep_dir: Path, ok: bool, fails: list[str], beats: list[dict], bible: dict) -> Path:
    out_dir = ep_dir / "logic-reviews"
    out_dir.mkdir(parents=True, exist_ok=True)
    out = out_dir / "RR-gateD-dialogue.md"
    ep = bible.get("episode_id") or ep_dir.name
    spoken_n = sum(1 for b in beats if (b.get("text") or "").strip())
    lines = [
        f"# Logic review — Ep {ep} — GATE D (dialogue)",
        f"Status: {'PASS' if ok else 'FAIL'}",
        "Reviewer: dialogue-logic agent (tools/dialogue_review.py)",
        "",
        f"Beats: {len(beats)}",
        f"Spoken: {spoken_n}",
        "",
    ]
    if ok:
        lines += ["## Result", "All automated dialogue-logic checks passed.", ""]
    else:
        lines += ["## Blocking issues", ""]
        for i, f in enumerate(fails, 1):
            lines.append(f"{i}. {f}")
        lines += [
            "",
            "## Required fixes before ship",
            "Fix script.js beats and/or plate-bible.json. Do not weaken this gate.",
            "",
        ]
    out.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return out


def resolve_ep_dir(raw: Path) -> Path:
    path = raw if raw.is_absolute() else ROOT / raw
    if path.is_file() and path.name == "script.js":
        path = path.parent
    return path


def main() -> int:
    ap = argparse.ArgumentParser(description="Dialogue logic review agent (GATE D)")
    ap.add_argument("episode", type=Path, help="episodes/<id> directory")
    ap.add_argument("--report", action="store_true")
    ap.add_argument(
        "--strict-bible",
        dest="strict_bible",
        action="store_true",
        default=True,
        help="FAIL when script text != plate beat_text (default on)",
    )
    ap.add_argument(
        "--no-strict-bible",
        dest="strict_bible",
        action="store_false",
        help="Do not require script text to match bible beat_text",
    )
    args = ap.parse_args()
    ep_dir = resolve_ep_dir(args.episode)
    script_path = ep_dir / "script.js"
    bible_path = ep_dir / "plate-bible.json"
    if not ep_dir.is_dir():
        print(f"FAIL: missing episode dir {ep_dir}", file=sys.stderr)
        return 2
    if not script_path.exists():
        print(f"FAIL: missing {script_path}", file=sys.stderr)
        return 2
    if not bible_path.exists():
        print(f"FAIL: missing {bible_path}", file=sys.stderr)
        return 2

    js = script_path.read_text(encoding="utf-8")
    try:
        beats = parse_beats(js)
    except ValueError as e:
        print("FAIL")
        print(f"  - {e}")
        return 1
    if not beats:
        print("FAIL")
        print("  - script.js has no beats")
        return 1

    bible = json.loads(bible_path.read_text(encoding="utf-8"))
    fails = review(beats, bible, strict_bible=args.strict_bible)
    ok = len(fails) == 0
    if args.report:
        print(f"report: {write_report(ep_dir, ok, fails, beats, bible)}")
    print("PASS" if ok else "FAIL")
    for f in fails:
        print(f"  - {f}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
