# Ep 06 rewrite status — 2026-09-17 (afternoon CT)

**Episode:** `06-kirata` — *The Kirata* (Vana · Kirātārjunīya)  
**Disk:** lab-mirror pixelloid (box)  
**Bar:** Ep 09/10 (canvas 1536×1024 3:2, carved cartouche, heroic medium)  
**Time:** 2026-09-17 ~13:50 CT  
**Pattern:** Ep 05 scaffold `30f07d5` / SuperGrok consumer path. No Imagine API this pass.

## What landed this pass

| Artifact | Status |
|----------|--------|
| `plate-bible.json` | Upgraded to full 09/10 schema: `canvas`, `camera`, carved cartouche `frame`, `prompt_prefix`, `quality_bar_ref` → Ep10 `field-master`, `scene_lock_ref` → `mountain-master` (path reserved), `imagine_refs` (Ep09 Arjuna + local locks; **no** wide-gold / finished plates), `source_block` + per-plate sources (≥2 of BORI/Debroy, Gita Press, Ganguli), cast tokens, per-plate prompts for all 9 plates |
| `cast-sheet.json` | Clear tokens for `arjuna`, `kirata`, `shiva`, `boar` — comic mythology; Arjuna no peacock / no gold armor |
| `script.js` | Named Hindustani **raga `bhairav`**; `voice.cache` plan → `ep06-09-10-bar` (**audio not re-rendered**); beat texts kept source-faithful |
| `stills/_inbox/consumer-imagine/.gitkeep` | Created for SuperGrok consumer drop |
| Stills / locks binaries | **Untouched** (still 1280×720 archive) |

## Gate results

| Gate | Command | Result |
|------|---------|--------|
| **D (dialogue)** | `python3 tools/dialogue_review.py episodes/06-kirata --report` | **PASS** |
| **A/B (bible)** | `python3 tools/logic_review.py episodes/06-kirata/plate-bible.json --report` | **PASS** |
| **C (stills)** | `python3 tools/stills_review.py episodes/06-kirata --require` | **FAIL (expected)** — 1280×720 archive; missing `mountain-master.jpg` / `boar.jpg` |

GATE C was **not** rewritten to PASS. 720p stills remain archive until SuperGrok / Imagine.

## SuperGrok drop list (all stills currently 720p)

Drop downloads into `stills/_inbox/consumer-imagine/` then:
`python3 tools/import_consumer_stills.py 06-kirata --force` (or with `--map`).  
Bar: **≥1536×1024 · ~3:2 · carved cartouche**. Attach Ep10 `field-master` + locks below. **Never** Ep01 `plate-wide-gold`.

### Locks (regen first — scene master + solos)

| File | Note |
|------|------|
| `_locks/mountain-master.jpg` | **NEW** scene master — Himalayan pines + blue peaks, cream-saffron + cool mist, cartouche, empty of finished beat staging |
| `_locks/arjuna.jpg` | Replace 1280×720 — Ep 09 face family; cream ascetic dhoti; topknot; thin mustache; **no peacock / no gold armor** |
| `_locks/kirata.jpg` | Replace 1280×720 — leaf-hide hunter, fierce comic eyes, bow; not yet luminous Shiva |
| `_locks/shiva.jpg` | Replace 1280×720 — jata + crescent + trident + cream-gold aura; blessing smile, not horror |
| `_locks/boar.jpg` | **NEW** — stylized wild boar, fierce comic mythology, not gore |

### Plates + poster

| File | Beat |
|------|------|
| `plate-wide.jpg` | Lone Arjuna climbs Himalaya |
| `plate-penance.jpg` | Fierce tapas on ledge |
| `plate-boar.jpg` | Boar charge; two arrows |
| `plate-hunter.jpg` | Honor dispute over kill |
| `plate-duel.jpg` | Bow duel matched strength |
| `plate-equal.jpg` | Arjuna kneels astonished |
| `plate-reveal.jpg` | Shiva luminous reveal |
| `plate-gift.jpg` | Pashupatastra gift |
| `plate-wide-gold.jpg` | Closing blessing — **no plaque text** |
| `poster.jpg` | Hub poster — prefer reveal or gift hero frame |

## Blockers

- **No Imagine API** this pass (box-first scaffold only).
- Do **not** single-image-edit existing 720p files.
- Do **not** attach Ep01 `plate-wide-gold.jpg` or this episode’s `plate-wide-gold.jpg` as Imagine refs.

## Next

1. SuperGrok: regen `mountain-master` + solo locks at native 3:2 ≥1536×1024.  
2. Regen all 9 beat plates + poster; drop in `_inbox/consumer-imagine/`; import.  
3. Re-run `stills_review.py --require` + write `RR-gateC-visual.md`.  
4. Later: Orion re-render under cache `ep06-09-10-bar` + wire Bhairav bed.
