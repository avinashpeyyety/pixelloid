# Mahābhārata — animated itihāsa (Pixelloid)

**Live:** https://avinashpeyyety.github.io/pixelloid/mahabharata/

Episodic browser theater: **write script → Imagine plates → animate**.  
**2D Canvas** (no build). Painterly cinematic plates with crossfade + Ken Burns.

## Visual language

| Layer | Choice |
|-------|--------|
| **Plates** | Grok Imagine keyframes — **Ep 10 bar:** 1536×1024 **3:2**, carved cartouche, heroic medium |
| **Motion** | Crossfade + slow zoom/pan per beat |
| **Voice** | **Grok TTS** (`orion` — deep heroic male) pre-rendered → `episodes/…/audio/` |
| **Music** | Soft bansuri-like flute + light tabla (Web Audio) |

**Art bible:** [`STYLE.md`](STYLE.md) — style spine is Ep 10 `field-master.jpg`, **not** Ep 01 gold.

## Episodes

| # | Title | Status |
|---|--------|--------|
| 01 | **The Bird's Eye** — Drona’s test of Arjuna | Live |
| 02 | **The Fish's Eye** — Draupadi’s swayamvara | Live |
| 03 | **Bhima and Bakasura** — Ekachakra | Live |
| 04 | **The Akshayapatra** — Durvasa & the grain of grace | Live |
| 05 | **Yaksha Prashna** — the lake of questions | Live |
| 06 | **The Kirata** — Arjuna, Shiva & Pashupatastra | Live |
| 07 | **Jayadratha** — forest abduction of Draupadi | Live |
| 08 | **The Peace Embassy** — Krishna at Hastinapura | Live |
| 09 | **The Bhagavad Gita** — Kurukshetra opens | Live |
| 10 | **The Fall of Bhishma** — tenth day, bed of arrows | Live |
| 11 | **The Chakravyuha** — Abhimanyu, thirteenth day | Live |

## Local

```bash
cd pixelloid && python3 -m http.server 8767
# http://127.0.0.1:8767/mahabharata/
# http://127.0.0.1:8767/mahabharata/play.html?ep=01
# http://127.0.0.1:8767/mahabharata/play.html?ep=02
# http://127.0.0.1:8767/mahabharata/play.html?ep=03
# http://127.0.0.1:8767/mahabharata/play.html?ep=04
# http://127.0.0.1:8767/mahabharata/play.html?ep=05
# http://127.0.0.1:8767/mahabharata/play.html?ep=06
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

Generate offline with Imagine at **3:2 / ≥1536×1024**. Style ref = Ep 10 `stills/_locks/field-master.jpg`. **Never** attach Ep 01 `plate-wide-gold.jpg`. Never put API keys in the browser.

## Panel logic agent

Every episode must pass the **panel-logic** gates before ship:

- Spec: [`docs/PANEL_LOGIC.md`](docs/PANEL_LOGIC.md) · workflow: [`docs/WORKFLOW.md`](docs/WORKFLOW.md)
- Bible: `python3 tools/logic_review.py episodes/<id>/plate-bible.json --report`
- Stills: `python3 tools/stills_review.py episodes/<id>` (Ep 10+ must be 3:2 ≥1536×1024)
- Episode files: `cast-sheet.json`, `plate-bible.json` (from `episodes/_template/`), `logic-reviews/`

**Ep 02 apparatus lock:** fish swims in a **ground pool**; archer aims via a **ceiling mirror**.
