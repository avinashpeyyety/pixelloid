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
| Imagine refs = scene master + solo locks + Ep 10 `field-master.jpg` only | |
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
