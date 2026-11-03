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
- **Locks first:** `python3 tools/copy_locks.py <id> krishna yudhishthira … [kuru-master:kuru<NN>-master.jpg]` copies canonical locks from `config/locks.json` into `stills/_locks/` and byte-verifies them (replaces hand copy + `cmp`). New locks Avinash approves get a registry entry.
- **Prompts:** start from the saved, already-working prompts — reuse the **v2** text recorded in earlier episodes' `stills/_inbox/consumer-imagine/PROMPTS.md` for similar beats instead of the v1 wording. Every beat prompt carries the plate bible's `figure_count_rules` (see `docs/PANEL_LOGIC.md` → "Counting rules"): exactly N figures named left→right, exactly two arms/hands each, twins as two separate men, explicit pose words.
- **Command/path:** Create the scene master at `episodes/<id>/stills/_locks/<scene>-master.jpg`, solo cast locks at `episodes/<id>/stills/_locks/<cast-id>.jpg`, and beat keys at `episodes/<id>/stills/plate-<beat>.jpg`; generate native 3:2 at ≥1536×1024 following `STYLE.md` and `WORKFLOW.md`. **SuperGrok consumer Imagine** on grok.com (fresh Imagine session per image) → drop downloads in `episodes/<id>/stills/_inbox/consumer-imagine/` → `python3 tools/import_consumer_stills.py <id>` (see `docs/CONSUMER_IMAGINE_IMPORT.md`). Never Ep01 `plate-wide-gold` as ref; no 720p.
- **PASS artifacts:** `episodes/<id>/stills/_locks/<scene>-master.jpg`; `episodes/<id>/stills/_locks/<cast-id>.jpg`; `episodes/<id>/stills/plate-<beat>.jpg`

## 6. GATE C — stills + visual

- [ ] **Owner:** Studio
- **Command/path:** `python3 tools/stills_review.py episodes/<id> --require`; copy `docs/GATE_C_TEMPLATE.md` to `episodes/<id>/logic-reviews/RR-gateC-visual.md` and complete the visual comparison against the Ep 10 bar (watermark eye-check for consumer imports: open the one `stills/_inbox/corner-sheet.jpg` the importer writes — four corners of every imported image). The importer ignores Grok/xAI strings only inside the APP11 C2PA content-credentials manifest; any other hit still FAILs the import.
- **PASS artifact:** `episodes/<id>/logic-reviews/RR-gateC-visual.md` with `Status: PASS`

## 7–9. 3D block / panel map / Blender render — OPTIONAL, not part of the routine

Plate-only cinematic episodes (Ep 05–08, 14–24) skip these. They need Blender on the MacBook Air and run only on a ticket from Avinash: build under `episodes/<id>/blender/`, map GATE C panels in `blender/PANEL_MAP.md`, render proxies into `episodes/<id>/renders/`. The sprint routine never waits on the Air.

## 10. Orion TTS + raga

- [ ] **Owner:** Studio
- **Command/path:** `tools/render_orion_voice.sh episodes/<id> --dry-run` (chars + cost, no API call), then `tools/render_orion_voice.sh episodes/<id>` — Grok TTS `orion` via xAI API (`config/narrator.json`, Orion-only rule 2026-11-02; ~$15 / 1M chars, ≈2¢ per episode). **Once per new episode**; the script refuses to overwrite existing clips. Set `voice: { provider: "grok-tts", voice_id: "orion", … }` in `script.js` and verify the named Hindustani raga. Kokoro / `say` are retired as narrators.
- **PASS artifact:** `episodes/<id>/audio/<beat>.mp3` for every spoken beat; `voice.voice_id: "orion"` in script.js

## 11. GATE D — final install

- [ ] **Owner:** Studio
- **Command/path:** `python3 tools/install_review.py episodes/<id> --report` (FAIL if `voice_id` ≠ `orion`, missing plates/audio, or missing raga). Also confirm speaker on panel / action visible / 3D cut matches beat. Record at `episodes/<id>/logic-reviews/RR-gateD-install.md`.
- **PASS artifact:** `episodes/<id>/logic-reviews/RR-gateD-install.md` with `Status: PASS`

## 12. Registry live · ship record · merge · single push

- [ ] **Owner:** Studio
- **Command/path:** Add the episode to `js/episodes.js` / `js/main.js` and bump `?v=` cache keys on the branch. Then, on `main`: `git merge --no-ff --no-commit studio/ep<NN>-<slug>` → `python3 tools/ship_record.py episodes/<id> --branch studio/ep<NN>-<slug> --next "<one-line Ep NN+1 plan>"` (writes `RR-ship.md`, NEXT "Now", SPRINT_PLAN row + weekly tally, HISTORY line; refuses unless all four gate reports say PASS) → `git add -A && git commit` → **one** `git push origin main` (one Pages deploy). Never force-push.
- **PASS artifact:** `episodes/<id>/logic-reviews/RR-ship.md` (inside the merge commit)

## Routine run order (Mahabharata episode sprint, Mondays 11:47 AM CT)

1. **Week check:** if `docs/SPRINT_PLAN.md` weekly tally already shows a ship for this Mon–Sun week, stop.
2. **Sparse clone** (≈130 MB instead of ≈460 MB):
   ```bash
   git clone --filter=blob:none --sparse https://github.com/avinashpeyyety/pixelloid.git pixelloid && cd pixelloid
   git sparse-checkout set mahabharata/tools mahabharata/config mahabharata/docs mahabharata/js mahabharata/css mahabharata/episodes/_template
   git sparse-checkout add $(python3 mahabharata/tools/copy_locks.py --print-sparse) mahabharata/episodes/<prev-id>
   cd mahabharata
   ```
   When the new episode folder is created: `git sparse-checkout add mahabharata/episodes/<id>` before `git add`. Need another episode's files (e.g. an extra reference)? `git sparse-checkout add mahabharata/episodes/<that-id>`.
3. Read `NEXT.md` (short) and this checklist. `git switch -c studio/ep<NN>-<slug>`.
4. Steps 1–4: script → `dialogue_review.py --report` → cast/bible (copy `_template`, keep `figure_count_rules`) → `logic_review.py --report`.
5. `copy_locks.py` → prompt pack (reuse saved v2 prompts) → SuperGrok images → `import_consumer_stills.py` (+ corner sheet).
6. GATE C: `stills_review.py --require` + eye-check (full frames + `corner-sheet.jpg`) → `RR-gateC-visual.md`.
7. Re-check A/B + D-dialogue with `--skip-if-unchanged` (instant when script/bible did not change).
8. Orion TTS (`render_orion_voice.sh --dry-run`, then real run) → `install_review.py --report`.
9. Registry / hub thumbs / cache keys on the branch; commit on the branch (no push needed for the branch).
10. `git switch main && git pull --ff-only` → `git merge --no-ff --no-commit <branch>` → `ship_record.py` → `git commit` (ship record lives in the merge commit).
11. **One** `git push origin main` → wait for the Pages deploy → `curl -sI` `…/mahabharata/` and `…/play.html?ep=<NN>` = 200.

## Final release check

- [ ] Steps 1–12 checked
- [ ] No blocking gate is FAIL
- [ ] Registry entry resolves locally
- [ ] Commit hash recorded in `RR-ship.md`
