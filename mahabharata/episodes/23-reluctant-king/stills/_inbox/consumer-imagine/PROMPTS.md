# Ep 23 *The Reluctant King* — SuperGrok consumer Imagine prompt pack

**Status:** NOT GENERATED (prompt pack ready 2026-10-29). Next: a browser agent generates all 12 images on grok.com (SuperGrok consumer), saves them here under the exact names, then import + GATE C.

**Path:** grok.com Imagine on Avinash's SuperGrok consumer subscription only. Never api.x.ai / paid xAI credits.

**Drop folder (this folder):** `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_inbox/consumer-imagine/` — save each result under the exact **Save as** name below.

**Generation kit (box):** `/home/box/lab-keep/pixelloid-build/ep23-gen/` — `prompt-NN.txt` (exact prompt, plain ASCII), `manifest.tsv` (Save-as + ordered ref paths), `refs/` (copies of every pre-existing ref).

**Import:** `cd /workspace/pixelloid/mahabharata && python3 tools/import_consumer_stills.py 23-reluctant-king`. `lock-<id>.jpg` → `stills/_locks/<id>.jpg`, `plate-<id>.jpg` → `stills/plate-<id>.jpg`, `poster.jpg` → `stills/poster.jpg`.

**Rules for every image:** aspect **3:2 landscape** (set Aspect Ratio to 3:2 Photo Print after attaching refs), ≥1536×1024. Attach refs in the listed order and **only** the listed refs. **Never** attach `episodes/01-birds-eye/stills/plate-wide-gold.jpg` or any finished `plate-*.jpg`. No text, plaques, speech bubbles, gore, blood, bodies, wounds, modern props, or visible watermark. Every person has exactly two arms and two hands. Generate #1 (palace master) and #2 (Kurukshetra master) first: `crown`, `meditate` and the poster start from #1, `bedside` from #2; the six Ganga plates (`mourn`..`comfort`) start from the pre-existing ganga23 master and can run any time.

**Prompts are plain ASCII** (`x` not ×, `-` not —) — Ep 20 lost one image to a charset-mangled paste. Paste from `prompt-NN.txt` in the kit if the browser mangles this file.

**FAMILY-FRIENDLY RULE:** no gore, no blood, no wounds, no bodies, no pyres, no carrion birds anywhere. Bhishma on `bedside` lies serene on a bed of upright golden arrows that holds him like a couch — reject any arrow through his face or chest, any blood, or Bhishma standing/fighting. Karna, Narada and Dhaumya are never drawn.

**KRISHNA RULE:** Krishna appears on **five** images (`comfort`, `crown`, `meditate`, `bedside`, poster — always off the chariot, no reins). On each the **first character ref** (right after the scene master) is the **Ep 04 Krishna lock** `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`, and the prompt spells out the locked look: pale silvery dusty-blue skin, long loose curls, slim gold band with one peacock feather, white U-tilak, jasmine-rose garland, saffron-yellow pitambar dhoti, crimson sash, exactly two hands. On `meditate` he is still and two-handed — reject any four-armed or cosmic form. Every other image says No Krishna — reject any that shows him. Arjuna only on `renounce`, `brothers`; Bhima only on `brothers`; Bhishma only on `bedside`.

