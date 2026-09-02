# Mahābhārata — visual style bible

Series spine for all episodes. Change *locus* and *secondary accent* by parva; keep **canvas, frame, and camera** locked to the Ep 10 bar.

**Art bar (mandatory from Ep 10 on):** `episodes/10-bhishma-fall/stills/_locks/field-master.jpg` (scene) and `episodes/10-bhishma-fall/stills/plate-vow.jpg` (figure density — **look at it, do not attach it** unless Bhishma + Shikhandi are in `cast_present`).

Ep 01 `plate-wide-gold.jpg` is **archive**. Palette mood may be described in words. **Never attach it as an Imagine image ref** (Drona bleeds; it is 1280×720 16:9 and collapses density).

## Canvas bar — do not ship below this

| Spec | Rule |
|------|------|
| **Minimum pixels** | **1536×1024** |
| **Aspect** | **3:2** (`image_gen` / `image_edit` `aspect_ratio: "3:2"`) |
| **Forbidden** | 1280×720, 16:9 banners, any single-image edit of a 720p file |
| **Better** | Same 3:2 with *more* pixels (e.g. 1920×1280) — never a different aspect “because HD” |
| **Verify** | `python3 tools/stills_review.py episodes/<id>` must PASS before GATE C |

Ken Burns `cover`-crops 3:2 into the 16:9 player. That is intended. Do **not** generate 16:9 to “fit the player.”

## Spine

| Layer | Rule |
|-------|------|
| **Runtime** | 2D Canvas, Imagine plates + Ken Burns / crossfade |
| **Master look** | Ep 10 field-master — carved cartouche, cream–saffron–gold, Amar Chitra line + metalwork |
| **Figures** | Painted-comic / Amar Chitra — engraved armor, refined linework, **not** photoreal, **not** airbrushed movie-still |
| **Stage** | **Carved gold-and-lotus cartouche integrated into the painting** (oval / scalloped wood). Not four lotus stickers on a cream mat |
| **Camera** | **Heroic medium** — named cast fills the frame. Distant ranks OK in the background only |
| **Voice** | One kathavachak (Acharya tone) |
| **Music** | Named Hindustani raga under Orion (never default flute+tabla on Ep 09+) |


## Krishna look lock (canonical — Ep 09)

Krishna looks right in Episode 09. That face and body is the series lock. Later episodes **match it**; they do not drift.

| Spec | Rule |
|------|------|
| **Lock image** | `episodes/09-gita/stills/_locks/krishna.jpg` — attach whenever Krishna is in `cast` |
| **Eye check** | `episodes/09-gita/stills/plate-counsel.jpg` |
| **Canvas** | cream–saffron–gold carved cartouche, **1536×1024**, **3:2** |
| **Face / body** | Dusty-blue skin, youthful divine adult, dark eyes, serene smile, U-tilak |
| **Tokens** | Gold crown + **one peacock feather**, dark curly hair, yellow **pitambar**, **flower garlands**, gold jewelry, **reins / charioteer** |
| **Forbidden** | Photoreal, flute, bow, child Krishna, second Krishna, sage robes |

Do **not** restyle Ep 01–08. Enforced from Ep 12 on (`logic_review.py`).

## Do

- Generate a **new episode scene master** at 3:2 / ≥1536×1024 first (`_locks/<scene>-master.jpg`)
- `image_edit` beat plates **from that master** + **solo** cast locks
- If a prior-episode lock is 720p (Ep 01–09), use it only as a **secondary** ref in a **multi-image** edit whose first image is a 1536×1024 master, with `aspect_ratio: "3:2"`
- Prepend `prompt_prefix` from the plate-bible to every Imagine call
- Compare stills to Ep 10 `plate-vow.jpg` / `plate-arrows.jpg` with your eyes (GATE C quality)

## Don’t

- Attach Ep 01 `plate-wide-gold.jpg` as an image ref
- Attach Ep 10 figure plates (`plate-vow`, `plate-arrows`, `plate-fall`, `plate-bed`, Bhishma/Shikhandi locks) unless those people are in this episode’s `cast`
- Single-image-edit a 1280×720 lock (output inherits 720p)
- Thin rectangular lotus border on empty cream mat
- Tiny heroes in a wide landscape as the A-shot
- Photoreal / live-action / 3D CGI people
- Mix 720p-cinematic and 3:2-cartouche styles in one episode
- Invent a new Krishna — always seed from the Ep 09 lock

## Fish’s Eye apparatus (Ep 02+ lock)

1. **Ground pool** with live fish swimming (the real target)
2. **Large ornamental circular mirror** high under the **ceiling** (aiming sight only)
3. **Aim split:** eyes look **up into the mirror**; arrow aims **down** at the fish eye in the pool
4. No ceiling aquarium / fish tank
5. Archer stands **beside** the pool, never in it

## Assets pipeline

```
script → cast-sheet + plate-bible (canvas 3:2, prompt_prefix, scene_lock)
      → GATE A/B  python3 tools/logic_review.py episodes/<id>/plate-bible.json --report
      → Imagine scene master at 3:2 from Ep 10 field-master (style only)
      → Imagine solo cast locks at 3:2; Krishna lock = Ep 09 `_locks/krishna.jpg`
      → per-beat plates (image_edit from those locks — never from 720p)
      → GATE C  python3 tools/stills_review.py episodes/<id>
             + visual report vs Ep 10 vow/arrows
      → TTS → ship
```

## Pose library

Beat scripts may set `pose` per role:

| Pose | Meaning | Use |
|------|---------|-----|
| `hips` | Hands on hips, warrior ready | Default princes / idle |
| `teach` | Point / instruct toward target | Drona teaching |
| `bow` | Drawing / holding bow | Arjuna aiming |
| `grief` | Lowered arms, softer stance | Failure, exile |
| `vow` | Hand on heart / raised resolve | Oath, “Loose.” |

## Cast codes (Ādi training)

| Role | Robe | Marks |
|------|------|--------|
| Drona | Saffron | White beard + mustache, cream angavastram, staff |
| Arjuna | Cream-white dhoti, gold belt | Gold crown, dark mustache, quiver, Gandiva — **no** peacock feather, **no** flower garland |
| Other princes | Muted jewel tones | Mustache, no crown (or light) |

War-parva Arjuna lock (Ep 09+): gold crown, dark mustache, cream-white dhoti, quiver — never Krishna’s garland, never a second Arjuna.

## Parva accents

| Arc | Accent |
|-----|--------|
| Ādi / training | Garden gold hour, peepal, palace silhouette — **still** 3:2 cartouche |
| Vana | Cooler mist; Ajanta softness |
| Sabhā | Miniature architecture |
| War | Higher contrast; Ep 10 metal + dust |

Never put production API keys in the browser. Generate stills offline; commit licensed assets only.

## Imagine prompt prefix (copy onto every call)

Use the episode bible’s `prompt_prefix`. Default:

> Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame **integrated into the artwork** (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes.

Then the beat `prompt` from the bible.

**Tool args:** `aspect_ratio: "3:2"`. First image on `image_edit` must already be ≥1536×1024.

## Files

- Player: `js/main.js`
- Beats: `episodes/*/script.js`
- Stills: `episodes/*/stills/`
- Template: `episodes/_template/plate-bible.json`
- Logic: `docs/PANEL_LOGIC.md` · `docs/WORKFLOW.md` · `tools/logic_review.py` · `tools/stills_review.py` · `AGENTS.md`
- Live: https://avinashpeyyety.github.io/pixelloid/mahabharata/
