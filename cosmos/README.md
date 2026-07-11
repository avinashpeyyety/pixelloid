# Cosmos (Pixelloid subproject)

Interactive **Three.js** solar system + Earth surface launch theater + LEO mode.

**Live (canonical):** https://avinashpeyyety.github.io/pixelloid/cosmos/  
**Hub:** https://avinashpeyyety.github.io/pixelloid/

This folder is the **shipping** copy inside the Pixelloid monorepo. Lab edits may live in `ai-projects/cosmos/` and are synced here on every pages publish / iterate.

## Modes

| Key | Mode |
|-----|------|
| **S** | Solar system |
| **E** | Earth surface · launch sites |
| **L** | LEO orbital theater |

## Local preview

```bash
cd pixelloid   # monorepo root
python3 -m http.server 8767
# open http://127.0.0.1:8767/cosmos/
```

(Needs a static server — ES modules + import map.)

## Ship

```bash
# from lab: sync lab cosmos → here + push monorepo Pages
ai-lab-vault/scripts/publish-pages.sh cosmos
# or full monorepo
ai-lab-vault/scripts/publish-pages.sh pixelloid
```
