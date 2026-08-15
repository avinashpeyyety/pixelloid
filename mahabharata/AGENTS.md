# mahabharata — agent rules

## Mandatory panel-logic agent

Before generating or shipping any plate:

1. Read `docs/PANEL_LOGIC.md` and `docs/WORKFLOW.md`
2. Ensure episode has `cast-sheet.json` + `plate-bible.json`
3. Run: `python3 tools/logic_review.py episodes/<id>/plate-bible.json`
4. Fix FAILs in the bible — do **not** invent props to “fill” the frame
5. Generate art from **scene master** (`_locks/*-master.jpg`) + **single-figure** cast locks. Do **not** attach Ep01 `plate-wide-gold.jpg` as an image ref unless Drona is in `cast_present` (that plate contains the sage and bleeds him into later frames).
6. After stills land, write `logic-reviews/RR-*-visual.md` (GATE C): same Arjuna tokens; zero sages unless listed
7. Ship only on full PASS

## Ep 09 chariot + Arjuna (locked)

- **Arjuna:** gold crown, dark mustache, cream-white dhoti, quiver — **never** Krishna’s flower garland, **never** a second Arjuna
- **Krishna:** yellow pitambar, peacock feather, garland, **charioteer / reins**, no bow
- **Sage / Drona:** forbidden on every Gita plate
- **Imagine refs:** `stills/_locks/chariot-master.jpg` + `stills/_locks/arjuna.jpg` (solo) + `stills/_locks/krishna.jpg` (solo)

## Ep 02 apparatus (locked)

**Mirror + ground fish:** large ornamental **mirror on the ceiling**; **fish in the ground pool**. Archer looks **up into the mirror** and shoots the **fish eye in the pool**. No ceiling aquarium.  

**Durbar (panel 1):** hall floor = men only (king, princes). **All women only on balconies** behind curtains — never giant women on the court floor.

## Style

Comic painted mythology matching Ep 01 gold master — **not** photoreal, not mixed styles in one episode.

## Per-repo habit

Implement **item 1** of `NEXT.md` only; capture daily + labboard after ship.
