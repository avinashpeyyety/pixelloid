# Ep 02: Krishna regenerate prompts (Ep 04 lock)

**Path:** SuperGrok consumer Imagine on grok.com only (Avinash's subscription). Never use api.x.ai or paid xAI credits.

**Look lock:** `mahabharata/characters/krishna-lock.md`. Krishna ref = `episodes/04-akshayapatra/stills/_locks/krishna.jpg` (Ep 04 look). Eye-check against Ep 04 `plate-grain.jpg` (face) and `plate-krishna.jpg` (body). **Count Krishna's hands: exactly two.**

**Rules:** 3:2 landscape, ≥1536×1024. Attach only the listed refs, in order. Never attach Ep 01 `plate-wide-gold.jpg` or any finished `plate-*.jpg`. No text, watermark, gore, flute or tall crown on Krishna.

## 1. Ep 02 `wide` → `plate-wide.jpg`

**Why:** Krishna drift: saturated cobalt skin, tall gold crown, short hair.

**Beat:** In the court of King Drupada, suitors gather for Draupadi’s swayamvara.

**Save as (JPG):** `mahabharata/episodes/02-swayamvara/stills/_inbox/consumer-imagine/plate-wide.jpg`. Import moves it to `mahabharata/episodes/02-swayamvara/stills/plate-wide.jpg`, replacing the current file. Download from grok.com as **.jpg**. If you get PNG/WEBP, convert first: `python3 -c "from PIL import Image; Image.open('in.png').convert('RGB').save('plate-wide.jpg', quality=92)"`. Keep 3:2 (1728×1152 from SuperGrok is fine).

**Attach refs (in this order):**

- `mahabharata/episodes/02-swayamvara/stills/_locks/hall-master.jpg`
- `mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `mahabharata/episodes/02-swayamvara/stills/_locks/drupada.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Panchala hall master. Panchala swayamvara durbar, same layout as before: King Drupada (attached lock: aged Panchala king, noble lined face, dark-grey beard, gold royal crown of Panchala, indigo-and-gold royal angavastram; not Bhishma, not Drona) sits on a carved gold throne at the top of red-carpeted steps, centre. Krishna stands as an honoured guest at the left of the throne on the top step, one hand resting in greeting on Drupada's hand and the other relaxed at his side. Krishna exactly as the attached Ep 04 Krishna lock: youthful divine adult, clean-shaven soft oval face, warm amber-brown almond eyes, gentle playful closed-lip smile, white U-shaped Vaishnava tilak with a thin saffron centre line; soft pale silvery dusty-blue skin with cool lavender-grey shading (not saturated cobalt or navy blue); long glossy black curly ringlets falling loose past his shoulders; a slim gold jeweled floral hair band (not a tall crown) with one peacock feather tucked upright at the side of his head; gold jhumka earrings, layered gold necklaces with emerald and ruby pendants, gold armlets with a green gem, gold bangles; thick garland of white jasmine with pink-red rose clusters; bare chest, bright saffron-yellow pitambar dhoti with gold border, crimson sash at the waist with a touch of green, yellow angavastram over his left shoulder; slender graceful build; exactly two arms and two hands; no armor, no tall crown, no flute, no bow. Crowned princes and suitors with bows stand on the hall floor in the foreground at left and right, at equal human scale. All women and princesses appear ONLY on the upper balconies, peering from behind curtains and jali, never on the court floor. Ornamental round mirror medallion high above the throne, a saffron banner, warm cream-saffron-gold light through carved pillars. Anatomy check: every figure has exactly two arms and two hands with five fingers each; Krishna has one left hand and one right hand only — no extra arm, no second right hand. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Drona. No Arjuna. No giant figures. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 2. Ep 02 `wide-gold` → `plate-wide-gold.jpg`

**Why:** Krishna drift: saturated cobalt skin, short hair. Arjuna also wears gold chest armor here, which goes against the Ep 09 lock; the prompt corrects that too.

**Beat:** Once more Arjuna proves the lesson of the garden: see only what must be hit.

**Save as (JPG):** `mahabharata/episodes/02-swayamvara/stills/_inbox/consumer-imagine/plate-wide-gold.jpg`. Import moves it to `mahabharata/episodes/02-swayamvara/stills/plate-wide-gold.jpg`, replacing the current file. Download from grok.com as **.jpg**. If you get PNG/WEBP, convert first: `python3 -c "from PIL import Image; Image.open('in.png').convert('RGB').save('plate-wide-gold.jpg', quality=92)"`. Keep 3:2 (1728×1152 from SuperGrok is fine).

**Attach refs (in this order):**

- `mahabharata/episodes/02-swayamvara/stills/_locks/hall-master.jpg`
- `mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `mahabharata/episodes/02-swayamvara/stills/_locks/arjuna.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Panchala hall master. Heroic medium, exactly two adult men, same layout as before: Arjuna in the left foreground, chest-up, quiver of arrows on his back and the great bow upright beside him, calm and proud after winning the swayamvara. Arjuna (attached Arjuna lock, Ep 09 face: noble adult warrior prince, gold crown over dark hair, dark mustache, cream-white dhoti and cream angavastram, gold belt, quiver on back; no gold chest armor, no peacock feather, never a flower garland). Krishna stands just behind him at the right as an honoured guest, looking warmly toward the viewer with a knowing smile, hands relaxed. Krishna exactly as the attached Ep 04 Krishna lock: youthful divine adult, clean-shaven soft oval face, warm amber-brown almond eyes, gentle playful closed-lip smile, white U-shaped Vaishnava tilak with a thin saffron centre line; soft pale silvery dusty-blue skin with cool lavender-grey shading (not saturated cobalt or navy blue); long glossy black curly ringlets falling loose past his shoulders; a slim gold jeweled floral hair band (not a tall crown) with one peacock feather tucked upright at the side of his head; gold jhumka earrings, layered gold necklaces with emerald and ruby pendants, gold armlets with a green gem, gold bangles; thick garland of white jasmine with pink-red rose clusters; bare chest, bright saffron-yellow pitambar dhoti with gold border, crimson sash at the waist with a touch of green, yellow angavastram over his left shoulder; slender graceful build; exactly two arms and two hands; no armor, no tall crown, no flute, no bow. Cream-saffron-gold Panchala hall with carved pillars behind them. Anatomy check: every figure has exactly two arms and two hands with five fingers each; Krishna has one left hand and one right hand only — no extra arm, no second right hand. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## After generation

- **Ep 02:** `cd mahabharata && python3 tools/import_consumer_stills.py 02-swayamvara --force` (`--force` is needed because the plate files already exist; inbox .md files are ignored). Once **every** Krishna plate in the episode matches the Ep 04 look, `cp episodes/04-akshayapatra/stills/_locks/krishna.jpg episodes/02-swayamvara/stills/_locks/krishna.jpg` (byte copy of the Ep 04 lock). Then run `python3 tools/stills_review.py episodes/02-swayamvara --require` and `python3 tools/install_review.py episodes/02-swayamvara --report`. Bump the plate cache: the player loads plates with `?v=<voice.cache>-plates`, so change `voice.cache` in `episodes/02-swayamvara/script.js` (currently `"ep02-orion"`), e.g. append `-kr1`. That also re-fetches audio, which is harmless.
