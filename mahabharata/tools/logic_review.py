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
    "sitting on the railing",
    "sitting on the balcony railing",
    "sitting on the terrace wall",
    "sitting on the balustrade",
    "perched on the railing",
    "legs dangling from balcony",
    "women sitting on the wall",
]

# Court etiquette — positive seating fails
RAILING_SIT_BAN = re.compile(
    r"\b(sit|sitting|seated|perch|perched)\b.{0,40}\b(on|atop|upon)\b.{0,30}"
    r"\b(railing|rail|ledge|terrace wall|balcony wall|balustrade|parapet)\b|"
    r"\b(railing|ledge|balustrade|terrace wall)\b.{0,20}\b(sit|sitting|seated)\b",
    re.I,
)
CURTAIN_PEER_OK = re.compile(
    r"\b(behind|through)\b.{0,30}\b(curtain|veil|jali|screen|lattice)\b|"
    r"\b(peer|peering|shy|shyly|recess|inner balcony)\b",
    re.I,
)

# Tank must be large / match challenge — not pot-sized
TANK_LARGE = re.compile(
    r"\b(large|wide|broad|huge|same (size|dimensions?|scale)|matching challenge|"
    r"challenge[- ]lock|apparatus lock|ceiling disc|wide diameter|spans?.{0,20}roof|"
    r"large fraction|ornamental sealed)\b",
    re.I,
)
TANK_POT_BAN = re.compile(
    r"\b(small (pot|jar|bowl|tank|fishbowl)|hanging (pot|jar|bauble)|"
    r"tiny (tank|aquarium|jar)|pot[- ]sized|jar[- ]sized|goldfish bowl)\b",
    re.I,
)

# Style words that fail only if requested as the desired look (not negated)
STYLE_BAN_POSITIVE = re.compile(
    r"(?<!\bnot\s)(?<!\bno\s)(?<!never\s)\b(photoreal(?:istic)?|live-action face|cgi person|hyperrealistic)\b",
    re.I,
)

FISH_REQUIRED_KEYS = {
    "vessel": re.compile(r"glass|crystal|sealed|aquarium", re.I),
    "water_in_vessel": re.compile(r"water|swim", re.I),
    "roof_mount": re.compile(r"roof|ceiling|high|overhead|chandelier", re.I),
    "floor_pool": re.compile(r"pool|reflection|mirror", re.I),
    # Height: must assert true ceiling height, not vague "high"
    "ceiling_height": re.compile(
        r"ceiling height|near (the )?ceiling|top of (the )?frame|far above|"
        r"well above|long (hanging )?chains|under the (palace )?roof|"
        r"palace ceiling|high up from|worm.?s.?eye|low.?angle",
        re.I,
    ),
}

# Aim-beat geometry: BOTH halves required (optically inverted challenge)
AIM_EYES_DOWN = re.compile(
    r"eyes? (look |angled |point )?(down|toward|to|at|into).{0,40}(pool|water|reflection)|"
    r"look(s|ing)? (only )?(down|at|into).{0,40}(pool|reflection)|"
    r"gaze (down|toward).{0,20}(pool|reflection)|"
    r"chin (tilted |toward |to )?(down|pool)|"
    r"head .{0,20}(down|pool|reflection)",
    re.I,
)
AIM_ARROW_UP = re.compile(
    r"arrow .{0,40}(up|upward|ceiling|aquarium|high)|"
    r"(aim|aimed|pointing|angled) .{0,20}(up|upward|steep)|"
    r"bow .{0,30}(up|upward)|"
    r"arms?.{0,20}(up|upward)|"
    r"upward (toward|at|to).{0,30}(aquarium|fish|ceiling|tank)",
    re.I,
)

