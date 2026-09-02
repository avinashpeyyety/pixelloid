# Logic review — Ep NN — GATE C (visual)

Copy to `episodes/<id>/logic-reviews/RR-gateC-visual.md`.

Status: PASS / FAIL

Run first:

```bash
python3 tools/stills_review.py episodes/<id>
```

`stills_review` FAIL ⇒ this GATE C is FAIL. Do not waive dimensions.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | |
| No 1280×720 file used as first `image_edit` input | |
| Imagine refs = scene master + solo locks + Ep 10 `field-master.jpg` + Ep 09/10 face locks | |
| Every named face has `stills/_locks/<id>.jpg` (series 09/10 or local) | |
| Ep01 `plate-wide-gold.jpg` **not** attached | |

## Quality vs Ep 10 bar

Open `episodes/10-bhishma-fall/stills/plate-vow.jpg` and `plate-arrows.jpg` beside each new plate.

| Check | PASS if | FAIL if |
|-------|---------|---------|
| Frame | Carved gold-and-lotus cartouche is **part of** the painting | Thin rectangle / four corner lotuses on cream mat |
| Camera | Named heroes fill the frame (heroic medium) | Tiny figures in a wide banner |
| Line | Engraved armor, clear faces, Amar Chitra density | Soft airbrushed movie-still, empty sky |
| Cast | Tokens match bible; no sage bleed | Drona / extra Arjuna / costume swap |
| Krishna | Face/body match Ep 09 `_locks/krishna.jpg` (pitambar, peacock, garland, reins) | New Krishna, flute, bow, photoreal, child |
| Arjuna | Match Ep 09 `_locks/arjuna.jpg` (crown, mustache, cream-white, quiver) | New Arjuna, peacock, flower garland |
| Bhishma / Shikhandi | Match Ep 10 locks when on the plate | Invented face |
| Drift | Same person, same jewelry/skin/crown/body type on every plate | Costume/face morph mid-episode |
| Spatial aim | Bow, arrow, gaze, and named target on one line | Arrow horizontal while bird/target sits higher/aside |
| Lock file | Named face has `_locks/<id>.jpg` | Invented extra hero, missing lock |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | | | | | |
| … | | | | | |
| wide-gold | | | | | |

## Strict checks

- [ ] `stills_review.py` PASS
- [ ] No Drona / saffron sage unless `cast_present`
- [ ] No graphic gore
- [ ] No 16:9 / 720p plates
- [ ] Eye-match to Ep 10 vow (density), not Ep 01 gold
- [ ] Krishna (if present) eye-matches Ep 09 lock — not a drifted face
- [ ] Arjuna / Bhishma / Shikhandi (if present) eye-match Ep 09/10 locks
- [ ] No invented face; no missing lock; no jewelry/skin/crown/body-type drift
- [ ] Spoken line’s speaker and action are the figures/props on this still (GATE D)
- [ ] **Spatial aim:** bow, arrow, gaze, and target on one line
- [ ] **Distant bird (Ep 01):** target is far/high/small in the canopy — FAIL if perched next to the archer
- [ ] **Gurukul youth (Ep 01):** Pandavas younger/slighter than Drona — FAIL battle-aged Ep 09/10 adult faces. 09/10 = palette/costume only
- [ ] **Character lock:** jewelry/skin/crown/body type stable across plates in this episode
