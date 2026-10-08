# Logic review — Ep 19 — local Kokoro TTS

Status: **DONE** (2026-10-07 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh`
- **Voice:** `bm_george`, speed **0.9** (`config/narrator.json`). New episode, so George is correct; no other episode was re-synthesized.
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS target (orion-00 measured -16.4 LUFS integrated)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called
- **PRONOUNCE += ** Balarama, Samantapanchaka, Kaurava (`tools/render_local_voice.py`, TTS-input only)

## Files
- **Count:** 9 spoken files, `audio/orion-00.mp3` … `orion-08.mp3`.
- **Silent hold:** beat at t=108 (no audio). OK
- **Cache id:** `ep19-kokoro-20261007`

## Durations (ffprobe)
| File | Beat t | Duration (s) | Ends at | Next beat |
|------|--------|--------------|---------|-----------|
| orion-00 | 0 | 10.800 | 10.8 | 12 |
| orion-01 | 12 | 9.936 | 21.9 | 24 |
| orion-02 | 24 | 9.528 | 33.5 | 36 |
| orion-03 | 36 | 9.864 | 45.9 | 48 |
| orion-04 | 48 | 9.192 | 57.2 | 60 |
| orion-05 | 60 | 9.408 | 69.4 | 72 |
| orion-06 | 72 | 8.400 | 80.4 | 84 |
| orion-07 | 84 | 9.768 | 93.8 | 96 |
| orion-08 | 96 | 9.936 | 105.9 | 108 |

12 s grid (`0,12,…,108`, `totalSec` 112). Every clip ends ≥1.2 s before the next beat, so no retime was needed.
