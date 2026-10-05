# Logic review — Ep 15 — local Kokoro TTS

Status: **DONE** (2026-10-05 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh`
- **Voice:** `bm_george` (grave British male), speed **0.9** (`config/narrator.json`)
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS (Orion-compatible)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called

## Files
- **Count:** 9 spoken files, `audio/orion-00.mp3` … `orion-08.mp3`. Each decodes with 0 ffmpeg errors.
- **Silent hold:** beat at t=108 (no audio). OK
- **Cache id:** `ep15-kokoro-20261005` (`script.js` voice.provider = `local-kokoro`)

## Durations (ffprobe)
| File | Beat t | Duration (s) | Ends at | Next beat |
|------|--------|--------------|---------|-----------|
| orion-00 | 0 | 8.664 | 8.7 | 12 |
| orion-01 | 12 | 8.856 | 20.9 | 24 |
| orion-02 | 24 | 9.384 | 33.4 | 36 |
| orion-03 | 36 | 7.776 | 43.8 | 48 |
| orion-04 | 48 | 8.592 | 56.6 | 60 |
| orion-05 | 60 | 8.064 | 68.1 | 72 |
| orion-06 | 72 | 8.712 | 80.7 | 84 |
| orion-07 | 84 | 9.504 | 93.5 | 96 |
| orion-08 | 96 | 8.904 | 104.9 | 108 |

The 12 s grid was already in place (`0,12,…,108`, `totalSec` 112). Every clip ends ≥2.4 s before the next beat, so **no retime** was needed.

## Pronunciation
`PRONOUNCE` in `tools/render_local_voice.py` is extended for TTS input only (display text unchanged): Narayana → Naa-raa-yana; Gandiva → Gaan-deeva. Existing entries cover Ashwatthama, Bhima, Yudhishthira, Arjuna and Duryodhana.

## Music
`music.raga: "shree"` now maps to `RAGA_PRESETS.shree` in `js/main.js` (it was missing before, so the player would have fallen back to default flute+tabla).
