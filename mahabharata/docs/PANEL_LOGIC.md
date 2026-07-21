# Panel Logic Review Agent

**Role:** Gate every plate decision for *lore truth*, *prop realism*, *character lock*, and *style lock* before Imagine and again after generation.

**When to run:** After script beats · after plate-bible draft · after each plate batch · before commit.

## Pass criteria (all must pass)

### 1. Lore / narrative

| Check | Rule |
|-------|------|
| Beat match | Panel depicts the beat’s text, not a different moment |
| Continuity | Same scene props persist (apparatus, pool, dais) unless beat changes locus |
| Reveal order | Secrets stay hidden until script reveals them (e.g. brahmin = Arjuna only after hit/garland if script says so) |

### 2. Prop physics (no fantasy junk)

| Check | Rule |
|-------|------|
| Real-world read | Every prop must be readable as a real object (bow, garland, pool, glass vessel) |
| No orphan props | No floating weapons, random sculpture-bows, or props with no story role |
| Scale | Bow height, pool diameter, ceiling mount scale match palace architecture |
| Aim geometry | Archer’s **eyes on the pool reflection**; arrow path aims **up** at the real target |

### 3. Fish’s Eye apparatus (canonical for Ep 02+)

This is the **only** allowed matsya target setup unless a future ep bible overrides it:

1. **Target:** Live fish swimming in a **large circular ornamental sealed glass aquarium** (flat bottom, ornate rim), filled with water  
2. **Mount:** **Chandelier-style** hang from a **high ceiling** medallion via slender chains/rods — aquarium sits **well above human eye level**  
3. **Clear view:** **No** wooden cradle, **no** thick horizontal beams or box frames that obstruct the fish  
4. **Motion:** Fish clearly **inside water** in the aquarium  
5. **Mirror:** Circular **water pool on the floor** under the aquarium shows a **clear reflection** of the fish  
6. **Task:** Hit the **eye of the real fish above** while **looking only at the reflection below**  
7. **Forbidden:** Dry fish on pole; fish only in floor pool as target; aquarium at eye/chest height; wooden beam cradle; view-blocking horizontal supports

### 4. Character lock

| Check | Rule |
|-------|------|
| Face / hair | Same face shape, hair, age, skin tone across plates |
| Costume | Same palette and garments per role for the episode |
| Marks | Same jewelry / marks; no random crown swaps mid-ep |
| Cast sheet | Every named person must match the episode cast sheet |

### 5. Style lock

| Check | Rule |
|-------|------|
| Master ref | Match Ep 01 `plate-wide-gold.jpg` language |
| Mode | **Stylized painted comic / Amar Chitra charm** only |
| Forbidden | Photoreal faces, live-action skin, 3D CGI people, mixed style in one ep |
| Frame | Ornate lotus border every plate |
| Light | Warm cream–saffron–gold hour |

## Review output format

Write `episodes/<ep>/logic-reviews/RR-NN-<stage>.md`:

```markdown
# Logic review — <episode> — <stage>
Status: PASS | FAIL
Reviewer: panel-logic agent

## Plate: <id>
- Lore: PASS/FAIL — …
- Props: PASS/FAIL — …
- Apparatus: PASS/FAIL — … (N/A if no fish)
- Characters: PASS/FAIL — …
- Style: PASS/FAIL — …

## Blocking issues
1. …

## Required fixes before next stage
1. …
```

**Rule:** `FAIL` blocks Imagine commit and publish. Fix bible or regenerate; re-review.

## Workflow gates

```
script beats
    → [GATE A] logic review of beat text + prop list
plate-bible.json + cast-sheet
    → [GATE B] logic review of every plate spec
Imagine / image_edit (style + cast refs only)
    → [GATE C] visual logic review of each still
install stills + TTS
    → [GATE D] final checklist vs bible
ship
```
