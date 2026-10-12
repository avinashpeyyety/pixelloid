# Logic review — 20-night-raid — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-12 12:46 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `shankara` — **PASS** |
| `totalSec` | 112 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | away | plate-away.jpg | orion-00.mp3 | Narrator | The war is won. That night Krishna leads Yudhishthira and his brothers |
| 12 | owl | plate-owl.jpg | orion-01.mp3 | Narrator | In a nearby forest, Ashwatthama lies awake beneath a banyan tree. An o |
| 24 | plan | plate-plan.jpg | orion-02.mp3 | Narrator | He wakes Kripa and Kritavarma: they will strike the Pandava camp tonig |
| 36 | guardian | plate-guardian.jpg | orion-03.mp3 | Narrator | Ashwatthama will not listen. At the camp gate a towering guardian blaz |
| 48 | boon | plate-boon.jpg | orion-04.mp3 | Narrator | Knowing it is Shiva, Ashwatthama prays and offers himself to a sacred  |
| 60 | watch | plate-watch.jpg | orion-05.mp3 | Narrator | Ashwatthama slips into the sleeping camp alone. Kripa and Kritavarma s |
| 72 | tent | plate-tent.jpg | orion-06.mp3 | Narrator | He finds the tent where Dhrishtadyumna, who slew his father Drona, lie |
| 84 | fire | plate-fire.jpg | orion-07.mp3 | Narrator | Before dawn the camp is lost. Draupadi’s five sons and Shikhandi never |
| 96 | dawn | plate-dawn.jpg | orion-08.mp3 | Narrator | At first light the three bring the news to Duryodhana by the lake. Con |
| 108 | dawn | plate-dawn.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
