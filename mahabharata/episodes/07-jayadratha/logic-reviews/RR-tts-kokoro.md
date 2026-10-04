# Logic review — Ep 07 — local Kokoro TTS

Status: **DONE** (2026-10-04 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh`
- **Voice:** `bm_george` (grave British male), speed **0.9**
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS (Orion-compatible)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called

## Files
- **Count:** 9 spoken files — `audio/orion-00.mp3` … `orion-08.mp3` (overwrite of prior Orion-era clips)
- **Silent hold:** beat at t=108 (no audio) — OK
- **Cache id:** `ep07-kokoro-20261004` (`script.js` voice.provider = `local-kokoro`)

## Durations (ffprobe)
| File | Duration (s) |
|------|--------------|
| orion-00 | 5.328 |
| orion-01 | 7.104 |
| orion-02 | 6.264 |
| orion-03 | 5.400 |
| orion-04 | 5.496 |
| orion-05 | 5.544 |
| orion-06 | 6.024 |
| orion-07 | 6.672 |
| orion-08 | 5.904 |

Beat `t` retimed to 12 s grid: `0,12,24,36,48,60,72,84,96,108`; `totalSec` **110** (was 100). Every clip ends ≥1 s before the next beat.

## Pronunciation
`PRONOUNCE` in `tools/render_local_voice.py` extended for TTS input only (display `script.js` text unchanged):
Jayadratha → Ja-ya-dra-tha; Draupadi → Drau-pa-dee; Sindhu → Sin-dhoo; plus existing Bhima/Yudhishthira/Arjuna/Pandavas.

## Music
`music.raga: "bhairavi"` kept (Draupadi dignity / forest ordeal / hard mercy).

## Next stage
GATE D install (speaker/plate sync) + ship — same cycle.
