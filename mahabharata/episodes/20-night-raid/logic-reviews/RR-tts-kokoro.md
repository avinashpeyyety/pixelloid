# Logic review — Ep 20 — local Kokoro TTS

Status: **DONE** (2026-10-12 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh` (box venv `~/kokoro-venv`, models `~/tts-models/kokoro`)
- **Voice:** `bm_george`, speed **0.9** (`config/narrator.json`). New episode, so George is correct; no other episode was re-synthesized (only `episodes/20-night-raid/audio/` written).
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS target (orion-00 measured -16.4 LUFS integrated)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called
- **PRONOUNCE += ** Kritavarma, Oghavati, Shikhandi (`tools/render_local_voice.py`, TTS-input only)

## Files
- **Count:** 9 spoken files, `audio/orion-00.mp3` … `orion-08.mp3`.
- **Silent hold:** beat at t=108 (no audio). OK
- **Cache id:** `ep20-kokoro-20261012`
- **Retime:** first render of orion-01 ran 11.02 s (0.98 s margin); line tightened ("In a nearby forest … An owl swoops on the sleeping crows") in data/bible/script together and all nine re-rendered once — now ≥1.3 s margin everywhere.

## Durations (ffprobe)
| File | Beat t | Duration (s) | Ends at | Next beat |
|------|--------|--------------|---------|-----------|
| orion-00 | 0 | 8.976 | 9.0 | 12 |
| orion-01 | 12 | 10.632 | 22.6 | 24 |
| orion-02 | 24 | 10.584 | 34.6 | 36 |
| orion-03 | 36 | 9.312 | 45.3 | 48 |
| orion-04 | 48 | 10.512 | 58.5 | 60 |
| orion-05 | 60 | 9.216 | 69.2 | 72 |
| orion-06 | 72 | 9.192 | 81.2 | 84 |
| orion-07 | 84 | 8.928 | 92.9 | 96 |
| orion-08 | 96 | 9.264 | 105.3 | 108 |

12 s grid (`0,12,…,108`, `totalSec` 112). Every clip ends ≥1.3 s before the next beat.
