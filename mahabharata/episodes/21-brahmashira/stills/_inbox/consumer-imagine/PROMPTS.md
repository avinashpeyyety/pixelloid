# Ep 21 *The Brahmashira* — SuperGrok consumer Imagine prompt pack

**Status:** NOT GENERATED (prompt pack ready 2026-10-15). Next: a browser agent generates all 13 images on grok.com (SuperGrok consumer), saves them here under the exact names, then import + GATE C.

**Path:** grok.com Imagine on Avinash's SuperGrok consumer subscription only. Never api.x.ai / paid xAI credits.

**Drop folder (this folder):** `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/` — save each result under the exact **Save as** name below.

**Generation kit (box):** `/home/box/lab-keep/pixelloid-build/ep21-gen/` — `prompt-NN.txt` (exact prompt, plain ASCII), `manifest.tsv` (Save-as + ordered ref paths), `refs/` (copies of every pre-existing ref).

**Import:** `cd /workspace/pixelloid/mahabharata && python3 tools/import_consumer_stills.py 21-brahmashira`. `lock-<id>.jpg` → `stills/_locks/<id>.jpg`, `plate-<id>.jpg` → `stills/plate-<id>.jpg`, `poster.jpg` → `stills/poster.jpg`.

**Rules for every image:** aspect **3:2 landscape** (set Aspect Ratio to 3:2 Photo Print after attaching refs), ≥1536×1024. Attach refs in the listed order and **only** the listed refs. **Never** attach `episodes/01-birds-eye/stills/plate-wide-gold.jpg` or any finished `plate-*.jpg`. No text, plaques, speech bubbles, gore, blood, bodies, wounds, modern props, or visible watermark. Every person has exactly two arms and two hands. Generate #1 first — every later image except the camp plates (`vow`, `ride`, `home`) uses it as its first ref; then #2 (Vyasa lock) and #3 (Narada lock).

**Prompts are plain ASCII** (`x` not ×, `-` not —) — Ep 20 lost one image to a charset-mangled paste. Paste from `prompt-NN.txt` in the kit if the browser mangles this file.

**FAMILY-FRIENDLY RULE:** the weapon on the womb is told by implication only. Reject any output that shows a woman as the weapon's target, a pregnant figure, an unborn child or a baby, a body, blood, a wound, or fire striking a person. `turn` shows only Arjuna withdrawing and Ashwatthama's fire streaking away to the horizon; `between` shows only Vyasa and Narada between two walls of fire.

**KRISHNA RULE:** Krishna appears on **three** images (`follow` — driving, reins in hand; `answer` and `word` — on foot). On each the **first character ref** (right after the scene master) is the **Ep 04 Krishna lock** `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`, and the prompt spells out the locked look: pale silvery dusty-blue skin, long loose curls, slim gold band with one peacock feather, white U-tilak, jasmine-rose garland, saffron-yellow pitambar dhoti, crimson sash, exactly two hands. Every other image says No Krishna (and No Arjuna where he is absent) — reject any that shows them.

