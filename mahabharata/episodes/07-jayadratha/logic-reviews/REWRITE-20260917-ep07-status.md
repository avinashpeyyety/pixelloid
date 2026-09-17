# Ep 07 rewrite status — 2026-09-17 (afternoon CT)

**Episode:** `07-jayadratha` — *Jayadratha* (Vana · Draupadi abduction · pursuit · hard mercy)  
**Disk:** lab-mirror pixelloid (box)  
**Bar:** Ep 09/10 (canvas 1536×1024 3:2, carved cartouche, heroic medium)  
**Time:** 2026-09-17 ~16:22 CT  
**Pattern:** Ep 06 scaffold `000ec8f` / SuperGrok consumer path. No Imagine API this pass.

## What landed this pass

| Artifact | Status |
|----------|--------|
| `plate-bible.json` | Upgraded to full 09/10 schema: `canvas`, `camera`, carved cartouche `frame`, `prompt_prefix`, `quality_bar_ref` → Ep10 `field-master`, `scene_lock_ref` → `hermitage-master` (path reserved), `imagine_refs` (Ep09 Arjuna + local locks; **no** wide-gold / finished plates), `source_block` + per-plate sources (≥2 of BORI/Debroy, Gita Press, Ganguli), cast tokens, per-plate prompts for all 9 plates |
| `cast-sheet.json` | Clear tokens for `draupadi`, `jayadratha`, `bhima`, `arjuna`, `yudhishthira` — comic mythology; Draupadi dignity (no sexualization); Arjuna no peacock / no gold armor |
| `script.js` | Tightened seize/catch beats; named Hindustani **raga `bhairavi`**; `voice.cache` plan → `ep07-09-10-bar` (**audio not re-rendered**) |
| `stills/_inbox/consumer-imagine/.gitkeep` | Created for SuperGrok consumer drop |
| Stills / locks binaries | **Untouched** (still 1280×720 archive) |

## Gate results

| Gate | Command | Result |
|------|---------|--------|
| **D (dialogue)** | `python3 tools/dialogue_review.py episodes/07-jayadratha --report` | **PASS** |
| **A/B (bible)** | `python3 tools/logic_review.py episodes/07-jayadratha/plate-bible.json --report` | **PASS** |
| **C (stills)** | `python3 tools/stills_review.py episodes/07-jayadratha --require` | **FAIL (expected)** — 1280×720 archive; missing `hermitage-master.jpg` / `bhima.jpg` / `arjuna.jpg` / `yudhishthira.jpg` |

GATE C was **not** rewritten to PASS. 720p stills remain archive until SuperGrok / Imagine.

## SuperGrok drop list (all stills currently 720p)

Drop downloads into `stills/_inbox/consumer-imagine/` then:
`python3 tools/import_consumer_stills.py 07-jayadratha --force` (or with `--map`).  
Bar: **≥1536×1024 · ~3:2 · carved cartouche**. Attach Ep10 `field-master` + locks below. **Never** Ep01 `plate-wide-gold`.

### Locks (regen first — scene master + solos)

| File | Note |
|------|------|
| `_locks/hermitage-master.jpg` | **NEW** scene master — forest hermitage, thatch + peepal, cream-saffron-gold hour, cartouche, empty of finished beat staging |
| `_locks/draupadi.jpg` | Replace 1280×720 — deep red sari gold border, bindi, resolute dignity; **never sexualized** |
| `_locks/jayadratha.jpg` | Replace 1280×720 — Sindhu king, dark mustache, crown/turban, jewel-tone silks; proud then fearful |
| `_locks/bhima.jpg` | **NEW** — saffron-yellow dhoti, thick mustache, topknot, largest Pandava |
| `_locks/arjuna.jpg` | **NEW** local (also ref Ep09 `episodes/09-gita/stills/_locks/arjuna.jpg`) — dark mustache, topknot, cream-white exile dhoti, no peacock |
| `_locks/yudhishthira.jpg` | **NEW** — cream exile dhoti, light mustache, simple topknot, composed eldest |

### Plates + poster

| File | Beat |
|------|------|
| `plate-wide.jpg` | Draupadi alone at hermitage |
| `plate-alone.jpg` | Jayadratha sights Draupadi |
| `plate-approach.jpg` | Soft words; queenly dignity |
| `plate-seize.jpg` | Tasteful abduction onto chariot |
| `plate-cry.jpg` | Brothers turn from the hunt |
| `plate-chase.jpg` | Arjuna + Bhima chase on forest road |
| `plate-catch.jpg` | Overtake; Bhima seizes; Draupadi free |
| `plate-mercy.jpg` | Yudhishthira’s hard mercy |
| `plate-wide-gold.jpg` | Quiet reunion — **no plaque text** |
| `poster.jpg` | Hub poster — prefer catch or mercy hero frame |

## Blockers

- **No Imagine API** this pass (box-first scaffold only).
- Do **not** single-image-edit existing 720p files.
- Do **not** attach Ep01 `plate-wide-gold.jpg` or this episode’s `plate-wide-gold.jpg` as Imagine refs.

## Next

1. SuperGrok: regen `hermitage-master` + solo locks at native 3:2 ≥1536×1024.  
2. Regen all 9 beat plates + poster; drop in `_inbox/consumer-imagine/`; import.  
3. Re-run `stills_review.py --require` + write `RR-gateC-visual.md`.  
4. Later: Orion re-render under cache `ep07-09-10-bar` + wire Bhairavi bed.
