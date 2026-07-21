# Mahābhārata — visual style bible

Series spine for all episodes. Change *locus* and *secondary accent* by parva; keep figure language stable.

## Spine

| Layer | Rule |
|-------|------|
| **Runtime** | 2D Canvas, **cinematic plates** (Imagine) + Ken Burns / crossfade |
| **Master look** | Ep 01 closing plate (`plate-wide-gold.jpg`) — warm cream–saffron–gold comic illustration |
| **Figures** | **Charming comic-book / painted mythology** — stylized, NOT photoreal people |
| **Stage** | Ornate lotus frame, peepal tree, palace silhouette, golden-hour sky; full-frame plates |
| **Voice** | One kathavachak (Acharya tone), not multi-cast Hollywood |
| **Music** | Soft flute (bansuri-like) + light tabla under dialogue |

## Do

- Match **plate-wide-gold** for palette, frame, light, and character design language
- **Stylized comic charm** (Amar Chitra / painted epic feel) — soft faces, clear silhouettes
- Drona = saffron + long white beard + topknot; Arjuna = dark mustache, simple topknot or light diadem (**no peacock feather**)
- Warrior curly mustaches on princes; peepal + bird eye as sacred focus
- Ornate lotus border on every plate for series cohesion
- **Panel-logic agent** at every gate — see `docs/PANEL_LOGIC.md` + `tools/logic_review.py`

## Don’t

- Photoreal / live-action faces or 3D CGI people
- Stick-figure / low-poly puppets as final art
- Cold blue-grey “realistic dusk” that breaks the gold comic world
- Busy multi-character lip-sync
- Orphan props (decorative bows by Draupadi, dry fish-on-a-stick “targets”)
- Mix photoreal + comic styles inside one episode

## Fish’s Eye apparatus (Ep 02+ lock)

1. Fish swims in a **large circular ornamental sealed aquarium** (flat bottom, gold/bronze rim)  
2. **Chandelier hang** from high ceiling — **above eye level**; slender chains only  
3. **No** wooden cradle or view-blocking horizontal beams  
4. **Floor pool** reflects the aquarium — archer aims by **looking only at the reflection**  
5. Hit the **eye of the real fish above**

## Assets pipeline

```
script → cast-sheet + plate-bible
      → GATE A/B logic_review.py
      → Imagine locks (style + cast + apparatus)
      → per-beat plates (image_edit)
      → GATE C visual logic review
      → TTS → ship
```

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

Never put production API keys in the browser. Generate stills offline; commit licensed assets only.

## Imagine prompt seeds

**Master ref:** always attach `plate-wide-gold.jpg` (or current ep’s gold close).

**Any beat plate:** same lotus frame, cream–saffron–gold hour, charming comic characters (not photoreal), peepal + palace silhouette, match cast sheet from episode bible.

**Garden plate:** same world empty of people.

## Files

- Player: `js/main.js`
- Beats: `episodes/*/script.js`
- Stills: `episodes/*/stills/`
- Logic: `docs/PANEL_LOGIC.md` · `tools/logic_review.py` · `AGENTS.md`
- Live: https://avinashpeyyety.github.io/pixelloid/mahabharata/
