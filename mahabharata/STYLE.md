# Mahābhārata — visual style bible

Series spine for all episodes. Change *locus* and *secondary accent* by parva; keep figure language stable.

## Spine

| Layer | Rule |
|-------|------|
| **Runtime** | 2D Canvas, **cinematic plates** (Imagine) + Ken Burns / crossfade |
| **Figures** | Painted into plates at **garden-plate realism** (not stick puppets) |
| **Stage** | Full-frame stills timed to beats; slow zoom/pan for life |
| **Voice** | One kathavachak (Acharya tone), not multi-cast Hollywood |
| **Music** | Sparse sitar + tanpura bed under dialogue |

## Do

- Character via **pose + face**, not costume noise
- Warrior **curly mustaches** (default); Drona = **saffron + long white beard**
- Soft warm palette: cream, saffron, indigo, muted leaf green, gold line
- One **locus** per episode (garden, court, forest…) with optional Imagine plate
- Props few and iconic (bow, staff, bird eye)

## Don’t

- All-over **kalamkari / butta** stamping on robes
- Photoreal faces or Raja Ravi Varma oil look as default
- Full 3D character acting in-browser (Blender only for props/plates offline)
- Busy multi-character lip-sync

## Pose library

Beat scripts may set `pose` per role:

| Pose | Meaning | Use |
|------|---------|-----|
| `hips` | Hands on hips, warrior ready | Default princes / idle |
| `teach` | Point / instruct toward target | Drona teaching |
| `bow` | Drawing / holding bow | Arjuna aiming |
| `grief` | Lowered arms, softer stance | Failure, exile (later) |
| `vow` | Hand on heart / raised resolve | Oath, “Loose.” |

## Cast codes (Ādi training)

| Role | Robe | Marks |
|------|------|--------|
| Drona | Saffron | White beard + mustache, cream angavastram, staff |
| Arjuna | Indigo blue | Crown, dark mustache, bow |
| Other princes | Muted jewel tones | Mustache, no crown (or light) |

## Parva accents (future)

| Arc | Accent |
|-----|--------|
| Ādi / training | Current: Bapu + phad garden |
| Vana | Cooler mist; Ajanta softness on plates |
| Sabhā | Miniature architecture plate |
| War edge | Higher contrast; silhouette night |

## Assets pipeline

```
script beats → Canvas puppets
            ↘ Imagine: poster + env plates → episodes/<id>/stills/
            ↘ Optional Blender: prop PNGs → episodes/<id>/props/
```

Never put production API keys in the browser. Generate stills offline; commit licensed assets only.

## Imagine prompt seeds

**Poster:** Bapu line, elongated figures, large almond eyes, saffron Acharya, young archer, bird eye glow, phad border, dusk garden, no photoreal, no dense textile pattern.

**Garden plate:** Empty Hastināpura garden, peepal tree, soft sky wash, cloth texture, Ajanta/Kangra softness, no people, wide plate for puppets.

## Files

- Player: `js/main.js`
- Beats: `episodes/*/script.js`
- Stills: `episodes/*/stills/`
- Live: https://avinashpeyyety.github.io/pixelloid/mahabharata/
