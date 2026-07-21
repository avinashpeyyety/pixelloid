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

Fish in a **large circular ornamental sealed aquarium** at **true palace ceiling height** (long chains, top of frame, people small). Chandelier hang only — no wooden cradle. **Aim split:** eyes **down** into floor pool; arrow **up** at the high tank. No mid-height tank, no looking up at the fish, no shooting the pool.

## Style

Comic painted mythology matching Ep 01 gold master — **not** photoreal, not mixed styles in one episode.

## Per-repo habit

Implement **item 1** of `NEXT.md` only; capture daily + labboard after ship.
