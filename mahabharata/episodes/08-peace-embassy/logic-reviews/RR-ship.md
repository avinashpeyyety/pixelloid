# Ship record — Ep 08 *The Peace Embassy* rewrite

**Title:** The Peace Embassy — Krishna at Hastinapura  
**Slug:** `peace-embassy`  
**Bar:** Ep 09/10 (3:2 ≥1536×1024, carved cartouche)  
**Ship date:** 2026-10-04 CT  
**Branch:** `main`

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| D dialogue | `RR-gateD-dialogue.md` / `dialogue_review.py` (re-run 2026-10-04) | **PASS** |
| A/B bible | `RR-gateB-bible.md` / `logic_review.py plate-bible.json` (re-run 2026-10-04) | **PASS** |
| C stills + visual | `stills_review.py --require` (re-run 2026-10-04) + `RR-gateC-visual.md` | **PASS** (12 jpegs ≥1536×1024 3:2) |
| TTS | `RR-tts-kokoro.md` | **PASS** — Kokoro-82M `bm_george` speed 0.9; orion-00…08 |
| D install | `RR-gateD-install.md` / `install_review.py` | **PASS** (plates + audio + voice_id + raga Yaman; totalSec 110) |

## Publish

- Message: `mahabharata Ep08: GATE D install PASS + ship The Peace Embassy rewrite`
- Commit: 49efc09
- Live: https://avinashpeyyety.github.io/pixelloid/mahabharata/play.html?ep=08
- Hub: https://avinashpeyyety.github.io/pixelloid/mahabharata/

## Notes

- Art already GATE C PASS (2026-09-18 SuperGrok); this ship completes Kokoro narrator + GATE D install to match the Ep 05–07 ladder bar.
- **01–08 rewrite ladder complete.** Next sprint work: Ep 15 via Track B.
- Orion remaster queue (blocked on credits) — Ep08 appended in `config/narrator.json`.
- Registry duration updated to ~110s.
- Weekly tally (ISO week 09-28 → 10-04): **6** shipped (Ep04, Ep14, Ep05, Ep06, Ep07, Ep08).
