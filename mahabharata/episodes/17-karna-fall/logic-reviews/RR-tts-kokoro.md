# Logic review — Ep 17 — local Kokoro TTS

Status: **DONE** (2026-10-07 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh`
- **Voice:** `bm_george` (grave British male), speed **0.9** (`config/narrator.json`). New episode, so George is correct (George is only for NEW episodes; no other episode was re-synthesized)
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS target (measured −16.4 LUFS integrated on every clip, same as Ep 16)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called

## Files
- **Count:** 9 spoken files, `audio/orion-00.mp3` … `orion-08.mp3`. Each decodes with 0 ffmpeg errors.
- **Silent hold:** beat at t=108 (no audio). OK
- **Cache id:** `ep17-kokoro-20261007` (`script.js` voice.provider = `local-kokoro`, voice_id = `bm_george`)
- Rendered **before** stills (plates wait on the SuperGrok drop). If any beat text changes after GATE C, re-render that clip and re-run GATE D-dialogue.

## Durations (ffprobe)
| File | Beat t | Duration (s) | Ends at | Next beat |
|------|--------|--------------|---------|-----------|
| orion-00 | 0 | 10.008 | 10.0 | 12 |
| orion-01 | 12 | 8.928 | 20.9 | 24 |
| orion-02 | 24 | 8.568 | 32.6 | 36 |
| orion-03 | 36 | 8.736 | 44.7 | 48 |
| orion-04 | 48 | 7.512 | 55.5 | 60 |
| orion-05 | 60 | 8.424 | 68.4 | 72 |
| orion-06 | 72 | 9.024 | 81.0 | 84 |
| orion-07 | 84 | 8.664 | 92.7 | 96 |
| orion-08 | 96 | 9.720 | 105.7 | 108 |

12 s grid (`0,12,…,108`, `totalSec` 112). Tightest gap is orion-08 (Kunti line) at 2.28 s before the hold — inside the ≥1 s margin, so **no retime** was needed.

## Pronunciation
`PRONOUNCE` in `tools/render_local_voice.py` is extended for TTS input only (display text unchanged): Parashurama → Para-shoo-raama; Anjalika → Un-ja-lika; Kunti → Koon-tee. Existing entries cover Arjuna, Shalya, Draupadi, Brahma and dharma; Karna and Krishna are read correctly as written. No Whisper on the box, so there's no automated intelligibility check — ear-check `orion-03` (Parashurama) and `orion-06` (Anjalika) at GATE D install.

## Music
`music.raga: "multani"` maps to the new `RAGA_PRESETS.multani` in `js/main.js` (G#2 tanpura, Todi-thaat degrees S r g M P d N, no tabla), plus an id fallback `"17" → multani`, a five-phrase table (N S g M P / M g M P / P N S' / S' N d P / M g r S — Re and Dha only in descent), phrase gap 4.0–6.6 s and a 4.0 s melody delay. No earlier episode uses Multani.
