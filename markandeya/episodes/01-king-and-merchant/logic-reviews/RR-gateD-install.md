# Logic review — 01-king-and-merchant — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-11-03 12:36 CST

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `orion` |
| `voice.voice_id` | `orion` — **PASS** |
| `voice.provider` | `grok-tts` |
| Named raga | `puriyadhanashri` — **PASS** |
| `totalSec` | 114 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | tale | plate-tale.jpg | orion-00.mp3 | Narrator | Long ago, the sage Markandeya told a story of the Great Goddess, the D |
| 12 | king | plate-king.jpg | orion-01.mp3 | Narrator | Once, a good king named Suratha ruled the whole earth. He cared for hi |
| 24 | ride | plate-ride.jpg | orion-02.mp3 | Narrator | But enemies defeated him in battle, and at home his own ministers seiz |
| 36 | ashram | plate-ashram.jpg | orion-03.mp3 | Narrator | There he found the peaceful hermitage of the sage Medhas, where tigers |
| 48 | worry | plate-worry.jpg | orion-04.mp3 | Narrator | Yet even there the king could not rest. ‘Is my city safe? Is my great  |
| 60 | merchant | plate-merchant.jpg | orion-05.mp3 | Narrator | One day he met a sad merchant named Samadhi. ‘My own wife and sons wan |
| 72 | cling | plate-cling.jpg | orion-06.mp3 | Narrator | ‘Still I worry. Are they well? Are they happy?’ The king nodded. ‘My h |
| 84 | ask | plate-ask.jpg | orion-07.mp3 | Narrator | Together they went to the sage and bowed. ‘We know these thoughts brin |
| 96 | mahamaya | plate-mahamaya.jpg | orion-08.mp3 | Narrator | Medhas pointed to the birds feeding their young, though hungry themsel |
| 110 | mahamaya | plate-mahamaya.jpg | — | — |  |

## Strict checks

- [x] voice_id == expected orion
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**
