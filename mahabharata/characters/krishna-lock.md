# Krishna — canonical character lock (Ep 04 look)

**Status:** CANONICAL from 2026-10-05, by Avinash's direction ("keep Krishna as close as possible to the Ep 04 render everywhere").
This **supersedes the Ep 09 lock** (`episodes/09-gita/stills/_locks/krishna.jpg`) as the series look. The Ep 09 face is the same
lineage, but Ep 09 wears a heavy gold crown. Later episodes drifted to saturated cobalt skin and tall mukuts (Ep 02, Ep 12, Ep 15). New and regenerated plates match **this** file.

## Visual reference (Ep 04 *Akshayapatra*)

| Role | File | Use |
|---|---|---|
| **Lock image (attach in Imagine)** | `episodes/04-akshayapatra/stills/_locks/krishna.jpg` (1728×1152, 3:2) | Attach whenever Krishna is in `cast_present`. It is the first Krishna ref, before any other cast lock |
| Eye-check: face / smile / hair band | `episodes/04-akshayapatra/stills/plate-grain.jpg` | Close-up. Compare with it, don't attach it, unless the face drifts after two tries |
| Eye-check: full body / garments | `episodes/04-akshayapatra/stills/plate-krishna.jpg` | Full figure walking. Compare with it, don't attach it |
| **NOT the reference** | `episodes/04-akshayapatra/stills/plate-wide-gold.jpg` | Off-lock: deep royal-blue skin and a tall crown. Don't use it as the look |

## Tokens (every plate that lists `krishna`)

- **Age / build:** youthful divine adult (looks about 20), never a child. Slender, graceful and gently athletic, never bulky. Same human scale as other adults.
- **Skin:** **soft pale silvery dusty-blue** (moonlit blue-grey) with cool lavender-grey shading. **Not** saturated cobalt, royal, navy or teal blue, and not grey-white.
- **Face:** clean-shaven soft oval face with gentle arched dark brows. Large **warm amber-brown almond eyes**. A **gentle, playful, closed-lip smile** with rosy lips.
- **Tilak:** white U-shaped Vaishnava **urdhva-pundra** with a thin saffron/red centre line, from brow to hairline.
- **Hair:** **long, thick, glossy black curly ringlets** falling loose past the shoulders.
- **Headwear:** a **slim gold jeweled floral hair band / tiara-chain** worn over the curls, **not a tall crown or mukut**. **One peacock feather** is tucked upright at one side of the head (his right, viewer's left on a front view).
- **Jewelry:** gold jhumka/kundala drop earrings with a small green drop. Layered gold necklaces: a choker plus long chains with **emerald and ruby** pendants. Gold armlets (bajuband) set with a green gem on both upper arms. Gold bangles/kadas on both wrists. Gold waist belt.
- **Garland:** a thick **vaijayanti mala** of **white jasmine with pink-red rose clusters**, reaching the waist or below.
- **Garments:** bare chest. **Bright saffron-yellow pitambar** dhoti with a gold border. **Crimson/maroon sash** at the waist with a touch of green cloth. **Yellow angavastram** draped over the left shoulder and flowing.
- **Anatomy:** **exactly two arms and two hands** (one left, one right, five fingers each). Never a third arm or a second right/left hand, except a deliberate, bible-listed Vishvarupa beat.
- **Props by parva:** Vana/court episodes: none required. War episodes (Ep 09+): **charioteer reins**, held by the hand the bible names.
- **Style:** premium painted comic / Amar Chitra mythology with refined ink linework and soft painterly shading. Warm cream-saffron-gold light. Carved gold-and-lotus cartouche. 3:2, ≥1536×1024 (SuperGrok gives 1728×1152).

## Forbidden on Krishna

Saturated cobalt/royal/navy skin · tall heavy gold crown or mukut · armor or gold breastplate · flute (war and court episodes) · bow · mustache or beard · child Krishna · a second Krishna · extra arms or hands · saffron sage robes · photoreal skin · muscular bodybuilder build.

## Prompt block (paste into every Krishna plate prompt)

```text
Krishna exactly as the attached Ep 04 Krishna lock: youthful divine adult, clean-shaven soft oval face, warm amber-brown almond eyes, gentle playful closed-lip smile, white U-shaped Vaishnava tilak with a thin saffron centre line; soft pale silvery dusty-blue skin with cool lavender-grey shading (not saturated cobalt or navy blue); long glossy black curly ringlets falling loose past his shoulders; a slim gold jeweled floral hair band (not a tall crown) with one peacock feather tucked upright at the side of his head; gold jhumka earrings, layered gold necklaces with emerald and ruby pendants, gold armlets with a green gem, gold bangles; thick garland of white jasmine with pink-red rose clusters; bare chest, bright saffron-yellow pitambar dhoti with gold border, crimson sash at the waist with a touch of green, yellow angavastram over his left shoulder; slender graceful build; exactly two arms and two hands; no armor, no tall crown, no flute, no bow.
```

## Pipeline notes

- `stills_review.py` (GATE C) wants `episodes/<id>/stills/_locks/krishna.jpg`. When an episode is regenerated to this lock, replace that file with a **byte copy** of `episodes/04-akshayapatra/stills/_locks/krishna.jpg`.
- Eye-check every Krishna plate against `plate-grain.jpg` (face) and `plate-krishna.jpg` (body) before import. **Count his hands.**
- Regenerate prompts for already-shipped drifted plates: Ep 02 / Ep 12 / Ep 15 `stills/_inbox/consumer-imagine/REGEN-KRISHNA.md`.
