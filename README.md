# Dialogue animation

Two-person conversation animated with **HTML and CSS only** (no JavaScript).

## Live site

**https://avinashpeyyety.github.io/dialogue-animation/**

Repo: [avinashpeyyety/dialogue-animation](https://github.com/avinashpeyyety/dialogue-animation) — deploys to GitHub Pages on every push to `main`.

## Run locally

```bash
cd dialogue-animation
python3 -m http.server 8767
```

Open http://127.0.0.1:8767 — or open `index.html` in a browser.

## How it works

- Speech bubbles fade/slide in on a shared **18s** timeline (`@keyframes show-1` … `show-6`).
- Avatars **bob** idle; mouths pulse on `speak-a` / `speak-b` while that person’s lines are active.
- Change dialogue by editing the `.bubble` text in `index.html`.
- Add a seventh line: duplicate a `.line` block and add `show-7` keyframes (shift percentages).
