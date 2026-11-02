# Logic review — Ep 24 — local Kokoro TTS

Status: **DONE** (2026-11-02 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh` (box venv `~/kokoro-venv`, models `~/tts-models/kokoro`)
- **Voice:** `bm_george`, speed **0.9** (`config/narrator.json`). New episode, so George is correct; no other episode was re-synthesized (only `episodes/24-rajadharma/audio/` written).
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS target (orion-00, -04, -08 measured -16.5 LUFS integrated)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called
- **PRONOUNCE += ** none (Bhishma, Yudhishthira, Pandavas, Kurukshetra already present in `tools/render_local_voice.py`)
- **ASR spot-check:** local faster-whisper base.en transcript of all nine clips matches the script text word for word (names heard as respelled: "Bishma/Bishmar", "Kurukeshitra" — recogniser spelling only).

## Files
- **Count:** 9 spoken files, `audio/orion-00.mp3` … `orion-08.mp3`; total narration 84.4 s.
- **Silent hold:** beat at t=108 (no audio). OK
- **Cache id:** `ep24-kokoro-20261102`
- **Retime:** one line trim before the final render — orion-00 "clear as day" → "clear" (11.18 s → 10.66 s) to keep ≥1.3 s air before beat 2. No grid change.

## Durations (ffprobe)
| File | Beat t | Duration (s) | Ends at | Next beat |
|------|--------|--------------|---------|-----------|
| orion-00 | 0 | 10.656 | 10.7 | 12 |
| orion-01 | 12 | 10.248 | 22.2 | 24 |
| orion-02 | 24 | 9.480 | 33.5 | 36 |
| orion-03 | 36 | 9.264 | 45.3 | 48 |
| orion-04 | 48 | 8.928 | 56.9 | 60 |
| orion-05 | 60 | 8.784 | 68.8 | 72 |
| orion-06 | 72 | 9.480 | 81.5 | 84 |
| orion-07 | 84 | 8.160 | 92.2 | 96 |
| orion-08 | 96 | 9.432 | 105.4 | 108 |

12 s grid (`0,12,…,108`, `totalSec` 112). Every clip ends ≥1.34 s before the next beat (tightest: orion-00).
