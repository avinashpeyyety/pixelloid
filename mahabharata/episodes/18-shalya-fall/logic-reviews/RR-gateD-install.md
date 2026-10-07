# Logic review — 18-shalya-fall — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-07 18:21 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `sarang` — **PASS** |
| `totalSec` | 112 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | anoint | plate-anoint.jpg | orion-00.mp3 | Narrator | Night after Karna’s fall. Kripa begs Duryodhana to make peace. He refu |
| 12 | counsel | plate-counsel.jpg | orion-01.mp3 | Narrator | At dawn Krishna tells Yudhishthira: “Shalya is your kin and a mighty w |
| 24 | array | plate-array.jpg | orion-02.mp3 | Narrator | The eighteenth day. What is left of the Kaurava host marches out, and  |
| 36 | mace | plate-mace.jpg | orion-03.mp3 | Narrator | Bhima meets Shalya mace to mace. They circle and strike like two bulls |
| 48 | resolve | plate-resolve.jpg | orion-04.mp3 | Narrator | Then Yudhishthira, the gentlest of the brothers, rides out. Today his  |
| 60 | charge | plate-charge.jpg | orion-05.mp3 | Narrator | Shalya’s horses and charioteer fall. Unhorsed, the old king leaps down |
| 72 | dart | plate-dart.jpg | orion-06.mp3 | Narrator | Yudhishthira takes up a gleaming dart, adorned with gold and gems and  |
| 84 | fall | plate-fall.jpg | orion-07.mp3 | Narrator | At midday the dart strikes. Shalya falls with arms outstretched, as if |
| 96 | lake | plate-lake.jpg | orion-08.mp3 | Narrator | Sahadeva slays Shakuni. The Kaurava host is gone. Duryodhana, alone, t |
| 108 | lake | plate-lake.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
