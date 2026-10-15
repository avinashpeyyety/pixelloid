# Logic review — 21-brahmashira — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-15 12:33 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `jaunpuri` — **PASS** |
| `totalSec` | 112 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | vow | plate-vow.jpg | orion-00.mp3 | Narrator | Morning finds the ruined camp. Draupadi, grieving her five sons, vows  |
| 12 | ride | plate-ride.jpg | orion-01.mp3 | Narrator | Bhima will not wait. Bow in hand, he races out in his chariot, followi |
| 24 | follow | plate-follow.jpg | orion-02.mp3 | Narrator | Krishna warns that Ashwatthama holds the brahmashira, which can burn t |
| 36 | loose | plate-loose.jpg | orion-03.mp3 | Narrator | At Vyasa's hermitage on the Ganga, Ashwatthama sees Bhima coming. He p |
| 48 | answer | plate-answer.jpg | orion-04.mp3 | Narrator | At Krishna's word, Arjuna looses his own brahmashira — to quell the ot |
| 60 | between | plate-between.jpg | orion-05.mp3 | Narrator | The two fires rush to meet. Vyasa and Narada step between them, calm a |
| 72 | turn | plate-turn.jpg | orion-06.mp3 | Narrator | Arjuna withdraws his weapon. Ashwatthama cannot. Instead, he turns his |
| 84 | word | plate-word.jpg | orion-07.mp3 | Narrator | Krishna gives his word: the child will be born, and will live. Ashwatt |
| 96 | home | plate-home.jpg | orion-08.mp3 | Narrator | Bhima places the jewel in Draupadi's hands. Her vow fulfilled, she giv |
| 108 | home | plate-home.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
