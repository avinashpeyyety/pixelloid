# mahabharata — agent rules

## Before any Imagine call

1. Read `STYLE.md` (canvas bar) and `docs/WORKFLOW.md` (art factory)
2. **Canvas:** `aspect_ratio: "3:2"`, minimum **1536×1024**. Never 1280×720 / 16:9
3. **Style image ref:** `episodes/10-bhishma-fall/stills/_locks/field-master.jpg` plus this episode’s own `_locks/*-master.jpg`
4. **Never attach** `episodes/01-birds-eye/stills/plate-wide-gold.jpg` (Drona bleed + 720p density collapse)
5. **Never** single-image-edit a 720p lock — output inherits 720p. 720p files may only be extra refs on a multi-image edit whose **first** image is already 3:2 / ≥1536×1024
6. Prepend bible `prompt_prefix`. Heroic medium, carved cartouche, named figures fill the frame
7. After stills land: `python3 tools/stills_review.py episodes/<id>` — FAIL means delete and regenerate, not “good enough”

## Mandatory panel-logic agent

Before generating or shipping any plate:

1. Read `docs/PANEL_LOGIC.md` and `docs/WORKFLOW.md`
2. Ensure episode has `cast-sheet.json` + `plate-bible.json` (start from `episodes/_template/plate-bible.json`)
3. Run: `python3 tools/logic_review.py episodes/<id>/plate-bible.json --report`
4. Fix FAILs in the bible — do **not** invent props to “fill” the frame
5. Generate art from **scene master** (`_locks/*-master.jpg`) + **single-figure** cast locks
6. After stills land, write `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md`
7. Ship only on full PASS (bible + stills dimensions + visual quality vs Ep 10)

## Mandatory dialogue-logic agent

After any `script.js` beat/dialogue change:

1. Run: `python3 tools/dialogue_review.py episodes/<id> --report`
2. FAIL (speaker not on plate, contradictions, impossible knowledge, broken beat order, bible `beat_text` mismatch) **blocks ship**
3. Fix the script and/or plate-bible — do **not** weaken `tools/dialogue_review.py`

## Ep 09 chariot + Arjuna (locked)

- **Arjuna:** gold crown, dark mustache, cream-white dhoti, quiver — **never** Krishna’s flower garland, **never** a second Arjuna
- **Krishna:** yellow pitambar, peacock feather, garland, **charioteer / reins**, no bow
- **Sage / Drona:** forbidden on every Gita plate
- **Imagine refs:** Ep 09 `_locks/*.jpg` are now 3:2 / 1536×1024 (charioteer Krishna, not flute). Attach Ep 10 `field-master.jpg` + these locks. Never attach Ep 01 gold or Ep 10 figure plates (vow / arrows / Bhishma) unless those people are in this episode’s `cast`.

## Ep 02 apparatus (locked)

**Mirror + ground fish:** large ornamental **mirror on the ceiling**; **fish in the ground pool**. Archer looks **up into the mirror** and shoots the **fish eye in the pool**. No ceiling aquarium.

**Durbar (panel 1):** hall floor = men only (king, princes). **All women only on balconies** behind curtains — never giant women on the court floor.

## Style

Comic painted mythology matching **Ep 10 field-master** — carved cartouche, 3:2, heroic medium — **not** photoreal, not mixed with 720p cinematic plates in one episode.

## Per-repo habit

Implement **item 1** of `NEXT.md` only; capture daily + labboard after ship.

When adding an episode: bump `play.html` and `index.html` script `?v=epNN-slug` (and `landing.js` import of `episodes.js`) or browsers keep the previous player and `?ep=NN` silently loads Ep 01.