**Already locked (copy-forward):** krishna (Ep 04), draupadi (Ep 04), yudhishthira + arjuna + bhima (Ep 15), kunti (Ep 22), vyasa (Ep 21), bhishma (Ep 10), ganga23-master (= Ep 22 ganga22-master). **New:** palace23-master (#1), kuru23-master (#2). No new character locks.

**Light (ALL DAYLIGHT — no night plate):** `mourn` sunrise; `renounce` morning; `brothers`, `plea` day; `counsel` late afternoon; `comfort` sunset (all on the Ganga); `crown` palace day; `meditate` palace early morning; `bedside` late afternoon at Kurukshetra; poster golden sunset. Reject a moon, stars or a night sky on every image.

**To generate: 12 images** — 2 scene masters + 9 beat plates + 1 poster.

| # | Save as | Imports to | Refs | Light | Cast | Krishna |
|---|---------|-----------|------|-------|------|---------|
| 1 | `lock-palace23-master.jpg` | `stills/_locks/palace23-master.jpg` | 1 | day | — (no people) | — |
| 2 | `lock-kuru23-master.jpg` | `stills/_locks/kuru23-master.jpg` | 1 | late-afternoon daylight | — (no people) | — |
| 3 | `plate-mourn.jpg` | `stills/plate-mourn.jpg` | 4 | sunrise daylight (Ganga) | yudhishthira, kunti | — |
| 4 | `plate-renounce.jpg` | `stills/plate-renounce.jpg` | 4 | early-morning daylight | yudhishthira, arjuna | — |
| 5 | `plate-brothers.jpg` | `stills/plate-brothers.jpg` | 5 | day | yudhishthira, arjuna, bhima | — |
| 6 | `plate-plea.jpg` | `stills/plate-plea.jpg` | 4 | day | yudhishthira, draupadi | — |
| 7 | `plate-counsel.jpg` | `stills/plate-counsel.jpg` | 4 | late-afternoon daylight | yudhishthira, vyasa | — |
| 8 | `plate-comfort.jpg` | `stills/plate-comfort.jpg` | 4 | golden sunset daylight | krishna, yudhishthira | yes (Ep 04 lock = ref 2) |
| 9 | `plate-crown.jpg` | `stills/plate-crown.jpg` | 5 | day | krishna, yudhishthira, draupadi | yes (Ep 04 lock = ref 2) |
| 10 | `plate-meditate.jpg` | `stills/plate-meditate.jpg` | 4 | early-morning daylight | krishna, yudhishthira | yes (Ep 04 lock = ref 2) |
| 11 | `plate-bedside.jpg` | `stills/plate-bedside.jpg` | 5 | late-afternoon daylight | krishna, yudhishthira, bhishma | yes (Ep 04 lock = ref 2) |
| 12 | `poster.jpg` | `stills/poster.jpg` | 4 | golden sunset daylight | krishna, yudhishthira | yes (Ep 04 lock = ref 2) |

## 1. Scene master - the royal hall of the Kuru palace at Hastinapura, by day

**Save as:** `lock-palace23-master.jpg` → imports to `stills/_locks/palace23-master.jpg`

**Light:** day · **Depends on:** none (first)

**Note:** Used by crown, meditate and the poster (attached FIRST on each). Generate this first. Day master: carved sandstone pillars with gold lotus capitals, a golden seat under a white parasol on a raised dais, a small square brick fire-altar with a low flame, golden water jars, conches, garlands, sunlight through tall arched windows; no people; no writing, ornamental carving only.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style, palette and frame of the attached Ep 10 field-master. The royal hall of the Kuru palace at Hastinapura, by day, made ready for a coronation: tall carved sandstone pillars with gold lotus capitals in long rows; a raised stone dais with a golden seat under a white royal parasol; a small square brick fire-altar with a low clean flame before the dais; golden water jars, white conches on a low stand, heaps of marigold and jasmine garlands; bright sunlight streaming through tall arched windows onto a polished stone floor; a clear open foreground for figures to be placed later. No writing, ornamental carving only. Carved gold-and-lotus cartouche integrated into the painting, heroic depth. No people, no named figures. Daylight - no moon, no stars, no night. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no watermark. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 2. Scene master - the quiet riverbank at the edge of Kurukshetra, the empty bed of arrows

**Save as:** `lock-kuru23-master.jpg` → imports to `stills/_locks/kuru23-master.jpg`

**Light:** late-afternoon daylight · **Depends on:** none (pre-existing refs only)

**Note:** Used by bedside only (attached FIRST). Generate second (independent of #1). Late-afternoon day master: grassy bank, small river with reeds, an EMPTY bed of upright golden arrows under a white canopy on four poles, unlit clay lamps, faint distant banners and tents; no people, no bodies, no blood, no carrion birds.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style, palette and frame of the attached Ep 10 field-master. A quiet grassy riverbank at the edge of the battlefield of Kurukshetra, long after the fighting, in late-afternoon golden daylight: a small calm river with reeds; on the bank a low bed made of many upright golden arrows, empty, under a white cloth canopy on four slim poles; a few small unlit clay lamps on the grass beside it; far behind, a few faded banners on the horizon and small distant tents; a clear open foreground for figures to be placed later. Peaceful and grave, the war shown only by implication. Carved gold-and-lotus cartouche integrated into the painting, heroic depth. No people, no named figures. Daylight - no moon, no stars, no night. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no watermark. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 3. Plate `mourn` - cast: yudhishthira, kunti

**Save as:** `plate-mourn.jpg` → imports to `stills/plate-mourn.jpg`

**Beat:** For a month the Pandavas stay by the Ganga, outside the city. Yudhishthira cannot stop grieving for Karna, and Kunti tries to console him.

**Light:** sunrise daylight (Ganga) · **Depends on:** none (pre-existing refs only)

**Note:** ganga23-master is the Ep 22 ganga22 (= Ep 21 ganga21) DAY master (byte copy, already exists) - keep the river, sand and stone steps; repaint in this beat's light with the huts and tents small in the far background. Hard fail: anyone but Yudhishthira and Kunti in the foreground (no Krishna, no Arjuna, no Bhima, no Draupadi, no Vyasa, no Bhishma, no Karna); a night sky; a body or pyre. Kunti must look about sixty in a white sari with a saffron border, no blindfold.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/ganga23-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/kunti.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult figures, one man and one woman, on the worn stone steps down to the wide Ganga at sunrise. Use the attached scene master for the wide Ganga, the pale sand and the worn stone steps down to the water; the thatched huts and a few small tents of the mourning camp stay small in the far background under great trees. On the right Yudhishthira, eldest Pandava, the king who does not want his kingdom (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) sits on a step, his head bowed in grief, his right hand pressed over his eyes and his left hand resting on his knee. On the left Kunti (match the attached Kunti lock - mother of the Pandavas: a mature woman of about sixty with warm brown skin, a gentle strong face, large dark eyes, dark hair streaked with grey in a low knot, a simple white sari with a narrow saffron border drawn over her head, a saffron blouse, a thin gold chain and plain gold bangles; no blindfold, no crown) kneels on the step beside him, her right hand laid gently on his shoulder and her left hand pressed to her heart, consoling him. Exactly four hands in the whole picture. Sunrise on the Ganga: a pale gold sky, the low sun glittering on the wide water, soft mist on the far bank (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no wounds, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. No Bhima. No Draupadi. No Vyasa. No Bhishma. No Duryodhana, no Karna, no Gandhari, no Dhritarashtra, no Narada, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 4. Plate `renounce` - cast: yudhishthira, arjuna

**Save as:** `plate-renounce.jpg` → imports to `stills/plate-renounce.jpg`

**Beat:** 'Our kinsmen are gone,' Yudhishthira tells Arjuna. 'I want no kingdom. I will go to the forest. You rule this earth.'

**Light:** early-morning daylight · **Depends on:** none (pre-existing refs only)

**Note:** ganga23-master is the Ep 22 ganga22 (= Ep 21 ganga21) DAY master (byte copy, already exists) - keep the river, sand and stone steps; repaint in this beat's light with the huts and tents small in the far background. Hard fail: anyone but Yudhishthira and Arjuna (no Krishna, no Bhima, no Draupadi); the diadem must be held OUT in both of Yudhishthira's hands, not on his head; Yudhishthira must not hold the Gandiva or wear chest armor; night sky.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/ganga23-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men facing each other on the sandy bank of the wide Ganga in the morning. Use the attached scene master for the wide Ganga, the pale sand and the worn stone steps down to the water; the thatched huts and a few small tents of the mourning camp stay small in the far background under great trees. On the left Yudhishthira, eldest Pandava, the king who does not want his kingdom (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) stands with a grieving, resolved face, holding his simple gold diadem in both hands, lifted from his head and held out toward his brother. On the right Arjuna (match the attached Arjuna lock: noble adult warrior, dark mustache, tall gold crown, cream-white dhoti and angavastram, gold belt and armlets, quiver on his back, the Gandiva held low and unstrung; no flower garland, no peacock feather) steps back, stunned, his right hand raised with the palm open in protest and his left hand holding the Gandiva low. Exactly four hands in the whole picture. Clear morning daylight by the river: a pale blue sky, soft low sunlight, light mist on the water (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no wounds, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Bhima. No Draupadi. No Kunti. No Vyasa. No Bhishma. No Duryodhana, no Karna, no Gandhari, no Dhritarashtra, no Narada, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 5. Plate `brothers` - cast: yudhishthira, arjuna, bhima

**Save as:** `plate-brothers.jpg` → imports to `stills/plate-brothers.jpg`

**Beat:** Arjuna and Bhima argue back. 'Then why did we fight at all?' cries Bhima. 'A king must act, and protect his people.'

**Light:** day · **Depends on:** none (pre-existing refs only)

**Note:** ganga23-master is the Ep 22 ganga22 (= Ep 21 ganga21) DAY master (byte copy, already exists) - keep the river, sand and stone steps; repaint in this beat's light with the huts and tents small in the far background. Hard fail: anyone but Yudhishthira, Arjuna and Bhima (no Krishna, no Draupadi, no Nakula/Sahadeva as a fourth/fifth brother); Bhima must have the topknot + gold circlet + gold-green armor + mace (not Arjuna's crown); mace resting, never swung; night sky.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/ganga23-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/bhima.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult men on the sandy bank of the wide Ganga by day. Use the attached scene master for the wide Ganga, the pale sand and the worn stone steps down to the water; the thatched huts and a few small tents of the mourning camp stay small in the far background under great trees. In the centre Yudhishthira, eldest Pandava, the king who does not want his kingdom (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) sits on a low stone seat, troubled, his head lowered, his hands folded in his lap. On the left Arjuna (match the attached Arjuna lock: noble adult warrior, dark mustache, tall gold crown, cream-white dhoti and angavastram, gold belt and armlets, quiver on his back, the Gandiva held low and unstrung; no flower garland, no peacock feather) leans toward him and argues earnestly, his right hand open toward the king and his left hand holding the Gandiva low. On the right Bhima (match the attached Bhima lock: a big, powerful adult Pandava, broad noble face, full dark curled mustache, dark hair in a topknot with a gold warrior circlet, deep gold and leaf-green engraved armor, red sash, a gold-decked mace; not Arjuna's crown, no peacock feather, never a child) stands tall and fierce, his right fist pressed to his chest and his left hand resting on the handle of his mace, its head on the ground. Exactly six hands in the whole picture. Clear daylight by the river: a pale blue sky with soft haze, even sunlight on the sand and steps (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no wounds, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Draupadi. No Kunti. No Vyasa. No Bhishma. No Duryodhana, no Karna, no Gandhari, no Dhritarashtra, no Narada, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 6. Plate `plea` - cast: yudhishthira, draupadi

**Save as:** `plate-plea.jpg` → imports to `stills/plate-plea.jpg`

**Beat:** Then Draupadi speaks. 'Your brothers are crying out to you. Protect your people, and rule the earth with dharma.'

**Light:** day · **Depends on:** none (pre-existing refs only)

**Note:** ganga23-master is the Ep 22 ganga22 (= Ep 21 ganga21) DAY master (byte copy, already exists) - keep the river, sand and stone steps; repaint in this beat's light with the huts and tents small in the far background. Hard fail: anyone but Draupadi and Yudhishthira (no Krishna, no Arjuna, no Bhima, no Kunti); Draupadi sexualized or crowned; night sky.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/ganga23-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/draupadi.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult figures, one woman and one man, on the worn stone steps by the wide Ganga by day. Use the attached scene master for the wide Ganga, the pale sand and the worn stone steps down to the water; the thatched huts and a few small tents of the mourning camp stay small in the far background under great trees. On the left Draupadi, queen of the Pandavas (match the attached Draupadi lock: young adult woman, warm brown skin, large dark eyes, soft brows, a small red bindi, long black wavy hair, a deep red sari with a gold border, modest gold ornaments; dignified, never sexualized, no crown, no armor, no peacock feather) stands tall and earnest, her right hand stretched out toward the king and her left hand pressed to her heart, pleading with him. On the right Yudhishthira, eldest Pandava, the king who does not want his kingdom (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) sits on a step below her and lifts his face to listen, his right hand on his knee and his left hand resting on the stone. Exactly four hands in the whole picture. Clear daylight by the river: a pale blue sky with soft haze, even sunlight on the sand and steps (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no wounds, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. No Bhima. No Kunti. No Vyasa. No Bhishma. No Duryodhana, no Karna, no Gandhari, no Dhritarashtra, no Narada, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 7. Plate `counsel` - cast: yudhishthira, vyasa

**Save as:** `plate-counsel.jpg` → imports to `stills/plate-counsel.jpg`

**Beat:** Vyasa counsels him. 'The forest is not your path. A king's dharma is to protect his people.'

**Light:** late-afternoon daylight · **Depends on:** none (pre-existing refs only)

**Note:** ganga23-master is the Ep 22 ganga22 (= Ep 21 ganga21) DAY master (byte copy, already exists) - keep the river, sand and stone steps; repaint in this beat's light with the huts and tents small in the far background. Hard fail: anyone but Vyasa and Yudhishthira (no Krishna, no Drona-like saffron guru, no weapons on Vyasa); Vyasa must be the Ep 21 dark-complexioned rishi with tawny jata, grey beard, ochre bark cloth and black deerskin; night sky.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/ganga23-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/vyasa.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men on the sandy bank of the wide Ganga in late-afternoon light. Use the attached scene master for the wide Ganga, the pale sand and the worn stone steps down to the water; the thatched huts and a few small tents of the mourning camp stay small in the far background under great trees. On the right Vyasa (match the attached Vyasa lock - the great rishi, grandfather of the Pandavas and the Kauravas: a tall, ancient yet vigorous holy man with a dark complexion, calm deep-set luminous eyes, long matted tawny-brown locks piled high on his head, a long flowing grey beard, three white ash lines on the brow, white sacred thread, an ochre bark-cloth garment with a black deerskin over one shoulder, a rudraksha rosary; no weapons, no crown, never saffron robes, never Drona) stands tall and calm, his right hand raised in counsel and his left hand holding a rudraksha rosary. On the left Yudhishthira, eldest Pandava, the king who does not want his kingdom (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) kneels before him on the sand with his palms joined together, his head a little bowed, listening. Exactly four hands in the whole picture. Late-afternoon golden daylight by the river: long warm shadows, a calm amber sky (this beat is in DAYLIGHT, NOT night: no moon, no stars, no burning torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no wounds, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. No Bhima. No Draupadi. No Kunti. No Bhishma. No Duryodhana, no Karna, no Gandhari, no Dhritarashtra, no Narada, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 8. Plate `comfort` - cast: krishna, yudhishthira

**Save as:** `plate-comfort.jpg` → imports to `stills/plate-comfort.jpg`

**Beat:** Krishna takes the king's hand and tells him of great kings of old, who all had to pass. At last, the grief begins to lift.

**Light:** golden sunset daylight · **Depends on:** none (pre-existing refs only)

**Note:** ganga23-master is the Ep 22 ganga22 (= Ep 21 ganga21) DAY master (byte copy, already exists) - keep the river, sand and stone steps; repaint in this beat's light with the huts and tents small in the far background. Krishna image: Ep 04 Krishna lock = ref 2. Off the chariot, no reins, no flute, no bow; exactly two hands. Hard fail: anyone but Krishna and Yudhishthira (no Arjuna, no Narada drawn); Krishna not matching the Ep 04 lock, or with a flute, bow, reins, tall crown or more than two hands; Krishna must be HOLDING the king's hand; a moon or night sky (sunset daylight only).

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/ganga23-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men seated side by side on the worn stone steps by the wide Ganga at golden sunset. Use the attached scene master for the wide Ganga, the pale sand and the worn stone steps down to the water; the thatched huts and a few small tents of the mourning camp stay small in the far background under great trees. On the left Krishna (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather - not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; Arjuna's charioteer in the war, here seated beside the king on the river steps; no reins, no flute, no bow) turns toward the king with a gentle half-smile, holding the king's right hand in both of his own hands, speaking softly. On the right Yudhishthira, eldest Pandava, the king who does not want his kingdom (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) sits beside him, his face softening as the grief begins to lift, his left hand resting on his knee. Exactly four hands in the whole picture. Golden sunset daylight on the Ganga: the sun low and large over the water, a warm saffron-gold sky (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no wounds, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no speech bubbles, no watermark. No Arjuna. No Bhima. No Draupadi. No Kunti. No Vyasa. No Bhishma. No Duryodhana, no Karna, no Gandhari, no Dhritarashtra, no Narada, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 9. Plate `crown` - cast: krishna, yudhishthira, draupadi

**Save as:** `plate-crown.jpg` → imports to `stills/plate-crown.jpg`

**Beat:** In Hastinapura, Yudhishthira is crowned at last. Draupadi sits beside him, and Krishna pours the sacred water from a conch over his head.

**Light:** day · **Depends on:** needs #1

**Note:** Krishna image: Ep 04 Krishna lock = ref 2. Off the chariot, no reins, no flute, no bow; exactly two hands. Hard fail: anyone but Krishna, Yudhishthira and Draupadi in the foreground (no Dhaumya or priests as named figures, no Dhritarashtra, no Arjuna, no Bhima); Krishna must pour water from a WHITE CONCH over Yudhishthira's head; Draupadi seated beside the king; any writing on the walls; a night sky in the windows.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_inbox/consumer-imagine/lock-palace23-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/draupadi.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult figures, two men and one woman, in the royal hall of the Kuru palace in festive daylight - the coronation. Use the attached scene master for the royal hall of the Kuru palace at Hastinapura: tall carved sandstone pillars with gold lotus capitals, garlands of marigold and jasmine, sunlight through tall arched windows; no writing, ornamental carving only. In the centre Yudhishthira, eldest Pandava, the king who does not want his kingdom (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) sits on a golden seat with his palms joined and his eyes lowered in humility. Beside him on the right Draupadi, queen of the Pandavas (match the attached Draupadi lock: young adult woman, warm brown skin, large dark eyes, soft brows, a small red bindi, long black wavy hair, a deep red sari with a gold border, modest gold ornaments; dignified, never sexualized, no crown, no armor, no peacock feather) sits on the same golden seat with her palms joined. On the left Krishna (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather - not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; Arjuna's charioteer in the war, here standing in the palace hall; no reins, no flute, no bow) stands beside the seat and, holding a white conch in both hands, pours a gentle stream of sacred water over Yudhishthira's head. Before the seat a small square fire-altar burns with a low flame among golden water jars. Exactly six hands in the whole picture. Bright festive daylight in the palace hall: sunlight streams through the tall arched windows onto the polished floor (this beat is in DAYLIGHT, NOT night: no moon, no stars, no night sky in the windows). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no wounds, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no speech bubbles, no watermark. No Arjuna. No Bhima. No Kunti. No Vyasa. No Bhishma. No Duryodhana, no Karna, no Gandhari, no Dhritarashtra, no Narada, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 10. Plate `meditate` - cast: krishna, yudhishthira

**Save as:** `plate-meditate.jpg` → imports to `stills/plate-meditate.jpg`

**Beat:** One morning, the king finds Krishna sitting perfectly still. 'Bhishma is thinking of me,' Krishna says. 'When he goes, all his knowledge goes with him.'

**Light:** early-morning daylight · **Depends on:** needs #1

**Note:** Krishna image: Ep 04 Krishna lock = ref 2. Off the chariot, no reins, no flute, no bow; exactly two hands. Hard fail: anyone but Krishna and Yudhishthira (Bhishma is NOT drawn here); four-armed or glowing cosmic Krishna, or Krishna with more than two hands; flute; a moon or night sky in the window (early-morning daylight only).

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_inbox/consumer-imagine/lock-palace23-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men in a quiet chamber of the Kuru palace in early-morning light. Use the attached scene master for the royal hall of the Kuru palace at Hastinapura: tall carved sandstone pillars with gold lotus capitals, garlands of marigold and jasmine, sunlight through tall arched windows; no writing, ornamental carving only. On the right Krishna (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather - not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; Arjuna's charioteer in the war, here seated alone in meditation; no reins, no flute, no bow) sits cross-legged on a low cushioned seat by a tall arched window, his eyes closed and his face serene, perfectly still in meditation, his two hands resting on his knees; beside him a small clay lamp burns with a perfectly still flame. On the left Yudhishthira, eldest Pandava, the king who does not want his kingdom (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) stands at the carved doorway with his palms joined, watching him in wonder. Exactly four hands in the whole picture. Early-morning daylight in a quiet palace chamber: soft pale-gold sunrise light through a tall arched window, a calm still air (this beat is in DAYLIGHT, NOT night: no moon, no stars, no night sky in the window). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no wounds, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no speech bubbles, no watermark. No Arjuna. No Bhima. No Draupadi. No Kunti. No Vyasa. No Bhishma. No Duryodhana, no Karna, no Gandhari, no Dhritarashtra, no Narada, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 11. Plate `bedside` - cast: krishna, yudhishthira, bhishma

**Save as:** `plate-bedside.jpg` → imports to `stills/plate-bedside.jpg`

**Beat:** So they go to Kurukshetra, where Bhishma lies on his bed of arrows. 'Teach him, grandsire,' Krishna says, 'and lift his grief.'

**Light:** late-afternoon daylight · **Depends on:** needs #2

**Note:** Krishna image: Ep 04 Krishna lock = ref 2. Off the chariot, no reins, no flute, no bow; exactly two hands. Hard fail: anyone but Krishna, Yudhishthira and Bhishma (no Arjuna, no Bhima, no Satyaki, no Duryodhana); any blood, wound, or arrow through Bhishma's face or chest; Bhishma standing or fighting; Bhishma in saffron guru robes (he wears silver-white armor); a night sky.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_inbox/consumer-imagine/lock-kuru23-master.jpg`  ← output of #2
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/bhishma.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult men at the quiet edge of the battlefield in late-afternoon light. Use the attached scene master for the quiet grassy riverbank at the edge of Kurukshetra: the white canopy on slim poles, the small river with reeds, faint distant banners on the horizon. The war is over: no fighting, no bodies, no blood. Across the foreground Bhishma, the Kuru grandsire (match the attached Bhishma lock: an ancient warrior with a noble lined face, long flowing white hair and a full white warrior beard, silver-white engraved armor, a pale cream dhoti, a silver Kuru diadem; a warrior, never saffron guru robes, never Drona) lies serene on a bed of many upright golden arrows that hold him above the ground like a couch, his bow laid aside, his eyes open and calm, his right hand raised a little in blessing and his left hand resting on his chest; no blood, no wounds, no arrow in his face or chest. Standing at his head on the right, Krishna (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather - not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; Arjuna's charioteer in the war, here standing on foot at the bedside; no reins, no flute, no bow) speaks to him, his right hand open toward the king and his left hand on his heart. On the left Yudhishthira, eldest Pandava, the king who does not want his kingdom (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) kneels at the bedside with his palms joined and his head bowed, humble and a little afraid. Exactly six hands in the whole picture. Late-afternoon golden daylight on the field: a calm amber sky, long warm shadows, the low sun glowing (this beat is in DAYLIGHT, NOT night: no moon, no stars, no burning torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no wounds, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no speech bubbles, no watermark. No Arjuna. No Bhima. No Draupadi. No Kunti. No Vyasa. No Duryodhana, no Karna, no Gandhari, no Dhritarashtra, no Narada, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 12. Poster — cast: krishna, yudhishthira

**Save as:** `poster.jpg` → imports to `stills/poster.jpg`

**Light:** golden sunset daylight · **Depends on:** needs #1

**Note:** Poster = Ep 23 thesis (the reluctant king and Krishna). If a separate poster pass is cut, copy the GATE C-passed plate-crown.jpg. Hard fail: anyone but Yudhishthira and Krishna; Krishna off-lock or with more than two hands; text or a title drawn in; a moon or night sky.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_inbox/consumer-imagine/lock-palace23-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/23-reluctant-king/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra poster, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men standing together in the royal hall of the Kuru palace at golden sunset - the king who did not want his kingdom, and his friend. Use the attached scene master for the royal hall of the Kuru palace at Hastinapura: tall carved sandstone pillars with gold lotus capitals, garlands of marigold and jasmine, sunlight through tall arched windows; no writing, ornamental carving only. In the centre Yudhishthira, eldest Pandava, the king who does not want his kingdom (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) stands crowned with his simple gold diadem, his palms joined, his face grave and at peace. Beside him on the left Krishna (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather - not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; Arjuna's charioteer in the war, here standing in the palace hall; no reins, no flute, no bow) rests his right hand gently on the king's shoulder, his left hand at his side, with a serene half-smile. Behind them golden sunset light pours through the tall arched windows. Strong composition with clear headroom for a title. Exactly four hands. Golden sunset daylight (DAYLIGHT, NOT night: no moon, no stars). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no wounds, no bodies, no corpses, no skulls or bones, no vultures or jackals. No text, no letters, no plaques, no speech bubbles, no watermark. No Arjuna. No Bhima. No Draupadi. No Kunti. No Vyasa. No Bhishma. No Duryodhana, no Karna, no Gandhari, no Dhritarashtra, no Narada, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## After generation

1. Eye-check every file: 3:2, ≥1536×1024, carved gold-and-lotus cartouche, daylight on every image (no moon/stars/night sky), exactly two arms and two hands per person, faces match locks, no watermark, no Duryodhana/Karna/Gandhari/Dhritarashtra/Narada/Shiva anywhere, Krishna only on `comfort`/`crown`/`meditate`/`bedside`/poster (Ep 04 look, two hands), Arjuna only on `renounce`/`brothers`, Bhima only on `brothers`, Bhishma only on `bedside` (serene, no blood), Vyasa clearly not Drona, Kunti about sixty with no blindfold, no writing anywhere.
2. `python3 tools/import_consumer_stills.py 23-reluctant-king` → `python3 tools/stills_review.py episodes/23-reluctant-king --require`.
3. Fill `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md`.
4. GATE D install (`python3 tools/install_review.py episodes/23-reluctant-king --report`), registry (`js/episodes.js`, `EP_LOADERS["23"]`, README row, cache bumps in index.html / play.html / landing.js, hub thumbs), ship.
