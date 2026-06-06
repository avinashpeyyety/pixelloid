# Kids chat with Grok Ara — dialogue animation

Animated replay of a real hilarious conversation between a **7-year-old brother**, his **5-year-old sister**, and **Grok Ara** — dinosaurs, chickens, Pluto, jokes, chocolate, bunnies, water, and the endless goodbye loop.

## Live site

**https://avinashpeyyety.github.io/dialogue-animation/**

## Run locally

```bash
cd dialogue-animation
python3 -m http.server 8767
```

Open http://127.0.0.1:8767 — click **▶ Play conversation**.

## Controls

| Button | Action |
|--------|--------|
| **Play conversation** | Plays full transcript with voice + soft music |
| **Restart** | Jump back to line 1 |
| **Music / Voice** | Toggle background tune or browser TTS |

Runtime is about **15–20 minutes** with voice (114 lines). It loops when finished.

## Files

| File | Role |
|------|------|
| `conversation.js` | Full transcript (`who`: `brother`, `sister`, `grok`) |
| `app.js` | Playback, TTS, UI, progress bar |
| `index.html` | Comic avatars + chat panel |

Edit dialogue in `conversation.js` only — `app.js` reads it automatically.
