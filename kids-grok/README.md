# Kids · Grok Ara (`kids-grok`)

Subproject of **[Pixelloid](../)** — comic dialogue: brother (7), sister (5), and Grok Ara with TTS + music.

**Live:** https://avinashpeyyety.github.io/pixelloid/kids-grok/

(Formerly referred to as “dialogue-animation” — renamed to **kids-grok**.)

## Run

```bash
cd pixelloid/kids-grok
python3 -m http.server 8767
# http://127.0.0.1:8767
```

Or serve the monorepo root and open `/kids-grok/`.

## Files

| File | Role |
|------|------|
| `conversation.js` | Transcript |
| `app.js` | Playback, TTS, UI |
| `index.html` | Cast + chat panel |

Edit dialogue in `conversation.js` only.
