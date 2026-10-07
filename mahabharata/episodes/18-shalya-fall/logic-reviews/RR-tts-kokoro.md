# Logic review — Ep 18 — local Kokoro TTS

Status: **DONE** (2026-10-07 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh`
- **Voice:** `bm_george`, speed **0.9** (`config/narrator.json`). New episode, so George is correct; no other episode was re-synthesized.
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS target (orion-00 measured -16.4 LUFS integrated)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called
- **PRONOUNCE += ** Kripa, Shakuni (`tools/render_local_voice.py`, TTS-input only)

## Files
- **Count:** 9 spoken files, `audio/orion-00.mp3` … `orion-08.mp3`.
- **Silent hold:** beat at t=108 (no audio). OK
- **Cache id:** `ep18-kokoro-20261007`

## Durations (ffprobe)
| File | Beat t | Duration (s) | Ends at | Next beat |
|------|--------|--------------|---------|-----------|
| orion-00 | 0 | 10.248 | 10.2 | 12 |
| orion-01 | 12 | 9.648 | 21.6 | 24 |
| orion-02 | 24 | 8.688 | 32.7 | 36 |
| orion-03 | 36 | 8.016 | 44.0 | 48 |
| orion-04 | 48 | 9.096 | 57.1 | 60 |
| orion-05 | 60 | 9.504 | 69.5 | 72 |
| orion-06 | 72 | 9.336 | 81.3 | 84 |
| orion-07 | 84 | 7.536 | 91.5 | 96 |
| orion-08 | 96 | 9.360 | 105.4 | 108 |

12 s grid (`0,12,…,108`, `totalSec` 112). Every clip ends ≥1.7 s before the next beat, so no retime was needed.
