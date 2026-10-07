# Logic review — 17-karna-fall — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-07 12:40 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `multani` — **PASS** |
| `totalSec` | 112 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | meet | plate-meet.jpg | orion-00.mp3 | Narrator | Seventeenth day. Krishna drives Arjuna; Shalya drives Karna. The two g |
| 12 | serpent | plate-serpent.jpg | orion-01.mp3 | Narrator | Karna fits his serpent-mouthed arrow. “It will miss — fit another,” Sh |
| 24 | crown | plate-crown.jpg | orion-02.mp3 | Narrator | Krishna presses the chariot into the earth with his feet. The horses k |
| 36 | wheel | plate-wheel.jpg | orion-03.mp3 | Narrator | Then the earth swallows Karna’s wheel, as a Brahmin once cursed — and  |
| 48 | plea | plate-plea.jpg | orion-04.mp3 | Narrator | Karna leaps down to heave at the wheel. “Wait, Arjuna! You stand on a  |
| 60 | rebuke | plate-rebuke.jpg | orion-05.mp3 | Narrator | Krishna answers: “Where was your dharma when Draupadi was dragged into |
| 72 | anjalika | plate-anjalika.jpg | orion-06.mp3 | Narrator | Karna fights on. Arjuna cuts down his standard, then draws the Anjalik |
| 84 | fall | plate-fall.jpg | orion-07.mp3 | Narrator | In the afternoon Karna, son of the Sun, falls. A radiant light rises f |
| 96 | conch | plate-conch.jpg | orion-08.mp3 | Narrator | Krishna and Arjuna blow their conchs. Arjuna does not know Karna was K |
| 108 | conch | plate-conch.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
