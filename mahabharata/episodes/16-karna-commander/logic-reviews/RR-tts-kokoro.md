# Logic review — Ep 16 — local Kokoro TTS

Status: **DONE** (2026-10-05 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh`
- **Voice:** `bm_george` (grave British male), speed **0.9** (`config/narrator.json`)
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS target (measured −16.4 LUFS integrated on every clip, same as the tool's output on earlier episodes)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called

## Files
- **Count:** 9 spoken files, `audio/orion-00.mp3` … `orion-08.mp3`. Each decodes with 0 ffmpeg errors.
- **Silent hold:** beat at t=108 (no audio). OK
- **Cache id:** `ep16-kokoro-20261005` (`script.js` voice.provider = `local-kokoro`, voice_id = `bm_george`)
- Rendered **before** stills (plates are waiting on Avinash's SuperGrok drop). If any beat text changes after GATE C, re-render that clip and re-run GATE D-dialogue.

## Durations (ffprobe)
| File | Beat t | Duration (s) | Ends at | Next beat |
|------|--------|--------------|---------|-----------|
| orion-00 | 0 | 10.008 | 10.0 | 12 |
| orion-01 | 12 | 9.600 | 21.6 | 24 |
| orion-02 | 24 | 9.288 | 33.3 | 36 |
| orion-03 | 36 | 9.648 | 45.6 | 48 |
| orion-04 | 48 | 10.584 | 58.6 | 60 |
| orion-05 | 60 | 9.384 | 69.4 | 72 |
| orion-06 | 72 | 8.568 | 80.6 | 84 |
| orion-07 | 84 | 8.064 | 92.1 | 96 |
| orion-08 | 96 | 9.576 | 105.6 | 108 |

12 s grid (`0,12,…,108`, `totalSec` 112). Tightest gap is orion-04 (Tripura line) at 1.42 s before the next beat — inside the ≥1 s margin, so **no retime** was needed.

## Pronunciation
`PRONOUNCE` in `tools/render_local_voice.py` is extended for TTS input only (display text unchanged): Shalya → Shull-ya; Madra → Mud-ra; makara → mucker-a; Tripura → Tri-poora; Brahma → Brah-maa. Existing entries cover Ashwatthama, Duryodhana, Arjuna, Yudhishthira and Shiva; Karna and Krishna are read correctly as written. No Whisper on the box, so there's no automated intelligibility check — ear-check `orion-01` (makara) and `orion-03` (Madra) at GATE D install.

## Music
`music.raga: "adana"` maps to the new `RAGA_PRESETS.adana` in `js/main.js` (C#3 tanpura, Asavari-family degrees S R g m P d n, no andolan, no tabla), plus an id fallback `"16" → adana`. No earlier episode uses Adana.
