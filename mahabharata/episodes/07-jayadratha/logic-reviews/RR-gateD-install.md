# Logic review — 07-jayadratha — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-04 11:58 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `bhairavi` — **PASS** |
| `totalSec` | 110 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | wide | plate-wide.jpg | orion-00.mp3 | Narrator | While the Pandavas hunt, Draupadi keeps the forest hermitage alone. |
| 12 | alone | plate-alone.jpg | orion-01.mp3 | Narrator | Jayadratha, king of Sindhu, rides past and sees her — and desire turns |
| 24 | approach | plate-approach.jpg | orion-02.mp3 | Narrator | He greets her with soft words. She answers with the dignity of a queen |
| 36 | seize | plate-seize.jpg | orion-03.mp3 | Narrator | When soft words fail, his men seize her and drive the chariot away. |
| 48 | cry | plate-cry.jpg | orion-04.mp3 | Narrator | Her cry reaches the forest. The brothers hear it and turn from the hun |
| 60 | chase | plate-chase.jpg | orion-05.mp3 | Narrator | Arjuna and Bhima lead the chase — dust and arrows on the forest road. |
| 72 | catch | plate-catch.jpg | orion-06.mp3 | Narrator | They overtake Jayadratha. Bhima would end him; Draupadi stands free. |
| 84 | mercy | plate-mercy.jpg | orion-07.mp3 | Narrator | Yudhishthira grants a hard mercy — Jayadratha lives, shamed, and rides |
| 96 | wide-gold | plate-wide-gold.jpg | orion-08.mp3 | Narrator | The forest is quiet again — but every insult of exile will be paid in  |
| 108 | wide-gold | plate-wide-gold.jpg | — | — |  |

## Strict checks

- [x] voice_id == canonical bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
