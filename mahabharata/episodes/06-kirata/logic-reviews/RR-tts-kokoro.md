# Logic review — Ep 06 — local Kokoro TTS

Status: **DONE** (2026-10-03 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh`
- **Voice:** `bm_george` (grave British male), speed **0.9**
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS (Orion-compatible)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called

## Files
- **Count:** 9 spoken files — `audio/orion-00.mp3` … `orion-08.mp3` (overwrite of prior Orion-era clips)
- **Silent hold:** beat at t=108 (no audio) — OK
- **Cache id:** `ep06-kokoro-20261003` (`script.js` voice.provider = `local-kokoro`)

## Durations (ffprobe)
| File | Duration (s) |
|------|--------------|
| orion-00 | 6.120 |
| orion-01 | 6.000 |
| orion-02 | 5.952 |
| orion-03 | 5.904 |
| orion-04 | 6.552 |
| orion-05 | 6.744 |
| orion-06 | 6.624 |
| orion-07 | 5.856 |
| orion-08 | 6.552 |

Beat `t` retimed to 12 s grid: `0,12,24,36,48,60,72,84,96,108`; `totalSec` **110** (was 102). Every clip ends ≥1 s before the next beat.

## Pronunciation
`PRONOUNCE` in `tools/render_local_voice.py` extended for TTS input only (display `script.js` text unchanged):
Arjuna → Ar-joona; Himalaya → Him-aa-laya; Mahadeva → Maha-deva; kirata/Kirata; Pashupatastra → Pa-shu-pa-taastra; Shiva → Shee-va.

## Music
`music.raga: "bhairav"` kept (Himalayan penance / Mahadeva reveal).

## Next stage
GATE D install (speaker/plate sync) + ship — same cycle.