# Positive specs that place the tank too low (fail unless negated)
MID_HEIGHT_BAN = re.compile(
    r"\b(at (human )?eye level|chest height|head height|beside (his |her )?face|"
    r"next to (the )?archer|mid-?hall height|torso height|shoulder height)\b",
    re.I,
)


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
        ("glass sealed vessel/aquarium", re.compile(r"glass|crystal|aquarium")),
        ("water + swimming fish", re.compile(r"swim|water")),
        ("roof/ceiling mount", re.compile(r"roof|ceiling|overhead|chandelier")),
        ("true ceiling height", re.compile(r"ceiling height|far above|near the ceiling|high up|above eye|long chain")),
        ("floor pool reflection", re.compile(r"pool|reflection")),
        ("aim split (eyes down / arrow up)", re.compile(r"eyes?.{0,40}down|look.{0,20}pool|arrow.{0,30}up|aim.{0,20}up", re.I)),
    ]:
        if not pat.search(blob):
            fails.append(f"apparatus missing: {name}")
    if re.search(r"dry fish|pole-mounted fish without glass|metal fish on stick", blob):
        fails.append("apparatus forbids dry/pole fish without glass water")
    # Size lock: check allowed fields only (ignore "forbidden" list wording)
    size_blob = " ".join(
        str(app.get(k) or "")
        for k in ("target", "size", "mount", "height", "size_lock_ref", "task")
    ).lower()
    if not re.search(r"large|wide|same (size|dimensions)|challenge", size_blob):
        fails.append("apparatus must lock LARGE tank size (match challenge plate dimensions)")
    # Positive allowance of pot-size is fail; listing pot in forbidden is OK
    geom = app.get("aim_geometry") or {}
    if any(p.get("is_aim_beat") for p in bible.get("plates") or []):
        if not geom and "eyes" not in blob:
            fails.append("apparatus.aim_geometry required when any plate is_aim_beat")
        else:
            gblob = json.dumps(geom).lower() if geom else blob
            if not re.search(r"eyes?|gaze|look", gblob) or not re.search(r"down|pool", gblob):
                fails.append("apparatus.aim_geometry must state eyes/gaze down at pool")
            if not re.search(r"arrow|bow|arms?", gblob) or not re.search(r"up|ceiling|aquarium", gblob):
                fails.append("apparatus.aim_geometry must state arrow/bow aimed up at aquarium")
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
            idx = positive.find(ban)
            # Allow explicit negation nearby: "NOT sitting on the terrace wall"
            if idx >= 0 and re.search(r"\b(not|never|no|without|forbid)\b", positive[max(0, idx - 40) : idx]):
                continue
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
            if not pat.search(field):
                fails.append(f"{pid}: fish apparatus must encode {key}")
        if MID_HEIGHT_BAN.search(field) and not re.search(
            r"\b(not|never|no|forbid)\b.{0,30}(eye level|chest height|head height)",
            field,
            re.I,
        ):
            fails.append(f"{pid}: aquarium must not be described at mid/eye height (use ceiling height)")
        if not TANK_LARGE.search(field):
            fails.append(
                f"{pid}: tank size FAIL — must require LARGE tank matching challenge/apparatus lock dimensions"
            )
        if TANK_POT_BAN.search(field) and not re.search(r"\bnot\b.{0,20}(pot|jar|bowl)", field, re.I):
            fails.append(f"{pid}: tank size FAIL — pot/jar/bowl-sized tank forbidden")

    # Durbar / balcony etiquette
    courtish = bool(
        re.search(r"\b(durbar|balcony|draupadi|maid|princess|veil|throne|prince)", positive, re.I)
    )
    if courtish and (
        plate.get("id") in ("wide", "poster")
        or re.search(r"\bbalcony\b", positive, re.I)
    ):
        # Only fail if sitting-on-railing is asserted without negation
        for m in RAILING_SIT_BAN.finditer(positive):
            start = max(0, m.start() - 40)
            window = positive[start : m.end()]
            if re.search(r"\b(not|never|no|must not|don't|do not)\b", window):
                continue
            fails.append(
                f"{pid}: court etiquette FAIL — women must not sit on terrace wall/railing/ledge"
            )
            break
        if re.search(r"\b(balcony|terrace)\b", positive, re.I) and re.search(
            r"\b(draupadi|maid|princess|women|ladies)\b", positive, re.I
        ):
            if not CURTAIN_PEER_OK.search(positive):
                fails.append(
                    f"{pid}: court etiquette FAIL — royal women on balcony must peer from behind curtains/jali (shy), not sit exposed on the wall"
                )

    # Aim beat: split geometry — eyes DOWN at pool, arrow UP at ceiling aquarium
    if plate.get("is_aim_beat"):
        field = f"{must_show} {prompt} {props} {plate.get('notes') or ''}"
        if not AIM_EYES_DOWN.search(field):
            fails.append(
                f"{pid}: aim geometry FAIL — must specify eyes/head looking DOWN at pool reflection"
            )
        if not AIM_ARROW_UP.search(field):
            fails.append(
                f"{pid}: aim geometry FAIL — must specify arrow/bow aimed UP at high aquarium"
            )
        # Contradiction: "looking up at the fish/aquarium" as positive action
        if re.search(
            r"\b(look|looking|gaze|gazing|eyes)\b.{0,25}\bup\b.{0,30}\b(fish|aquarium|tank|jar)\b",
            field,
            re.I,
        ) and not re.search(r"\bnot\b.{0,15}look", field, re.I):
            fails.append(
                f"{pid}: aim geometry FAIL — must not look up at the fish (use pool mirror)"
            )
        if re.search(
            r"\barrow\b.{0,40}\b(into|at|toward)\b.{0,20}\b(pool|reflection)\b",
            field,
            re.I,
        ) and not re.search(r"\b(do not|don't|never|not)\b.{0,30}\b(shoot|target|aim).{0,20}\bpool", field, re.I):
            fails.append(
                f"{pid}: aim geometry FAIL — arrow must not target the pool; pool is mirror only"
            )
        # Never stand in the reflection pool
        if re.search(r"\bstand(ing|s)?\b.{0,25}\bin\b.{0,15}\b(the )?(pool|water)\b", field, re.I):
            if not re.search(r"\b(not|never|no)\b.{0,20}\bstand", field, re.I) and not re.search(
                r"\b(beside|next to|outside)\b.{0,15}\bpool\b", field, re.I
            ):
                fails.append(f"{pid}: aim FAIL — archer must not stand in the pool (stand beside it)")
        if not re.search(r"\b(beside|next to|outside|dry floor|left side)\b", field, re.I):
            fails.append(
                f"{pid}: aim FAIL — must place archer on dry floor beside pool (prefer left side)"
            )

    # Hit beat: arrow must come from same side as archer
    if plate.get("id") == "hit":
        field = f"{must_show} {prompt}"
        if plate.get("has_fish_apparatus"):
            if not re.search(r"water|swim", field, re.I):
                fails.append(f"{pid}: hit FAIL — encode water/swim in ceiling aquarium")
            if not re.search(r"ceiling|roof|high under", field, re.I):
                fails.append(f"{pid}: hit FAIL — encode ceiling-height aquarium")
            if not re.search(
                r"\b(from (the )?(left|archer)|same side|archer's (left )?side|upward into)\b",
                field,
                re.I,
            ):
                fails.append(
                    f"{pid}: hit FAIL — must specify arrow path from archer's side into the fish"
                )
            # Fail only if opposite-side path is asserted without negation
            for m in re.finditer(r"\bopposite side\b", field, re.I):
                win = field[max(0, m.start() - 30) : m.end()]
                if not re.search(r"\b(not|never|no)\b", win, re.I):
                    fails.append(f"{pid}: hit FAIL — arrow must not enter from opposite side")
                    break

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
