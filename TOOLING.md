# Pixelloid — desktop tooling (Air)

Installed on **MacBook Air** for offline production. Browser shows still ship as pure web (github.io); these apps feed **assets** into the monorepo.

| App | Path | Role in Pixelloid |
|-----|------|-------------------|
| **Blender** | `/Applications/Blender.app` · CLI `blender` | **Primary 3D renderer** for Mahābhārata (and Cosmos); maps Grok Imagine key panels into scenes; export renders/glTF under episode `renders/` or `_studio` |
| **REAPER** | `/Applications/REAPER.app` | DAW for score, ambience, SFX; mix Orion TTS + Hindustani beds before dropping stems under `episodes/…/audio/` or kids-grok assets |
| **SketchUp 2026** | `/Applications/SketchUp 2026/SketchUp.app` | Sets, stages, architecture blocking (Chocolate Dance stage, Cosmic pads, Mahābhārata loci); export reference images or geometry for Blender / plate prompts |
| **GeoLibre** | `/Applications/GeoLibre Desktop.app` | Open-source GIS (MapLibre / geoprocessing) — maps, layers, spatial SQL; useful for Cosmos pad geography, location research, and any map-backed Pixelloid locus |
| **Onshape CAD** | `/Applications/Onshape CAD.app` (launcher) · https://cad.onshape.com | Cloud-native parametric CAD (browser). No official Mac install — toolbox launcher opens Chrome app-mode. Export STEP/Parasolid for Blender / SketchUp handoff |

## Suggested pipelines

### Audio (kids-grok · chocolate-dance · mahabharata)

1. Generate / gather stems (Orion TTS, raga loops, SFX).
2. Open / create a project under `pixelloid/_studio/reaper/` (gitignored binaries OK; commit only exported WAV/MP3/OGG used by the site).
3. Bounce stems → place in the subproject path the player already loads.
4. Keep Web Audio fallbacks working if a stem is missing.

### 3D / motion (mahabharata · cosmos · chocolate-dance)

1. **Key art first:** Grok Imagine API panels (Mahābhārata: GATE C / Ep 09/10 bar).
2. Block in **SketchUp** when the scene is architectural / stage-like.
3. Build / animate / light in **Blender** — Imagine panels as camera boards, hero planes, or environment plates.
4. Export: episode `renders/` proxies, stills, or glTF for the player. Legacy Ken Burns may keep using Imagine plates until the 3D player ships.

### Mahābhārata note

**Target pipeline:** Blender **3D render** + **Grok Imagine key panels**. See `mahabharata/docs/WORKFLOW.md`. Imagine character locks and GATE C still apply — Blender must not invent faces or bypass the art bar.

## Open quickly

```bash
open -a Blender
open -a REAPER
open -a "SketchUp"
open -a "GeoLibre Desktop"
open "/Applications/Onshape CAD.app"   # or: open https://cad.onshape.com
# SketchUp: open "/Applications/SketchUp 2026/SketchUp.app"
```

## Studio scratch (optional)

```bash
mkdir -p pixelloid/_studio/{reaper,blender,sketchup,geolibre,onshape}
# Add _studio/ to .gitignore if projects are large / proprietary
```


### Onshape (browser CAD)

Onshape has **no native Mac desktop app**. The toolbox entry is a thin launcher to `https://cad.onshape.com` (Chrome `--app` when available). Sign in with your PTC/Onshape account on first use. Prefer STEP/Parasolid exports into `_studio/onshape/` or Blender imports for Pixelloid/3D handoff.
