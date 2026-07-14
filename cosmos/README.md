# Cosmos

Interactive **Three.js** solar system, Earth launch theater, and LEO mode.

## Live (canonical)

**https://avinashpeyyety.github.io/pixelloid/cosmos/**

Cosmos ships as a **subproject of [Pixelloid](https://github.com/avinashpeyyety/pixelloid)** — not a separate github.io root and not local-HTTPS for demos.

| Hub | https://avinashpeyyety.github.io/pixelloid/ |
| kids-grok | https://avinashpeyyety.github.io/pixelloid/kids-grok/ |
| chocolate-dance | https://avinashpeyyety.github.io/pixelloid/chocolate-dance/ |
| **cosmos** | https://avinashpeyyety.github.io/pixelloid/cosmos/ |

## Lab layout

| Path | Role |
|------|------|
| `ai-projects/cosmos/` | Working tree / public git mirror https://github.com/avinashpeyyety/cosmos |
| `ai-projects/pixelloid/cosmos/` | **Shipping** copy on Pages |

Every **iterate** that changes Cosmos **must** publish:

```bash
ai-lab-vault/scripts/publish-pages.sh cosmos
# syncs this folder → pixelloid/cosmos/ and pushes monorepo Pages
```

## Local preview (optional)

```bash
cd cosmos   # or pixelloid/cosmos
python3 -m http.server 8777
# http://127.0.0.1:8777
```

Prefer the live Pages URL for sharing and “done” checks.

## Modes

| Key | Mode |
|-----|------|
| **S** | Solar system |
| **E** | Earth surface · launch sites only |
| **L** | LEO theater |

See `NEXT.md` for backlog.
