# Mahābhārata — animated itihāsa (Pixelloid)

**Live:** https://avinashpeyyety.github.io/pixelloid/mahabharata/

Episodic browser theater: **write script → Imagine plates → animate**.  
**2D Canvas** (no build). Painterly cinematic plates with crossfade + Ken Burns.

## Visual language

| Layer | Choice |
|-------|--------|
| **Plates** | Grok Imagine keyframes (matching garden aesthetic) |
| **Motion** | Crossfade + slow zoom/pan per beat |
| **Voice** | **Grok TTS** (`atlas` — deep male) pre-rendered → `episodes/…/audio/` |
| **Music** | Soulful sitar + tanpura bed |

**Art bible:** [`STYLE.md`](STYLE.md)

## Episodes

| # | Title | Status |
|---|--------|--------|
| 01 | **The Bird's Eye** — Drona’s test of Arjuna | Live (cinematic plates) |

## Local

```bash
cd pixelloid && python3 -m http.server 8767
# http://127.0.0.1:8767/mahabharata/
# http://127.0.0.1:8767/mahabharata/play.html?ep=01
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

Generate offline with Imagine (use garden plate as style ref). Never put API keys in the browser.
