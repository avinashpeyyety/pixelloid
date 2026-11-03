# NEXT — markandeya (pixelloid)

## Hard rules (Avinash, 2026-11-02 / 2026-11-03)
- **Pace: 1 episode per week, maximum.** One Markandeya episode ships per Mon–Sun week. If one has already shipped this week, the run does no episode work and stops. Extra episodes only when Avinash asks.
- **Narration: Orion ONLY.** Every episode is narrated by xAI Grok TTS voice `orion` via `tools/render_orion_voice.py` (xAI API credits are authorized for Orion narration only). **No fallback voice of any kind** — no Kokoro / bm_george, no macOS say, no browser speech, no default voice. If Orion is unavailable (unknown voice, auth error, out of credits, 4xx/5xx), write `BLOCKED: awaiting Orion` with the exact error under **Now**, flag the episode, and do not ship it.
- **Images: SuperGrok consumer Imagine (grok.com) ONLY.** Never call api.x.ai (or any paid API) for images. Prompt pack per episode at `episodes/<id>/stills/_inbox/consumer-imagine/PROMPTS.md`; import with `tools/import_consumer_stills.py`.
- **Remasters only with Avinash's approval.** Never re-voice, re-plate or retime a shipped episode without a ticket from Avinash naming it. Re-renders reuse the existing `audio/*.mp3`.
- **Family-friendly and devotional.** No blood, gore, severed heads, skulls or corpses — ever (see `docs/CHARACTER_LOCKS.md`). Exactly two arms on every human; the Devi's ten arms are the only multi-arm figure besides the gods named in the locks.
- **Story order.** Devi Mahatmyam in canonical order (`docs/EPISODE_PLAN.md`). Don't skip ahead.
- **Unpublished until gates pass.** An episode's registry `status` stays `planned` (renders "Coming soon", no link) until GATE C (`stills_review --require` + `RR-gateC-visual.md`) and GATE D install PASS. Do not touch `mahabharata/` or `shivaji/` from Markandeya work.

## Now
- [ ] **Ep 01 *The King and the Merchant*** — branch `studio/markandeya-ep01` (not merged, not deployed).
  - [x] Scaffold (registry, landing, player, tools, hub card), episode plan, series character locks
  - [x] Script + GATE D dialogue PASS · plate bible + GATE A/B PASS · prompt pack (15 images)
  - [x] Orion narration orion-00…08 (78.94 s; `logic-reviews/RR-tts-orion.md`) · raga Puriya Dhanashri
  - [x] Stills: 15 images generated on grok.com (SuperGrok consumer) and imported 2026-11-03 (`--allow-watermark`: C2PA APP11 only, corners clean). 14/15 pass the eye-check.
  - [ ] **GATE C: FAIL (2026-11-03): `stills/_locks/suratha.jpg` has blood-like red drips on the dhoti under the sword hand.** Removed from the stills tree. Plates and poster are clean. Fix: Chief does an Imagine *edit* of the existing `lock-suratha.jpg` (prompt in `logic-reviews/RR-gateC-visual.md` § Fix), drops it in the inbox, then runs `import_consumer_stills.py 01-king-and-merchant --allow-watermark --force` → `stills_review --require` → zoom-check → flip RR-gateC to PASS.
  - [ ] Thumbs: `python3 tools/make_thumbs.py episodes/01-king-and-merchant`
  - [ ] GATE D install: `python3 tools/install_review.py episodes/01-king-and-merchant --report`
  - [ ] Ship: flip Ep01 `status: "live"` in `js/episodes.js`, bump `?v=` tags, merge to `main` (Pages deploys on push to main)
- [ ] Ep 02 *Madhu and Kaitabha* — next week (needs Vishnu yoga-nidra, Brahma, Madhu+Kaitabha locks; Devi still formless as Yoga-nidra light)

## Done
- [x] 2026-11-03 Series scaffold + Ep01 pre-stills (Orion probe OK: HTTP 200, 3.24 s)
