# Dialogue animation

Two-person conversation with **CSS animation**, **browser voice-over** (TTS), and **cartoon music** (Web Audio).

## Live site

**https://avinashpeyyety.github.io/dialogue-animation/**

Repo: [avinashpeyyety/dialogue-animation](https://github.com/avinashpeyyety/dialogue-animation) — deploys to GitHub Pages on every push to `main`.

## Run locally

```bash
cd dialogue-animation
python3 -m http.server 8767
```

Open http://127.0.0.1:8767 — or open `index.html` in a browser.

## Sound

Click **Play with sound** on the page (required by browsers). Toggle **Music** or **Voice** independently.

- Voice: `speechSynthesis` — Anya (higher pitch), Ravi (lower). Edit lines in `audio.js` → `LINES`.
- Music: bouncy loop synthesized in `audio.js` (no audio files to host).

## How it works

- Speech bubbles fade/slide in on a shared **18s** timeline (`@keyframes show-1` … `show-6`).
- Avatars **bob** idle; mouths pulse on `speak-a` / `speak-b` while that person’s lines are active.
- Change dialogue: update `.bubble` text in `index.html` and matching `LINES` in `audio.js`.
- Add a seventh line: duplicate a `.line` block, add `show-7` keyframes, and a `LINES` entry.
