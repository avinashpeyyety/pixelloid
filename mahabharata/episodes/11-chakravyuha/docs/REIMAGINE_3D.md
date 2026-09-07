# Ep 11 reimagine — 3D + Imagine

## Status (2026-09-06)

### Live player (unchanged)
- GATE C Imagine panels in `stills/` (`plate-*.jpg`).
- `script.js` `stillsDir` / `plates` stay on `stills/` — **do not flip** to `renders/` until a player-plate QA gate passes *and* product wants Blender as the live plate source.
- Cache `ep11-stills-hotfix-v2`.

### Blender v3 cinematic (offline — primary regenerate path)
- `blender/build_ep11_cinematic.py`: real set + cameras matching script beats.
  - Dusty Kurukshetra ground + warm golden-hour sun/world (cream–saffron–gold).
  - Chakravyuha as **dressed rings**: army proxies (cubes/cones/saffron banners/chariot boxes) along 4–5 concentric circles; subtle torus guides under troops.
  - Hero **figure cards** (vertical planes) textured only from `stills/_locks/` (drona, abhimanyu, jayadratha, arjuna, krishna) — no invented faces.
  - Props: chariot wheel + broken bow for the wheel beat; Arjuna/Krishna on a chariot-ish base for dusk vow.
  - Cameras per `blender-map.json` beat keys (perspective, not ortho full-bleed of a painting).
  - Per-beat visibility: only the beat’s hero cards shown.
- Outputs: `blender/ep11_chakravyuha.blend`, `renders/beat-{t:02d}-{plate}.png` (1536×1024, Eevee).

### Blender v2 full-bleed (kept intact)
- `blender/build_ep11_scene.py` remains the v2 one-panel orthographic full-bleed tool (Imagine plate = entire frame). Use only if you need identity proxies of stills, not cinematic set dressing.

## Regenerate cinematic offline renders (v3)
```bash
"/Applications/Blender.app/Contents/MacOS/Blender" --background \
  --python mahabharata/episodes/11-chakravyuha/blender/build_ep11_cinematic.py
```
Or Homebrew: `blender --background --python mahabharata/episodes/11-chakravyuha/blender/build_ep11_cinematic.py`

## Regenerate v2 full-bleed proxies (optional)
```bash
"/Applications/Blender.app/Contents/MacOS/Blender" --background \
  --python mahabharata/episodes/11-chakravyuha/blender/build_ep11_scene.py
```

## Player-plate QA checklist (required before any live flip)
1. Open each `renders/beat-*.png` next to its beat `text` in `script.js`.
2. Cast and action must match the line (no empty rings, no wrong-panel collage).
3. Frame fills 3:2; no grey void dominant; overhead shows concentric army rings; gate shows Jayadratha; wheel shows Abhimanyu + wheel; wide-gold shows Arjuna/Krishna.
4. Then bump `voice.cache` and switch `stillsDir` only if product still wants Blender as source.
