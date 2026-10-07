# Ep 18 *The Fall of Shalya* — SuperGrok consumer Imagine prompt pack

**Status:** PREPARED (2026-10-07). GATE D-dialogue PASS · GATE A/B PASS · Kokoro TTS rendered. Do not ship until GATE C (`stills_review.py --require` + `RR-gateC-visual.md`) and GATE D install pass.

**Path:** grok.com Imagine on Avinash's SuperGrok consumer subscription only. Never api.x.ai / paid xAI credits.

**Drop folder (this folder):** `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_inbox/consumer-imagine/` — save each result under the exact **Save as** name below.

**Import:** `cd /workspace/pixelloid/mahabharata && python3 tools/import_consumer_stills.py 18-shalya-fall`. `lock-<id>.jpg` → `stills/_locks/<id>.jpg`, `plate-<id>.jpg` → `stills/plate-<id>.jpg`, `poster.jpg` → `stills/poster.jpg`.

**Rules for every image:** aspect **3:2 landscape** (set Aspect Ratio to 3:2 Photo Print after attaching refs), ≥1536×1024. Attach refs in the listed order and **only** the listed refs. **Never** attach `episodes/01-birds-eye/stills/plate-wide-gold.jpg` or any finished `plate-*.jpg`. No text, plaques, speech bubbles, gore, bodies, modern props, or visible watermark. Every person has exactly two arms and two hands. Generate #1 first — plates 3–10 and the poster use it as their first ref.

**KRISHNA RULE:** On every image where Krishna appears (`counsel`), the **first character ref** (right after the scene master) is the **Ep 04 Krishna lock** `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`, and the prompt spells out the locked look: pale silvery dusty-blue skin, long loose curls, slim gold band with one peacock feather, white U-tilak, jasmine-rose garland, saffron-yellow pitambar dhoti, crimson sash, exactly two hands.

**Already locked (copy-forward):** krishna (Ep 04), yudhishthira + bhima (Ep 15), shalya + duryodhana + ashwatthama (Ep 16), camp18-master (= Ep 16 camp16-master, night camp).

**Daylight:** the Shalya lock is a **night** portrait. Every plate except `anoint` is daytime on the eighteenth day (dawn on `counsel`, late afternoon on `lake`). Reject any daytime output with a moon, stars or night sky.

**To generate: 11 images** — 1 scene master + 9 beat plates + 1 poster.

| # | Save as | Imports to | Refs | Krishna |
|---|---------|-----------|------|---------|
| 1 | `lock-field18-master.jpg` | `stills/_locks/field18-master.jpg` | 1 | — |
| 2 | `plate-anoint.jpg` | `stills/plate-anoint.jpg` | 5 | — |
| 3 | `plate-counsel.jpg` | `stills/plate-counsel.jpg` | 4 | yes (Ep 04 lock = ref 2) |
| 4 | `plate-array.jpg` | `stills/plate-array.jpg` | 3 | — |
| 5 | `plate-mace.jpg` | `stills/plate-mace.jpg` | 4 | — |
| 6 | `plate-resolve.jpg` | `stills/plate-resolve.jpg` | 3 | — |
| 7 | `plate-charge.jpg` | `stills/plate-charge.jpg` | 3 | — |
| 8 | `plate-dart.jpg` | `stills/plate-dart.jpg` | 3 | — |
| 9 | `plate-fall.jpg` | `stills/plate-fall.jpg` | 3 | — |
| 10 | `plate-lake.jpg` | `stills/plate-lake.jpg` | 3 | — |
| 11 | `poster.jpg` | `stills/poster.jpg` | 4 | — |

## 1. Scene master — Kurukshetra, the eighteenth day

**Save as:** `lock-field18-master.jpg` → imports to `stills/_locks/field18-master.jpg`

**Note:** Used by eight plates and the poster (attached FIRST on each). Generate this first. Daylight master — it keeps the night-time Shalya lock from dragging plates into night.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style, palette and frame of the attached Ep 10 field-master. The Kurukshetra battlefield on the morning of the eighteenth and last day: a wide open stretch of trampled golden dust in the foreground scored with chariot ruts, thinned armies in the far distance with fewer banners and parasols, a still lotus lake glinting at the far edge of the field, a bright warm gold sun climbing in a hazy saffron-gold sky, soft shadows. Carved gold-and-lotus cartouche integrated into the painting, heroic depth for chariots and duelling warriors to be placed later. No people in the foreground, no named figures. Bright daylight — NOT night: no moon, no stars, no torches. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no watermark. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 2. Plate `anoint` — cast: duryodhana, shalya, ashwatthama

**Save as:** `plate-anoint.jpg` → imports to `stills/plate-anoint.jpg`

**Beat:** Night after Karna’s fall. Kripa begs Duryodhana to make peace. He refuses, and at Ashwatthama’s word anoints Shalya commander.

