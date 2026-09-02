# Mahābhārata episode workflow

```
1. Script (episodes/<id>/script.js beats)
2. GATE D-dialogue — python3 tools/dialogue_review.py episodes/<id> --report
3. Cast sheet + plate bible (copy episodes/_template/plate-bible.json)
4. GATE A/B — python3 tools/logic_review.py episodes/<id>/plate-bible.json --report
5. Scene master at 3:2 / ≥1536×1024 (Imagine; style-ref = Ep 10 field-master only)
6. Solo cast locks at the same canvas
7. Per-beat plates via image_edit (first image = that 3:2 master, never a 720p file)
8. GATE C — python3 tools/stills_review.py episodes/<id>
          + visual report (docs/GATE_C_TEMPLATE.md) vs Ep 10 vow/arrows
9. Grok TTS Orion → audio/ (`tools/render_orion_voice.sh`) — named Hindustani raga in script.js, not default flute+tabla
10. GATE D — final install check
11. Registry live · commit · publish-pages
```

FAIL at 2, 4, 8, or 10 **blocks** Imagine commit and publish.

## Art — how to hit the Ep 10 bar

Read `STYLE.md` before any `image_gen` / `image_edit`.

### Why 01–09 look weaker

Those plates are 1280×720 16:9 `image_edit`s of Ep 01 `plate-wide-gold.jpg` (thin lotus-mat, wide establishing). Ep 10 was generated native **1536×1024 3:2** with a carved cartouche and heroic medium shots. Output size follows the first input image. **Never start from 720p.**

### Preferred factory

| Step | Who | Why |
|------|-----|-----|
| New **scene master** + first **cast locks** | grok.com Imagine (human beauty pass) *or* Grok Build `image_gen` with `aspect_ratio: "3:2"` | Needs an eye; first canvas sets every later plate |
| Beat plates | Grok Build `image_edit` | Consistency from locks |
| Dimension gate | `stills_review.py` | If it is 1280×720, discard and redo |

If Build returns 720p: **do not ship**. Regenerate with `3:2` and a 1536×1024 first ref (Ep 10 `field-master.jpg` or the new scene master).

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

**Beat plate:**

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
| Ep 09 `_locks/krishna.jpg` when Krishna is in `cast` (look lock) | A newly invented Krishna face |
| | Any 1280×720 file as the **first** `image_edit` input |

## Agents

| Agent | Responsibility |
|-------|----------------|
| **writer** | Beats, dialogue, timing |
| **panel-logic** | Lore, props, apparatus, cast, **canvas/frame/camera** — blocks ship on FAIL |
| **art** | Imagine only after GATE B PASS; 3:2; Ep 10 field-master; no 720p first-input |
| **voice** | Orion TTS matching beat text |
| **ship** | Registry, NEXT, vault daily, Pages |

## Tools

```bash
python3 tools/dialogue_review.py episodes/<id> --report
python3 tools/logic_review.py episodes/<id>/plate-bible.json --report
python3 tools/stills_review.py episodes/<id>
```

- Human / model visual pass — open stills, fill `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md`

## Style master

**Canvas / density:** `episodes/10-bhishma-fall/stills/_locks/field-master.jpg`  
**Eye check (frame):** `episodes/10-bhishma-fall/stills/plate-vow.jpg`  
**Krishna look lock:** `episodes/09-gita/stills/_locks/krishna.jpg`  
**Krishna eye check:** `episodes/09-gita/stills/plate-counsel.jpg`  
Never photoreal. Never Ep 01 gold as an image. Subsequent Krishnas match Ep 09. See `STYLE.md`.
