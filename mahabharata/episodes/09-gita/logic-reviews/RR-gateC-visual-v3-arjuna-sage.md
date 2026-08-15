# GATE C v3 — Arjuna lock + sage bleed

**Status:** PASS (ship)

## Cause
- `_locks/arjuna.jpg` previously included Drona (Ep01 garden bleed)
- Imagine refs used Ep01 `plate-wide-gold.jpg` (contains the sage)
- Arjuna costume drifted: crown vs bare head, Krishna’s garland, extra Arjunas

## Gates added
- `logic_review.py`: forbid Drona/sage unless `cast_present`; ban Ep01 figure plate as Imagine ref; Ep09 requires Arjuna tokens (crown, mustache, cream-white); no Krishna props on Arjuna
- `PANEL_LOGIC.md` §4 / §4a; `AGENTS.md` Imagine ref rule
- All episode bibles: `must_not_show` includes Drona / white-bearded sage

## Visual
| Plate | Arjuna lock | Sage | Krishna role |
|-------|-------------|------|--------------|
| field | crown, white, mustache | none | charioteer |
| despair | same lock, grief | none | (solo grief beat; charioteer omitted to avoid extra figures) |
| counsel | same lock | none | teaching + reins |
| dharma | same lock | none | teaching + halo |
| form | same lock, kneel | none | Vishvarupa |
| resolve | same lock, bow ready | none | charioteer |
| conch | same lock | none | conch |
