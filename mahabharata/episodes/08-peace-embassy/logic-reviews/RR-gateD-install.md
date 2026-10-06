# Logic review — 08-peace-embassy — GATE D (install)

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
| `totalSec` | 102 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | wide | plate-wide.jpg | orion-00.mp3 | Narrator | The years of exile end. Armies gather — and one last chance for peace  |
| 10 | mission | plate-mission.jpg | orion-01.mp3 | Narrator | Krishna takes the Pandavas’ plea to Hastinapura: five villages, and no |
| 22 | journey | plate-journey.jpg | orion-02.mp3 | Narrator | He rides toward the city of the Kurus as messenger, friend, and witnes |
| 34 | court | plate-court.jpg | orion-03.mp3 | Narrator | In the great sabha Dhritarashtra sits blind; Duryodhana’s pride fills  |
| 46 | offer | plate-offer.jpg | orion-04.mp3 | Narrator | Krishna offers peace: five villages for the sons of Pandu. Nothing mor |
| 58 | refuse | plate-refuse.jpg | orion-05.mp3 | Narrator | Duryodhana refuses. He will not give land enough to drive a needle’s p |
| 70 | form | plate-form.jpg | orion-06.mp3 | Narrator | When they plot to seize him, Krishna shows a fraction of his cosmic fo |
| 82 | war | plate-war.jpg | orion-07.mp3 | Narrator | He returns to the Pandavas. Peace has failed. The road to Kurukshetra  |
| 92 | wide-gold | plate-wide-gold.jpg | orion-08.mp3 | Narrator | Thus the last word of peace was spoken — and the age turned toward bat |
| 100 | wide-gold | plate-wide-gold.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected orion
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
