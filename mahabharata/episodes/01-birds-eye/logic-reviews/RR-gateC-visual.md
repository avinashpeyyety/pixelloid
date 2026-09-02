# Logic review — Ep 01 — GATE C (visual)

Status: PASS

Run first:

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
| Every named face has `stills/_locks/<id>.jpg` (local youth for Arjuna/Yudhishthira; local Drona) | PASS |
| Ep01 `plate-wide-gold.jpg` **not** attached as Imagine style ref | PASS |

## Quality vs Ep 10 bar

| Check | Result |
|-------|--------|
| Frame | PASS — carved gold-and-lotus cartouche integrated |
| Camera | PASS — named heroes fill the frame |
| Line | PASS — painted comic / Amar Chitra, not photoreal |
| Cast | PASS — Drona only where listed; no Krishna; no peacock on Arjuna |
| Spatial aim | PASS — bow, arrow, gaze, and far bird on one line (drona, arjuna-bow, eye, release) |
| Distant bird (Ep 01) | PASS — high in the canopy, small in the frame, many metres away; not perched next to the archer |
| Gurukul youth (Ep 01) | PASS — Arjuna/Yudhishthira are teenage princes, slighter/shorter than adult Drona; cream-white dhoti; simple circlet; no heavy mukut, no gold cuirass on the princes, no peacock, no Krishna garland. 09/10 used as palette/costume language only; local `_locks/arjuna.jpg` and `_locks/yudhishthira.jpg` are youth portraits, not Ep 09 battle-aged copies |
| Lock file | PASS |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | Drona + distant youth princes | PASS | PASS | PASS | Tiny bird high in FAR canopy |
| drona | Drona + youth pupils | PASS | PASS | PASS | Aim line to distant canopy bird |
| yudhishthira | youth Yudhishthira | PASS | PASS | PASS | Youth; bird a small distant canopy mark |
| aside | Drona dismissing a shorter pupil | PASS | PASS | PASS | Height: guru vs youth |
| arjuna-bow | youth Arjuna | PASS | PASS | PASS | Cream dhoti, circlet; bow/gaze/FAR bird one line |
| eye | youth Arjuna | PASS | PASS | PASS | Same youth; tiny far bird-head |
| loose | Drona | PASS | PASS | PASS | Command beat |
| release | youth Arjuna | PASS | PASS | PASS | Shaft line to far bird; gold dust; no gore |
| wide-gold | Drona (taller) holds youth Arjuna | PASS | PASS | PASS | Obvious height gap; youth no cuirass |
| poster | copy of eye | PASS | PASS | PASS | |

## Strict checks

- [x] `stills_review.py` PASS
- [x] No Drona / saffron sage unless `cast_present`
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Eye-match to Ep 10 vow (density), not Ep 01 gold as style ref
- [x] Krishna not on this field
- [x] **Gurukul youth PASS (eye check):** princes are not battle-aged Ep 09/10 adults
- [x] **Distant bird PASS (eye check):** target is far/high/small in the canopy
- [x] **Spatial aim PASS (eye check):** bow, arrow, gaze, and that far bird on one line
- [x] Spoken line’s speaker and action are the figures/props on this still (GATE D)
- [x] Character lock: youth identity stable across Arjuna plates; Drona adult throughout
