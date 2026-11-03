# Logic review — 14-drona-fall — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-11-02 21:22 CST

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `orion` |
| `voice.voice_id` | `orion` — **PASS** |
| `voice.provider` | `grok-tts` |
| Named raga | `todi` — **PASS** |
| `totalSec` | 136 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | wide | plate-wide.jpg | orion-00.mp3 | Narrator | Dawn of the fifteenth day. Drona burns through the Pandava ranks — no  |
| 12 | counsel | plate-counsel.jpg | orion-01.mp3 | Narrator | Krishna counsels: armed, he cannot be beaten — but he will lay down hi |
| 24 | elephant | plate-elephant.jpg | orion-02.mp3 | Narrator | So Bhima slays a great war-elephant named Ashwatthama — a beast, not t |
| 36 | dharma | plate-dharma.jpg | orion-03.mp3 | Narrator | Drona doubts Bhima’s cry. He asks Yudhishthira, who has never lied — a |
| 48 | conch | plate-conch.jpg | orion-04.mp3 | Narrator | “Ashwatthama is dead,” he says aloud — and “the elephant” he mutters,  |
| 60 | wheel | plate-wheel.jpg | orion-05.mp3 | Narrator | At that half-truth, his chariot — which had always ridden four fingers |
| 72 | yoga | plate-yoga.jpg | orion-06.mp3 | Narrator | Drona lays down his weapons. He sits in yoga, and turns his mind inwar |
| 84 | prince | plate-prince.jpg | orion-07.mp3 | Narrator | Dhrishtadyumna — born from Drupada’s fire to end Drona — comes forth w |
| 96 | still | plate-still.jpg | orion-08.mp3 | Narrator | He strikes off the guru’s head — but Drona’s spirit had already risen  |
| 108 | grief | plate-grief.jpg | orion-09.mp3 | Narrator | Arjuna had cried, “Bring him alive!” Now he weeps — and rebukes the li |
| 120 | wide-gold | plate-wide-gold.jpg | orion-10.mp3 | Narrator | Thus Drona falls. Elsewhere on the field, his son hears it — and Ashwa |
| 132 | wide-gold | plate-wide-gold.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected orion
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
