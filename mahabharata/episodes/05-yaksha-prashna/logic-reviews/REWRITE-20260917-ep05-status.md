# Ep 05 rewrite status — 2026-09-17 (morning CT)

**Episode:** `05-yaksha-prashna` — *Yaksha Prashna* (Vana · Yakṣa-praśna)  
**Disk:** lab-mirror pixelloid (box)  
**Bar:** Ep 09/10 (canvas 1536×1024 3:2, carved cartouche, heroic medium)  
**Time:** 2026-09-17 ~10:45 CT  
**Pattern:** Ep 03 scaffold `5873fd8` / Ep 04 SuperGrok consumer path (inbox + drop list). No Imagine API this pass.

## What landed this pass

| Artifact | Status |
|----------|--------|
| `plate-bible.json` | Upgraded to full 09/10 schema: `canvas`, `camera`, carved cartouche `frame`, `prompt_prefix`, `quality_bar_ref` → Ep10 `field-master`, `scene_lock_ref` → `lake-master` (path reserved), `imagine_refs` (Ep09 Arjuna series lock + local locks; **no** wide-gold / finished plates), `source_block` + per-plate sources (≥2 of BORI/Debroy, Gita Press, Ganguli), cast_present honesty, per-plate prompts for all 9 plates |
| `cast-sheet.json` | Clear tokens for `yudhishthira`, `bhima`, `arjuna`, `nakula_sahadeva`, `yaksha` — comic mythology, no photoreal |
| `script.js` | Source-faithful tighten (thirst / fall / answers mother-father / Nakula-first rise); named Hindustani **raga `bhairav`**; `voice.cache` plan → `ep05-09-10-bar` (**audio not re-rendered**) |
| `stills/_inbox/consumer-imagine/.gitkeep` | Created for SuperGrok consumer drop |
| Stills / locks binaries | **Untouched** (still 1280×720 archive; yudhishthira lock 912×1136 wrong aspect) |

## Gate results

| Gate | Command | Result |
|------|---------|--------|
| **D (dialogue)** | `python3 tools/dialogue_review.py episodes/05-yaksha-prashna --report` | **PASS** |
| **A/B (bible)** | `python3 tools/logic_review.py episodes/05-yaksha-prashna/plate-bible.json --report` | **PASS** |
| **C (stills)** | `python3 tools/stills_review.py episodes/05-yaksha-prashna --require` | **FAIL (expected)** — all beat plates + poster + yaksha lock are 1280×720 16:9; yudhishthira lock 912×1136; missing local locks `bhima.jpg`, `arjuna.jpg`, `nakula_sahadeva.jpg`, `lake-master.jpg` |

GATE C was **not** rewritten to PASS. 720p stills remain archive until SuperGrok / Imagine.

## SuperGrok drop list (all stills currently 720p / wrong aspect)

Drop downloads into `stills/_inbox/consumer-imagine/` then:
`python3 tools/import_consumer_stills.py 05-yaksha-prashna --force` (or with `--map`).  
Bar: **≥1536×1024 · ~3:2 · carved cartouche**. Attach Ep10 `field-master` + locks below. **Never** Ep01 `plate-wide-gold`.

### Locks (regen first — scene master + solos)

| File | Note |
|------|------|
| `_locks/lake-master.jpg` | **NEW** scene master — forest lake, cream-saffron + cool mist, cartouche, empty of finished beat staging |
| `_locks/yudhishthira.jpg` | Replace 912×1136 archive — cream exile dhoti, light mustache, simple topknot, serene |
| `_locks/yaksha.jpg` | Replace 1280×720 — luminous pale-gold/mist-white spirit, stern calm, not gore |
| `_locks/bhima.jpg` | **NEW** — saffron-yellow dhoti, thick mustache, topknot, largest Pandava |
| `_locks/arjuna.jpg` | **NEW** local (also ref Ep09 `episodes/09-gita/stills/_locks/arjuna.jpg`) — dark mustache, topknot, cream-white exile dhoti, no peacock |
| `_locks/nakula_sahadeva.jpg` | **NEW** — twin brothers, cream exile dress, gentle, equal scale |

### Plates + poster

| File | Beat |
|------|------|
| `plate-wide.jpg` | Five weary Pandavas on forest path |
| `plate-thirst.jpg` | Yudhishthira sends brothers for water |
| `plate-lake.jpg` | Still glass lake; Arjuna approaches |
| `plate-fall.jpg` | Brothers sleep-still on shore (no gore) |
| `plate-yudhi.jpg` | Yudhishthira composed grief; will not drink |
| `plate-yaksha.jpg` | Luminous yaksha on water; Yudhishthira folded hands |
| `plate-answers.jpg` | Dharma dialogue two-shot |
| `plate-rise.jpg` | Brothers rise; Nakula-first / Dharma reveal light |
| `plate-wide-gold.jpg` | Peaceful close — five brothers at lake (**not** Ep01 gold plaque) |
| `poster.jpg` | Hub poster — prefer yaksha or answers hero frame |

### Short note for operator

All current JPEGs are **below bar** (720p banners or wrong-aspect portrait lock). Do **not** single-image-edit them. Regen native 3:2 from `prompt_prefix` + plate prompts with lake-master + cast locks; import via consumer inbox; then `stills_review.py --require` + `RR-gateC-visual.md` vs Ep10 vow/arrows.

## Blockers

- **No Imagine API** this pass (box-first scaffold only).
- Do **not** single-image-edit existing 720p files (inherits banner density).
- Do **not** attach Ep01 `plate-wide-gold.jpg` or this episode’s `plate-wide-gold.jpg` as Imagine refs.

## Next

1. SuperGrok: regen `lake-master` + solo locks at native 3:2 ≥1536×1024.  
2. Regen all 9 beat plates + poster; drop in `_inbox/consumer-imagine/`; import.  
3. Re-run `stills_review.py --require` + write `RR-gateC-visual.md`.  
4. Later: Orion re-render under cache `ep05-09-10-bar` + wire Bhairav bed (no TTS this pass).

## Notes

- Live player can keep existing `orion-*.mp3` until a dedicated voice pass.  
- Push OK for docs/scaffold if working tree clean of stills binaries.
