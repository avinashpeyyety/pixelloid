# Ep 11 — Chakravyuha · Blender scene

## Pipeline
1. Key panels already GATE C PASS under `../stills/` (Grok Imagine / Ep 09–10 bar).
2. Mapping: `../blender-map.json`.
3. Build / render with `build_ep11_scene.py` (Blender 5.x on MacBook Air).

```bash
"/Applications/Blender.app/Contents/MacOS/Blender" --background \
  --python mahabharata/episodes/11-chakravyuha/blender/build_ep11_scene.py
```

Outputs:
- `ep11_chakravyuha.blend` (this folder)
- `../renders/beat-XX-<plate>.png` camera boards for hybrid / preview

## Scene graph
- Ground plane (Kurukshetra dust)
- Concentric **vyuha rings** (empties + torus curves) — motion cue for the wheel of war
- Per-beat **hero plane** textured with the Imagine plate (3:2)
- Cameras named in `blender-map.json` — one active render per beat

Do **not** sculpt named faces in Blender; faces stay on Imagine panels.
