# Ship evidence — Ep 04 *The Akshayapatra* rewrite (09/10 bar)

Status: **SHIP**
Time: 2026-10-02 ~12:10 CT
Branch: `studio/ep04-rewrite` → merge `main`
Worktree: `/workspace/pix-ep04`

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| A/B + dialogue | `logic_review.py`, `dialogue_review.py --report`, `RR-gateD-dialogue.md` | **PASS** |
| C visual | `stills_review.py --require`, `RR-gateC-visual.md` | **PASS** (19 jpegs ≥1536×1024 3:2; boon + satisfied SuperGrok) |
| D install | `RR-gateD-install.md` | **PASS** (plates + orion-00…09; Yaman; totalSec 130; Kokoro local) |

## Ship commit

- Message: `mahabharata Ep04: GATE D install + ship 09/10 rewrite (Yaman, Kokoro, publish)`
- SHA: `130d153` (`130d1536330e655489cadf6b5147175de0683677`) — ship commit on `studio/ep04-rewrite`
- Author: `Chief <Avinashpeyyety@icloud.com>`
- Not committed: `stills/_inbox/` (consumer Imagine drops; untracked)

## Registry / cache

- `mahabharata/js/episodes.js` — akshayapatra `duration: "~130s"`
- `mahabharata/play.html` + `index.html` — cache `?v=ep04-0910-20261002`
- `mahabharata/NEXT.md` — Ep04 rewrite Done; Now → Ep 05 rewrite; Ep14 unpaused separately (GATE D next)
- `mahabharata/docs/SPRINT_PLAN.md` — Weekly tally: Week of 2026-09-29 shipped Ep 04

## Publish

```
/home/box/lab-mirror/ai-projects/ai-lab-vault/scripts/publish-pages.sh pixelloid
# or with --force if needed
```

## Live URLs

- Hub: https://avinashpeyyety.github.io/pixelloid/mahabharata/
- Play: https://avinashpeyyety.github.io/pixelloid/mahabharata/play.html?ep=04

Expect HTTP 200 on play URL after Pages deploy.
