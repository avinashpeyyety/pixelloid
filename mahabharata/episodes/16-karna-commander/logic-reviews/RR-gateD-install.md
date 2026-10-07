# Logic review — 16-karna-commander — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-06 22:53 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `adana` — **PASS** |
| `totalSec` | 112 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | anoint | plate-anoint.jpg | orion-00.mp3 | Narrator | Night of the fifteenth day. Drona has fallen. At Ashwatthama’s word, D |
| 12 | makara | plate-makara.jpg | orion-01.mp3 | Narrator | At sunrise Karna draws the host into the makara, the sea-beast array,  |
| 24 | ask | plate-ask.jpg | orion-02.mp3 | Narrator | That night Karna tells Duryodhana: “Arjuna has Krishna at his reins. G |
| 36 | outrage | plate-outrage.jpg | orion-03.mp3 | Narrator | Duryodhana asks Shalya, king of Madra. Shalya flares in fury: “Shall a |
| 48 | tripura | plate-tripura.jpg | orion-04.mp3 | Narrator | Duryodhana tells him of Tripura: when Shiva rode to burn the three cit |
| 60 | reins | plate-reins.jpg | orion-05.mp3 | Narrator | Shalya agrees — on one condition: he may say whatever he likes to Karn |
| 72 | boast | plate-boast.jpg | orion-06.mp3 | Narrator | Karna calls to the ranks: “Whoever shows me Arjuna shall have jewels,  |
| 84 | crow | plate-crow.jpg | orion-07.mp3 | Narrator | Shalya laughs in scorn. “A crow once raced a swan across the sea — and |
| 96 | secret | plate-secret.jpg | orion-08.mp3 | Narrator | Karna rides on; he knows who Krishna and Arjuna are. He does not know  |
| 108 | secret | plate-secret.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
