# Logic review — Markandeya Ep NN — GATE C (visual)

Copy to `episodes/<id>/logic-reviews/RR-gateC-visual.md`.

Status: PASS / FAIL

Run first:

```bash
python3 tools/stills_review.py episodes/<id> --require
```

`stills_review` FAIL ⇒ this GATE C is FAIL. Do not waive dimensions.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | |
| No 1280×720 file used as first `image_edit` input | |
| Imagine refs = series spine `assets/spine/field-master.jpg` + scene master + solo locks (≤5) | |
| Every named face has `stills/_locks/<id>.jpg` (first-episode lock or local) | |
| No finished plate / poster attached as a ref | |
| Source path = SuperGrok consumer import (never api.x.ai) | |
| No visible Grok / xAI watermark on plates or locks (consumer imports) | |

## Quality vs the Mahabharata Ep 10 bar

Open `../mahabharata/episodes/10-bhishma-fall/stills/plate-vow.jpg` (read-only reference) beside each new plate.

| Check | PASS if | FAIL if |
|-------|---------|---------|
| Frame | Carved gold-and-lotus cartouche is **part of** the painting | Thin rectangle / four corner lotuses on cream mat |
| Camera | Named heroes fill the frame (heroic medium) | Tiny figures in a wide banner |
| Line | Engraved armor, clear faces, Amar Chitra density | Soft airbrushed movie-still, empty sky |
| Cast | Tokens match bible and `docs/CHARACTER_LOCKS.md` | Wrong sage (Medhas/Markandeya swap), extra person, costume swap |
| Devotion | Devi radiant, serene; gods per lock (arms count) | Snarling Devi, wrong arm count, sexualized |
| Gore | No blood, wounds, heads, skulls | Any gore — FAIL, regenerate |
| Drift | Same person, same jewelry/skin/crown/body type on every plate | Costume/face morph mid-episode |
| Lock file | Named face has `_locks/<id>.jpg` | Invented extra hero, missing lock |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| tale | | | | | |
| … | | | | | |

## Strict checks

- [ ] `stills_review.py` PASS
- [ ] No named face that is not in `cast_present`
- [ ] No graphic gore
- [ ] No 16:9 / 720p plates
- [ ] **Watermark eye-check (consumer import):** no Grok / xAI logo or “Made with Grok” overlay in corners or margins — script heuristic is not enough; open each plate
- [ ] Eye-match density to the Mahabharata Ep 10 bar
- [ ] Every named face eye-matches its `_locks/<id>.jpg` — no drift
- [ ] No invented face; no missing lock; no jewelry/skin/crown/body-type drift
- [ ] Spoken line’s speaker and action are the figures/props on this still (GATE D)
- [ ] **Ep 01 Markandeya:** Goddess shown only as formless golden light (no figure); Medhas white-bearded in cream, Markandeya dark-haired in ochre
- [ ] **Character lock:** jewelry/skin/crown/body type stable across plates in this episode
