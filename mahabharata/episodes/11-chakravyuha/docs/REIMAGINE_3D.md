# Ep 11 reimagine — 3D + Imagine (2026-09-06)

## Status
- **Imagine key panels:** `stills/` GATE C PASS (locked art + `_locks/`).
- **3D:** `blender-map.json` + `blender/ep11_chakravyuha.blend` + `renders/beat-*.png`.
- **Player (live):** `script.js` loads plates from **`renders/`** (Blender camera proxies). Orion / Megh unchanged. Hub poster still uses `stills/poster.jpg`.

## Regenerate renders
```bash
"/Applications/Blender.app/Contents/MacOS/Blender" --background \
  --python mahabharata/episodes/11-chakravyuha/blender/build_ep11_scene.py
```
