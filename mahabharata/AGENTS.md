# mahabharata — agent rules

## Before any Imagine call

1. Read `STYLE.md` (canvas bar + **Ep 09/10 character-model bar**) and `docs/WORKFLOW.md` (art factory)
2. **Canvas:** `aspect_ratio: "3:2"`, minimum **1536×1024**. Never 1280×720 / 16:9
3. **Style image ref:** `episodes/10-bhishma-fall/stills/_locks/field-master.jpg` plus this episode’s own `_locks/*-master.jpg`
4. **Character-model bar (Ep 12+):** attach the Ep 09/10 lock still for every named face on the plate. Krishna = `episodes/09-gita/stills/_locks/krishna.jpg`. Arjuna = `episodes/09-gita/stills/_locks/arjuna.jpg`. Bhishma = `episodes/10-bhishma-fall/stills/_locks/bhishma.jpg`. Shikhandi = `episodes/10-bhishma-fall/stills/_locks/shikhandi.jpg`. New faces get a local `_locks/<id>.jpg` and must not drift (jewelry/skin/crown/body type) across plates. Do not invent a face.
4b. **Source gate (Ep 09+):** each beat cites at least two of BORI Critical Edition (and/or Debroy), Gita Press Gorakhpur, K.M. Ganguli. If vulgate vs CE diverge, record it in `source_block.divergence` and pick the Gita Press + BORI overlap. Fail if the beat exists in none of them, or only in TV/later fiction.
5. **Never attach** `episodes/01-birds-eye/stills/plate-wide-gold.jpg` (Drona bleed + 720p density collapse)
6. **Never** single-image-edit a 720p lock — output inherits 720p. 720p files may only be extra refs on a multi-image edit whose **first** image is already 3:2 / ≥1536×1024
7. Prepend bible `prompt_prefix`. Heroic medium, carved cartouche, named figures fill the frame
8. After stills land: `python3 tools/stills_review.py episodes/<id>` — FAIL means delete and regenerate, not “good enough”

## Character-model bar (canonical — Ep 09 + Ep 10)

**This is the visual STANDARD.** Faces and bodies as they appear in Episodes 09 and 10. Later episodes match them. They do not drift. Same person cannot change jewelry, skin, crown, or body type across plates in one episode.

| Person | Lock image | Eye check |
|--------|------------|-----------|
| **Krishna** | `episodes/09-gita/stills/_locks/krishna.jpg` | `episodes/09-gita/stills/plate-counsel.jpg` |
| **Arjuna** | `episodes/09-gita/stills/_locks/arjuna.jpg` | Ep 09 counsel / field |
| **Bhishma** | `episodes/10-bhishma-fall/stills/_locks/bhishma.jpg` | `episodes/10-bhishma-fall/stills/plate-vow.jpg` |
| **Shikhandi** | `episodes/10-bhishma-fall/stills/_locks/shikhandi.jpg` | Ep 10 shikhandi plate |
| **Canvas / density** | `episodes/10-bhishma-fall/stills/_locks/field-master.jpg` | Ep 10 `plate-vow.jpg` |

## Krishna look lock (canonical — Ep 09)

**This is the visual STANDARD for Krishna.** Subsequent episodes match that Krishna. They do not drift.

| | |
|--|--|
| **Lock image** | `episodes/09-gita/stills/_locks/krishna.jpg` |
| **Eye check** | `episodes/09-gita/stills/plate-counsel.jpg` |
| **Canvas** | cream–saffron–gold carved cartouche, **1536×1024**, aspect **3:2** |
| **Style** | comic-painted mythology / Amar Chitra — **not photoreal** |

**Tokens (every plate that lists `krishna`):** dusty-blue skin, youthful divine adult (never a child), dark eyes, serene smile, U-tilak, gold crown with **one peacock feather**, dark curly hair, yellow **pitambar**, **flower garlands**, gold kundala and jewelry, **charioteer holding reins**.

**Forbidden on Krishna:** flute, bow, photoreal skin, a second Krishna, a child Krishna, saffron sage robes.

