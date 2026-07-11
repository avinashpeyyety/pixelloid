# Pixelloid — kids entertainment animations

Monorepo of short, funny browser shows for little humans. No signup. Press play and giggle.

**GitHub:** https://github.com/avinashpeyyety/pixelloid · **public**

## Subprojects

| Subproject | Path | Local | Live |
|------------|------|-------|------|
| **Kids chat with Grok Ara** | repo root (`index.html`) | `:8767` | [github.io](https://avinashpeyyety.github.io/dialogue-animation/) |
| **Chocolate Dance School** | [`chocolate-dance/`](chocolate-dance/) | `:8768` | [github.io/chocolate-dance](https://avinashpeyyety.github.io/dialogue-animation/chocolate-dance/) |

> **Chocolate Dance** is a first-class subproject under this repo (not a separate GitHub remote). Ship it with the same `main` push → Pages deploy.

---

## Kids chat with Grok Ara

Animated replay of a real hilarious conversation between a **7-year-old brother**, his **5-year-old sister**, and **Grok Ara** — dinosaurs, chickens, Pluto, jokes, chocolate, bunnies, water, and the endless goodbye loop.

```bash
cd pixelloid
python3 -m http.server 8767
# http://127.0.0.1:8767
```

| Button | Action |
|--------|--------|
| **Play conversation** | Full transcript with voice + soft music |
| **Restart** | Jump back to line 1 |
| **Music / Voice** | Toggle background tune or browser TTS |

Runtime ~**15–20 minutes** with voice (116 lines).

| File | Role |
|------|------|
| `conversation.js` | Transcript (`who`: brother / sister / grok) |
| `app.js` | Playback, TTS, UI |
| `index.html` | Comic avatars + chat panel |

---

## Chocolate Dance School 🍫

Subproject: `chocolate-dance/` — Professor Cocoa + silly chocolates learn to dance (Three.js + procedural music).

```bash
cd pixelloid/chocolate-dance
python3 -m http.server 8768
# http://127.0.0.1:8768
```

See [`chocolate-dance/README.md`](chocolate-dance/README.md).

---

## Deploy / Pages

Push to `main` on **pixelloid** runs `.github/workflows/deploy-pages.yml` (whole tree, including `chocolate-dance/`).

```bash
# from lab vault after landing-facing edits:
../ai-lab-vault/scripts/publish-pages.sh pixelloid
```
