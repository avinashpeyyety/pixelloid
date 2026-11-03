# Ship record — Ep 24 *Rajadharma*

**Title:** Rajadharma — On his bed of arrows, Bhishma teaches the new king
**Ship date:** 2026-11-02 CT
**Branch:** `studio/ep24-rajadharma` → no-ff merge into `main` (this record is part of the merge commit; branch head `6b612bf`)
**Track:** B (Ep 15+ factory)

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| D dialogue | `RR-gateD-dialogue.md` / `dialogue_review.py` | **PASS** |
| A/B bible | `RR-gateB-bible.md` / `logic_review.py plate-bible.json` | **PASS** |
| C stills + visual | `RR-gateC-visual.md` / `stills_review.py --require + visual eye-check` | **PASS** |
| D install | `RR-gateD-install.md` / `install_review.py` | **PASS** |

Narrator `orion` (Orion-only rule, `config/narrator.json`); raga `bhimpalasi`; totalSec 112.
3D steps 7–9 (Blender) not part of the routine — plate-only cinematic episode.
Details (regenerations, accepted deviations, watermark check) are in `RR-gateC-visual.md`.

## Publish

- Single push of `main` → `Deploy to GitHub Pages` (one deploy)
- Live: https://avinashpeyyety.github.io/pixelloid/mahabharata/play.html?ep=24
- Hub: https://avinashpeyyety.github.io/pixelloid/mahabharata/

## Notes

- Week of 2026-11-02: see `docs/SPRINT_PLAN.md` weekly tally. Cadence 1 episode/week, Mondays 11:47 AM CT.
- Next: Ep 25 (Shanti/Anushasana Parva — Bhishma's teaching continues; pick up Ep 24's end line "The grandsire will go on teaching for many days, until the sun turns north.")


## Backfill (2026-11-03)

Written after the fact by `tools/ship_record.py`: the 2026-11-02 11:47 AM CT sprint run merged and deployed Ep 24 but stopped before its ship-record commit (same gap as Ep 22 on 10-19).
- Commits: 2ff121a (prep, Kokoro audio) → 6b612bf (import + GATE C + GATE D + thumbs + registry) → **4da457c** (merge into `main`, 2026-11-02 12:45 CT) → cda99d3 (Orion remaster of Ep 04, 14–24 incl. this episode, 2026-11-02 9:24 PM CT; GATE D install re-run PASS with `voice_id` orion).
- SuperGrok regenerations: bless ×1, fish ×2 (prompt v2), bee ×1, listen ×1 (prompt v2) — see `RR-gateC-visual.md`.
