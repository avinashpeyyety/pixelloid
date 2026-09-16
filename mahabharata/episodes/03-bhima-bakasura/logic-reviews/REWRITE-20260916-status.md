# Ep 03 rewrite status — 2026-09-16

**Episode:** `03-bhima-bakasura` — *Bhima and Bakasura* (Ādi · Vaka-vadha)  
**Disk:** MacBook Air `527ae34b-0262-4036-b3f7-857ee85d2009`  
**Bar:** Ep 09/10 (canvas 1536×1024 3:2, carved cartouche, heroic medium)  
**Time:** 2026-09-16 morning CT

## What landed this pass

| Artifact | Status |
|----------|--------|
| `plate-bible.json` | Upgraded to full 09/10 schema: `canvas`, `camera`, carved cartouche `frame`, `prompt_prefix`, `quality_bar_ref` → Ep10 `field-master`, `scene_lock_ref` → `ekachakra-master` (path reserved), `imagine_refs` (no wide-gold / no finished plates), `source_block` + per-plate sources (≥2 of BORI/Debroy, Gita Press, Ganguli), cast_present honesty, per-plate prompts for all 9 plates |
| `cast-sheet.json` | Clear tokens for `bhima`, `bakasura`, `kunti`, `brahmin_father`, `townsfolk` — comic mythology, no photoreal |
| `script.js` | Source-faithful feast beat tightened; named Hindustani **raga `malkauns`**; `voice.cache` plan → `ep03-09-10-bar` (**audio not re-rendered**) |
| Stills / locks binaries | **Untouched** (still 1280×720 archive) |

## Gate results

| Gate | Command | Result |
|------|---------|--------|
| **D (dialogue)** | `python3 tools/dialogue_review.py episodes/03-bhima-bakasura --report` | **PASS** |
| **A/B (bible)** | `python3 tools/logic_review.py episodes/03-bhima-bakasura/plate-bible.json --report` | **PASS** |
| **C (stills)** | `python3 tools/stills_review.py episodes/03-bhima-bakasura --require` | **FAIL (expected)** — all 12 JPEGs are 1280×720 16:9; missing local locks `kunti.jpg`, `brahmin_father.jpg`, `townsfolk.jpg`, `ekachakra-master.jpg` |

GATE C was **not** rewritten to PASS. 720p stills remain archive until Imagine is approved.

## Blockers

- **Imagine** blocked on Auto-review — do not call Imagine/TTS APIs this pass.
- Do **not** single-image-edit existing 720p files (inherits banner density).
- Do **not** attach Ep01 `plate-wide-gold.jpg` or this episode’s `plate-wide-gold.jpg` as Imagine refs.

## Next

1. After Imagine approval: regen `stills/_locks/ekachakra-master.jpg` at native 3:2 ≥1536×1024 from Ep10 field-master spine.  
2. Regen solo locks: `bhima`, `bakasura`, `kunti`, `brahmin_father`, `townsfolk` (replace 720p archive locks).  
3. Regen all 9 beat plates + poster from master + locks; prepend `prompt_prefix`.  
4. Re-run `stills_review.py --require` + write `RR-gateC-visual.md` vs Ep10 vow/arrows.  
5. Later: Orion re-render under cache `ep03-09-10-bar` + wire Malkauns bed (no TTS this pass).

## Notes

- Live player can keep existing `orion-*.mp3` until a dedicated voice pass.  
- No GitHub push / no publish-pages this pass.
