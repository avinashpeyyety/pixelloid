# Ep 11 reimagine — 3D + Imagine

## Status (2026-09-06)

### Live player (hotfix)
- GATE C Imagine panels in `stills/` (`plate-*.jpg`).
- Cache `ep11-stills-hotfix-v2`.
- Do **not** point `script.js` at `renders/` until a player-plate QA gate passes *and* product wants Blender as the live plate source.

### Blender proxies v2 (offline)
- `blender/build_ep11_scene.py` rebuilt: **one Imagine panel per camera**, siblings hidden, orthographic full-bleed 1536×1024, emission materials so lighting does not wash the painting.
- Rings/ground exist in `ep11_chakravyuha.blend` for future motion but stay **hidden** in plate renders (`SHOW_RINGS_IN_RENDERS = False`).
- `renders/beat-*.png` now match the matching `stills/plate-*.jpg` beat-for-beat (identity QA PASS).
- Greybox collage failure from v1 is fixed. True cinematic 3D (chase into rings, dressed set) is **not** done — that is a later phase; flipping the player to v2 would only duplicate stills through Blender.

## Player-plate QA checklist (required before any live flip)
1. Open each `renders/beat-*.png` next to its beat `text` in `script.js`.
2. Cast and action must match the line (no empty rings, no wrong-panel collage).
3. Frame fills 3:2; no grey void dominant.
4. Then bump `voice.cache` and switch `stillsDir` only if product still wants Blender as source.

## Regenerate offline renders
```bash
"/Applications/Blender.app/Contents/MacOS/Blender" --background \
  --python mahabharata/episodes/11-chakravyuha/blender/build_ep11_scene.py
```
