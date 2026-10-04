# Logic review — 08-peace-embassy — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-04 17:54 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `yaman` — **PASS** |
| `totalSec` | 110 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | wide | plate-wide.jpg | orion-00.mp3 | Narrator | The years of exile end. Armies gather — and one last chance for peace  |
| 12 | mission | plate-mission.jpg | orion-01.mp3 | Narrator | Krishna takes the Pandavas’ plea to Hastinapura: five villages, and no |
| 24 | journey | plate-journey.jpg | orion-02.mp3 | Narrator | He rides toward the city of the Kurus as messenger, friend, and witnes |
| 36 | court | plate-court.jpg | orion-03.mp3 | Narrator | In the great sabha Dhritarashtra sits blind; Duryodhana’s pride fills  |
| 48 | offer | plate-offer.jpg | orion-04.mp3 | Narrator | Krishna offers peace: five villages for the sons of Pandu. Nothing mor |
| 60 | refuse | plate-refuse.jpg | orion-05.mp3 | Narrator | Duryodhana refuses. He will not give land enough to drive a needle’s p |
| 72 | form | plate-form.jpg | orion-06.mp3 | Narrator | When they plot to seize him, Krishna shows a fraction of his cosmic fo |
| 84 | war | plate-war.jpg | orion-07.mp3 | Narrator | He returns to the Pandavas. Peace has failed. The road to Kurukshetra  |
| 96 | wide-gold | plate-wide-gold.jpg | orion-08.mp3 | Narrator | Thus the last word of peace was spoken — and the age turned toward bat |
| 108 | wide-gold | plate-wide-gold.jpg | — | — |  |

## Strict checks

- [x] voice_id == canonical bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
