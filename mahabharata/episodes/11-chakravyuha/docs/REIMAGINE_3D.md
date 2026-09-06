# Ep 11 reimagine — 3D + Imagine

## Status (2026-09-06 hotfix)
- **Live player:** GATE C Imagine panels in `stills/` (`plate-*.jpg`). Cache `ep11-stills-hotfix-v2`.
- **Blender:** `blender-map.json` + `blender/ep11_chakravyuha.blend` + `renders/beat-*.png` are **offline preview only**. Do not point `script.js` at `renders/` until a player-plate QA gate passes (one panel per camera, framed full-bleed, cast matches beat text).
- **Why:** The first Blender flip showed greybox floor/rings/billboards that missed art or framed wrong panels vs narration.

## Regenerate offline renders (preview only)
```bash
"/Applications/Blender.app/Contents/MacOS/Blender" --background \
  --python mahabharata/episodes/11-chakravyuha/blender/build_ep11_scene.py
```
