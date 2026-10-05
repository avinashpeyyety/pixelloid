# Logic review — 15-narayanastra — GATE D (install)

Status: **PASS**
Reviewer: install_review.py (box)
Time: 2026-10-05 12:42 CDT

## Install checks

| Check | Result |
|-------|--------|
| Canonical narrator (`config/narrator.json`) | `bm_george` |
| `voice.voice_id` | `bm_george` — **PASS** |
| `voice.provider` | `local-kokoro` |
| Named raga | `shree` — **PASS** |
| `totalSec` | 112 |
| Beat plate files on disk | **PASS** |
| Spoken-beat audio on disk | **PASS** |

## Beat → plate → audio map

| t | plate | still | audio | who | text |
|---|-------|-------|-------|-----|------|
| 0 | wide | plate-wide.jpg | orion-00.mp3 | Narrator | Afternoon of the fifteenth day. Ashwatthama, Drona’s son, hears how hi |
| 12 | invoke | plate-invoke.jpg | orion-01.mp3 | Narrator | He swears vengeance and calls up the Narayana weapon — once Narayana’s |
| 24 | storm | plate-storm.jpg | orion-02.mp3 | Narrator | Arrows, discs and maces of fire fill the sky. The harder anyone fights |
| 36 | counsel | plate-counsel.jpg | orion-03.mp3 | Krishna | Lay down your weapons! Step down from your chariots! This weapon spare |
| 48 | surrender | plate-surrender.jpg | orion-04.mp3 | Narrator | Yudhishthira sets his bow on the earth. Arjuna vows that Gandiva will  |
| 60 | bhima | plate-bhima.jpg | orion-05.mp3 | Narrator | Only Bhima refuses. “I will answer it with my mace!” He charges — and  |
| 72 | pull | plate-pull.jpg | orion-06.mp3 | Narrator | Unarmed, Krishna and Arjuna run into the flames and pull Bhima down fr |
| 84 | calm | plate-calm.jpg | orion-07.mp3 | Narrator | Disarmed and on the earth, Bhima is spared. The Narayana weapon fades, |
| 96 | once | plate-once.jpg | orion-08.mp3 | Narrator | Duryodhana begs for it again. “It cannot be called twice,” Ashwatthama |
| 108 | once | plate-once.jpg | — | — |  |

## Strict checks

- [x] voice_id == canonical bm_george
- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Named Hindustani raga in episode module

**GATE D install: PASS**

## Manual addenda (Chief, 2026-10-05)

- **Raga preset resolves:** `music.raga: "shree"` → `js/main.js` `RAGA_PRESETS.shree` (A2 mandra; degrees S r G M P d N; andolan on komal Re; `tabla: "none"`; Shree pakad phrases). The player no longer falls back to `default` flute+tabla. `install_review.py` only checks that a raga is named, so this was checked by hand.
- **Speaker / action on panel:** Krishna speaks on `counsel` (Krishna on the plate). Narrator beats show the named action: invoke = weapon called, surrender = bow set down, pull = mace taken, calm = Bhima disarmed (v2 continuity fix).
- **3D cut:** steps 7–9 (Blender block/map/render) were not done for Ep 15. Ep 08 and Ep 14 shipped the same way, as plate-only cinematic episodes.
