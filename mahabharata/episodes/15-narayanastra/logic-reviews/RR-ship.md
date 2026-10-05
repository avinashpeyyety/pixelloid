# Ship record — Ep 15 *The Narayana Weapon*

**Title:** The Narayana Weapon — fifteenth day of Kurukshetra, afternoon  
**Slug:** `narayanastra`  
**Parva:** Drona Parva · Narayanastra-mokshana upaparva (§193–201)  
**Bar:** Ep 09/10 (3:2 ≥1536×1024, carved cartouche)  
**Ship date:** 2026-10-05 CT  
**Branch:** `studio/ep15-narayanastra` → merge `main`  
**Track:** B (Ep 15+ factory) — first new episode after the 01–08 ladder

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| D dialogue | `RR-gateD-dialogue.md` / `dialogue_review.py` | **PASS** |
| A/B bible | `RR-gateB-bible.md` / `logic_review.py plate-bible.json` | **PASS** |
| C stills + visual | `stills_review.py --require` + `RR-gateC-visual.md` | **PASS** (SuperGrok consumer Imagine 2026-10-05; invoke v2, calm v2) |
| TTS | `RR-tts-kokoro.md` | **PASS** — Kokoro-82M `bm_george` speed 0.9; orion-00…08 |
| D install | `RR-gateD-install.md` / `install_review.py` | **PASS** (plates + audio + voice_id + raga Shree; totalSec 112) |

3D steps 7–9 (Blender block/map/render) skipped — plate-only cinematic episode, same as Ep 05–08 and Ep 14.

## Hub / registry

- `stills/thumb.jpg` (640×360), `thumb@2x.jpg` (1280×720), `thumb@2x.webp` (1280×720) — hand-picked storyboard plate `plate-invoke.jpg`, 16:9 cover crop (vertical centering 0.30), light unsharp, JPEG q90 progressive 4:4:4 / WebP q90 — same recipe as Ep 08 / Ep 14 thumbs.
- No per-episode og/twitter card (site og stays Ep 10, as for Ep 08 / Ep 14).
- `js/episodes.js` — Ep 15 `status: "live"`, duration `~112s`
- `js/main.js` — `EP_LOADERS["15"]`; Raga Shree preset
- Cache: `play.html` / `index.html` / `landing.js` → `?v=ep15-20261005`
- `README.md` — episode table row 15

## Local check (box, 2026-10-05)

- `python3 -m http.server` on `mahabharata/`: `play.html?ep=15`, `script.js`, 9 plates + poster + 3 thumbs, `orion-00…08.mp3` → all **200**; headless Chrome load of `play.html?ep=15` and hub → no 404s except the site-wide `/favicon.ico`. Hub lists Ep 15 card.

## Publish

- Message: `mahabharata Ep15: GATE D install PASS + ship The Narayana Weapon`
- Commit: 6c413ed (`6c413edaba62f1c9a9ecd75613ccf8e71e69a3fa`) — fast-forward of `studio/ep15-narayanastra` into `main`; author `Chief <Avinashpeyyety@icloud.com>`
- Pages: `.github/workflows/deploy-pages.yml` on push to `main`
- Live: https://avinashpeyyety.github.io/pixelloid/mahabharata/play.html?ep=15
- Hub: https://avinashpeyyety.github.io/pixelloid/mahabharata/
- Pages run: Deploy to GitHub Pages #37351174707 — **success** (2026-10-05 12:48–12:49 CT)
- Live verify (12:50 CT): `play.html?ep=15` 200; deployed `js/episodes.js` has Ep 15 (`play.html?ep=15`) 200; `js/main.js` has `EP_LOADERS["15"]`; `stills/plate-invoke.jpg` 200; `audio/orion-00.mp3` 200; `thumb@2x.webp` 200

## Notes

- Narrator Kokoro `bm_george`; Ep 15 appended to the Orion remaster queue (blocked on credits) in `config/narrator.json`.
- Next: Ep 16 (Karna as commander, Karna Parva) — Track B.
