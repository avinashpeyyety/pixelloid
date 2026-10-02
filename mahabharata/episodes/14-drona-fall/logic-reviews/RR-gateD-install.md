# Logic review — Ep 14 — GATE D (install check)

Status: **PASS** (2026-10-02) — re-check after GATE C PASS (2026-10-01 SuperGrok consumer plates) + local Kokoro audio.

All spoken beats are `Narrator` (omniscient kathavachak, as Ep 11–13), so "speaker on panel" is satisfied by narration; the check is that the **action named in each line is visible on its plate**.

| t | Plate | Line action | Visible? |
|---|-------|-------------|----------|
| 0 | wide | Drona dominant at dawn | PASS |
| 12 | counsel | Krishna counsels Yudhishthira/Bhima | PASS |
| 24 | elephant | Bhima slays war-elephant (gold dust) | PASS |
| 36 | dharma | Drona asks Yudhishthira; king torn | PASS — cream dhoti, no armor (GATE C regen) |
| 48 | conch | Yudhishthira speaks; conches roar | PASS |
| 60 | wheel | Chariot wheels touch the earth | PASS — wheels + dust plumes (minor: gaze/glow note from GATE C, non-blocking) |
| 72 | yoga | Drona unarmed, in yoga | PASS — bow on earth |
| 84 | prince | Dhrishtadyumna comes with sword | PASS |
| 96 | still | Stroke; spirit already light | PASS (non-graphic) |
| 108 | grief | Arjuna weeps / protests | PASS — tears + raised hand (minor: Gandiva upright, non-blocking) |
| 120 | wide-gold | Aftermath; Krishna + Yudhishthira | PASS — Yudhishthira on foot, no reins/armor |

Audio: `audio/orion-00.mp3` … `orion-10.mp3` — **11/11 present**, match script beat count (local Kokoro-82M bm_george; Orion API retired). Silent hold beat at t=132 (no audio) OK.

Factory: `python3 tools/stills_review.py episodes/14-drona-fall --require` → **PASS** (19 jpegs ≥1536×1024 3:2).

Prior FAIL (2026-09-29): missing wheel/grief, dharma/wide-gold costume drift, absent audio — all resolved.
