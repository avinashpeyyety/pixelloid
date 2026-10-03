# Logic review — 05-yaksha-prashna — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-03 17:56 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `bhairav` — **PASS** |
| `totalSec` | 110 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | wide | plate-wide.jpg | orion-00.mp3 | Narrator | Deep in the forest the Pandavas wander, weary from the long exile. |
| 12 | thirst | plate-thirst.jpg | orion-01.mp3 | Narrator | Thirst burns. Yudhishthira sends his brothers one by one to seek water |
| 24 | lake | plate-lake.jpg | orion-02.mp3 | Narrator | They find a still forest lake — clear as glass, and strangely silent. |
| 36 | fall | plate-fall.jpg | orion-03.mp3 | Narrator | A voice warns: answer first, or do not drink. They drink. One by one t |
| 48 | yudhi | plate-yudhi.jpg | orion-04.mp3 | Narrator | Yudhishthira comes last, finds his brothers still as stone, and will n |
| 60 | yaksha | plate-yaksha.jpg | orion-05.mp3 | Narrator | A yaksha appears upon the waters — luminous, stern, and endless with q |
| 72 | answers | plate-answers.jpg | orion-06.mp3 | Narrator | What is heavier than earth? Mother. Higher than heaven? Father. Yudhis |
| 84 | rise | plate-rise.jpg | orion-07.mp3 | Narrator | Asked whom to revive first, he names Nakula — equal love for both moth |
| 96 | wide-gold | plate-wide-gold.jpg | orion-08.mp3 | Narrator | So the lake taught what the war would ask: strength without dharma is  |
| 108 | wide-gold | plate-wide-gold.jpg | — | — |  |

## Strict checks

- [x] voice_id == canonical bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
