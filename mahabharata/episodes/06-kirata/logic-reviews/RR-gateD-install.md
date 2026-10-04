# Logic review — 06-kirata — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-03 21:57 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `bhairav` — **PASS** |
| `totalSec` | 110 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | wide | plate-wide.jpg | orion-00.mp3 | Narrator | To win the weapons of heaven, Arjuna climbs alone into the high Himala |
| 12 | penance | plate-penance.jpg | orion-01.mp3 | Narrator | There he stands in fierce penance — still as stone, mind fixed on Maha |
| 24 | boar | plate-boar.jpg | orion-02.mp3 | Narrator | A terrible boar charges through the pines. Two arrows leave two bows a |
| 36 | hunter | plate-hunter.jpg | orion-03.mp3 | Narrator | A mountain hunter claims the kill. Arjuna will not yield the honor of  |
| 48 | duel | plate-duel.jpg | orion-04.mp3 | Narrator | Bow meets bow. The kirata matches Arjuna blow for blow — and the fores |
| 60 | equal | plate-equal.jpg | orion-05.mp3 | Narrator | Arjuna’s strength fails against an equal. He falls, astonished, at a h |
| 72 | reveal | plate-reveal.jpg | orion-06.mp3 | Narrator | Then the kirata shines with a thousand suns. It is Shiva, the Lord, sm |
| 84 | gift | plate-gift.jpg | orion-07.mp3 | Narrator | Pleased by courage and devotion, Mahadeva grants the Pashupatastra. |
| 96 | wide-gold | plate-wide-gold.jpg | orion-08.mp3 | Narrator | So the archer who saw only the eye is given the weapon that ends the w |
| 108 | wide-gold | plate-wide-gold.jpg | — | — |  |

## Strict checks

- [x] voice_id == canonical bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
