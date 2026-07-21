# mahabharata — agent rules

## Mandatory panel-logic agent

Before generating or shipping any plate:

1. Read `docs/PANEL_LOGIC.md` and `docs/WORKFLOW.md`
2. Ensure episode has `cast-sheet.json` + `plate-bible.json`
3. Run: `python3 tools/logic_review.py episodes/<id>/plate-bible.json`
4. Fix FAILs in the bible — do **not** invent props to “fill” the frame
5. Generate art only with style ref `episodes/01-birds-eye/stills/plate-wide-gold.jpg` + cast/apparatus locks
6. After stills land, write `logic-reviews/RR-*-visual.md` (GATE C)
7. Ship only on full PASS

## Ep 02 apparatus (locked)

Fish in a **large circular ornamental sealed aquarium**, hanging **chandelier-style from high ceiling** (above eye level, flat bottom, no wooden cradle / no obstructing beams). Reflection in **floor pool**; archer aims by **looking at the pool**. No dry hanging fish, no floor-only fish target, no random bow sculptures next to Draupadi.

## Style

Comic painted mythology matching Ep 01 gold master — **not** photoreal, not mixed styles in one episode.

## Per-repo habit

Implement **item 1** of `NEXT.md` only; capture daily + labboard after ship.
