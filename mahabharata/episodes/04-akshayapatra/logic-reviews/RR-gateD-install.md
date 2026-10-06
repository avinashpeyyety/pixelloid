# Logic review — 04-akshayapatra — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-05 21:01 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `orion` |
| `voice.voice_id` | `orion` — **PASS** |
| `voice.provider` | `grok-tts` |
| Named raga | `yaman` — **PASS** |
| `totalSec` | 100 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | wide | plate-wide.jpg | orion-00.mp3 | Narrator | In the forest of exile the Pandavas keep a simple camp — and one divin |
| 10 | vessel | plate-vessel.jpg | orion-01.mp3 | Narrator | The Akshayapatra: so long as Draupadi has not finished her meal, the v |
| 22 | empty | plate-empty.jpg | orion-02.mp3 | Narrator | One evening the meal is done. Draupadi washes the vessel clean — and t |
| 32 | arrival | plate-arrival.jpg | orion-03.mp3 | Narrator | Then comes sage Durvasa with a throng of hungry disciples — and the ca |
| 44 | prayer | plate-prayer.jpg | orion-04.mp3 | Narrator | Draupadi’s heart trembles. She prays to Krishna, the friend who never  |
| 54 | krishna | plate-krishna.jpg | orion-05.mp3 | Narrator | Krishna arrives, smiling as if the forest itself has exhaled. |
| 64 | grain | plate-grain.jpg | orion-06.mp3 | Narrator | He finds a single grain of rice clinging to the vessel — and eats it w |
| 76 | satisfied | plate-satisfied.jpg | orion-07.mp3 | Narrator | Far away, Durvasa and his disciples feel full. They bless the Pandavas |
| 88 | wide-gold | plate-wide-gold.jpg | orion-08.mp3 | Narrator | So grace filled what fear had emptied — and the forest remembered Kris |
| 98 | wide-gold | plate-wide-gold.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected orion
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