Attach the Ep 09 lock whenever Krishna is in `cast_present`. The lock applies from Ep 12 on (Ep 09 is the source; Ep 10–11 are already shipped). Ep 01–08 are the old 720p flow — rewrite is queued **Episode 01 first**, then 02–08, before new 14+ so the hub is one show.

## Mandatory panel-logic agent

Before generating or shipping any plate:

1. Read `docs/PANEL_LOGIC.md` and `docs/WORKFLOW.md`
2. Ensure episode has `cast-sheet.json` + `plate-bible.json` (start from `episodes/_template/plate-bible.json`)
3. Run: `python3 tools/logic_review.py episodes/<id>/plate-bible.json --report`
4. Fix FAILs in the bible — do **not** invent props to “fill” the frame
5. Generate art from **scene master** (`_locks/*-master.jpg`) + **single-figure** cast locks + **Ep 09/10 series locks** for every named face that has one
6. After stills land, write `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md`
7. Ship only on full PASS (bible + stills dimensions + visual quality vs Ep 10 canvas and Ep 09/10 character models + source gate)
8. If a panel shows an archer aiming at a bird/target, bow, arrow, gaze, and target must line up — fail the plate if they don’t.
9. **Ep 01 gurukul:** princes are youths (shorter/slighter than Drona). Ep 09/10 locks = palette/costume only — do not paste battle-aged Arjuna/Yudhishthira. The bird is a distant high target, not next to the archer.

## Mandatory dialogue-logic agent

After any `script.js` beat/dialogue change:

1. Run: `python3 tools/dialogue_review.py episodes/<id> --report`
2. FAIL (speaker not on plate, action in the line not visible, Ken Burns/crossfade over the wrong still, contradictions, impossible knowledge, broken beat order, bible `beat_text` mismatch) **blocks ship**
3. Fix the script and/or plate-bible — do **not** weaken `tools/dialogue_review.py`

## Ep 09 chariot + Arjuna (locked)

- **Arjuna:** gold crown, dark mustache, cream-white dhoti, quiver — **never** Krishna’s flower garland, **never** a second Arjuna
- **Krishna:** see **Krishna look lock** above
- **Sage / Drona:** forbidden on every Gita plate
- **Imagine refs:** Ep 09 `_locks/*.jpg` are 3:2 / 1536×1024 (charioteer Krishna, not flute). Attach Ep 10 `field-master.jpg` + Ep 09 `krishna.jpg` when he is in cast. Never attach Ep 01 gold or Ep 10 figure plates (vow / arrows / Bhishma) unless those people are in this episode’s `cast`.

## Ep 02 apparatus (locked)

**Mirror + ground fish:** large ornamental **mirror on the ceiling**; **fish in the ground pool**. Archer looks **up into the mirror** and shoots the **fish eye in the pool**. No ceiling aquarium.

**Durbar (panel 1):** hall floor = men only (king, princes). **All women only on balconies** behind curtains — never giant women on the court floor.

## Style

Comic painted mythology matching **Ep 10 field-master** (canvas/density) and **Ep 09/10 character models** (Krishna, Arjuna, Bhishma, Shikhandi, and the rest as they appear there) — carved cream–saffron–gold cartouche, 3:2, heroic medium — **not** photoreal, not mixed with 720p cinematic plates in one episode.

## Player / craft

- **Voice:** Grok TTS **Orion** (24 kHz / 128 kbps). No Aman fallback on new episodes.
- **Underscore:** Web Audio RagaBed in js/main.js. Named Hindustani raga per episode — Ep 09 Bhairav (no tabla), Ep 10 Darbari, Ep 11 Megh+Jhaptal, Ep 12 Marwa (sunset, no Pa, no tabla). Tanpura floor, duck under Orion. No cinematic trailer score, no licensed film music. **Do not regress new episodes to the default flute+tabla preset** (that preset is only for grandfathered Ep 01–08).

## Per-repo habit

Implement **item 1** of `NEXT.md` only; capture daily + labboard after ship.

When adding an episode: bump `play.html` and `index.html` script `?v=epNN-slug` (and `landing.js` import of `episodes.js`) or browsers keep the previous player and `?ep=NN` silently loads Ep 01.
