# NEXT — shivaji

## Hard rules
- **Images only via SuperGrok consumer app** (Avinash's subscription, grok.com Imagine in a browser). **Never** the paid xAI API for images, never paid tools.
- **Narration: Orion ONLY** (Avinash 2026-11-02) — xAI Grok TTS voice `orion` via `tools/render_orion_voice.py` (`config/narrator.json`). xAI API credits are authorized for Orion narration only. No Kokoro/bm_george, macOS say, browser speech or default voice. If Orion is unavailable → `BLOCKED: awaiting Orion` here and the episode does not ship.
- **Pace: 1 new episode per week** (weekly Shivaji tick, Wednesdays).
- No image generation for an episode until Avinash approves its script; no animation until he approves the keyframe contact sheet.
- Kid-friendly: no gore, no blood, no shown death. Legend/tradition always labelled "legend says / the story goes".
- Palette per README; **no teal, no gold**. Monochrome line-art + selective color only.
- Draw-on reveal with local free tools (Python + ffmpeg). 3–4 min runtime.
- Do not publish (no `shivaji/index.html` card / media) until all reviews pass. Pushing to `main` deploys GitHub Pages.

## Orion remaster queue (do NOT remaster without Avinash's approval)
- [ ] **Ep01 Sinhagad** — published 2026-10-28 (f29a099) with **Kokoro-82M bm_george** (local, `tts_ep01.py`), not Orion. Remaster = `python3 tools/render_orion_voice.py episodes/01-sinhagad --force` (17 lines, ~2.4k chars) → rebuild with `build_ep01.py` (expects `audio/lineNN.wav`; convert or point it at mp3) → replace `media/ep01-sinhagad.mp4`. Queued 2026-11-04; awaiting approval.

## Now — Ep02 "Escape from Agra" (1666) · tick 2026-11-04
- [x] Topic chosen from Ep02 candidates (Agra chosen over Pratapgad: no combat, most kid-friendly; Coronation 1674 kept for later)
- [x] Script draft → `episodes/02-escape-from-agra/script.md` (17 lines, 451 words, sources/legend notes) — **awaiting Avinash's script review**
- [x] Shot list → `episodes/02-escape-from-agra/shot-list.md`; cast → `cast-sheet.json`
- [x] Character locks: reuse Ep01 `chars/shivaji.png`, `chars/jijabai.png`; **new sheets pending** (sambhaji, aurangzeb, hiroji, madari) — prompts C-01..C-04
- [x] SuperGrok prompt pack → `episodes/02-escape-from-agra/keyframe-prompts.md` (4 char sheets + 17 keyframes, exact save paths)
- [ ] **Keyframes pending SuperGrok generation** (browser agent, grok.com Imagine; save to `/workspace/shivaji-ep02-keyframes/{chars/<name>.png, shotNN.png}`, refs in `/workspace/shivaji-refs/`) — only after script approval
- [ ] **Contact sheet review pending** — build with `python3 shivaji/tools/contact_sheet.py /workspace/shivaji-ep02-keyframes` → `contact_sheet.jpg`; Avinash approves before any animation
- [x] **Orion: OK** — probe HTTP 200 (4.25 s), full narration rendered 2026-11-04 → `episodes/02-escape-from-agra/audio/line01–17.mp3` (163.2 s total, ~2,530 chars, 24 kHz/mono/128k, no ID3). Whisper listen-back: all lines match; "Jijabai" heard as "Gigiabai/Jija Bai" (whisper bias) — Avinash to confirm pronunciation. If he edits the script, re-render only changed lines (`--only lineNN.mp3 --force`).
- [ ] After contact-sheet approval: copy stills to `stills/`, build (adapt `episodes/01-sinhagad/build_ep01.py` → `build_ep02.py`), review, then publish (card in `shivaji/index.html`, media under `episodes/02-escape-from-agra/media/`)

## Ep01 (shipped)
- Published 2026-10-28 (f29a099): `episodes/01-sinhagad/media/ep01-sinhagad.mp4`, card in `shivaji/index.html`, hub card in `/index.html`.
- Open from Ep01: Avinash's v1 review / pronunciation check never recorded; optional Grok Imagine motion swap for Sh-09/11/12.

## Later
- [ ] Ep 03 candidates: Pratapgad (1659 — would need careful bloodless treatment of Afzal Khan), Coronation (1674), Sindhudurg sea fort (1664)