**Already locked (copy-forward):** krishna (Ep 04), draupadi (Ep 04), yudhishthira + bhima + arjuna (Ep 15), ashwatthama (Ep 16), camp21-master (= Ep 20 camp20-master). **New:** ganga21-master (#1), vyasa (#2), narada (#3).

**Light:** every image is DAYLIGHT. `vow` and `ride` are morning (thin smoke from the scorched camp), `home` is golden late afternoon — all three repaint the Ep 20 night camp master in daylight. The Ganga beats are by day; `loose`, `answer`, `between`, `turn` and the poster add the weapons' white-gold fire. Reject any image with a moon, stars or a night sky.

**To generate: 13 images** — 1 scene master + 2 character locks + 9 beat plates + 1 poster.

| # | Save as | Imports to | Refs | Light | Cast | Krishna |
|---|---------|-----------|------|-------|------|---------|
| 1 | `lock-ganga21-master.jpg` | `stills/_locks/ganga21-master.jpg` | 1 | day | — (no people) | — |
| 2 | `lock-vyasa.jpg` | `stills/_locks/vyasa.jpg` | 2 | day | vyasa | — |
| 3 | `lock-narada.jpg` | `stills/_locks/narada.jpg` | 2 | day | narada | — |
| 4 | `plate-vow.jpg` | `stills/plate-vow.jpg` | 4 | morning daylight | yudhishthira, draupadi | — |
| 5 | `plate-ride.jpg` | `stills/plate-ride.jpg` | 3 | morning daylight | bhima | — |
| 6 | `plate-follow.jpg` | `stills/plate-follow.jpg` | 5 | day | krishna, yudhishthira, arjuna | yes (Ep 04 lock = ref 2) |
| 7 | `plate-loose.jpg` | `stills/plate-loose.jpg` | 5 | day (weapon fire) | bhima, ashwatthama, vyasa | — |
| 8 | `plate-answer.jpg` | `stills/plate-answer.jpg` | 4 | day (weapon fire) | krishna, arjuna | yes (Ep 04 lock = ref 2) |
| 9 | `plate-between.jpg` | `stills/plate-between.jpg` | 4 | day (weapon fire) | vyasa, narada | — |
| 10 | `plate-turn.jpg` | `stills/plate-turn.jpg` | 4 | day (weapon fire) | arjuna, ashwatthama | — |
| 11 | `plate-word.jpg` | `stills/plate-word.jpg` | 5 | day | krishna, ashwatthama, vyasa | yes (Ep 04 lock = ref 2) |
| 12 | `plate-home.jpg` | `stills/plate-home.jpg` | 5 | late-afternoon daylight | yudhishthira, bhima, draupadi | — |
| 13 | `poster.jpg` | `stills/poster.jpg` | 4 | day (weapon fire) | arjuna, ashwatthama | — |

## 1. Scene master — Vyasa's hermitage on the bank of the Ganga, by day

**Save as:** `lock-ganga21-master.jpg` → imports to `stills/_locks/ganga21-master.jpg`

**Light:** day · **Depends on:** none (first)

**Note:** Used by follow, loose, answer, between, turn, word, both new locks and the poster (attached FIRST on each). Generate this first. Day master: river, sand, thatched huts, trees; no people.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style, palette and frame of the attached Ep 10 field-master. The hermitage of the rishi Vyasa on the bank of the sacred Ganga, by day: a wide, slow, glittering river curving into the distance with a pale far bank; on the near bank a broad stretch of clean pale sand and a few worn stone steps down to the water; on the right, under tall peepal and kadamba trees, a cluster of simple thatched huts of hermits with a small sacred fire altar sending up a thin thread of smoke, kusha grass and wildflowers along the path, a deerskin and a wooden water pot beside a hut door; clear blue sky with soft white clouds, warm late-morning sunlight. Carved gold-and-lotus cartouche integrated into the painting, heroic depth for figures to be placed later. No people, no named figures. Daylight - no moon, no stars, no night. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no watermark. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 2. Character lock — Vyasa (new)

**Save as:** `lock-vyasa.jpg` → imports to `stills/_locks/vyasa.jpg`

**Light:** day · **Depends on:** needs #1 (lock-ganga21-master.jpg)

**Note:** First drawn appearance of Vyasa. Generate second; plates `loose`, `between` and `word` attach it. Must read clearly different from Drona: dark complexion, tawny matted locks piled high, grey beard, ochre bark cloth and black deerskin (not saffron robes, no weapons).

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-ganga21-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra character lock portrait, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium three-quarter portrait of exactly one adult man standing in daylight on the bank of the Ganga before a thatched hermitage hut: Vyasa, the great rishi, author of the epic and grandfather of the Pandavas: a tall, ancient yet vigorous holy man with a dark complexion, calm deep-set luminous eyes, long matted tawny-brown locks piled high on his head, a long flowing grey beard, three white ash lines on the brow, white sacred thread, an ochre bark-cloth garment with a black deerskin over one shoulder, a rudraksha rosary; no weapons, no crown, never saffron robes, never Drona. Calm, all-seeing, compassionate expression; right hand raised in blessing, left hand holding a rudraksha rosary. Soft late-morning sunlight on his face, clear sky - daylight, NOT night. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. No Ashwatthama. No Bhima. No Draupadi. No other figures. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 3. Character lock — Narada (new)

**Save as:** `lock-narada.jpg` → imports to `stills/_locks/narada.jpg`

**Light:** day · **Depends on:** needs #1 (lock-ganga21-master.jpg)

**Note:** First drawn appearance of Narada. Generate third; plate `between` attaches it. Fair golden complexion (never blue), clean-shaven, white robes, veena — clearly different from Krishna and from Vyasa.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-ganga21-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra character lock portrait, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium three-quarter portrait of exactly one adult man standing in daylight on the bank of the Ganga before a thatched hermitage hut: Narada, the wandering celestial rishi: an ageless, youthful holy man with a fair golden glowing complexion, a clean-shaven serene face with a gentle smile, dark hair in a high topknot tied with a white cloth, a vertical sandal-paste tilak, white dhoti and white upper cloth, white sacred thread, a tulasi-bead necklace, a long-necked veena; never blue skin, no beard, no weapons, no crown, no peacock feather, no flute. Gentle, knowing smile; left arm cradling his veena against his shoulder, right hand raised in blessing. Soft late-morning sunlight on his face, clear sky - daylight, NOT night. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. No Ashwatthama. No Bhima. No Draupadi. No other figures. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 4. Plate `vow` — cast: yudhishthira, draupadi

**Save as:** `plate-vow.jpg` → imports to `stills/plate-vow.jpg`

**Beat:** Morning finds the ruined camp. Draupadi, grieving her five sons, vows to fast until Ashwatthama's forehead jewel is brought to her.

**Light:** morning daylight · **Depends on:** none (camp21-master already exists)

**Note:** camp21-master is the Ep 20 NIGHT camp gate (byte copy, already exists) — keep its gate, palisade, tents, banyan and river but force daylight (morning, thin smoke from scorched tents): reject any output with a moon, stars or night sky.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/camp21-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/draupadi.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult figures, one woman and one man, before the open carved wooden gate of a war-camp on the morning after a night raid; beyond the gate the tents are dark and scorched, thin grey smoke drifting, no one inside. Use the attached scene master only for the carved gate, the timber palisade, the tents, the banyan tree and the river - it is a night view, so repaint the whole scene in daylight. In the centre Draupadi, queen of the Pandavas (match the attached Draupadi lock: young adult woman, warm brown skin, large dark eyes, soft brows, a small red bindi, long black wavy hair worn loose, a deep red sari with a gold border, modest gold ornaments; dignified, never sexualized, no crown, no armor, no peacock feather) sits upright on a simple mat on the ground, grief-stricken, tears on her cheeks, her right hand raised with the palm outward in a solemn vow, her left hand pressed to her heart. Beside her Yudhishthira, eldest Pandava king (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) kneels with his head bowed in sorrow, his right hand reaching gently toward her, his left hand on his knee. Exactly four hands in the whole picture. No bodies, no blood. Morning after the night raid: a pale, clear morning sky, soft early sunlight, thin grey smoke drifting from the scorched tents far behind (this beat is in DAYLIGHT, NOT night: no moon, no stars, no burning torches; the cream-saffron-gold palette lives in the sunlight and the carved cartouche). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Bhima. No Arjuna. No Ashwatthama. No Vyasa. No Narada. No Duryodhana, no Karna, no Kripa, no Kritavarma, no Nakula, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 5. Plate `ride` — cast: bhima

**Save as:** `plate-ride.jpg` → imports to `stills/plate-ride.jpg`

**Beat:** Bhima will not wait. Bow in hand, he races out in his chariot, following Ashwatthama's tracks toward the Ganga.

**Light:** morning daylight · **Depends on:** none (camp21-master already exists)

**Note:** camp21-master is the Ep 20 NIGHT camp gate (byte copy, already exists) — keep its gate, palisade, tents, banyan and river but force daylight (morning, thin smoke from scorched tents): reject any output with a moon, stars or night sky.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/camp21-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/bhima.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly one adult man in a gold-trimmed war chariot drawn by two galloping horses, bursting out of the open carved wooden gate of a war-camp onto a dusty road in the morning, dust flying from the wheels. Use the attached scene master only for the carved gate, the timber palisade, the tents, the banyan tree and the river - it is a night view, so repaint the whole scene in daylight. Bhima (match the attached Bhima lock: broad noble face, full dark mustache, fierce dark eyes, gold warrior circlet, deep gold and leaf-green engraved armor, powerful build; never saffron sage robes, no peacock feather) stands tall in the chariot, his great bow gripped in his left hand and the reins in his right hand, his gold-decked mace racked beside him, his face fierce and set on the road ahead; the road runs off along the river toward distant hills. Exactly two hands in the whole picture. No charioteer, no other people. Morning after the night raid: a pale, clear morning sky, soft early sunlight, thin grey smoke drifting from the scorched tents far behind (this beat is in DAYLIGHT, NOT night: no moon, no stars, no burning torches; the cream-saffron-gold palette lives in the sunlight and the carved cartouche). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Draupadi. No Ashwatthama. No Vyasa. No Narada. No Duryodhana, no Karna, no Kripa, no Kritavarma, no Nakula, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 6. Plate `follow` — cast: krishna, yudhishthira, arjuna

**Save as:** `plate-follow.jpg` → imports to `stills/plate-follow.jpg`

**Beat:** Krishna warns that Ashwatthama holds the brahmashira, which can burn the worlds. With Arjuna and Yudhishthira, he races after Bhima.

**Light:** day · **Depends on:** needs #1

**Note:** Krishna image: Ep 04 Krishna lock = ref 2. He drives and holds the reins.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-ganga21-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult men in one great gold war chariot drawn by four white horses at full gallop along the green bank of the wide Ganga, a plain saffron pennant streaming from its staff. At the front Krishna (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather - not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; Arjuna's charioteer, here driving the chariot with the reins in both hands; no flute, no bow) holds the reins and looks back over his shoulder, speaking a grave warning. Behind him stand Arjuna (match the attached Arjuna lock: noble adult warrior, dark mustache, tall gold crown, cream-white dhoti and angavastram, gold belt and armlets, quiver on his back, the great Gandiva bow; no flower garland, no peacock feather), gripping the Gandiva in his left hand with his right hand on the chariot rail, and Yudhishthira, eldest Pandava king (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather), his right hand on the rail and his left hand raised in alarm. Far ahead along the riverbank, the thatched huts of a hermitage under great trees. Exactly six hands in the whole picture. Bright late-morning daylight on the Ganga: clear blue sky with soft white clouds, sunlight glittering on the wide river (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Bhima. No Draupadi. No Ashwatthama. No Vyasa. No Narada. No Duryodhana, no Karna, no Kripa, no Kritavarma, no Nakula, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 7. Plate `loose` — cast: bhima, ashwatthama, vyasa

**Save as:** `plate-loose.jpg` → imports to `stills/plate-loose.jpg`

**Beat:** At Vyasa's hermitage on the Ganga, Ashwatthama sees Bhima coming. He plucks a blade of grass, and it blazes into the brahmashira.

**Light:** day (weapon fire) · **Depends on:** needs #1 + #2

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-ganga21-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/bhima.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-vyasa.jpg`  ← output of #2
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult men on the sandy bank of the wide Ganga beside a hermitage of thatched huts. In the centre Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti, here wearing a rough cloak of woven kusha grass over his armor, dust on his arms; never a child, never white-bearded, no royal crown) rises from where he sat, holding up a single long blade of grass in his right hand; the blade bursts into a blazing white-gold flame like a small sun, his left hand clenched, his face desperate and fierce. Behind him on the right, seated calmly on a deerskin before a thatched hut, Vyasa (match the attached Vyasa lock - the great rishi, author of the epic and grandfather of the Pandavas: a tall, ancient yet vigorous holy man with a dark complexion, calm deep-set luminous eyes, long matted tawny-brown locks piled high on his head, a long flowing grey beard, three white ash lines on the brow, white sacred thread, an ochre bark-cloth garment with a black deerskin over one shoulder, a rudraksha rosary; no weapons, no crown, never saffron robes, never Drona) watches gravely, his right hand raised, his left hand on his knee. On the left, arriving on foot across the sand, Bhima (match the attached Bhima lock: broad noble face, full dark mustache, fierce dark eyes, gold warrior circlet, deep gold and leaf-green engraved armor, powerful build; never saffron sage robes, no peacock feather) strides forward with his great bow in his left hand and his right hand raised in challenge. Exactly six hands in the whole picture. The fire is light only - it touches no one. Bright daylight on the Ganga, but the blazing weapons flood the scene with white-gold fire and a hot shimmer in the air, the sky above them flaring (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Draupadi. No Narada. No Duryodhana, no Karna, no Kripa, no Kritavarma, no Nakula, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 8. Plate `answer` — cast: krishna, arjuna

**Save as:** `plate-answer.jpg` → imports to `stills/plate-answer.jpg`

**Beat:** At Krishna's word, Arjuna looses his own brahmashira — to quell the other weapon, with a blessing for all the worlds.

**Light:** day (weapon fire) · **Depends on:** needs #1

**Note:** Krishna image: Ep 04 Krishna lock = ref 2. He stands on foot, no reins.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-ganga21-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men standing on the sandy bank of the wide Ganga. Arjuna (match the attached Arjuna lock: noble adult warrior, dark mustache, tall gold crown, cream-white dhoti and angavastram, gold belt and armlets, quiver on his back, the great Gandiva bow; no flower garland, no peacock feather) stands with his feet planted, the Gandiva fully drawn, a single long arrow on the string blazing with calm white-gold fire, aimed up and outward across the river toward a distant blaze of light; his face is solemn, not angry. Beside him Krishna (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather - not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; Arjuna's charioteer, here standing on foot, no reins in his hands; no flute, no bow) points with his right hand toward the far blaze, his left hand resting on Arjuna's shoulder. Exactly four hands in the whole picture. Bright daylight on the Ganga, but the blazing weapons flood the scene with white-gold fire and a hot shimmer in the air, the sky above them flaring (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Yudhishthira. No Bhima. No Draupadi. No Ashwatthama. No Vyasa. No Narada. No Duryodhana, no Karna, no Kripa, no Kritavarma, no Nakula, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 9. Plate `between` — cast: vyasa, narada

**Save as:** `plate-between.jpg` → imports to `stills/plate-between.jpg`

**Beat:** The two fires rush to meet. Vyasa and Narada step between them, calm and shining, and bid both warriors call their weapons back.

**Light:** day (weapon fire) · **Depends on:** needs #1 + #2 + #3

**Note:** Only the two rishis are drawn, between two walls of fire; no warriors. Narada never blue; Vyasa never in saffron.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-ganga21-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-vyasa.jpg`  ← output of #2
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-narada.jpg`  ← output of #3
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult holy men standing side by side on the sandy bank of the wide Ganga, between two vast blazing walls of white-gold fire that rush toward each other from the left and the right edges of the frame. On the left Vyasa (match the attached Vyasa lock - the great rishi, author of the epic and grandfather of the Pandavas: a tall, ancient yet vigorous holy man with a dark complexion, calm deep-set luminous eyes, long matted tawny-brown locks piled high on his head, a long flowing grey beard, three white ash lines on the brow, white sacred thread, an ochre bark-cloth garment with a black deerskin over one shoulder, a rudraksha rosary; no weapons, no crown, never saffron robes, never Drona), his right palm raised outward toward one fire, his left hand holding a rudraksha rosary. On the right Narada (match the attached Narada lock - the wandering celestial rishi: an ageless, youthful holy man with a fair golden glowing complexion, a clean-shaven serene face with a gentle smile, dark hair in a high topknot tied with a white cloth, a vertical sandal-paste tilak, white dhoti and white upper cloth, white sacred thread, a tulasi-bead necklace, a long-necked veena; never blue skin, no beard, no weapons, no crown, no peacock feather, no flute), his right palm raised outward toward the other fire, his left arm cradling his veena against his shoulder. Both are calm, radiant and unharmed, a soft halo of light around each, the fires halted just short of them. Behind them the hermitage huts on the bank. No warriors visible. Exactly four hands in the whole picture. Bright daylight on the Ganga, but the blazing weapons flood the scene with white-gold fire and a hot shimmer in the air, the sky above them flaring (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Bhima. No Arjuna. No Draupadi. No Ashwatthama. No Duryodhana, no Karna, no Kripa, no Kritavarma, no Nakula, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 10. Plate `turn` — cast: arjuna, ashwatthama

**Save as:** `plate-turn.jpg` → imports to `stills/plate-turn.jpg`

**Beat:** Arjuna withdraws his weapon. Ashwatthama cannot. Instead, he turns his against the unborn heir of the Pandavas.

**Light:** day (weapon fire) · **Depends on:** needs #1

**Note:** Implication only: the weapon's target is never shown — reject any output with a woman, pregnant figure, child or baby.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-ganga21-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men facing each other across the sandy bank of the wide Ganga. On the left Arjuna (match the attached Arjuna lock: noble adult warrior, dark mustache, tall gold crown, cream-white dhoti and angavastram, gold belt and armlets, quiver on his back, the great Gandiva bow; no flower garland, no peacock feather) lowers the Gandiva with his left hand, his right hand open as the white-gold fire of his arrow folds back into his quiver in a soft glow; his face is calm. On the right Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti, here wearing a rough cloak of woven kusha grass over his armor, dust on his arms; never a child, never white-bearded, no royal crown) flings his right arm out toward the far horizon, the blazing blade of grass in his hand streaming a long white-gold comet of fire away over the river into the distant sky; his left hand is clenched, his face anguished and defiant. No woman, no child and no baby anywhere in the picture - the weapon's target is never shown. Exactly four hands in the whole picture. Bright daylight on the Ganga, but the blazing weapons flood the scene with white-gold fire and a hot shimmer in the air, the sky above them flaring (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Bhima. No Draupadi. No Vyasa. No Narada. No Duryodhana, no Karna, no Kripa, no Kritavarma, no Nakula, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 11. Plate `word` — cast: krishna, ashwatthama, vyasa

**Save as:** `plate-word.jpg` → imports to `stills/plate-word.jpg`

**Beat:** Krishna gives his word: the child will be born, and will live. Ashwatthama yields the jewel from his forehead, and walks away alone.

**Light:** day · **Depends on:** needs #1 + #2

**Note:** Krishna image: Ep 04 Krishna lock = ref 2. He stands on foot, no reins. Ashwatthama's forehead must be BARE here (the jewel is in his palm).

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-ganga21-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-vyasa.jpg`  ← output of #2
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult men on the sandy bank of the wide Ganga beside the thatched hermitage huts. On the left Krishna (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather - not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; Arjuna's charioteer, here standing on foot, no reins in his hands; no flute, no bow) raises his right hand in a solemn promise, his left hand at his side, his face serene and stern. In the centre Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, the middle of his forehead now bare where the jewel was, no jewel on his brow, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti, here wearing a rough cloak of woven kusha grass over his armor, dust on his arms; never a child, never white-bearded, no royal crown) stands with his head bowed, holding out the glowing forehead jewel on his open right palm, his left hand at his side. On the right Vyasa (match the attached Vyasa lock - the great rishi, author of the epic and grandfather of the Pandavas: a tall, ancient yet vigorous holy man with a dark complexion, calm deep-set luminous eyes, long matted tawny-brown locks piled high on his head, a long flowing grey beard, three white ash lines on the brow, white sacred thread, an ochre bark-cloth garment with a black deerskin over one shoulder, a rudraksha rosary; no weapons, no crown, never saffron robes, never Drona) reaches out with his right hand to receive the jewel, his left hand holding a rudraksha rosary. Exactly six hands in the whole picture. Bright late-morning daylight on the Ganga: clear blue sky with soft white clouds, sunlight glittering on the wide river (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Yudhishthira. No Bhima. No Arjuna. No Draupadi. No Narada. No Duryodhana, no Karna, no Kripa, no Kritavarma, no Nakula, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 12. Plate `home` — cast: yudhishthira, bhima, draupadi

**Save as:** `plate-home.jpg` → imports to `stills/plate-home.jpg`

**Beat:** Bhima places the jewel in Draupadi's hands. Her vow fulfilled, she gives it to Yudhishthira, to wear upon his head.

**Light:** late-afternoon daylight · **Depends on:** none (camp21-master already exists)

**Note:** camp21-master is the Ep 20 NIGHT camp gate (byte copy, already exists) — keep its gate, palisade, tents, banyan and river but force daylight (golden late afternoon): reject any output with a moon, stars or night sky.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/camp21-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/bhima.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/draupadi.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult figures, one woman and two men, before the carved wooden gate of a war-camp in late-afternoon light. Use the attached scene master only for the carved gate, the timber palisade, the tents, the banyan tree and the river - it is a night view, so repaint the whole scene in daylight. In the centre Draupadi, queen of the Pandavas (match the attached Draupadi lock: young adult woman, warm brown skin, large dark eyes, soft brows, a small red bindi, long black wavy hair worn loose, a deep red sari with a gold border, modest gold ornaments; dignified, never sexualized, no crown, no armor, no peacock feather) stands, calm now, holding a luminous jewel in both cupped hands. On the left Bhima (match the attached Bhima lock: broad noble face, full dark mustache, fierce dark eyes, gold warrior circlet, deep gold and leaf-green engraved armor, powerful build; never saffron sage robes, no peacock feather) has just placed it there, his right hand still extended, his left hand at his side, his face softened. On the right Yudhishthira, eldest Pandava king (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) bows his head toward her, his right hand on his heart, his left hand at his side, ready to receive it. Exactly six hands in the whole picture. Late-afternoon golden daylight at the camp: long warm shadows, a calm clear sky, the smoke gone (this beat is in DAYLIGHT, NOT night: no moon, no stars, no burning torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. No Ashwatthama. No Vyasa. No Narada. No Duryodhana, no Karna, no Kripa, no Kritavarma, no Nakula, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## 13. Poster — cast: arjuna, ashwatthama

**Save as:** `poster.jpg` → imports to `stills/poster.jpg`

**Light:** day (weapon fire) · **Depends on:** needs #1 (lock-ganga21-master.jpg)

**Note:** Poster = Ep 21 thesis (the two brahmashiras over the Ganga). If a separate poster pass is cut, copy the GATE C-passed plate-answer.jpg.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_inbox/consumer-imagine/lock-ganga21-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/21-brahmashira/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536x1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra poster, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men facing each other across the sandy bank of the wide Ganga in daylight. On the left Arjuna (match the attached Arjuna lock: noble adult warrior, dark mustache, tall gold crown, cream-white dhoti and angavastram, gold belt and armlets, quiver on his back, the great Gandiva bow; no flower garland, no peacock feather) draws the Gandiva, a single arrow blazing with calm white-gold fire. On the right Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti, here wearing a rough cloak of woven kusha grass over his armor, dust on his arms; never a child, never white-bearded, no royal crown) raises a blade of grass blazing like a small sun, the jewel on his forehead glowing. Their two fires surge toward each other and meet in a great burst of white-gold light above the river in the centre. Strong diagonal composition with clear headroom for a title. Exactly four hands. Bright daylight on the Ganga, but the blazing weapons flood the scene with white-gold fire and a hot shimmer in the air, the sky above them flaring (this beat is in DAYLIGHT, NOT night: no moon, no stars, no torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Bhima. No Draupadi. No Vyasa. No Narada. No Duryodhana, no Karna, no Kripa, no Kritavarma, no Nakula, no Shiva. Output: native 3:2 landscape, at least 1536x1024. No watermark.
```

## After generation

1. Eye-check every file: 3:2, ≥1536×1024, carved gold-and-lotus cartouche, daylight everywhere (no moon/stars, camp plates repainted from the night master), exactly two arms and two hands per person, faces match locks, no watermark, no Duryodhana/Karna/Kripa/Kritavarma/Shiva anywhere, Krishna only on `follow`/`answer`/`word` (Ep 04 look), Arjuna only on `follow`/`answer`/`turn`/poster, Vyasa clearly not Drona, Narada not blue, Ashwatthama's forehead bare on `word` only, no woman/child/baby on `turn`, no bodies/blood anywhere.
2. `python3 tools/import_consumer_stills.py 21-brahmashira` → `python3 tools/stills_review.py episodes/21-brahmashira --require`.
3. Fill `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md`.
4. GATE D install (`python3 tools/install_review.py episodes/21-brahmashira --report`), registry (`js/episodes.js`, `EP_LOADERS["21"]`, README row, cache bumps in index.html / play.html / landing.js, hub thumbs), ship.
