# Logic review — Ep 22 — local Kokoro TTS

Status: **DONE** (2026-10-19 CT)

## Engine
- **Engine:** Kokoro-82M (kokoro-onnx, Apache-2.0) via `tools/render_local_voice.sh` (box venv `~/kokoro-venv`, models `~/tts-models/kokoro`)
- **Voice:** `bm_george`, speed **0.9** (`config/narrator.json`). New episode, so George is correct; no other episode was re-synthesized (only `episodes/22-womens-lament/audio/` written).
- **Fingerprint:** 24 kHz / 128 kbps / mono / no ID3 / −16 LUFS target (orion-00 measured -16.4 LUFS integrated)
- **No paid API:** SuperGrok-only rule; Orion / api.x.ai not called
- **PRONOUNCE += ** Gandhari, Kunti (`tools/render_local_voice.py`, TTS-input only; Vyasa, Ganga, Dhritarashtra, Hastinapura, Yudhishthira, Draupadi, Pandavas already present)
- **ASR spot-check:** local faster-whisper base.en transcript of all nine clips matches the script text (names respelled as expected).

## Files
- **Count:** 9 spoken files, `audio/orion-00.mp3` … `orion-08.mp3`.
- **Silent hold:** beat at t=108 (no audio). OK
- **Cache id:** `ep22-kokoro-20261019`
- **Retime:** first render of orion-04 (`curse`) ran 7.92 s; the line was lengthened with Gandhari's canonical 'and its women will weep like these' (Ganguli §25) in data/bible/script together and all nine re-rendered once — 1.61 s minimum margin (tightest: orion-06).

## Durations (ffprobe)
| File | Beat t | Duration (s) | Ends at | Next beat |
|------|--------|--------------|---------|-----------|
| orion-00 | 0 | 10.200 | 10.2 | 12 |
| orion-01 | 12 | 9.768 | 21.8 | 24 |
| orion-02 | 24 | 9.984 | 34.0 | 36 |
| orion-03 | 36 | 9.984 | 46.0 | 48 |
| orion-04 | 48 | 10.176 | 58.2 | 60 |
| orion-05 | 60 | 8.208 | 68.2 | 72 |
| orion-06 | 72 | 10.392 | 82.4 | 84 |
| orion-07 | 84 | 9.000 | 93.0 | 96 |
| orion-08 | 96 | 9.240 | 105.2 | 108 |

12 s grid (`0,12,…,108`, `totalSec` 112). Every clip ends ≥1.61 s before the next beat.
