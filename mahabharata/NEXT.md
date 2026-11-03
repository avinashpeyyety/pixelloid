# NEXT — mahabharata (pixelloid)

## Hard rules
- **Pace: 1 episode per week, Mondays 11:47 AM CT** (routine "Mahabharata episode sprint"). Ship at most one episode per run and per Mon–Sun week. If this week already has a ship, the run does no episode work and stops. Extra episodes only when Avinash asks ad hoc (depends on SuperGrok limits).
- **Narration: Orion only** (Avinash 2026-11-02, `config/narrator.json`). Every episode is narrated by Grok TTS `orion` via `tools/render_orion_voice.sh` (xAI API, ~2¢ per episode). Kokoro `bm_george` and macOS `say` are retired as narrators. GATE D install FAILs any episode whose `voice_id` is not `orion`.
- **Never re-synthesize narration for an existing episode.** Re-renders (plates, resolution, Blender, retime) reuse the existing `audio/*.mp3`; `render_orion_voice.py` refuses to overwrite clips without `--force` (Avinash's OK only). All of Ep 01–24 are `orion_locked_episodes`.
- **Do not reopen shipped episodes** (the 01–08 rewrite ladder and the new-resolution re-render are closed) without a ticket from Avinash naming the episode.
- **Run order:** `docs/PIPELINE_CHECKLIST.md` → "Routine run order". The ship record is written by `tools/ship_record.py` inside the merge commit; one push to `main`.

## Now
- [ ] **Active sprint board:** [`docs/SPRINT_PLAN.md`](docs/SPRINT_PLAN.md) — Track B (Ep 15+ factory).
<!-- ship:now:start -->
- Last ship: **Ep 24 *Rajadharma*** 2026-11-02 (`episodes/24-rajadharma/logic-reviews/RR-ship.md`). Week of 2026-11-02: 1 shipped.
- [ ] **Track B next:** Ep 25 (Shanti/Anushasana Parva — Bhishma's teaching continues; pick up Ep 24's end line "The grandsire will go on teaching for many days, until the sun turns north.") — next sprint Monday 2026-11-09 11:47 AM CT.
<!-- ship:now:end -->

## Curiosity / explore
- [ ] Tighten Ep 10 Arjuna lock: cream-white dhoti (no gold armor / peacock on the arrows plate) — SPRINT_PLAN Track A4

## History
Shipped-episode log: [`docs/HISTORY.md`](docs/HISTORY.md).
