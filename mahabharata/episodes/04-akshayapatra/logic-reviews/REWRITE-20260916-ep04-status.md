# Ep 04 rewrite status — 2026-09-16

**Episode:** `04-akshayapatra` — *The Akshayapatra* (Vana · Durvāsā / Akṣayapātra)  
**Disk:** MacBook Air `527ae34b-0262-4036-b3f7-857ee85d2009`  
**Bar:** Ep 09/10 (canvas 1536×1024 3:2, carved cartouche, heroic medium)  
**Time:** 2026-09-16 evening CT

## What landed this pass

| Artifact | Status |
|----------|--------|
| `plate-bible.json` | Upgraded to full 09/10 schema: `canvas`, `camera`, carved cartouche `frame`, `prompt_prefix`, `quality_bar_ref` → Ep10 `field-master`, `scene_lock_ref` → `hermitage-master` (path reserved), `imagine_refs` (no Ep01 gold / no finished plates), `source_block` + per-plate sources (≥2 of BORI/Debroy, Gita Press, Ganguli), honest `cast_present`, per-plate prompts for all 9 plates |
| `cast-sheet.json` | Clear tokens for `draupadi`, `krishna`, `durvasa`, `yudhishthira`, `disciples` — comic mythology, no photoreal |
| `script.js` | Named Hindustani **raga `yaman`**; `voice.cache` plan → `ep04-09-10-bar` (**audio not re-rendered**) |
| `stills/_inbox/consumer-imagine/.gitkeep` | Created |
| Stills / locks binaries | **Untouched** (still 1280×720 archive; Krishna lock 912×1136) |

## Gate results

| Gate | Command | Result |
|------|---------|--------|
| **D (dialogue)** | `python3 tools/dialogue_review.py episodes/04-akshayapatra --report` | **PASS** |
| **A/B (bible)** | `python3 tools/logic_review.py episodes/04-akshayapatra/plate-bible.json --report` | **PASS** |
| **C (stills)** | `python3 tools/stills_review.py episodes/04-akshayapatra --require` | **FAIL (expected)** — all beat plates + poster are 1280×720 16:9; locks 720p / off-bar |

GATE C was **not** rewritten to PASS. 720p stills remain archive until SuperGrok / Imagine is approved.

## SuperGrok regen list (all current stills are 1280×720 unless noted)

### Scene master (create)
| Lock | Path | Notes |
|------|------|-------|
| hermitage-master | `stills/_locks/hermitage-master.jpg` | **missing** — seed from Ep10 `field-master`; Vana exile hermitage locus; native 3:2 ≥1536×1024 |

### Solo / prop locks (replace archive)
| Lock | Path | Current | Notes |
|------|------|---------|-------|
| draupadi | `stills/_locks/draupadi.jpg` | 1280×720 | Seed from Ep02 draupadi lock as secondary only; first ref = hermitage-master or field-master |
| durvasa | `stills/_locks/durvasa.jpg` | 1280×720 | Fierce comic ascetic — not Drona, not photoreal horror |
| krishna | `stills/_locks/krishna.jpg` | 912×1136 | **Must** match Ep09 `stills/_locks/krishna.jpg` series face |
| yudhishthira | `stills/_locks/yudhishthira.jpg` | **missing** | Cream exile dhoti, light mustache, topknot |
| disciples | `stills/_locks/disciples.jpg` | **missing** | Background saffron ascetics, equal scale |
| akshayapatra (prop) | `stills/_locks/akshayapatra.jpg` | 1280×720 | Bowl lock: wide golden bowl, two curved handles, pedestal, lotus engraving — not in cast imagine_refs |

### Beat plates + poster (replace archive)
| Plate | File | Current |
|-------|------|---------|
| wide | `stills/plate-wide.jpg` | 1280×720 |
| vessel | `stills/plate-vessel.jpg` | 1280×720 |
| empty | `stills/plate-empty.jpg` | 1280×720 |
| arrival | `stills/plate-arrival.jpg` | 1280×720 |
| prayer | `stills/plate-prayer.jpg` | 1280×720 |
| krishna | `stills/plate-krishna.jpg` | 1280×720 |
| grain | `stills/plate-grain.jpg` | 1280×720 |
| satisfied | `stills/plate-satisfied.jpg` | 1280×720 |
| wide-gold | `stills/plate-wide-gold.jpg` | 1280×720 |
| poster | `stills/poster.jpg` | 1280×720 |

Drop SuperGrok outputs into `stills/_inbox/consumer-imagine/` then `python3 tools/import_consumer_stills.py …`.

## Blockers

- **Imagine API** team_blocked — do not call Imagine/TTS APIs this pass.
- Do **not** single-image-edit existing 720p files (inherits banner density).
- Do **not** attach Ep01 `plate-wide-gold.jpg` or this episode’s `plate-wide-gold.jpg` as Imagine refs.

## Next

1. After SuperGrok approval: regen `hermitage-master.jpg` at native 3:2 ≥1536×1024 from Ep10 field-master spine.  
2. Regen solo locks: draupadi, durvasa, krishna (←Ep09), yudhishthira, disciples, akshayapatra.  
3. Regen all 9 beat plates + poster from master + locks; prepend `prompt_prefix`.  
4. Re-run `stills_review.py --require` + write `RR-gateC-visual.md` vs Ep10 vow/arrows.  
5. Later: Orion re-render under cache `ep04-09-10-bar` + wire Yaman bed (no TTS this pass).

## Notes

- Live player can keep existing `orion-*.mp3` until a dedicated voice pass.  
- No GitHub push / no publish-pages this pass.
