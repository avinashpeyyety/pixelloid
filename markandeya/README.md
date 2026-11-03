# Mārkaṇḍeya Purāṇa — pixelloid series

Cinematic, stills-based browser theater of the **Mārkaṇḍeya Purāṇa**, starting with the **Devī Māhātmyam**
(Durgā Saptaśatī, cantos 81–93) in story order. Same engine as `../mahabharata/` (painted 3:2 plates with
Ken Burns moves, Orion narration, a named raga bed), forked so neither series can break the other.

Live (after the first ship): https://avinashpeyyety.github.io/pixelloid/markandeya/

| Path | What |
|------|------|
| `index.html` + `js/landing.js` | Series landing; cards from `js/episodes.js`; hero Play/poster appear once an ep is `live` |
| `play.html?ep=NN` + `js/main.js` | Player; `EP_LOADERS` maps id → `episodes/<id>-<slug>/script.js`; `RAGA_PRESETS` |
| `js/episodes.js` | Registry (`status: "live"` = linked; anything else = "Coming soon") |
| `episodes/<id>-<slug>/` | `script.js`, `plate-bible.json`, `cast-sheet.json`, `audio/orion-NN.mp3`, `stills/`, `logic-reviews/` |
| `config/narrator.json` | Orion-only narrator policy (no fallback) |
| `config/pronounce.json` | PRONOUNCE map applied to TTS input only |
| `config/cast-locks.json` / `docs/CHARACTER_LOCKS.md` | Locked character sheets for the whole arc |
| `assets/spine/field-master.jpg` | Series frame spine (byte copy of Mahabharata Ep10 field-master; cartouche + palette only) |
| `docs/EPISODE_PLAN.md` | 13-episode Devi Mahatmyam plan |
| `docs/PIPELINE_CHECKLIST.md` | Gates and ship steps |
| `tools/` | `logic_review` (A/B), `dialogue_review` (D-dialogue), `stills_review` (C), `install_review` (D-install), `import_consumer_stills`, `render_orion_voice` (Orion only), `make_thumbs` |

Rules: see `NEXT.md` → Hard rules. Box-only episode builders live in `/home/box/lab-keep/pixelloid-build/mpNN-build`.
