# Mahābhārata — animated itihāsa (Pixelloid)

**Live:** https://avinashpeyyety.github.io/pixelloid/mahabharata/

Episodic browser theater: **write script → stage beats → animate**.  
Self-contained **Three.js** (no build step). Grok Imagine can supply stills later; v1 is pure procedural art direction.

## Three.js — is it enough?

**Yes for this product shape:** stylized cinematic shorts, mythic light, silhouettes, camera as storyteller, particle atmosphere.  
**Not a substitute for:** full character performance (faces, cloth, long dialogue lip-sync film). Those need Blender/USD pipelines or pre-rendered video.

Pixelloid ships **high-aesthetic web episodes** — Three.js is the right default. Escalate to hybrid (Imagine stills as textures / short video plates) only when a beat needs photoreal faces.

## Episodes

| # | Title | Status |
|---|--------|--------|
| 01 | **The Bird's Eye** — Drona’s test of Arjuna | Prototype |

## Local

```bash
cd pixelloid && python3 -m http.server 8767
# http://127.0.0.1:8767/mahabharata/
# http://127.0.0.1:8767/mahabharata/play.html?ep=01
```

## Imagine (optional)

Place generated stills in `episodes/01-birds-eye/stills/` and reference from the episode script.  
Browser cannot safely hold production API keys; generate offline with Imagine / Grok, then commit assets if licensed for the show.
