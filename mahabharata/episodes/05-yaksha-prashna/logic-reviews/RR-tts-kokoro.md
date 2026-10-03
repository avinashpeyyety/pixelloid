# Logic review — Ep 05 — local Kokoro TTS

Status: **DONE** (2026-10-03 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh`
- **Voice:** `bm_george` (grave British male), speed **0.9**
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS (Orion-compatible)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called

## Files
- **Count:** 9 spoken files — `audio/orion-00.mp3` … `orion-08.mp3` (overwrite of prior Orion-era clips)
- **Silent hold:** beat at t=108 (no audio) — OK
- **Cache id:** `ep05-kokoro-20261003` (`script.js` voice.provider = `local-kokoro`)

## Durations (ffprobe)
| File | Duration (s) |
|------|--------------|
| orion-00 | 5.472 |
| orion-01 | 5.904 |
| orion-02 | 5.448 |
| orion-03 | 6.336 |
| orion-04 | 6.888 |
| orion-05 | 6.288 |
| orion-06 | 7.008 |
| orion-07 | 8.592 |
| orion-08 | 5.856 |

Beat `t` retimed to 12 s grid: `0,12,24,36,48,60,72,84,96,108`; `totalSec` **110** (was 102). Every clip ends ≥1 s before the next beat.

## Pronunciation
`PRONOUNCE` in `tools/render_local_voice.py` extended for TTS input only (display `script.js` text unchanged):
Yudhishthira → Yoo-dish-thira; Pandavas/Pandava; Yaksha/yaksha; Nakula; Sahadeva; Dharma.

## Music
`music.raga: "bhairav"` kept (sacred lake / dharma questions).

## Next stage
GATE D install (speaker/plate sync) + ship — **not** this cycle. Dialogue gate re-run after retiming.
