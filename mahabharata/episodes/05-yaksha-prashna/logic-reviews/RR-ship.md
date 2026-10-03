# Ship record — Ep 05 *Yaksha Prashna* rewrite

**Title:** Yaksha Prashna — The lake of questions  
**Slug:** `yaksha-prashna`  
**Bar:** Ep 09/10 (1728×1152 3:2, carved cartouche)  
**Ship date:** 2026-10-03 CT  
**Branch:** `studio/ep05-rewrite` → `main`

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| D dialogue | `RR-gateD-dialogue.md` | **PASS** |
| A/B bible | `RR-gateB-bible.md` / `logic_review.py` | **PASS** |
| C stills + visual | `stills_review.py --require` + `RR-gateC-visual.md` | **PASS** (16 jpegs ≥1536×1024 3:2) |
| TTS | `RR-tts-kokoro.md` | **PASS** — Kokoro-82M `bm_george` speed 0.9; orion-00…08 |
| D install | `RR-gateD-install.md` / `install_review.py` | **PASS** (plates + audio + voice_id + raga Bhairav; totalSec 110) |

## Publish

- Message: `mahabharata Ep05: GATE D install PASS + ship Yaksha Prashna rewrite`
- Commit: see merge commit on main (message: GATE D install PASS + ship Yaksha Prashna rewrite)
- Live: https://avinashpeyyety.github.io/pixelloid/mahabharata/play.html?ep=05
- Hub: https://avinashpeyyety.github.io/pixelloid/mahabharata/

## Notes

- Canonical narrator pinned: `config/narrator.json` → `bm_george`; `tools/install_review.py` enforces at GATE D.
- Orion remaster queued (blocked on credits) — see SPRINT_PLAN / NEXT.
- Registry duration updated to ~110s.
