# Ep 15: Krishna regenerate prompts (Ep 04 lock)

**Path:** SuperGrok consumer Imagine on grok.com only (Avinash's subscription). Never use api.x.ai or paid xAI credits.

**Look lock:** `mahabharata/characters/krishna-lock.md`. Krishna ref = `episodes/04-akshayapatra/stills/_locks/krishna.jpg` (Ep 04 look). Eye-check against Ep 04 `plate-grain.jpg` (face) and `plate-krishna.jpg` (body). **Count Krishna's hands: exactly two.**

**Rules:** 3:2 landscape, ≥1536×1024. Attach only the listed refs, in order. Never attach Ep 01 `plate-wide-gold.jpg` or any finished `plate-*.jpg`. No text, watermark, gore, flute or tall crown on Krishna.

## 1. Ep 15 `counsel` → `plate-counsel.jpg`

**Why:** DEFECT FIX. The current plate shows Krishna with two right arms: the raised pointing arm plus a second right forearm and hand holding the reins at the left of the frame.

**Beat:** Lay down your weapons! Step down from your chariots! This weapon spares whoever stands unarmed on the earth.

**Save as (JPG):** `mahabharata/episodes/15-narayanastra/stills/_inbox/consumer-imagine/plate-counsel.jpg`. Import moves it to `mahabharata/episodes/15-narayanastra/stills/plate-counsel.jpg`, replacing the current file. Download from grok.com as **.jpg**. If you get PNG/WEBP, convert first: `python3 -c "from PIL import Image; Image.open('in.png').convert('RGB').save('plate-counsel.jpg', quality=92)"`. Keep 3:2 (1728×1152 from SuperGrok is fine).

**Attach refs (in this order):**

- `mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `mahabharata/episodes/14-drona-fall/stills/_locks/arjuna.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men on one gold chariot, same layout as before: Krishna at the left at the chariot's carved gold front, Arjuna standing at the right. Krishna exactly as the attached Ep 04 Krishna lock: youthful divine adult, clean-shaven soft oval face, warm amber-brown almond eyes, gentle playful closed-lip smile, white U-shaped Vaishnava tilak with a thin saffron centre line; soft pale silvery dusty-blue skin with cool lavender-grey shading (not saturated cobalt or navy blue); long glossy black curly ringlets falling loose past his shoulders; a slim gold jeweled floral hair band (not a tall crown) with one peacock feather tucked upright at the side of his head; gold jhumka earrings, layered gold necklaces with emerald and ruby pendants, gold armlets with a green gem, gold bangles; thick garland of white jasmine with pink-red rose clusters; bare chest, bright saffron-yellow pitambar dhoti with gold border, crimson sash at the waist with a touch of green, yellow angavastram over his left shoulder; slender graceful build; exactly two arms and two hands; no armor, no tall crown, no flute, no bow. Krishna stands three-quarter to the viewer: his RIGHT arm is raised high, index finger pointing to the burning sky, as he commands the whole host to lay down weapons and step down from their chariots. His LEFT hand alone gathers all the charioteer reins together low at his waist. Krishna has exactly two arms: one raised right arm and one left arm holding the reins. No third arm, no extra hand holding reins, no second right hand. Arjuna (attached Arjuna lock, Ep 09 face: noble adult warrior prince, gold crown over dark hair, dark mustache, cream-white dhoti and cream angavastram, gold belt, quiver on back; no gold chest armor, no peacock feather, never a flower garland) stands beside him and listens, Gandiva lowered in one hand, not drawn. Behind them the copper sky glitters with falling golden fire; distant ranks only. Anatomy check: every figure has exactly two arms and two hands with five fingers each; Krishna has one left hand and one right hand only — no extra arm, no second right hand. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## After generation

- **Ep 15:** `cd mahabharata && python3 tools/import_consumer_stills.py 15-narayanastra --force` (`--force` is needed because the plate files already exist; inbox .md files are ignored). Once **every** Krishna plate in the episode matches the Ep 04 look, `cp episodes/04-akshayapatra/stills/_locks/krishna.jpg episodes/15-narayanastra/stills/_locks/krishna.jpg` (byte copy of the Ep 04 lock). Then run `python3 tools/stills_review.py episodes/15-narayanastra --require` and `python3 tools/install_review.py episodes/15-narayanastra --report`. Bump the plate cache: the player loads plates with `?v=<voice.cache>-plates`, so change `voice.cache` in `episodes/15-narayanastra/script.js` (currently `"ep15-kokoro-20261005"`), e.g. append `-kr1`. That also re-fetches audio, which is harmless.
