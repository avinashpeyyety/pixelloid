# Pixelloid — desktop tooling (Air)

Installed on **MacBook Air** for offline production. Browser shows still ship as pure web (github.io); these apps feed **assets** into the monorepo.

| App | Path | Role in Pixelloid |
|-----|------|-------------------|
| **Blender** | `/Applications/Blender.app` · CLI `blender` | 3D / mesh / animation for Cosmos & Mahābhārata reference; export GLB/glTF or stills into subproject `assets/` or episode `stills/` (never replace Imagine plate bar without review) |
| **REAPER** | `/Applications/REAPER.app` | DAW for score, ambience, SFX; mix Orion TTS + Hindustani beds before dropping stems under `episodes/…/audio/` or kids-grok assets |
| **SketchUp 2026** | `/Applications/SketchUp 2026/SketchUp.app` | Sets, stages, architecture blocking (Chocolate Dance stage, Cosmic pads, Mahābhārata loci); export reference images or geometry for Blender / plate prompts |

## Suggested pipelines

### Audio (kids-grok · chocolate-dance · mahabharata)

1. Generate / gather stems (Orion TTS, raga loops, SFX).
2. Open / create a project under `pixelloid/_studio/reaper/` (gitignored binaries OK; commit only exported WAV/MP3/OGG used by the site).
3. Bounce stems → place in the subproject path the player already loads.
4. Keep Web Audio fallbacks working if a stem is missing.

### 3D / motion (cosmos · mahabharata · chocolate-dance)

1. Block in **SketchUp** when the scene is architectural / stage-like.
2. Detail / animate / light in **Blender**.
3. Export: stills for Imagine refs, or glTF only if a subproject explicitly consumes it (most Pixelloid motion is still Ken Burns on plates).

### Mahābhārata note

Canonical plate bar remains **Grok Imagine** per `mahabharata/AGENTS.md` + `docs/WORKFLOW.md`. Blender/SketchUp are **previs / reference**, not a silent replacement for GATE C stills.

## Open quickly

```bash
open -a Blender
open -a REAPER
open -a "SketchUp"   # or: open "/Applications/SketchUp 2026/SketchUp.app"
```

## Studio scratch (optional)

```bash
mkdir -p pixelloid/_studio/{reaper,blender,sketchup}
# Add _studio/ to .gitignore if projects are large / proprietary
```
