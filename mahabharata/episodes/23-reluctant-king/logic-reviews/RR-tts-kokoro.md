# Logic review — Ep 23 — local Kokoro TTS

Status: **DONE** (2026-10-29 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh` (box venv `~/kokoro-venv`, models `~/tts-models/kokoro`)
- **Voice:** `bm_george`, speed **0.9** (`config/narrator.json`). New episode, so George is correct; no other episode was re-synthesized (only `episodes/23-reluctant-king/audio/` written).
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS target (orion-00 measured -16.6 LUFS integrated)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called
- **PRONOUNCE += ** Bhishma (`tools/render_local_voice.py`, TTS-input only; Yudhishthira, Arjuna, Bhima, Draupadi, Kunti, Vyasa, Ganga, Hastinapura, Kurukshetra, Pandavas, dharma already present)
- **ASR spot-check:** local faster-whisper base.en transcript of all nine clips matches the script text (names respelled as expected; base.en hears "kings" in orion-05 as a garbled word — a recogniser artefact on the slow George read, wording verified against the script).

## Files
- **Count:** 9 spoken files, `audio/orion-00.mp3` … `orion-08.mp3`.
- **Silent hold:** beat at t=108 (no audio). OK
- **Cache id:** `ep23-kokoro-20261029`
- **Retime:** none needed — first render fits the grid.

## Durations (ffprobe)
| File | Beat t | Duration (s) | Ends at | Next beat |
|------|--------|--------------|---------|-----------|
| orion-00 | 0 | 10.656 | 10.7 | 12 |
| orion-01 | 12 | 8.568 | 20.6 | 24 |
| orion-02 | 24 | 8.664 | 32.7 | 36 |
| orion-03 | 36 | 8.064 | 44.1 | 48 |
| orion-04 | 48 | 7.776 | 55.8 | 60 |
| orion-05 | 60 | 9.288 | 69.3 | 72 |
| orion-06 | 72 | 10.560 | 82.6 | 84 |
| orion-07 | 84 | 10.776 | 94.8 | 96 |
| orion-08 | 96 | 9.456 | 105.5 | 108 |

12 s grid (`0,12,…,108`, `totalSec` 112). Every clip ends ≥1.22 s before the next beat (tightest: orion-07).
