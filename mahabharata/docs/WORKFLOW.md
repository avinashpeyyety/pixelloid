# Mahābhārata episode workflow

**North star:** each episode is a **3D render** (Blender on MacBook Air) whose **key imagination panels** come from the **Grok Imagine API** — same Ep 09/10 art bar (3:2 · ≥1536×1024 · carved cartouche · character locks). Ken Burns on flat plates is the **legacy** player path until the 3D player ships.

```
1. Script (episodes/<id>/script.js beats)
2. GATE D-dialogue — python3 tools/dialogue_review.py episodes/<id> --report
3. Cast sheet + plate bible (copy episodes/_template/plate-bible.json)
4. GATE A/B — python3 tools/logic_review.py episodes/<id>/plate-bible.json --report
5. Key Imagine panels (Grok Imagine API) — scene master, cast locks, beat keyframes
6. GATE C — python3 tools/stills_review.py episodes/<id>
          + visual report (docs/GATE_C_TEMPLATE.md) vs Ep 10 vow/arrows
7. 3D block — SketchUp (optional architecture/stage) → Blender scene under
   pixelloid/_studio/blender/mahabharata/<id>/ (or episodes/<id>/blender/)
8. Map Imagine panels into 3D — camera boards, set dressings, hero billboards /
   plane textures / environment plates (panel = locked art; geometry = motion)
9. Blender render — shot layout matching script beats; export stills or video
   proxies into episodes/<id>/renders/ (git LFS or publish-only; see TOOLING.md)
10. Grok TTS Orion → audio/ (`tools/render_orion_voice.sh`) — named Hindustani
    raga in script.js; optional REAPER stem mix
11. GATE D — final install check (speaker on panel, action visible, 3D cut matches beat)
12. Registry live · commit · publish-pages
```

FAIL at 2, 4, 6, or 11 **blocks** Imagine commit, 3D ship, and publish.

## Dual output (transition)

| Layer | Source of truth | Notes |
|-------|-----------------|-------|
| **Key panels** | Grok Imagine API | Unchanged bar: locks, 3:2, GATE C. Stored under `episodes/<id>/stills/` |
| **Motion / space** | Blender 3D | Primary for new work. Imagine panels are **key art**, not the only pixels on screen |
| **Legacy player** | 2D Canvas Ken Burns | Still live on github.io until `play.html` consumes 3D / hybrid cuts |

Do **not** treat Blender output as a silent replacement for GATE C panels. Every named face on a hero panel still passes Imagine locks.

## Art — how to hit the Ep 10 bar (Imagine)

Read `STYLE.md` before any `image_gen` / `image_edit`.

### Why 01–09 look weaker

Those plates are 1280×720 16:9 `image_edit`s of Ep 01 `plate-wide-gold.jpg` (thin lotus-mat, wide establishing). Ep 10 was generated native **1536×1024 3:2** with a carved cartouche and heroic medium shots. Output size follows the first input image. **Never start from 720p.**

### Preferred factory (key panels)

| Step | Who | Why |
|------|-----|-----|
| New **scene master** + first **cast locks** | grok.com Imagine (human beauty pass) *or* Grok Build / Imagine API `image_gen` with `aspect_ratio: "3:2"` | Needs an eye; first canvas sets every later panel |
| Beat **key panels** | Imagine API `image_edit` | Consistency from locks |
| Dimension gate | `stills_review.py` | If it is 1280×720, discard and redo |
| **3D scene** | Blender (+ optional SketchUp block) | Camera + set motion around locked panels |

If Imagine returns 720p: **do not ship**. Regenerate with `3:2` and a 1536×1024 first ref (Ep 10 `field-master.jpg` or the new scene master).

### Imagine calls

**Scene master** (`stills/_locks/<scene>-master.jpg`):

```
image_gen
  aspect_ratio: "3:2"
  prompt: {prompt_prefix} + this episode’s empty-or-distant-ranks locus
```

Then `image_edit` that result with Ep 10 `field-master.jpg` as an extra ref if the frame/palette drifted. Do **not** pass Ep 01 gold.

**Cast lock** (`stills/_locks/<id>.jpg` — that person only):

```
image_edit
  aspect_ratio: "3:2"
  image: [new scene master, optional prior 3:2 lock of the same person]
  prompt: one figure, solo, matching cast-sheet tokens; keep cartouche and canvas
```

