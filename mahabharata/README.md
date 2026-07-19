# Mahābhārata — animated itihāsa (Pixelloid)

**Live:** https://avinashpeyyety.github.io/pixelloid/mahabharata/

Episodic browser theater: **write script → Imagine plates → animate**.  
**2D Canvas** (no build). Painterly cinematic plates with crossfade + Ken Burns.

## Visual language

| Layer | Choice |
|-------|--------|
| **Plates** | Grok Imagine keyframes (matching garden aesthetic) |
| **Motion** | Crossfade + slow zoom/pan per beat |
| **Voice** | **Grok TTS** (`orion` — deep heroic male) pre-rendered → `episodes/…/audio/` |
| **Music** | Soft bansuri-like flute + light tabla (Web Audio) |

**Art bible:** [`STYLE.md`](STYLE.md)

## Episodes

| # | Title | Status |
|---|--------|--------|
| 01 | **The Bird's Eye** — Drona’s test of Arjuna | Live |
| 02 | **The Fish's Eye** — Draupadi’s swayamvara | Live |

## Local

```bash
cd pixelloid && python3 -m http.server 8767
# http://127.0.0.1:8767/mahabharata/
# http://127.0.0.1:8767/mahabharata/play.html?ep=01
# http://127.0.0.1:8767/mahabharata/play.html?ep=02
```

## Ep 01 plates

```
episodes/01-birds-eye/stills/
  poster.jpg
  garden-plate.jpg
  plate-wide.jpg
  plate-drona.jpg
  plate-princes.jpg
  plate-bird.jpg
  plate-arjuna-bow.jpg
  plate-eye.jpg
  plate-release.jpg
  plate-wide-gold.jpg
```

## Ep 02 plates

```
episodes/02-swayamvara/stills/
  poster.jpg
  plate-wide.jpg
  plate-challenge.jpg
  plate-kings.jpg
  plate-draupadi.jpg
  plate-brahmin.jpg
  plate-aim.jpg
  plate-hit.jpg
  plate-garland.jpg
  plate-wide-gold.jpg
```

Generate offline with Imagine (use `plate-wide-gold` as style ref). Never put API keys in the browser.
