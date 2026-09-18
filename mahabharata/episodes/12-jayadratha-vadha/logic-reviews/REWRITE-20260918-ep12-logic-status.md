# Ep 12 logic pass — 2026-09-18 (morning CT)

**Episode:** `12-jayadratha-vadha` — *Jayadratha Falls* (Drona · 14th day · vow · false dusk)  
**Disk:** lab-mirror pixelloid (box)  
**Pass type:** LOGIC only (no SuperGrok / Imagine / GATE C remaster)  
**Time:** 2026-09-18 ~09:45 CT  

## What was broken

- GATE A/B **FAIL**: missing `source_block`; every plate lacked ≥2 of BORI/Debroy, Gita Press, Ganguli cites; named face `arjuna` missing Ep 09 series lock in `imagine_refs`.
- Narrative soft spots for a new viewer: vow stakes (“or I do”) vague; false dusk did not clearly cause Jayadratha to step out thinking sunset had passed; reveal/veil cause→effect slightly soft.

## What we fixed

- Added episode `source_block` + per-plate `sources` (≥2 of BORI/Debroy, Gita Press, Ganguli).
- Added `episodes/09-gita/stills/_locks/arjuna.jpg` to `imagine_refs` (kept local locks; no finished plate refs).
- Tightened script + bible `beat_text` / `must_show` / prompts: **vow → wall → false dusk → kill**.
  - Vow: kill before sunset **or enter the fire**.
  - Veil: Krishna veils sun → Jayadratha steps out **sure the day is done**.
  - Reveal: veil lifts → sun still stands → exposed → shaft → kept word at true dusk.
- Cast-sheet notes aligned to cause→effect.
- `stills_status`: binaries untouched; Imagine parked.
- **No plate id renames. No stills/JPEG binaries modified.**

## Gate results

| Gate | Result |
|------|--------|
| **D (dialogue)** | **PASS** |
| **A/B (bible)** | **PASS** |
| **C (visual)** | **not re-run** — stills untouched this pass |

## Blockers

- Orion audio may lag rewritten script lines until TTS re-render (out of scope).
- Forge / SuperGrok parked.
