# AGENTS — markandeya

Read `NEXT.md` (hard rules) before any work. In short:

1. One episode per week. Story order per `docs/EPISODE_PLAN.md`.
2. Narration is xAI Grok TTS `orion` only (`tools/render_orion_voice.py`). Probe first. No fallback voice. On failure write
   `BLOCKED: awaiting Orion` + exact error in `NEXT.md` and stop.
3. Images are SuperGrok consumer Imagine on grok.com only — never api.x.ai. Chief generates from the episode's
   `PROMPTS.md`; agents import and gate.
4. Remasters only with Avinash's approval. Never touch `../mahabharata` or `../shivaji` from here.
5. Family-friendly, devotional: no blood/gore/skulls/severed heads. Use the locks in `docs/CHARACTER_LOCKS.md`.
6. Gates, in order: GATE D dialogue → GATE A/B bible → stills (consumer) → GATE C → Orion + raga → GATE D install → ship.
   Commands in `docs/PIPELINE_CHECKLIST.md`.
7. Commit as `Chief <Avinashpeyyety@icloud.com>`; work on `studio/markandeya-epNN`; never force-push; ship = merge to main.
