# Logic review — 19-mace-duel — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-07 22:21 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `bageshri` — **PASS** |
| `totalSec` | 112 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | shore | plate-shore.jpg | orion-00.mp3 | Narrator | Hunters lead the Pandavas to a lake where Duryodhana hides beneath the |
| 12 | rise | plate-rise.jpg | orion-01.mp3 | Narrator | Duryodhana rises, mace in hand. Yudhishthira makes an offer: “Fight an |
| 24 | warn | plate-warn.jpg | orion-02.mp3 | Narrator | Krishna is alarmed at the rash offer: with the mace, Duryodhana has no |
| 36 | balarama | plate-balarama.jpg | orion-03.mp3 | Narrator | Then Balarama arrives from his pilgrimage, teacher of both men. He lea |
| 48 | duel | plate-duel.jpg | orion-04.mp3 | Narrator | Bhima and Duryodhana circle and clash like two mountains. Bhima is the |
| 60 | signal | plate-signal.jpg | orion-05.mp3 | Narrator | Krishna tells Arjuna: “Fairly, Bhima cannot win. Let him keep his vow. |
| 72 | strike | plate-strike.jpg | orion-06.mp3 | Narrator | Duryodhana leaps high. Bhima’s mace sweeps low and breaks his thighs,  |
| 84 | wrath | plate-wrath.jpg | orion-07.mp3 | Narrator | Balarama raises his plough in fury: a blow below the navel breaks the  |
| 96 | vow | plate-vow.jpg | orion-08.mp3 | Narrator | Night falls. Duryodhana lies by the lake, unable to rise. Ashwatthama  |
| 108 | vow | plate-vow.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
