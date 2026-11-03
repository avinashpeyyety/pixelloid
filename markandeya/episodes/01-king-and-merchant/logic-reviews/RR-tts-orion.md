# Markandeya Ep 01 — narration render (Orion only)

Status: **PASS** — rendered 2026-11-03 (CST) on the bot computer.

- Voice: xAI Grok TTS `orion` ONLY (`POST https://api.x.ai/v1/tts`, voice_id `orion`, language `en`) via
  `tools/render_orion_voice.py`. No fallback voice exists in the tool (no Kokoro / bm_george / macOS say / default).
- Probe first: one short line ("Namaste. This is the Markandeya Purana.") → HTTP 200 audio/mpeg, 3.24 s. Then full render.
- Format: 24 kHz / mono / 128 kbps MP3, metadata and ID3 stripped (ffmpeg fingerprint, same as Mahabharata).
- PRONOUNCE (`config/pronounce.json`, TTS input only; captions unchanged): Markandeya→Maarkandayya, Suratha→Soorutha,
  Samadhi→Samaadhi, Medhas→Maydhus, Mahamaya→Mahaa-maaya, Devi→Dayvee.
- Credits: 9 clips + 1 probe, ~1,000 characters total — Orion narration only (authorized use of xAI API credits).

## Clips vs beat windows

Window rule: beat window = max(12 s, clip + 2.6 s), rounded up; the builder sets `t` from measured durations.

| Clip | Plate | Words | Seconds | Beat t | Window |
|------|-------|------:|--------:|-------:|-------:|
| orion-00.mp3 | tale | 26 | 9.05 | 0 | 12 |
| orion-01.mp3 | king | 22 | 6.82 | 12 | 12 |
| orion-02.mp3 | ride | 26 | 9.05 | 24 | 12 |
| orion-03.mp3 | ashram | 23 | 8.74 | 36 | 12 |
| orion-04.mp3 | worry | 23 | 7.78 | 48 | 12 |
| orion-05.mp3 | merchant | 26 | 8.74 | 60 | 12 |
| orion-06.mp3 | cling | 23 | 8.74 | 72 | 12 |
| orion-07.mp3 | ask | 26 | 8.74 | 84 | 12 |
| orion-08.mp3 | mahamaya | 30 | 11.30 | 96 | 14 |
| (silent hold) | mahamaya | — | — | 110 | 4 |

Total narration **78.94 s**; episode `totalSec` **114** (was 112 nominal; +2 s for the longer final line).

## Listen-back (faster-whisper base.en, box)

All 9 clips transcribe word-for-word to the script. Names heard as: "Markandaya", "Soruta", "Samadhi", "Madis"/"made who's"
(Medhas — whisper's English bias; spoken as "May-dhus"), "Maha Maya". Intelligible; no re-render needed.
