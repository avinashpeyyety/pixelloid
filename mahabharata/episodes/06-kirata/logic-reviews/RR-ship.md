# Ship record — Ep 06 *The Kirata* rewrite

**Title:** The Kirata — Arjuna and the Lord of the mountains  
**Slug:** `kirata`  
**Bar:** Ep 09/10 (1728×1152 3:2, carved cartouche)  
**Ship date:** 2026-10-03 CT  
**Branch:** `studio/ep06-rewrite` → `main`

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| D dialogue | `RR-gateD-dialogue.md` | **PASS** |
| A/B bible | `RR-gateB-bible.md` / `logic_review.py` | **PASS** |
| C stills + visual | `stills_review.py --require` + `RR-gateC-visual.md` | **PASS** (15 jpegs ≥1536×1024 3:2) |
| TTS | `RR-tts-kokoro.md` | **PASS** — Kokoro-82M `bm_george` speed 0.9; orion-00…08 |
| D install | `RR-gateD-install.md` / `install_review.py` | **PASS** (plates + audio + voice_id + raga Bhairav; totalSec 110) |

## Publish

- Message: `mahabharata Ep06: GATE D install PASS + ship The Kirata rewrite`
- Commit: 5188e8a
- Live: https://avinashpeyyety.github.io/pixelloid/mahabharata/play.html?ep=06
- Hub: https://avinashpeyyety.github.io/pixelloid/mahabharata/

## Notes

- Art already GATE C PASS (2026-09-17 SuperGrok); this ship completes Kokoro narrator + GATE D install to match Ep 05 ladder bar.
- Orion remaster queued (blocked on credits) — Ep06 added after Ep05 in `config/narrator.json` order.
- Registry duration updated to ~110s.
- Weekly tally 2026-10-03: **2** shipped (Ep05 + Ep06); target ≥3.
