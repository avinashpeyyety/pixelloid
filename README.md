# Pixelloid — interactive browser shows

Public monorepo of short, fun, and educational browser experiences.

**GitHub:** https://github.com/avinashpeyyety/pixelloid  
**Hub:** https://avinashpeyyety.github.io/pixelloid/

## Subprojects

| Subproject | Path | Live |
|------------|------|------|
| **Kids · Grok Ara** | [`kids-grok/`](kids-grok/) | […/pixelloid/kids-grok/](https://avinashpeyyety.github.io/pixelloid/kids-grok/) |
| **Chocolate Dance School** | [`chocolate-dance/`](chocolate-dance/) | […/pixelloid/chocolate-dance/](https://avinashpeyyety.github.io/pixelloid/chocolate-dance/) |
| **Cosmos** | [`cosmos/`](cosmos/) | […/pixelloid/cosmos/](https://avinashpeyyety.github.io/pixelloid/cosmos/) |
| **Mahābhārata** | [`mahabharata/`](mahabharata/) | […/pixelloid/mahabharata/](https://avinashpeyyety.github.io/pixelloid/mahabharata/) |

Root [`index.html`](index.html) is the hub.

## Local

```bash
cd pixelloid
python3 -m http.server 8767
# http://127.0.0.1:8767/           hub
# http://127.0.0.1:8767/kids-grok/
# http://127.0.0.1:8767/chocolate-dance/
# http://127.0.0.1:8767/cosmos/
# http://127.0.0.1:8767/mahabharata/
# http://127.0.0.1:8767/mahabharata/play.html?ep=01
```

## Deploy

Push `main` → GitHub Pages (workflow). After any iterate that touches a subproject:

```bash
ai-lab-vault/scripts/publish-pages.sh pixelloid
# cosmos-only (syncs lab cosmos/ first):
ai-lab-vault/scripts/publish-pages.sh cosmos
```

## Desktop tooling (MacBook Air)

Production apps for asset pipelines — see [`TOOLING.md`](TOOLING.md).

| App | Use |
|-----|-----|
| **Blender** | 3D / previs / export for Cosmos & Mahābhārata |
| **REAPER** | Mix TTS + music beds before shipping audio |
| **SketchUp 2026** | Stage / set / architecture blocking |

Scratch projects: `_studio/{reaper,blender,sketchup}/` (gitignored except `.gitkeep`).

