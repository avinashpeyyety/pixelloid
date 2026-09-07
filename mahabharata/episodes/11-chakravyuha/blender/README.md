# Ep 11 — Chakravyuha · Blender scene

## Pipeline
1. Key panels GATE C PASS under `../stills/` (live player source — leave alone).
2. Lock portraits under `../stills/_locks/` for hero cards.
3. Mapping: `../blender-map.json`.
4. **Primary:** cinematic v3 `build_ep11_cinematic.py` (Blender 5.x on MacBook Air).
5. Optional v2 full-bleed: `build_ep11_scene.py` (kept intact).

```bash
"/Applications/Blender.app/Contents/MacOS/Blender" --background \
  --python mahabharata/episodes/11-chakravyuha/blender/build_ep11_cinematic.py
```

Outputs:
- `ep11_chakravyuha.blend` (this folder)
- `../renders/beat-XX-<plate>.png` cinematic plates (offline)

## Scene graph (v3)
- Ground plane (Kurukshetra dust) + golden-hour sun/world
- Concentric **dressed vyuha rings** (army proxies + subtle torus guides)
- Hero cards from `_locks/` (Drona, Abhimanyu variants, Jayadratha, Arjuna, Krishna)
- Props: chariot wheel, broken bow; vow chariot base
- Cameras named in `blender-map.json` — one active render per beat with visibility toggles

Do **not** sculpt named faces in Blender; faces stay on lock JPEGs / Imagine panels.
Do **not** point `script.js` at `renders/` until QA + product say so.