**Note:** Night beat in the Kaurava camp: first ref is the camp18 master (byte copy of Ep 16's camp16-master), not the field master.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/camp18-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/duryodhana.jpg`
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult men in a torchlit war-camp at night. Duryodhana, the Kaurava king (match the attached Duryodhana lock: proud upswept mustache, fierce gaze, tall jeweled Kuru crown, jewel-tone gold Kaurava armor with a saffron-orange cape, a gold-decked mace) stands and pours consecration water from a gold vessel over Shalya, king of Madra (match the attached Shalya lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram; never a sage, never fully white-bearded), who kneels on one knee with his head bowed and his sword laid across his knees. Beside them stands Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold armor, white sacred thread across the chest, great bow; never a child, never white-bearded), one hand raised toward Shalya as the one who named him. Banners, tents and a ring of oil lamps behind; no other figures. Night in the Kaurava camp after the seventeenth day: deep indigo sky, stars, warm torchlight and a ring of oil lamps on gold (this beat is meant to be at night). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna, no Karna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 3. Plate `counsel` — cast: krishna, yudhishthira

**Save as:** `plate-counsel.jpg` → imports to `stills/plate-counsel.jpg`

**Beat:** At dawn Krishna tells Yudhishthira: “Shalya is your kin and a mighty warrior. None but you can match him. Do not hold back from pity.”

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_inbox/consumer-imagine/lock-field18-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men standing beside a chariot. Krishna (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather — not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; Arjuna's charioteer, the chariot reins looped over one wrist; no flute, no bow) rests one hand on the shoulder of Yudhishthira, eldest Pandava king (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets, a king's bow; no gold chest armor, no Gandiva, no flower garland, no peacock feather) and raises his other hand, pointing toward the far Kaurava ranks as he speaks. Yudhishthira listens gravely, bow in hand, his calm face firming into resolve. Distant ranks and banners only. Cool clear dawn of the eighteenth day: pale gold sunrise, soft rose-saffron sky — daytime, NOT night: no moon, no stars, no torches. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Shalya. No Duryodhana. No Arjuna, no Karna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 4. Plate `array` — cast: shalya

**Save as:** `plate-array.jpg` → imports to `stills/plate-array.jpg`

**Beat:** The eighteenth day. What is left of the Kaurava host marches out, and Shalya rides at its head, blazing like the sun.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_inbox/consumer-imagine/lock-field18-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium. Shalya, king of Madra (match the attached Shalya lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram; never a sage, never fully white-bearded) stands tall on his war chariot, great bow raised, under a banner bearing a golden ploughshare; a small plain charioteer at the reins with his face turned away. White horses surge forward; behind them the thinned Kaurava ranks march out, small, banners only. Shalya is the only named figure. Bright morning-to-midday daylight of the eighteenth day: high warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches (the attached Shalya lock is a night portrait; take only his face, crown and armor, never its night sky). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Duryodhana. No Arjuna, no Karna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 5. Plate `mace` — cast: bhima, shalya

**Save as:** `plate-mace.jpg` → imports to `stills/plate-mace.jpg`

