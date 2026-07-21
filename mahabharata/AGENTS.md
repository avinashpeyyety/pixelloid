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

**Mirror + ground fish:** large ornamental **mirror on the ceiling**; **fish in the ground pool**. Archer looks **up into the mirror** and shoots the **fish eye in the pool**. No ceiling aquarium.  

**Durbar (panel 1):** hall floor = men only (king, princes). **All women only on balconies** behind curtains — never giant women on the court floor.

## Style

Comic painted mythology matching Ep 01 gold master — **not** photoreal, not mixed styles in one episode.

## Per-repo habit

Implement **item 1** of `NEXT.md` only; capture daily + labboard after ship.
