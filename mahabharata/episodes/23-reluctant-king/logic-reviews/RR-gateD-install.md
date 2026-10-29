# Logic review — 23-reluctant-king — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-29 12:37 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `ahirbhairav` — **PASS** |
| `totalSec` | 112 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | mourn | plate-mourn.jpg | orion-00.mp3 | Narrator | For a month the Pandavas stay by the Ganga, outside the city. Yudhisht |
| 12 | renounce | plate-renounce.jpg | orion-01.mp3 | Narrator | 'Our kinsmen are gone,' Yudhishthira tells Arjuna. 'I want no kingdom. |
| 24 | brothers | plate-brothers.jpg | orion-02.mp3 | Narrator | Arjuna and Bhima argue back. 'Then why did we fight at all?' cries Bhi |
| 36 | plea | plate-plea.jpg | orion-03.mp3 | Narrator | Then Draupadi speaks. 'Your brothers are crying out to you. Protect yo |
| 48 | counsel | plate-counsel.jpg | orion-04.mp3 | Narrator | Vyasa counsels him. 'The forest is not your path. A king's dharma is t |
| 60 | comfort | plate-comfort.jpg | orion-05.mp3 | Narrator | Krishna takes the king's hand and tells him of great kings of old, who |
| 72 | crown | plate-crown.jpg | orion-06.mp3 | Narrator | In Hastinapura, Yudhishthira is crowned at last. Draupadi sits beside  |
| 84 | meditate | plate-meditate.jpg | orion-07.mp3 | Narrator | One morning, the king finds Krishna sitting perfectly still. 'Bhishma  |
| 96 | bedside | plate-bedside.jpg | orion-08.mp3 | Narrator | So they go to Kurukshetra, where Bhishma lies on his bed of arrows. 'T |
| 108 | bedside | plate-bedside.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