**Beat:** Bhima meets Shalya mace to mace. They circle and strike like two bulls, until both stagger and fall back.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_inbox/consumer-imagine/lock-field18-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/bhima.jpg`
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men fighting on foot in the dust. Bhima (match the attached Bhima lock: broad noble face, full dark mustache, fierce dark eyes, gold warrior circlet, deep gold and leaf-green engraved armor, a great gold-decked mace; never saffron sage robes) and Shalya, king of Madra (match the attached Shalya lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram; never a sage, never fully white-bearded) swing great gold-decked maces that meet between them in a burst of golden sparks; both strain with knees bent like two bulls, dust rising. No wounds, no blood. Distant ranks only. Bright morning-to-midday daylight of the eighteenth day: high warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches (the attached Shalya lock is a night portrait; take only his face, crown and armor, never its night sky). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Duryodhana. No Arjuna, no Karna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 6. Plate `resolve` — cast: yudhishthira

**Save as:** `plate-resolve.jpg` → imports to `stills/plate-resolve.jpg`

**Beat:** Then Yudhishthira, the gentlest of the brothers, rides out. Today his anger blazes. He will slay Shalya, or be slain.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_inbox/consumer-imagine/lock-field18-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium. Yudhishthira, eldest Pandava king (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets, a king's bow; no gold chest armor, no Gandiva, no flower garland, no peacock feather) stands on his war chariot drawing his bow, his usually calm face now fierce with resolve; a small plain charioteer at the reins with his face turned away, white horses charging. Yudhishthira is the only named figure. Bright midday daylight of the eighteenth day: high warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Shalya. No Duryodhana. No Arjuna, no Karna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 7. Plate `charge` — cast: shalya

**Save as:** `plate-charge.jpg` → imports to `stills/plate-charge.jpg`

**Beat:** Shalya’s horses and charioteer fall. Unhorsed, the old king leaps down with sword and shield and rushes at Yudhishthira.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_inbox/consumer-imagine/lock-field18-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly one adult man. Shalya, king of Madra (match the attached Shalya lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram; never a sage, never fully white-bearded) charges on foot across the dust with a raised sword and a round shield, fierce and undaunted; behind him his war chariot stands empty, its golden-ploughshare banner cut down. His foe is off-frame to the right (not drawn). No horses lying, no bodies, no blood. Bright morning-to-midday daylight of the eighteenth day: high warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches (the attached Shalya lock is a night portrait; take only his face, crown and armor, never its night sky). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Duryodhana. No Arjuna, no Karna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 8. Plate `dart` — cast: yudhishthira

**Save as:** `plate-dart.jpg` → imports to `stills/plate-dart.jpg`

**Beat:** Yudhishthira takes up a gleaming dart, adorned with gold and gems and worshipped like a goddess, and hurls it with all his might.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_inbox/consumer-imagine/lock-field18-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium. Yudhishthira, eldest Pandava king (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets, a king's bow; no gold chest armor, no Gandiva, no flower garland, no peacock feather) stands on his chariot, right arm drawn back, hurling a long gleaming dart with a handle of gold and gems that blazes like fire; arm, dart and his gaze lie on one straight line toward his foe far off-frame to the right. Only one named figure; the charioteer, if shown, is small and turned away. Bright midday daylight of the eighteenth day: high warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Shalya. No Duryodhana. No Arjuna, no Karna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 9. Plate `fall` — cast: yudhishthira

**Save as:** `plate-fall.jpg` → imports to `stills/plate-fall.jpg`

**Beat:** At midday the dart strikes. Shalya falls with arms outstretched, as if embracing the earth he loved.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_inbox/consumer-imagine/lock-field18-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium. Yudhishthira, eldest Pandava king (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets, a king's bow; no gold chest armor, no Gandiva, no flower garland, no peacock feather) stands on his chariot, his throwing arm lowered, looking down gravely and sorrowfully toward the dust. In the foreground dust lie only a fallen tall silver-and-gold Madra crown, a round shield and a sword, catching the high sun. No body, no blood, no other named figure. Bright midday daylight of the eighteenth day: high warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Duryodhana. Shalya himself is not shown. No Arjuna, no Karna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 10. Plate `lake` — cast: duryodhana

**Save as:** `plate-lake.jpg` → imports to `stills/plate-lake.jpg`

**Beat:** Sahadeva slays Shakuni. The Kaurava host is gone. Duryodhana, alone, takes up his mace and walks toward a lake.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_inbox/consumer-imagine/lock-field18-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/duryodhana.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly one adult man. Duryodhana, the Kaurava king (match the attached Duryodhana lock: proud upswept mustache, fierce gaze, tall jeweled Kuru crown, jewel-tone gold Kaurava armor with a saffron-orange cape, a gold-decked mace) walks alone on foot, his mace on his shoulder and his head bowed, toward a still lake edged with reeds and lotuses at the edge of the battlefield; behind him the empty field and a few broken banners, long shadows. No bodies, no other figures. Low late-afternoon sun of the eighteenth day, deep gold-amber light and long shadows — still daytime, NOT night: no moon, no stars, no torches. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Shalya. No Arjuna, no Karna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 11. Poster — cast: yudhishthira, shalya

**Save as:** `poster.jpg` → imports to `stills/poster.jpg`

**Note:** Poster = Ep 18 thesis (the gentle king's dart against the old king of Madra). If a separate poster pass is cut, copy the GATE C-passed plate-dart.jpg.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_inbox/consumer-imagine/lock-field18-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/18-shalya-fall/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra poster, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men. On the right, Yudhishthira, eldest Pandava king (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets, a king's bow; no gold chest armor, no Gandiva, no flower garland, no peacock feather) stands on his chariot hurling a long gleaming gold-and-gem dart; on the left foreground, Shalya, king of Madra (match the attached Shalya lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram; never a sage, never fully white-bearded) charges on foot with raised sword and round shield. Strong diagonal composition with clear headroom for a title. Bright morning-to-midday daylight of the eighteenth day: high warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches (the attached Shalya lock is a night portrait; take only his face, crown and armor, never its night sky). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## After generation

1. Eye-check every file: 3:2, ≥1536×1024, carved gold-and-lotus cartouche, correct day/night, exactly two arms and two hands per person, faces match locks, no watermark, no Arjuna/Karna anywhere, Krishna only on `counsel`, no body on `fall`, no gore.
2. `python3 tools/import_consumer_stills.py 18-shalya-fall` → `python3 tools/stills_review.py episodes/18-shalya-fall --require`.
3. Fill `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md`.
4. GATE D install (`python3 tools/install_review.py episodes/18-shalya-fall --report`), registry (`js/episodes.js`, `EP_LOADERS["18"]`, cache bumps), ship.
