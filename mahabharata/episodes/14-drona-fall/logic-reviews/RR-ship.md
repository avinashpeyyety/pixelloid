# Ship evidence — Ep 14 *The Fall of Drona*

Status: **SHIP**
Time: 2026-10-02 ~17:55 CT
Branch: `studio/ep14-drona-fall` → merge `main`
Worktree: lab-mirror `/home/box/lab-mirror/ai-projects/pixelloid/mahabharata`

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| A/B + dialogue | `RR-gateB-bible.md`, `RR-gateD-dialogue.md` | **PASS** |
| C visual | `stills_review.py --require`, `RR-gateC-visual.md` | **PASS** (19 jpegs ≥1536×1024 3:2; SuperGrok consumer 2026-10-01) |
| D install | `RR-gateD-install.md` | **PASS** (2026-10-02; plates + orion-00…10; Todi; totalSec 136; Kokoro local) |

## Ship commit

- Message: `mahabharata Ep14: GATE D install PASS + ship The Fall of Drona`
- SHA: `b12ce82` (`b12ce82a31ccdebb41d1c03d98dc8f5a61d8c485`) — ship commit on `studio/ep14-drona-fall`
- Author: `Chief <Avinashpeyyety@icloud.com>`
- Not committed: `stills/_inbox/` (consumer Imagine drops; untracked)

## Registry / cache

- `js/episodes.js` — Ep14 `status: "live"`, duration `~136s`
- `play.html` + `index.html` — cache `?v=ep14-20261002`
- `NEXT.md` — Ep14 Done; Now → Ep 05 rewrite ladder
- `docs/SPRINT_PLAN.md` — Weekly tally: Week of 2026-09-29 shipped Ep 04, Ep 14

## Publish

```
/home/box/lab-mirror/ai-projects/ai-lab-vault/scripts/publish-pages.sh pixelloid
```

## Live URLs

- Hub: https://avinashpeyyety.github.io/pixelloid/mahabharata/
- Play: https://avinashpeyyety.github.io/pixelloid/mahabharata/play.html?ep=14

Expect HTTP 200 on play URL after Pages deploy.
