# Ship record — Ep 16 *Karna Takes Command*

**Title:** Karna Takes Command — sixteenth and seventeenth days of Kurukshetra  
**Slug:** `karna-commander`  
**Parva:** Karna Parva (8.6–8.29 CE; Karna-senapatya-abhisheka + Shalya-sarathya) · Udyoga 5.8 (Shalya's promise)  
**Bar:** Ep 09/10 (3:2 ≥1536×1024, carved cartouche)  
**Ship date:** 2026-10-06 CT  
**Branch:** `studio/ep16-karna-commander` → merge `main` (no-ff merge; main carried the 2026-10-05 Orion restore for Ep05–08)  
**Track:** B (Ep 15+ factory) — second new episode after the 01–08 ladder

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| D dialogue | `RR-gateD-dialogue.md` / `dialogue_review.py` | **PASS** |
| A/B bible | `RR-gateB-bible.md` / `logic_review.py plate-bible.json` | **PASS** |
| C stills + visual | `stills_review.py --require` + `RR-gateC-visual.md` | **PASS** (SuperGrok consumer Imagine 2026-10-06; outrage v2, secret v2) |
| TTS | `RR-tts-kokoro.md` | **PASS** — Kokoro-82M `bm_george` speed 0.9; orion-00…08 (rendered 2026-10-05; not re-synthesized) |
| D install | `RR-gateD-install.md` / `install_review.py` | **PASS** (plates + audio + voice_id bm_george + raga Adana; totalSec 112) — run on merged `main` with the Orion-lock-aware `install_review.py` |

3D steps 7–9 (Blender block/map/render) skipped — plate-only cinematic episode, same as Ep 05–08, 14, 15.

## Narration regression guard

- `config/narrator.json` unchanged by this ship: `orion_locked_episodes` 01–03, 05–13; remaster queue 14, 04, 15.
- No audio file outside `episodes/16-karna-commander/` touched (merge diff vs `origin/main` limited to Ep16 tree + NEXT/SPRINT_PLAN/main.js/render_local_voice.py PRONOUNCE + registry/cache).
- `install_review.py` PASS on Ep 05, 06, 07, 08 (voice_id `orion`) and on every episode 01–16.

## Hub / registry

- `stills/thumb.jpg` (640×360), `thumb@2x.jpg` (1280×720), `thumb@2x.webp` (1280×720) — hand-picked storyboard plate `plate-boast.jpg` (Karna commanding, Shalya at the reins), 16:9 cover crop (vertical centering 0.30), light unsharp, JPEG q90 progressive 4:4:4 / WebP q90 — same recipe as Ep 08 / 14 / 15.
- No per-episode og/twitter card (site og stays Ep 10).
- `js/episodes.js` — Ep 16 `status: "live"`, duration `~112s`
- `js/main.js` — `EP_LOADERS["16"]`; Raga Adana preset (from the branch)
- Cache: `play.html` / `index.html` / `landing.js` → `?v=ep16-20261006`
- `README.md` — episode table row 16

## Local check (box, 2026-10-06 ~22:58 CT)

- `python3 -m http.server` on `mahabharata/`: `play.html?ep=16`, `script.js`, 9 plates + poster + 3 thumbs, `orion-00…08.mp3` → all **200** (27/27); headless Chrome `play.html?ep=16&auto=1` loads all 9 plates, plays `orion-00.mp3` (clock advancing), no JS errors, only 404 = site-wide `/favicon.ico`. Hub lists the Ep 16 card with thumb.

## Publish

- Message: `mahabharata Ep16: GATE D install PASS + ship Karna Takes Command`
- Commit: _(filled after push)_
- Pages: `.github/workflows/deploy-pages.yml` on push to `main`
- Live: https://avinashpeyyety.github.io/pixelloid/mahabharata/play.html?ep=16
- Hub: https://avinashpeyyety.github.io/pixelloid/mahabharata/

## Notes

- Narrator Kokoro `bm_george` (new episode). Not added to the Orion remaster queue in this ship — that queue is Avinash's call.
- Next: Ep 17 (the Karna–Arjuna duel, the sunken wheel and Karna's fall) — Track B.
