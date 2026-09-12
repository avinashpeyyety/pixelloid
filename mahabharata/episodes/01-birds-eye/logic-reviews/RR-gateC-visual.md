# Logic review — Ep 01 — GATE C (visual)

Status: PASS

Date: 2026-09-12 (America/Chicago) — character-consistency Imagine regen on Air.

```bash
python3 tools/stills_review.py episodes/01-birds-eye --require
```

`stills_review` PASS — 14 jpegs, 1536×1024, 3:2.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | PASS |
| No 1280×720 file used as first `image_edit` input | PASS |
| Imagine refs = scene master + solo locks + Ep 10 `field-master.jpg` | PASS |
| Every named face has `stills/_locks/<id>.jpg` | PASS |
| Ep01 `plate-wide-gold.jpg` **not** attached as Imagine style ref | PASS (retired as ref; plate regen’d from garden-master + locks) |

## Audit C1–C5 eye-check (2026-09-12)

| ID | Issue | Result after regen |
|----|-------|--------------------|
| C1 | Drona gold kavacha / Bhishma bleed on lock, wide, aside, loose, wide-gold | **PASS** — saffron angavastram over cream dhoti; white hair; no breastplate |
| C2 | `plate-drona` dark hair under topknot | **PASS** — white hair matches lock |
| C3 | Aside youth in white long-sleeve tunic ≠ Yudhishthira | **PASS** — cream-white dhoti, gold diadem/sash; shorter than Drona |
| C4 | Yudhishthira line “I see you” but Drona absent | **PASS** — adult Drona mid-ground on plate; bible `cast_present` includes `drona`; TTS line kept |
| C5 | `eye`/poster gold X pectoral vs leather on arjuna-bow | **PASS** — leather quiver straps + woodier bow; poster copied from eye |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | Drona + distant youth | PASS | PASS | PASS | No kavacha |
| drona | Drona + youth pupils | PASS | PASS | PASS | White hair; saffron/cream; aim line |
| yudhishthira | Yudhishthira + Drona + brothers | PASS | PASS | PASS | Guru visible for “I see you” |
| aside | Drona + Yudhishthira | PASS | PASS | PASS | Cream-dhoti youth; no tunic |
| arjuna-bow | youth Arjuna | PASS | PASS | PASS | Wardrobe target (unchanged) |
| eye | youth Arjuna | PASS | PASS | PASS | Leather straps; matches bow plate |
| loose | Drona | PASS | PASS | PASS | Command; no kavacha |
| release | youth Arjuna | PASS | PASS | PASS | Leather straps OK (kept) |
| wide-gold | Drona + youth Arjuna | PASS | PASS | PASS | No kavacha; height gap; not used as Imagine ref |
| poster | copy of eye | PASS | PASS | PASS | |

## Strict checks

- [x] `stills_review.py` PASS
- [x] No Drona / saffron sage unless `cast_present`
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Krishna not on this field
- [x] C1–C5 character consistency PASS (eye check)
- [x] Spoken line’s speaker and action visible (GATE D PASS)
- [x] Character lock: Drona adult saffron/cream throughout; youth princes; Arjuna strap language unified on eye/poster
