# Shivaji — sketch-story series (Pixelloid)

Kid-friendly, historically careful stories of Chhatrapati Shivaji Maharaj and his companions.
**Audience:** children (6–12). **No gore.** Legend is always labelled as legend.

## Pipeline (hybrid sketch / whiteboard)

| Layer | Choice |
|-------|--------|
| **Keyframes** | Pencil/ink line-art stills made in **SuperGrok (consumer app only)** — never the paid xAI API |
| **Draw-on reveal** | Local free tools: Python (OpenCV/numpy) stroke-order reveal → ffmpeg encode |
| **Color** | Selective color layered after reveal (see palette) |
| **Motion** | Grok Imagine (consumer) **only** for Sh-09 climb and Sh-12 duel, ≤6 s each |
| **Voice** | Narration (Avinash's own voice preferred; local TTS fallback) |
| **Assembly** | ffmpeg / DaVinci Resolve (free) — target 3–4 min |

Why not VideoScribe/Doodly/AI script-to-video: paid subscriptions, stock doodle libraries look generic, and AI story tools weaken character consistency and historical control. Hybrid keeps our own bible + zero extra cost.

## Style rules
1. Paper: warm off-white sketchbook (#F4EEDF), faint grain. Line: graphite + sepia ink, confident single strokes, light cross-hatch for shadow.
2. Everything starts uncoloured; color appears only on **story-meaningful** things.
3. Simple readable silhouettes; max 3 characters per frame; clear faces, gentle expressions.
4. Night scenes = moonlit blue wash, not black. Fire = torch orange glow only.
5. Combat shown as swords crossing, shields, poses — **no blood, no wounds, no death shown**. Tanaji's fall is a quiet cut-away (fallen shield, banner, moon).
6. No text in images. 16:9, 1920×1080.
7. Historically careful: 17th-c. Maratha dress (angarkha, pagadi/pheta, cummerbund, dhal shield, talwar/dandpatta), Sahyadri basalt cliffs, Mughal-held fort with Rajput garrison.

## Palette (muted; **no teal, no gold**)
| Use | Hex |
|-----|-----|
| Paper | #F4EEDF |
| Graphite line | #3A3631 |
| Sepia ink | #6B4F3A |
| Torch orange | #D9772B |
| Saffron flag (Bhagwa) | #E8892F |
| Moonlit blue (deep) | #34485E |
| Moonlit blue (light) | #8DA3B8 |
| Muted earth (cliff/khaki) | #9A8C74 |
| Muted leaf green (rare) | #7C8A5E |

## Character sheets (prompt specs)
Common suffix for every prompt: `pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9`

- **Shivaji Maharaj** (~40 in 1670): lean, upright; neat pointed beard and moustache; calm, alert eyes; tall turban (jire-topi style) with a small plume; long angarkha, sash, sword at side; vertical tilak on forehead. Mood: thoughtful leader.
- **Tanaji Malusare**: broad-shouldered veteran, thick curled moustache, warm grin; simple pheta, sleeveless jacket over kurta, round dhal shield, curved talwar. Mood: brave, loyal, cheerful.
- **Suryaji Malusare** (Tanaji's younger brother): slimmer, younger, shorter moustache, pheta, spear or sword; steady eyes. Mood: dependable, rallies others.
- **Udaybhan Rathod** (Rajput fort commander for the Mughals): tall, stern, strong; Rajput turban, side-parted beard, chainmail under jama, long sword. Shown as a worthy opponent, **not a monster**.
- **Jijabai** (Shivaji's mother): dignified older woman, nauvari saree draped over head, kind but firm face; tells stories and gives counsel. (In the popular telling she wishes to see the Mughal flag off Kondhana — label as tradition.)
- **Mavla soldiers** (background): simple silhouettes, pheta, shields, rope coils.
- **The ghorpad (monitor lizard)** — legend only: gentle, cartoon-friendly lizard named *Yashwanti* in the legend.

## Episodes
| # | Title | Status |
|---|-------|--------|
| 01 | **Sinhagad** — the capture of Kondhana, Feb 1670 | Rendered (Kokoro narration) — awaiting Avinash's review |
