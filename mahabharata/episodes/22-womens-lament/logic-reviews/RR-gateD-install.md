# Logic review — 22-womens-lament — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-19 12:41 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `jogiya` — **PASS** |
| `totalSec` | 112 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | arrive | plate-arrive.jpg | orion-00.mp3 | Narrator | From Hastinapura the blind king Dhritarashtra comes to the field, with |
| 12 | forgive | plate-forgive.jpg | orion-01.mp3 | Narrator | Gandhari's grief turns to anger. Vyasa reminds her: 'Where dharma is,  |
| 24 | mothers | plate-mothers.jpg | orion-02.mp3 | Narrator | Kunti weeps over her sons, then lifts up Draupadi, who has lost all he |
| 36 | sight | plate-sight.jpg | orion-03.mp3 | Narrator | By Vyasa's boon, Gandhari sees the whole field through her blindfold,  |
| 48 | curse | plate-curse.jpg | orion-04.mp3 | Narrator | Then her grief turns on Krishna. 'You could have stopped this war. In  |
| 60 | accept | plate-accept.jpg | orion-05.mp3 | Narrator | Krishna accepts it with a faint smile. 'None but I could end my clan,' |
| 72 | rites | plate-rites.jpg | orion-06.mp3 | Narrator | At Dhritarashtra's word, Yudhishthira orders last rites for all the fa |
| 84 | reveal | plate-reveal.jpg | orion-07.mp3 | Narrator | At the Ganga, the women offer water to their dead. Then Kunti weeps: ' |
| 96 | offering | plate-offering.jpg | orion-08.mp3 | Narrator | Yudhishthira grieves for the brother he never knew. Standing in the Ga |
| 108 | offering | plate-offering.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
