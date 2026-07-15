# Mahābhārata — animated itihāsa (Pixelloid)

**Live:** https://avinashpeyyety.github.io/pixelloid/mahabharata/

Episodic browser theater: **write script → stage beats → animate on a narrative cloth**.  
**2D Canvas** (no build, no Three.js). Style: **Phad / Pattachitra** — Indian scroll storytelling.

## Why this visual language?

Indian epic already has professional *cloth* narration traditions:

| Form | Region | Fit for this series |
|------|--------|---------------------|
| **Phad** | Rajasthan | Long painted cloth + oral performance (Bhopa). Episodes as panels on one scroll — ideal metaphor for our player. |
| **Pattachitra** | Odisha | Mythic cloth painting, bold outline, flat color, lotus borders. Mahābhārata is a classic subject. |
| **Cheriyal scroll** | Telangana | Narrative ballad scrolls in sequential frames. |
| **Kalamkari** | Andhra | Block/hand painted cotton epics — great for still keyframes later. |

We use a **Phad + Pattachitra hybrid**: dyed cloth ground, vermillion/indigo/saffron, black contour, ornate border, camera pans the scroll like a living phad performance.  

**Not film CGI.** Flat, legible, mythic — closer to high-end illustration/animation than low-poly 3D, with far less complexity. Grok Imagine stills can later texture a panel when a face or court needs more density.

## Episodes

| # | Title | Status |
|---|--------|--------|
| 01 | **The Bird's Eye** — Drona’s test of Arjuna | Prototype (2D phad) |

## Local

```bash
cd pixelloid && python3 -m http.server 8767
# http://127.0.0.1:8767/mahabharata/
# http://127.0.0.1:8767/mahabharata/play.html?ep=01
```

## Imagine (optional)

Place generated stills in `episodes/01-birds-eye/stills/` (Kalamkari / Pattachitra prompts work well).  
Never put production API keys in the browser.
