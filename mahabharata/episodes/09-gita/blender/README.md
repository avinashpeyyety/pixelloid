# Ep 09 — Bhagavad Gita · A3 3D beat pilot

**Track:** SPRINT_PLAN A3 / GATE C — **one beat only** (not a full-episode set).

## Chosen beat
| Field | Value |
|-------|-------|
| Beat | `counsel` @ t=35 |
| GATE C panel | `../stills/plate-counsel.jpg` (read-only texture) |
| Camera | `counsel_medium` |
| Proxy out | `../renders/beat-35-counsel.png` @ **1536×1024** PNG |

## Pipeline
1. Key panel already GATE C PASS under `../stills/` — **do not rewrite** stills binaries.
2. Mapping: `PANEL_MAP.md` + `blender-map.json` (this folder).
3. Build script: `build_a3_pilot.py` — ground + warm light + hero plane (Imagine JPEG) + camera.
4. Render **one** proxy into `../renders/`.

```bash
# MacBook Air (production path — machineId 527ae34b…)
cd /Users/avinashpeyyety/Library/CloudStorage/OneDrive-Personal/ai-projects/pixelloid
"/Applications/Blender.app/Contents/MacOS/Blender" --background \
  --python mahabharata/episodes/09-gita/blender/build_a3_pilot.py

# Lab-mirror / Linux (proxy when Air unreachable — same script)
blender --background --python mahabharata/episodes/09-gita/blender/build_a3_pilot.py
```

Outputs:
- `ep09_a3_pilot.blend` (this folder)
- `../renders/beat-35-counsel.png`

## Constraints
- Do **not** sculpt named faces in Blender — faces stay on the Imagine JPEG.
- Do **not** point hybrid `script.js` at `renders/` — player still uses `stills/`.
- Scope is **ONE** beat; full-episode Ep09 Blender set is out of scope for A3.

## Reference
Pattern borrowed (minimal) from `episodes/11-chakravyuha/blender/` (`build_ep11_cinematic.py`).
