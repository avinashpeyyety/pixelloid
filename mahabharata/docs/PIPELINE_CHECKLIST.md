# Ep 15+ pipeline checklist

Printable Studio factory checklist derived from [`WORKFLOW.md`](WORKFLOW.md) and Track B in [`SPRINT_PLAN.md`](SPRINT_PLAN.md).

**Episode:** `<id>`  **Studio owner:** ____________________  **Started:** __________  **Ship date:** __________

> Stop on FAIL at steps 2, 4, 6, or 11. Each beat must cite at least two of BORI/Debroy, Gita Press Gorakhpur, and K.M. Ganguli. Keep the Ep 10 field master as the style spine, use the Ep 09 Krishna lock, create local 3:2 locks for new faces, and never use Ep 01 `plate-wide-gold.jpg` as an Imagine reference.

## 1. Script

- [ ] **Owner:** Studio
- **Command/path:** `episodes/<id>/script.js` — write ordered beats with `t`, `plate`, `who`, `text`, and `audio`; name a Hindustani raga.
- **PASS artifact:** `episodes/<id>/script.js`

## 2. GATE D — dialogue

- [ ] **Owner:** Studio
- **Command/path:** `python3 tools/dialogue_review.py episodes/<id> --report`
- **PASS artifact:** `episodes/<id>/logic-reviews/RR-gateD-dialogue.md` with `Status: PASS`

## 3. Cast sheet + plate bible

- [ ] **Owner:** Studio
- **Command/path:** `cp episodes/_template/plate-bible.json episodes/<id>/plate-bible.json`; complete `episodes/<id>/cast-sheet.json` and `episodes/<id>/plate-bible.json`.
- **PASS artifacts:** `episodes/<id>/cast-sheet.json`; `episodes/<id>/plate-bible.json`

## 4. GATE A/B — panel logic

- [ ] **Owner:** Studio
- **Command/path:** `python3 tools/logic_review.py episodes/<id>/plate-bible.json --report`
- **PASS artifact:** `episodes/<id>/logic-reviews/RR-gateB-bible.md` with `Status: PASS`

## 5. Imagine key panels

- [ ] **Owner:** Studio
- **Command/path:** Create the scene master at `episodes/<id>/stills/_locks/<scene>-master.jpg`, solo cast locks at `episodes/<id>/stills/_locks/<cast-id>.jpg`, and beat keys at `episodes/<id>/stills/plate-<beat>.jpg`; generate native 3:2 at ≥1536×1024 following `STYLE.md` and `WORKFLOW.md`. **Path A:** Imagine API `image_edit` / `image_gen`. **Path B (no team API credits):** SuperGrok consumer Imagine on grok.com → drop downloads in `episodes/<id>/stills/_inbox/consumer-imagine/` → `python3 tools/import_consumer_stills.py <id>` (see `docs/CONSUMER_IMAGINE_IMPORT.md`). Scene master / locks still prefer a beauty pass on grok.com or API. Never Ep01 `plate-wide-gold` as ref; no 720p.
- **PASS artifacts:** `episodes/<id>/stills/_locks/<scene>-master.jpg`; `episodes/<id>/stills/_locks/<cast-id>.jpg`; `episodes/<id>/stills/plate-<beat>.jpg`

## 6. GATE C — stills + visual

- [ ] **Owner:** Studio
- **Command/path:** `python3 tools/stills_review.py episodes/<id> --require`; copy `docs/GATE_C_TEMPLATE.md` to `episodes/<id>/logic-reviews/RR-gateC-visual.md` and complete the visual comparison against the Ep 10 bar (include watermark eye-check for consumer imports).
- **PASS artifact:** `episodes/<id>/logic-reviews/RR-gateC-visual.md` with `Status: PASS`

## 7. 3D block

- [ ] **Owner:** Studio
- **Command/path:** `open -a Blender`; build under `_studio/blender/mahabharata/<id>/` or `episodes/<id>/blender/` (SketchUp block optional).
- **PASS artifact:** `episodes/<id>/blender/<id>.blend` (or `_studio/blender/mahabharata/<id>/<id>.blend`)

## 8. Map Imagine panels into 3D

- [ ] **Owner:** Studio
- **Command/path:** Map GATE C-passed panels as camera boards, hero planes, environment plates, or set dressings in the step-7 `.blend`; document shot-to-panel mapping at `episodes/<id>/blender/PANEL_MAP.md`.
- **PASS artifact:** `episodes/<id>/blender/PANEL_MAP.md`

## 9. Blender render

- [ ] **Owner:** Studio
- **Command/path:** Render the shot layout from `episodes/<id>/blender/<id>.blend` (or the `_studio` scene) into `episodes/<id>/renders/`, matching `script.js` beats.
- **PASS artifact:** `episodes/<id>/renders/<id>-proxy.mp4` (or per-shot `episodes/<id>/renders/<shot>.png`)

## 10. Orion TTS + raga

- [ ] **Owner:** Studio
- **Command/path:** `tools/render_orion_voice.sh episodes/<id>`; verify the named Hindustani raga in `episodes/<id>/script.js` and optionally mix stems in REAPER.
- **PASS artifact:** `episodes/<id>/audio/<beat>.mp3` for every spoken beat

## 11. GATE D — final install

- [ ] **Owner:** Studio
- **Command/path:** Review `episodes/<id>/script.js`, `episodes/<id>/stills/`, `episodes/<id>/audio/`, and `episodes/<id>/renders/`; confirm speaker on panel, action visible, and 3D cut matches each beat. Record at `episodes/<id>/logic-reviews/RR-gateD-install.md`.
- **PASS artifact:** `episodes/<id>/logic-reviews/RR-gateD-install.md` with `Status: PASS`

## 12. Registry live · commit · publish

- [ ] **Owner:** Studio
- **Command/path:** Add the episode to `js/episodes.js`; commit the episode and PASS reports; run the repository's `publish-pages` step only after steps 1–11 pass. Record ship evidence at `episodes/<id>/logic-reviews/RR-ship.md`.
- **PASS artifact:** `episodes/<id>/logic-reviews/RR-ship.md`

## Final release check

- [ ] Steps 1–12 checked
- [ ] No blocking gate is FAIL
- [ ] Registry entry resolves locally
- [ ] Commit hash recorded in `RR-ship.md`
