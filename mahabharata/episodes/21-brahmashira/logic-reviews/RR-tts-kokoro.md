# Logic review — Ep 21 — local Kokoro TTS

Status: **DONE** (2026-10-15 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh` (box venv `~/kokoro-venv`, models `~/tts-models/kokoro`)
- **Voice:** `bm_george`, speed **0.9** (`config/narrator.json`). New episode, so George is correct; no other episode was re-synthesized (only `episodes/21-brahmashira/audio/` written).
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS target (orion-00 measured -16.4 LUFS integrated)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called
- **PRONOUNCE += ** brahmashira, Vyasa, Narada, Ganga (`tools/render_local_voice.py`, TTS-input only)

## Files
- **Count:** 9 spoken files, `audio/orion-00.mp3` … `orion-08.mp3`.
- **Silent hold:** beat at t=108 (no audio). OK
- **Cache id:** `ep21-kokoro-20261015`
- **Retime:** first render of orion-02 ran 11.38 s (0.62 s margin); line tightened ("… the brahmashira, which can burn the worlds … he races after Bhima") in data/bible/script together and all nine re-rendered once — now ≥1.36 s margin everywhere (tightest: orion-03, 1.37 s).

## Durations (ffprobe)
| File | Beat t | Duration (s) | Ends at | Next beat |
|------|--------|--------------|---------|-----------|
| orion-00 | 0 | 10.392 | 10.4 | 12 |
| orion-01 | 12 | 8.544 | 20.5 | 24 |
| orion-02 | 24 | 10.536 | 34.5 | 36 |
| orion-03 | 36 | 10.632 | 46.6 | 48 |
| orion-04 | 48 | 8.664 | 56.7 | 60 |
| orion-05 | 60 | 9.936 | 69.9 | 72 |
| orion-06 | 72 | 9.432 | 81.4 | 84 |
| orion-07 | 84 | 9.576 | 93.6 | 96 |
| orion-08 | 96 | 9.048 | 105.0 | 108 |

12 s grid (`0,12,…,108`, `totalSec` 112). Every clip ends ≥1.36 s before the next beat.
