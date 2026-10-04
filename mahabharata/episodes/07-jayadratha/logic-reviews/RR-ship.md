# Ship record — Ep 07 *Jayadratha* rewrite

**Title:** Jayadratha — The abduction in the forest  
**Slug:** `jayadratha`  
**Bar:** Ep 09/10 (1728×1152 3:2, carved cartouche)  
**Ship date:** 2026-10-04 CT  
**Branch:** `main`

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| D dialogue | `RR-gateD-dialogue.md` | **PASS** |
| A/B bible | `RR-gateB-bible.md` / `logic_review.py` | **PASS** |
| C stills + visual | `stills_review.py --require` + `RR-gateC-visual.md` | **PASS** (16 jpegs ≥1536×1024 3:2) |
| TTS | `RR-tts-kokoro.md` | **PASS** — Kokoro-82M `bm_george` speed 0.9; orion-00…08 |
| D install | `RR-gateD-install.md` / `install_review.py` | **PASS** (plates + audio + voice_id + raga Bhairavi; totalSec 110) |

## Publish

- Message: `mahabharata Ep07: GATE D install PASS + ship Jayadratha rewrite`
- Commit: PENDING
- Live: https://avinashpeyyety.github.io/pixelloid/mahabharata/play.html?ep=07
- Hub: https://avinashpeyyety.github.io/pixelloid/mahabharata/

## Notes

- Art already GATE C PASS (2026-09-17 SuperGrok); this ship completes Kokoro narrator + GATE D install to match Ep 05/06 ladder bar.
- Orion remaster queued (blocked on credits) — Ep07 added after Ep06 in `config/narrator.json` order.
- Registry duration updated to ~110s.
- Weekly tally 2026-10-03: **3** shipped (Ep05 + Ep06 + Ep07); hits ≥3 target. Next ladder: Ep 08.
