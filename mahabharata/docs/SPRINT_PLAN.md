# Mahābhārata sprint plan — improvements + new-ep pipeline

**Active board** for Studio-led work. Assigned **2026-09-16** by Chief after Avinash priority escalate.  
**Owners:** Studio = art / Imagine / Blender; Forge = player / hub / tools only if a ticket needs it; **Chief = one ticket per cycle**.  
**Refs:** [`WORKFLOW.md`](WORKFLOW.md) · [`STYLE.md`](../STYLE.md) · [`NEXT.md`](../NEXT.md) · [`GATE_C_TEMPLATE.md`](GATE_C_TEMPLATE.md) · [`PANEL_LOGIC.md`](PANEL_LOGIC.md)

---

## Track A — Improvements (existing show)

Priority order (from NEXT / WORKFLOW). **One episode per pass.** Do **not** start 04–08 in the same pass as 03.

| # | Work | Owner | Exit criteria |
|---|------|-------|---------------|
| **A1** | **Ep 03 rewrite** to Ep 09/10 bar | Studio (+ writer as needed) | Script + GATE D-dialogue PASS; cast/plate bible; GATE A/B PASS; Imagine keys 3:2 ≥1536×1024; GATE C PASS (visual vs Ep 10 vow/arrows per template); Orion + named raga; GATE D install; registry/publish path ready. **No** 04–08 started this pass. |
| **A2** | Continue **01–08 rewrite ladder** after 03 (next: 04, then 05…) | Studio | Same bar as A1, **one ep per pass**. Ep 01–02 already Done at 09/10 bar. |
| **A3** | **3D pilot**: one beat Imagine key panel → Blender camera/set → `renders/` proxy; document path; **keep GATE C** | Studio | One beat documented; GATE C–passed panel mapped; Blender proxy in `episodes/<id>/renders/`; path noted (TOOLING / episode README). Hybrid player not required this sprint. |
| **A4** | Tighten **Ep 10 Arjuna lock** (cream-white dhoti; no gold armor / peacock on arrows plate) | Studio | Curiosity polish — lock + affected plates re-GATE C; no drift vs Krishna/Bhishma bars. |
| **A5** | **Ep 14 remains paused** until 01–08 are one show with 09+ | Chief | No new Ep 14 ship tickets while ladder incomplete. WIP on disk stays WIP. |

---

## Track B — New episodes pipeline (factory)

Codify the 12-step WORKFLOW as a **repeatable pipeline for Ep 15+** (and any greenfield ep after the ladder).

| Step | Pipeline stage | Gate / artifact | Owner |
|------|----------------|-----------------|-------|
| 1 | Script | `episodes/<id>/script.js` beats | Studio / writer |
| 2 | GATE D dialogue | `dialogue_review.py … --report` PASS | Studio |
| 3 | Cast sheet + plate bible | from `episodes/_template/plate-bible.json` | Studio |
| 4 | GATE A/B | `logic_review.py … --report` PASS | Studio |
| 5 | Imagine key panels | scene master, cast locks, beat keys — STYLE / WORKFLOW bar; **API or SuperGrok consumer → import** (`CONSUMER_IMAGINE_IMPORT.md`) | Studio |
| 6 | GATE C | `stills_review.py` + visual report from `GATE_C_TEMPLATE.md` | Studio |
| 7 | 3D block | SketchUp optional → Blender under `_studio/blender/mahabharata/<id>/` or `episodes/<id>/blender/` | Studio |
| 8 | Map panels | Imagine panels → camera boards / planes / dressings | Studio |
| 9 | Blender render | proxies → `episodes/<id>/renders/` | Studio |
| 10 | Orion TTS + raga | `render_orion_voice.sh`; named Hindustani raga in script | Studio |
| 11 | GATE D install | speaker on panel, action visible, 3D cut matches beat | Studio |
| 12 | Registry / publish | live registry · commit · publish-pages | Studio (+ Forge if hub/player tools needed) |

**FAIL** at steps 2, 4, 6, or 11 **blocks** Imagine commit, 3D ship, and publish (same as WORKFLOW).

### Pipeline checklist doc (factory deliverable)

Produce a short checklist under `docs/` (or expand this file’s Track B table into a printable `PIPELINE_CHECKLIST.md`) so Ep 15+ runs the same sequence without re-deriving gates. Exit: every step has owner, command/path, and PASS artifact name.

**Forge** only if player/hub/tools must change for the factory (e.g. hybrid cut consuming `renders/`). Otherwise Studio owns the pipeline end-to-end; Chief still assigns **one** ticket per cycle.

---

## 2-week cadence (S/M tickets)

| Week | Focus | Suggested tickets |
|------|--------|-------------------|
| **Week 1** | Ep 03 rewrite **start** + pipeline checklist | **[M]** Ep 03: script → GATE D → cast/bible → GATE A/B → start Imagine keys (Studio). **[S]** Codify Track B checklist doc from WORKFLOW (Studio). |
| **Week 2** | Finish Ep 03 gates + 3D pilot beat | **[M]** Ep 03: finish Imagine → GATE C → Orion/raga → GATE D → registry path (Studio). **[S]** 3D pilot: one beat panel → Blender → `renders/` proxy + doc; keep GATE C (Studio). |

Cadence rule: Chief picks **≤1** in-flight ticket; prefer S; split M. Do not parallelize A1 with A2. A3 may follow Ep 03 GATE C or run as the Week-2 S after Ep 03 M lands. A4 is curiosity after A1–A3 pressure is clear. A5 is a hard hold.

---

## Definition of done (this planning ticket)

- [x] This file exists at `pixelloid/mahabharata/docs/SPRINT_PLAN.md`
- [x] `mahabharata/NEXT.md` **Now** points here as the active sprint board
- [x] `ai-projects/COMMAND.md` In flight / Next / priority stack updated for MB sprint

---

## Out of scope this sprint

- Starting Ep 04–08 rewrite in the same pass as Ep 03
- Shipping Ep 14
- Full 3D player / hybrid cut (Curiosity in NEXT — pilot beat only)
- Unrelated pixelloid (Chocolate Dance, kids-grok) unless Pulse flags breakage

## Studio refine (2026-09-16)

- Ep 03 stills+locks currently all 1280×720 → must full regen to 3:2 ≥1536×1024; never use Ep01 plate-wide-gold as Imagine ref
- Source gate ≥2 of BORI/Debroy, Gita Press, Ganguli per beat
- Style spine: Ep10 field-master; Krishna lock Ep09; new faces local 3:2 locks
- Ep01 consistency already shipped (`50316c7`); active A1 = Ep03
- Track B deliverable: [`PIPELINE_CHECKLIST.md`](PIPELINE_CHECKLIST.md)
- **Consumer Imagine import (tooling):** when team API credits are blocked, beat plates may ship via SuperGrok browser Imagine → `stills/_inbox/consumer-imagine/` → `tools/import_consumer_stills.py`. GATE C bar unchanged. See [`CONSUMER_IMAGINE_IMPORT.md`](CONSUMER_IMAGINE_IMPORT.md). Does not demote Ep03 ship priority — unlocks regen without waiting on API top-up.
