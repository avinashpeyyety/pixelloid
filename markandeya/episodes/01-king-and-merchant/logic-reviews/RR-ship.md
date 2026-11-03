# Ship record — Mārkaṇḍeya Purāṇa Ep 01 *The King and the Merchant*

**Title:** The King and the Merchant (सुरथः समाधिश्च)  
**Slug:** `king-and-merchant`  
**Source:** Devī Māhātmyam · Chapter 1 (frame story: King Suratha, the merchant Samadhi, the sage Medhas)  
**Bar:** Mahabharata Ep 10 canvas (3:2 ≥1536×1024, carved gold-and-lotus cartouche)  
**Ship date:** 2026-11-03 CT  
**Branch:** `studio/markandeya-ep01` → `--no-ff` merge into `main`  
**Pace:** first Markandeya episode for the week of Mon 2026-11-02 (1 per week max)

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| D dialogue | `RR-gateD-dialogue.md` / `dialogue_review.py` | **PASS** |
| A/B bible | `RR-gateB-bible.md` / `logic_review.py plate-bible.json` | **PASS** |
| TTS | `RR-tts-orion.md` | **PASS**: xAI Grok TTS `orion` only, orion-00…08 (78.94 s). No fallback voice |
| C stills + visual | `stills_review.py --require` + `RR-gateC-visual.md` | **PASS**: 15 SuperGrok consumer Imagine stills, 1728×1152. The Suratha lock failed first (blood-like stain on the dhoti) and was fixed with a grok.com Imagine edit; dhoti zoom-checked clean, face matches the plates |
| D install | `RR-gateD-install.md` / `install_review.py` | **PASS** (voice_id `orion`, raga `puriyadhanashri`, totalSec 114, every plate + clip on disk) |

## Hub / registry

- `stills/thumb.jpg` (640×360), `thumb@2x.jpg` + `thumb@2x.webp` (1280×720) from `poster.jpg` (`make_thumbs.py`)
- `js/episodes.js`: Ep 01 `status: "live"` (`~114s`); `js/main.js` `EP_LOADERS["01"]` (already present)
- Cache: `index.html` / `play.html` / `js/landing.js` → `?v=mp01-live-20261103`
- Hub `../index.html`: Markandeya card now reads "Ep 01: The King and the Merchant." (dropped "coming soon")
- `mahabharata/` and `shivaji/` not touched

## Local check (box, 2026-11-03 ~12:45 PM CT)

- `python3 -m http.server` from the repo root: hub, series landing, `play.html?ep=01`, `main.js`, `episodes.js`, `landing.js`, `styles.css`, `script.js`, 9 plates + poster + 3 thumbs, `orion-00…08.mp3` → **30/30 200**
- Headless Chrome (CDP), `play.html?ep=01&auto=1`, 20 s: **0 script exceptions / console errors**. The loader finished, playback reached 0:19 / 1:54, and the dialogue showed beat 2 ("Once, a good king named Suratha…"). The only failed request was `/favicon.ico` 404 (server root, not the site)
- Series landing: 0 script errors; Ep 01 links to `play.html?ep=01` (card + hero Play + `&auto=1`). Expected 404s: `thumb@2x.webp` for the planned eps 02–13, which show the no-img placeholder (no thumbs until they ship)
- Hub: 0 script errors

## Publish

- Author `Chief <Avinashpeyyety@icloud.com>`; pushed without force (branch + main)
- Pages: `.github/workflows/deploy-pages.yml` on push to `main`
- Live: https://avinashpeyyety.github.io/pixelloid/markandeya/play.html?ep=01
- Series: https://avinashpeyyety.github.io/pixelloid/markandeya/

## Notes

- Inbox source JPEGs (`stills/_inbox/consumer-imagine/*.jpg`) stay uncommitted, per convention. The rejected v1 Suratha lock is box-only at `lab-keep/pixelloid-build/mp01-build/rejected/`.
- Next: Ep 02 *Madhu and Kaitabha*, next week (Mon 2026-11-09 or later).
