# Pixelloid — kids entertainment animations

Monorepo of short, funny browser shows. No signup. Press play and giggle.

**GitHub:** https://github.com/avinashpeyyety/pixelloid · **public**  
**Hub:** https://avinashpeyyety.github.io/pixelloid/

## Subprojects

| Subproject | Path | Local | Live |
|------------|------|-------|------|
| **Kids · Grok Ara** | [`kids-grok/`](kids-grok/) | `:8767` | […/pixelloid/kids-grok/](https://avinashpeyyety.github.io/pixelloid/kids-grok/) |
| **Chocolate Dance School** | [`chocolate-dance/`](chocolate-dance/) | `:8768` | […/pixelloid/chocolate-dance/](https://avinashpeyyety.github.io/pixelloid/chocolate-dance/) |

Root [`index.html`](index.html) is the hub that links both shows.

> Renamed: **dialogue-animation → kids-grok** (folder + all landing URLs).

---

## Kids · Grok Ara

Animated replay of a hilarious conversation between a **7-year-old brother**, his **5-year-old sister**, and **Grok Ara**.

```bash
cd pixelloid/kids-grok
python3 -m http.server 8767
# http://127.0.0.1:8767
```

See [`kids-grok/README.md`](kids-grok/README.md).

---

## Chocolate Dance School 🍫

Professor Cocoa + silly chocolates learn to dance (Three.js + procedural music).

```bash
cd pixelloid/chocolate-dance
python3 -m http.server 8768
# http://127.0.0.1:8768
```

See [`chocolate-dance/README.md`](chocolate-dance/README.md).

---

## Deploy / Pages

Push to `main` deploys the whole tree via `.github/workflows/deploy-pages.yml`.

```bash
../ai-lab-vault/scripts/publish-pages.sh pixelloid
```

Expected URLs after deploy:

- https://avinashpeyyety.github.io/pixelloid/
- https://avinashpeyyety.github.io/pixelloid/kids-grok/
- https://avinashpeyyety.github.io/pixelloid/chocolate-dance/
