#!/usr/bin/env python3
"""
Panel-logic agent (GATE A/B) — plate-bible validation.

Usage:
  python3 tools/logic_review.py episodes/02-swayamvara/plate-bible.json --report
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

ORPHAN_PROP_BAN = [
    "floating bow sculpture",
    "decorative bow beside throne",
    "random bow next to draupadi",
    "sitting on the railing",
    "sitting on the terrace wall",
    "legs dangling from balcony",
    "women standing on the court floor",
    "giant women in the hall",
    "ceiling aquarium with fish",
    "fish tank on ceiling",
]

RAILING_SIT_BAN = re.compile(
    r"\b(sit|sitting|seated|perch|perched)\b.{0,40}\b(on|atop|upon)\b.{0,30}"
    r"\b(railing|rail|ledge|terrace wall|balcony wall|balustrade|parapet)\b",
    re.I,
)
CURTAIN_PEER_OK = re.compile(
    r"\b(behind|through)\b.{0,30}\b(curtain|veil|jali|screen|lattice)\b|"
    r"\b(peer|peering|shy|shyly)\b",
    re.I,
)
# Women must not be on hall floor among princes
FLOOR_WOMEN_BAN = re.compile(
    r"(?<!\bno )(?<!\bnot )(?<!\bnever )\b(women|princesses?|draupadi|maids?|ladies)\b.{0,40}\b("
    r"standing (in|on) (the )?(court|hall|floor|aisle)|"
    r"among (the )?princes"
    r")\b",
    re.I,
)
BALCONY_ONLY_WOMEN = re.compile(
    r"\b(women|princesses?|draupadi).{0,40}\b(only )?(on|in) (the )?(upper )?balcon",
    re.I,
)
QUALITY_OK = re.compile(
    r"\b(premium|high quality|refined|amar chitra|painted comic|polished)\b",
    re.I,
)

# Apparatus: ceiling MIRROR + ground POOL with FISH
APPARATUS_KEYS = {
    "ceiling_mirror": re.compile(r"\bmirror\b", re.I),
    "mirror_high": re.compile(
        r"ceiling|roof|high|overhead|top (of )?(the )?frame|under the roof",
        re.I,
    ),
    "ground_pool": re.compile(r"\b(pool|floor pool|ground pool)\b", re.I),
    "fish_in_pool": re.compile(
        r"fish.{0,40}(in|inside).{0,20}(pool|water)|"
        r"(pool|water).{0,40}fish|"
        r"fish swimming in",
        re.I,
    ),
}
AQUARIUM_BAN = re.compile(
    r"\b(aquarium|fish tank|ceiling tank|sealed glass vessel with fish|"
    r"tank of fish (on|under) (the )?(ceiling|roof))\b",
    re.I,
)

# Aim: eyes UP at mirror, arrow DOWN at pool fish
AIM_EYES_MIRROR = re.compile(
    r"eyes?.{0,40}(mirror|up)|"
    r"look(s|ing)?.{0,30}(up|into|at).{0,20}mirror|"
    r"gaze.{0,20}mirror",
    re.I,
)
AIM_ARROW_POOL = re.compile(
    r"arrow.{0,40}(pool|fish|down|downward)|"
    r"(aim|aimed|pointing|angled).{0,25}(down|pool|fish)|"
    r"shot.{0,20}(pool|fish)|"
    r"hit.{0,20}(fish|eye).{0,20}pool",
    re.I,
)

STYLE_BAN_POSITIVE = re.compile(
    r"(?<!\bnot\s)(?<!\bno\s)\b(photoreal(?:istic)?|live-action face|cgi person)\b",
    re.I,
)

# Bleed: Ep01 Drona / white-bearded sage must not appear unless cast
SAGE_PRESENT = re.compile(
    r"\b(drona|dronacharya|acharya|white-?bearded sage|elderly (white-?bearded )?guru|"
    r"saffron sage|old sage|bearded sage)\b",
    re.I,
)
# Style-ref that includes Drona — banned as Imagine input when Drona absent
EP01_FIGURE_REF = re.compile(
    r"episodes/01-birds-eye/stills/plate-wide-gold",
    re.I,
)
# Arjuna continuity tokens when arjuna is present
ARJUNA_TOKENS = {
    "crown_or_topknot": re.compile(r"\b(crown|diadem|topknot)\b", re.I),
    "mustache": re.compile(r"\bmustache\b", re.I),
    "cream_white": re.compile(r"\b(cream|white|white-gold|ivory)\b", re.I),
}
ARJUNA_BAN_ON_SELF = re.compile(
    r"\b(flower garland|vaijayanti|peacock feather)\b",
    re.I,
)
DUPLICATE_HERO = re.compile(
    r"\b(two|2|duplicate|extra|second|twin)\s+(arjuna|krishna)s?\b|"
    r"\b(arjuna|krishna).{0,20}\b(twice|again as a second)\b",
    re.I,
)


def load(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def _negated(text: str, start: int, window: int = 45) -> bool:
    return bool(re.search(r"\b(not|never|no|without|forbid)\b", text[max(0, start - window) : start], re.I))


def check_style(bible: dict) -> list[str]:
    fails = []
    style = (bible.get("style_lock") or "").lower()
    if "comic" not in style and "painted" not in style and "amar" not in style:
        fails.append("style_lock must require painted comic / Amar Chitra language")
    if bible.get("photoreal_allowed"):
        fails.append("photoreal_allowed must be false")
    # Palette/mood may cite Ep01 gold; Imagine *image* ref must be scene_lock if Drona absent
    scene = bible.get("scene_lock_ref") or ""
    style_ref = bible.get("style_master_ref") or ""
    if not scene and not style_ref:
        fails.append("need scene_lock_ref (preferred) or style_master_ref")
    return fails


def check_cast_bleed(bible: dict) -> list[str]:
    """Drona/sage and Imagine refs must not leak into plates that omit them."""
    fails = []
    plates = bible.get("plates") or []
    style_ref = bible.get("style_master_ref") or ""
    imagine_refs = " ".join(
        [
            style_ref,
            bible.get("scene_lock_ref") or "",
            " ".join(bible.get("imagine_refs") or []),
        ]
    )
    any_drona = any("drona" in (p.get("cast_present") or []) for p in plates)
    if EP01_FIGURE_REF.search(imagine_refs) and not any_drona:
        fails.append(
            "Imagine ref must NOT be Ep01 plate-wide-gold when Drona is absent "
            "(sage bleeds into frames). Use scene_lock_ref / chariot-master instead."
        )
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
    return fails


def check_apparatus(bible: dict) -> list[str]:
    fails = []
    app = bible.get("apparatus") or {}
    plates = bible.get("plates") or []
    needs = any(p.get("has_fish_apparatus") for p in plates)
    if needs and not app:
        fails.append("apparatus block required when plates use fish apparatus")
        return fails
    if not app:
        return fails
    blob = json.dumps(app).lower()
    if "mirror" not in blob:
        fails.append("apparatus must include ceiling MIRROR (not aquarium)")
    if not re.search(r"pool", blob):
        fails.append("apparatus must include ground POOL")
    if not re.search(r"fish", blob):
        fails.append("apparatus must include fish in the ground pool")
    if re.search(r"aquarium|fish tank on ceiling|ceiling tank", blob) and not re.search(
        r"no aquarium|not aquarium|forbidden.*aquarium|replaces.*aquarium", blob
    ):
        # allow if explicitly forbidden
        if "forbidden" not in blob or "aquarium" not in json.dumps(app.get("forbidden") or []).lower():
            if "aquarium" in blob and "mirror" in blob and "replac" in blob:
                pass
            elif "aquarium" in blob and app.get("target", "").lower().find("aquarium") >= 0:
                fails.append("apparatus target must be fish in ground pool, not ceiling aquarium")
    geom = app.get("aim_geometry") or {}
    if any(p.get("is_aim_beat") for p in plates):
        g = json.dumps(geom).lower() if geom else blob
        if "mirror" not in g or not re.search(r"eyes?|look|gaze", g):
            fails.append("apparatus.aim_geometry must state eyes look at ceiling mirror")
        if not re.search(r"arrow|bow|aim", g) or not re.search(r"pool|fish|down", g):
            fails.append("apparatus.aim_geometry must state arrow aims at fish in ground pool")
    if not app.get("continuity_id"):
        fails.append("apparatus.continuity_id required")
    return fails


def check_plate(plate: dict, cast_ids: set[str], apparatus_on: bool, bible: dict | None = None) -> list[str]:
    fails = []
    pid = plate.get("id") or "?"
    if not plate.get("beat_text"):
        fails.append(f"{pid}: missing beat_text")
    if not plate.get("must_show"):
        fails.append(f"{pid}: missing must_show")
    if not plate.get("must_not_show"):
        fails.append(f"{pid}: missing must_not_show")
    if not plate.get("prompt"):
        fails.append(f"{pid}: missing prompt")

    must_show = " ".join(plate.get("must_show") or [])
    must_not = " ".join(plate.get("must_not_show") or []).lower()
    prompt = plate.get("prompt") or ""
    props = " ".join(plate.get("props") or [])
    positive = f"{prompt} {must_show} {props} {plate.get('notes') or ''}".lower()
    field = f"{must_show} {prompt} {props}"

    for ban in ORPHAN_PROP_BAN:
        if ban in positive and ban not in must_not:
            idx = positive.find(ban)
            if idx >= 0 and _negated(positive, idx):
                continue
            fails.append(f"{pid}: banned phrase in positive spec: {ban}")

    if STYLE_BAN_POSITIVE.search(positive) and not re.search(r"\bnot\s+photoreal", positive):
        fails.append(f"{pid}: positive style must not request photoreal/CGI")

    if not QUALITY_OK.search(field):
        fails.append(f"{pid}: quality FAIL — prompt/must_show must require premium/high painted comic quality")

    # Durbar court layout — only when explicitly a durbar/court (not every "wide" village plate)
    is_durbar = bool(
        plate.get("scene") == "durbar"
        or re.search(r"\bdurbar\b", positive, re.I)
        or (
            re.search(r"\b(throne|king|princes?|suitors?)\b", positive, re.I)
            and re.search(r"\b(balcony|princess|court hall|palace court)\b", positive, re.I)
        )
    )
    if is_durbar:
        if not re.search(r"\bbalcon", field, re.I):
            fails.append(f"{pid}: durbar FAIL — must include balconies for princesses")
        if not BALCONY_ONLY_WOMEN.search(field) and not re.search(
            r"\b(all women|princesses only|women only).{0,30}balcon", field, re.I
        ):
            fails.append(
                f"{pid}: durbar FAIL — must state ALL women/princesses ONLY on balconies (none on hall floor)"
            )
        if re.search(r"\b(maid|servant|attendant dress)\b", field, re.I) and not re.search(
            r"\bno maid|not maid|princesses only|no servant", field, re.I
        ):
            fails.append(f"{pid}: durbar FAIL — women must be princesses, not maids")
        if FLOOR_WOMEN_BAN.search(field) and not re.search(
            r"\bno women|not women|none .{0,20}floor|only on .{0,15}balcon", field, re.I
        ):
            m = FLOOR_WOMEN_BAN.search(field)
            if m and not _negated(field, m.start()):
                fails.append(f"{pid}: durbar FAIL — women must not stand on court floor among princes")
        if re.search(r"\bgaint\b|\bgiant (women|princess|figure)", field, re.I):
            if not re.search(r"\bno giant|not giant", field, re.I):
                fails.append(f"{pid}: scale FAIL — no giant figures")
        if not CURTAIN_PEER_OK.search(field):
            fails.append(f"{pid}: court etiquette FAIL — princesses peer from behind curtains/jali")
        for m in RAILING_SIT_BAN.finditer(field):
            if not _negated(field, m.start()):
                fails.append(f"{pid}: court etiquette FAIL — no sitting on railing/terrace wall")
                break
        # Hall floor cast
        if not re.search(r"\b(king|throne)\b", field, re.I):
            fails.append(f"{pid}: durbar FAIL — king on throne required")
        if not re.search(r"\b(prince|suitor)\b", field, re.I):
            fails.append(f"{pid}: durbar FAIL — princes/suitors on floor required")

    # Fish apparatus plates
    if plate.get("has_fish_apparatus"):
        if not apparatus_on:
            fails.append(f"{pid}: has_fish_apparatus but bible.apparatus empty")
        for key, pat in APPARATUS_KEYS.items():
            if not pat.search(field):
                fails.append(f"{pid}: apparatus must encode {key}")
        for m in AQUARIUM_BAN.finditer(field):
            if _negated(field, m.start(), 40):
                continue
            # "no aquarium" / "not a fish tank"
            win = field[max(0, m.start()-35):m.end()+10]
            if re.search(r"\b(no|not|never|without)\b", win, re.I):
                continue
            fails.append(f"{pid}: apparatus FAIL — use ceiling MIRROR, not aquarium/tank of fish")
            break
        if not re.search(r"large.{0,40}mirror|mirror.{0,40}large|large circular.{0,20}mirror|gold-framed.{0,15}mirror", field, re.I):
            fails.append(f"{pid}: mirror must be LARGE (ceiling disc scale)")

    if plate.get("is_aim_beat"):
        if not AIM_EYES_MIRROR.search(field):
            fails.append(f"{pid}: aim FAIL — eyes must look UP into ceiling mirror")
        if not AIM_ARROW_POOL.search(field):
            fails.append(f"{pid}: aim FAIL — arrow must aim at fish in ground pool")
        if re.search(r"\bstand(ing|s)?\b.{0,25}\bin\b.{0,15}\b(the )?(pool|water)\b", field, re.I):
            if not re.search(r"\b(not|never|beside|next to)\b", field, re.I):
                fails.append(f"{pid}: aim FAIL — archer must not stand in the pool")
        if not re.search(r"\b(beside|next to|dry floor|left side)\b", field, re.I):
            fails.append(f"{pid}: aim FAIL — archer on dry floor beside pool (prefer left)")

    if pid == "hit" and plate.get("has_fish_apparatus"):
        if not re.search(r"\b(from (the )?(left|archer)|same side|archer's)\b", field, re.I):
            fails.append(f"{pid}: hit FAIL — arrow path from archer's side into pool fish")
        if not re.search(r"\b(pool|fish).{0,30}(eye|hit)|hit.{0,30}(fish|eye)", field, re.I):
            fails.append(f"{pid}: hit FAIL — must hit fish eye in the ground pool")

    for cid in plate.get("cast_present") or []:
        if cid not in cast_ids:
            fails.append(f"{pid}: unknown cast id {cid}")

    present = set(plate.get("cast_present") or [])

    # Sage / Drona bleed
    if "drona" not in present:
        if not re.search(r"\b(drona|sage)\b", must_not, re.I):
            fails.append(
                f"{pid}: must_not_show must forbid Drona / white-bearded sage "
                "(not in cast_present)"
            )
        for m in SAGE_PRESENT.finditer(prompt + " " + must_show):
            if not _negated(prompt + " " + must_show, m.start()):
                fails.append(f"{pid}: sage/Drona appears in positive spec but not in cast_present")
                break

    # Arjuna continuity — strict on episodes that set strict_hero_lock
    bible = bible or {}
    strict = (bible.get("strict_hero_lock") or "") == "arjuna" or bible.get("episode_id") == "09"
    if strict and "arjuna" in present:
        blob = f"{prompt} {must_show}"
        for token, pat in ARJUNA_TOKENS.items():
            if not pat.search(blob):
                fails.append(f"{pid}: Arjuna lock missing token `{token}` (crown/topknot, mustache, cream-white cloth)")
        for m in ARJUNA_BAN_ON_SELF.finditer(blob):
            win = blob[max(0, m.start() - 40) : m.end() + 20]
            if re.search(r"\barjuna\b", win, re.I) and not _negated(blob, m.start()):
                if not re.search(r"\bkrishna\b", win, re.I):
                    fails.append(
                        f"{pid}: Arjuna must not wear Krishna props ({m.group(0)})"
                    )
                    break

    if DUPLICATE_HERO.search(field) and not _negated(field, 0):
        # only fail if not a negation
        m = DUPLICATE_HERO.search(field)
        if m and not _negated(field, m.start()):
            fails.append(f"{pid}: duplicate hero wording — only one of each named cast")

    return fails


def review(bible: dict) -> tuple[bool, list[str]]:
    fails: list[str] = []
    fails += check_style(bible)
    fails += check_cast(bible)
    fails += check_cast_bleed(bible)
    fails += check_apparatus(bible)
    cast_ids = set((bible.get("cast") or {}).keys())
    apparatus_on = bool(bible.get("apparatus"))
    plates = bible.get("plates") or []
    if not plates:
        fails.append("no plates in bible")
    for p in plates:
        fails += check_plate(p, cast_ids, apparatus_on, bible)
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
        lines += ["", "## Required fixes before Imagine", "Resolve every issue in plate-bible.json, re-run this tool.", ""]
    out.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description="Panel logic review agent")
    ap.add_argument("bible", type=Path)
    ap.add_argument("--report", action="store_true")
    args = ap.parse_args()
    path = args.bible if args.bible.is_absolute() else ROOT / args.bible
    if not path.exists():
        print(f"FAIL: missing {path}", file=sys.stderr)
        return 2
    bible = load(path)
    ok, fails = review(bible)
    if args.report:
        print(f"report: {write_report(path, bible, ok, fails)}")
    print("PASS" if ok else "FAIL")
    for f in fails:
        print(f"  - {f}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
