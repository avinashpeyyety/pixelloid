# Ep 09 rewrite status — 2026-09-18 (morning CT)

**Episode:** `09-gita` — *The Bhagavad Gita* (Bhishma · Kurukshetra opens · teaching · Vishvarupa · resolve)  
**Disk:** lab-mirror pixelloid (box)  
**Bar:** Ep 09/10 (canvas 1536×1024 3:2, carved cartouche, heroic medium)  
**Time:** 2026-09-18 ~09:35 CT  
**Pattern:** Ep 08 scaffold / SuperGrok consumer path. No Imagine API this pass. **Stills already at bar — no regen.**

## What landed this pass

| Artifact | Status |
|----------|--------|
| `plate-bible.json` | Upgraded to full 09/10 schema: `canvas`, `camera`, carved cartouche `frame`, `prompt_prefix`, `quality_bar_ref` → Ep10 `field-master`, `scene_lock_ref` → `chariot-master`, `imagine_refs` (Ep10 field-master + local locks; **no** wide-gold / finished plates as style refs), `source_block` + per-plate sources (≥2 of BORI/Debroy, Gita Press, Ganguli), cast tokens, per-plate prompts for all 9 plates, `stills_status` |
| `cast-sheet.json` | Clear tokens for `krishna`, `arjuna`, `armies`, `chariot` — comic mythology; Arjuna gold crown lock; Krishna pitambar charioteer; Vishvarupa tasteful not horror |
| `script.js` | Named Hindustani **raga `bhairav`**; `voice.cache` plan → `ep09-09-10-bar` (**audio not re-rendered**); end → Ep 10 |
| `stills/_inbox/consumer-imagine/.gitkeep` (+ `_locks/`) | Created for SuperGrok consumer drop (ready if optional eye-pass regen ever needed) |
| Stills / locks binaries | **Untouched** — already **1536×1024** (historic quality-bar episode); GATE C PASS |

## Gate results

| Gate | Command | Result |
|------|---------|--------|
| **D (dialogue)** | `python3 tools/dialogue_review.py episodes/09-gita --report` | **PASS** |
| **A/B (bible)** | `python3 tools/logic_review.py episodes/09-gita/plate-bible.json --report` | **PASS** (after source_block + per-plate sources) |
| **C (stills)** | `python3 tools/stills_review.py episodes/09-gita --require` | **PASS** — all 13 JPEGs ≥1536×1024 3:2 (not 720p archive) |

GATE C was **not** forced to FAIL. Dims already meet the remaster bar; Chief may **skip** SuperGrok regen.

## SuperGrok drop list — **SKIP ALL** (already at bar)

Inbox (if ever needed): `episodes/09-gita/stills/_inbox/consumer-imagine/`  
Relative to `mahabharata/`: `episodes/09-gita/stills/_inbox/consumer-imagine/`

Import (only if optional regen later):
`python3 tools/import_consumer_stills.py 09-gita --force` (or with `--map`).  
Bar: **≥1536×1024 · ~3:2 · carved cartouche**. Attach Ep10 `field-master` + locks below. **Never** Ep01 `plate-wide-gold`.

### Locks — **Chief can SKIP** (already 1536×1024)

| File | Dim | Note |
|------|-----|------|
| `_locks/chariot-master.jpg` | 1536×1024 | Scene master — **SKIP** |
| `_locks/arjuna.jpg` | 1536×1024 | Solo lock — **SKIP** |
| `_locks/krishna.jpg` | 1536×1024 | Solo lock — **SKIP** |

### Plates + poster — **Chief can SKIP** (already 1536×1024)

| File | Dim | Beat |
|------|-----|------|
| `plate-wide.jpg` | 1536×1024 | **SKIP** — armies at Kurukshetra dawn |
| `plate-field.jpg` | 1536×1024 | **SKIP** — chariot between armies |
| `plate-despair.jpg` | 1536×1024 | **SKIP** — Gandiva slips |
| `plate-counsel.jpg` | 1536×1024 | **SKIP** — Krishna begins to speak |
| `plate-dharma.jpg` | 1536×1024 | **SKIP** — soul / duty teaching |
| `plate-form.jpg` | 1536×1024 | **SKIP** — tasteful Vishvarupa |
| `plate-resolve.jpg` | 1536×1024 | **SKIP** — bow lifted again |
| `plate-conch.jpg` | 1536×1024 | **SKIP** — Panchajanya |
| `plate-wide-gold.jpg` | 1536×1024 | **SKIP** — closing light — no plaque text |
| `poster.jpg` | 1536×1024 | **SKIP** — hub poster |

### Needs regen (720p / missing)

**None.** No locks or plates are 720p or missing.

## Blockers

- **No Imagine API** this pass (box-first scaffold only).
- Do **not** single-image-edit existing stills unless an eye-check finds cast/cartouche drift.
- Do **not** attach Ep01 `plate-wide-gold.jpg` or this episode’s `plate-wide-gold.jpg` as Imagine refs.
- Optional later: Orion re-render under cache `ep09-09-10-bar` + wire Bhairav bed (audio untouched this pass).

## Next

1. Chief: confirm skip — no SuperGrok drop required for Ep09 stills.  
2. If eye-check finds drift: regen only the drifted lock/plate into `_inbox/consumer-imagine/`; import; re-run GATE C.  
3. Do **not** ship Ep09 remaster as a stills ship this pass — scaffold + READY drop list only (list = all skip).  
4. Continue remaster queue to next episode that still has 720p archives.
