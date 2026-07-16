# Mahābhārata — animated itihāsa (Pixelloid)

**Live:** https://avinashpeyyety.github.io/pixelloid/mahabharata/

Episodic browser theater: **write script → stage beats → animate on a narrative cloth**.  
**2D Canvas** (no build). **Figures in the spirit of Bapu** (Sattiraju Lakshmi Narayana) on a soft phad ground.

## Visual language

| Layer | Choice |
|-------|--------|
| **Figures** | **Bapu** — elongated lyrical silhouettes, large almond eyes with thick upper lids, soft dhoti folds, minimal jewelry, character via face & gesture |
| **Stage** | Cloth-scroll atmosphere (phad-like pan/zoom), quiet borders — not textile-stamped costumes |
| **Avoided** | Heavy kalamkari butta-stamping on robes (over-literal; fights Bapu’s clean line) |

**Not film CGI.** Soft illustration language suited to episodic itihāsa.  
**Art bible:** [`STYLE.md`](STYLE.md) · **Poses:** `hips` · `teach` · `bow` · `grief` · `vow`  
**Imagine stills (Ep 01):** `episodes/01-birds-eye/stills/` (poster + garden plate).

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

## Narration

Browser **Web Speech API** — kathavachak style: one deep Indian-English male voice for all lines  
(prefers `en-IN` / Ravi-class voices; falls back to deep English male + low pitch).  
Toggle **Voice** in the player. Quality depends on OS voices (macOS/Windows often have Ravi or similar).

For studio-grade voice later: pre-render with a TTS service offline → `episodes/…/audio/` and swap the player to `<audio>` clips.

## Imagine stills

```
episodes/01-birds-eye/stills/poster.jpg      # hub / share key art
episodes/01-birds-eye/stills/garden-plate.jpg # player environment plate
```

Generate offline (Grok Imagine); commit assets. Never put production API keys in the browser.  
Prompt seeds: see `STYLE.md`.
