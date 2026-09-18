# Ep 13 logic pass — 2026-09-18 (morning CT)

**Episode:** `13-ghatotkacha` — *Ghatotkacha* (Drona · night of 14th · Vasavi Shakti)  
**Disk:** lab-mirror pixelloid (box)  
**Pass type:** LOGIC only (no SuperGrok / Imagine / GATE C remaster)  
**Time:** 2026-09-18 ~09:45 CT  

## What was broken

- GATE A/B **FAIL**: missing `source_block`; every plate lacked ≥2 source cites; `arjuna` missing Ep 09 series lock in `imagine_refs`.
- **Cause→effect inverted:** script had Duryodhana’s **plea before** Ghatotkacha’s **night storm**, so a new viewer could not see why Karna is forced to spend the Shakti.
- Sacrifice meaning soft: hush did not clearly say Ghatotkacha’s fall **bought Arjuna’s life** (Shakti was the one-use dart saved for Arjuna).

## What we fixed

- Added `source_block` + per-plate `sources` (≥2 of BORI/Debroy, Gita Press, Ganguli).
- Added Ep 09 `arjuna.jpg` to `imagine_refs`.
- **Reordered spoken beats** (plate **ids/files unchanged**):  
  `wide → storm → plea → counsel → dart → loose → fall → hush → wide-gold`  
  = night relief → unleash/storm → Kaurava plea → Krishna knows dart was for Arjuna → one-use Shakti → fall → Arjuna lives.
- Reordered `plate-bible.json` `plates[]` to match (GATE D forbids backward plate jumps).
- Tightened lines: Indra’s one-use dart; hush = “Ghatotkacha’s fall bought that life.”
- Cast-sheet notes aligned.
- `stills_status`: binaries untouched.
- **No plate id renames. No stills/JPEG binaries modified.** (Bible array order only.)

## Gate results

| Gate | Result |
|------|--------|
| **D (dialogue)** | **PASS** |
| **A/B (bible)** | **PASS** |
| **C (visual)** | **not re-run** — stills untouched this pass |

## Blockers

- Orion audio may lag rewritten / reordered lines until TTS re-render (out of scope).
- Forge / SuperGrok parked.