Prior 720p locks (Ep 09 Arjuna, etc.) may be a **later** image in a multi-image edit only. First image = 3:2 master.

**Beat key panel** (hero imagination still for this beat):

```
image_edit
  aspect_ratio: "3:2"
  image: [scene master, only the cast locks in cast_present]
  prompt: {prompt_prefix} + plate.prompt  (describe what changes; keep frame/camera)
```

### Legal Imagine refs

| Allowed | Forbidden |
|---------|-----------|
| Ep 10 `_locks/field-master.jpg` (style spine) | Ep 01 `stills/plate-wide-gold.jpg` |
| This episode `_locks/*-master.jpg` | Ep 10 `plate-vow.jpg` / `plate-arrows.jpg` / fall / bed unless those heroes are in `cast` |
| `_locks/<id>.jpg` for ids in this bible’s `cast` | Any `stills/plate-*.jpg` from another episode |
| Ep 09 `_locks/krishna.jpg` when Krishna is on a plate | A newly invented Krishna face |
| Ep 09 `_locks/arjuna.jpg` when Arjuna is on a plate | A newly invented Arjuna |
| Ep 10 `_locks/bhishma.jpg` / `shikhandi.jpg` when those people are on a plate | Ep 10 figure *plates* unless those heroes are in `cast` |
| This episode `_locks/<id>.jpg` for any other named face | Jewelry/skin/crown/body-type drift across plates |
| | Any 1280×720 file as the **first** `image_edit` input |

## 3D — Blender (Air)

See monorepo [`TOOLING.md`](../../TOOLING.md).

1. **Block** (optional): SketchUp for architecture / stage → import or rebuild in Blender.
2. **Scene:** one Blender file per episode under `_studio/blender/mahabharata/<id>/` (scratch) or `episodes/<id>/blender/` if small enough to track.
3. **Panel mapping:** assign GATE C–passed Imagine key panels as camera boards, backdrop planes, or hero cards timed to `script.js` beats. Geometry and camera do the move; panels stay on-bar.
4. **Render:** match beat timing; export proxies to `episodes/<id>/renders/`. Prefer proxies in gitignore / LFS; ship only what the web player needs.
5. **Hybrid cut:** until the 3D player is live, stills from the Blender camera may feed the legacy Ken Burns player **only if** they still satisfy GATE C dimensions when used as plates — otherwise keep Imagine plates in the 2D player and treat 3D as offline / preview.

## Agents

| Agent | Responsibility |
|-------|----------------|
| **writer** | Beats, dialogue, timing |
| **panel-logic** | Lore, props, apparatus, cast, **canvas/frame/camera**, **09/10 face locks**, **source cites** — blocks ship on FAIL |
| **art** | Imagine API key panels only after GATE B PASS; 3:2; Ep 10 field-master; no 720p first-input |
| **3d** | Blender scene + panel mapping after GATE C PASS; SketchUp block optional |
| **voice** | Orion TTS matching beat text; REAPER mix optional |
| **ship** | Registry, NEXT, vault daily, Pages |

## Tools

```bash
python3 tools/dialogue_review.py episodes/<id> --report
python3 tools/logic_review.py episodes/<id>/plate-bible.json --report
python3 tools/stills_review.py episodes/<id>
open -a Blender
# optional: open "/Applications/SketchUp 2026/SketchUp.app"
```

- Human / model visual pass — open stills, fill `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md`

## Style master

**Canvas / density:** `episodes/10-bhishma-fall/stills/_locks/field-master.jpg`  
**Eye check (frame):** `episodes/10-bhishma-fall/stills/plate-vow.jpg`  
**Character-model bar:** Ep 09 Krishna + Arjuna; Ep 10 Bhishma + Shikhandi + field-master.  
**Krishna look lock:** `episodes/09-gita/stills/_locks/krishna.jpg`  
**Krishna eye check:** `episodes/09-gita/stills/plate-counsel.jpg`  
**Sources:** each beat ≥2 of BORI/Debroy, Gita Press Gorakhpur, K.M. Ganguli.  
Never photoreal. Never Ep 01 gold as an image. Subsequent faces match 09/10. See `STYLE.md`.
