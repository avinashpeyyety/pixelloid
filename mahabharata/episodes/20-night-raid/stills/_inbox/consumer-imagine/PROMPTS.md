# Ep 20 *The Night Raid* — SuperGrok consumer Imagine prompt pack

**Status:** NOT GENERATED (prompt pack ready 2026-10-12). Next: a browser agent generates all 13 images on grok.com (SuperGrok consumer), saves them here under the exact names, then import + GATE C.

**Path:** grok.com Imagine on Avinash's SuperGrok consumer subscription only. Never api.x.ai / paid xAI credits.

**Drop folder (this folder):** `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/` — save each result under the exact **Save as** name below.

**Generation kit (box):** `/home/box/lab-keep/pixelloid-build/ep20-gen/` — `prompt-NN.txt` (exact prompt), `manifest.tsv` (Save-as + ordered ref paths), `refs/` (copies of every pre-existing ref).

**Import:** `cd /workspace/pixelloid/mahabharata && python3 tools/import_consumer_stills.py 20-night-raid`. `lock-<id>.jpg` → `stills/_locks/<id>.jpg`, `plate-<id>.jpg` → `stills/plate-<id>.jpg`, `poster.jpg` → `stills/poster.jpg`.

**Rules for every image:** aspect **3:2 landscape** (set Aspect Ratio to 3:2 Photo Print after attaching refs), ≥1536×1024. Attach refs in the listed order and **only** the listed refs. **Never** attach `episodes/01-birds-eye/stills/plate-wide-gold.jpg` or any finished `plate-*.jpg`. No text, plaques, speech bubbles, gore, blood, bodies, victims, wounds, modern props, or visible watermark. Every person has exactly two arms and two hands. Generate #1 first — every later image except `dawn` uses it as its first ref; then #2 (Kripa lock) and #3 (Kritavarma lock).

**FAMILY-FRIENDLY RULE:** the massacre is told by implication only. Reject any output that shows a sleeping victim, a body, a corpse, blood, a wound, a severed anything, or a weapon striking a person. `tent` shows only Ashwatthama at the tent door (no one inside); `fire` shows only Ashwatthama leaving a burning, empty camp.

**KRISHNA RULE:** Krishna appears on **one** image only (`away` — the Pandavas and Krishna slept away from the camp by the Oghavati, per the texts). There the **first character ref** (right after the scene master) is the **Ep 04 Krishna lock** `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`, and the prompt spells out the locked look: pale silvery dusty-blue skin, long loose curls, slim gold band with one peacock feather, white U-tilak, jasmine-rose garland, saffron-yellow pitambar dhoti, crimson sash, exactly two hands. Every other image says No Krishna / No Arjuna — reject any that shows them.

**Already locked (copy-forward):** krishna (Ep 04), yudhishthira + arjuna (Ep 15), duryodhana + ashwatthama (Ep 16), shiva (Ep 06), lake20-master (= Ep 19 lake19-master). **New:** camp20-master (#1), kripa (#2), kritavarma (#3).

**Light:** every image except `dawn` is NIGHT (`away` at nightfall with a rising moon; `fire` lit orange by the burning tents). `dawn` is first light by the lake. Reject any night image with a sun or daylight sky, and a dawn image with a full moon, torches or a deep night sky.

**To generate: 13 images** — 1 scene master + 2 character locks + 9 beat plates + 1 poster.

| # | Save as | Imports to | Refs | Light | Cast | Krishna |
|---|---------|-----------|------|-------|------|---------|
| 1 | `lock-camp20-master.jpg` | `stills/_locks/camp20-master.jpg` | 1 | night | — (no people) | — |
| 2 | `lock-kripa.jpg` | `stills/_locks/kripa.jpg` | 2 | night | kripa | — |
| 3 | `lock-kritavarma.jpg` | `stills/_locks/kritavarma.jpg` | 2 | night | kritavarma | — |
| 4 | `plate-away.jpg` | `stills/plate-away.jpg` | 5 | night | krishna, yudhishthira, arjuna | yes (Ep 04 lock = ref 2) |
| 5 | `plate-owl.jpg` | `stills/plate-owl.jpg` | 3 | night | ashwatthama | — |
| 6 | `plate-plan.jpg` | `stills/plate-plan.jpg` | 5 | night | ashwatthama, kripa, kritavarma | — |
| 7 | `plate-guardian.jpg` | `stills/plate-guardian.jpg` | 4 | night | ashwatthama, shiva | — |
| 8 | `plate-boon.jpg` | `stills/plate-boon.jpg` | 4 | night | ashwatthama, shiva | — |
| 9 | `plate-watch.jpg` | `stills/plate-watch.jpg` | 4 | night | kripa, kritavarma | — |
| 10 | `plate-tent.jpg` | `stills/plate-tent.jpg` | 3 | night | ashwatthama | — |
| 11 | `plate-fire.jpg` | `stills/plate-fire.jpg` | 3 | night (burning camp) | ashwatthama | — |
| 12 | `plate-dawn.jpg` | `stills/plate-dawn.jpg` | 5 | dawn (first light) | duryodhana, ashwatthama, kripa, kritavarma | — |
| 13 | `poster.jpg` | `stills/poster.jpg` | 3 | night | ashwatthama | — |

## 1. Scene master — the Pandava camp gate at night (banyan forest edge, river)

**Save as:** `lock-camp20-master.jpg` → imports to `stills/_locks/camp20-master.jpg`

**Light:** night · **Depends on:** none (first)

**Note:** Used by every plate except `dawn`, by both new locks and by the poster (attached FIRST on each). Generate this first. Night master: moon, stars, torch glow; no people.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style, palette and frame of the attached Ep 10 field-master. The Pandava war-camp at the edge of Kurukshetra on the night after the eighteenth day, seen from just outside its gate: a tall timber palisade with a carved wooden gate standing open, two torches burning on the gateposts, rows of quiet striped war-tents beyond with a few dim oil lamps, tall Pandava banners hanging still; on the left the dark edge of a forest with a huge old banyan tree trailing aerial roots; a quiet river glinting far off on the right; deep indigo night sky with a pale moon and many stars, cool silver moonlight and warm torch glow. Carved gold-and-lotus cartouche integrated into the painting, heroic depth for figures to be placed later. No people, no named figures. Night — no sun, no daylight. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no watermark. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 2. Character lock — Kripa (new)

**Save as:** `lock-kripa.jpg` → imports to `stills/_locks/kripa.jpg`

**Light:** night · **Depends on:** needs #1 (lock-camp20-master.jpg)

**Note:** First drawn appearance of Kripa. Generate second; plates `plan`, `watch` and `dawn` attach it. Must read clearly different from Drona: close-trimmed silver-grey beard (not long and white), slate-grey and silver armor (not saffron robes).

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra character lock portrait, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium three-quarter portrait of exactly one adult man standing at night before the torchlit gate of a war-camp: Kripa, the old weapons-teacher of the Kuru princes: an elderly Brahmin warrior, lean and upright, grave lined face, close-trimmed silver-grey beard and mustache, silver-grey hair tied in a topknot, three white ash lines on the brow, white sacred thread, slate-grey and silver engraved armor over a cream dhoti, a plain long bow; never saffron robes, never a long flowing white beard, no crown, no flower garland. Grave, wise, troubled expression; both hands resting on his long bow. Warm torchlight on his face and armor against an indigo night sky with stars — night, no sun. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. No Ashwatthama. No Shiva. No other figures. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 3. Character lock — Kritavarma (new)

**Save as:** `lock-kritavarma.jpg` → imports to `stills/_locks/kritavarma.jpg`

**Light:** night · **Depends on:** needs #1 (lock-camp20-master.jpg)

**Note:** First drawn appearance of Kritavarma. Generate third; plates `plan`, `watch` and `dawn` attach it. Brown complexion (never blue), black beard, blackened-steel armor over indigo — clearly different from Ashwatthama (maroon/bronze, forehead jewel) and Kripa (silver-grey).

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra character lock portrait, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium three-quarter portrait of exactly one adult man standing at night before the torchlit gate of a war-camp: Kritavarma, the Yadava chief of the Bhojas: a mature, strongly built adult warrior, square face with a thick black mustache and short black beard, warm brown complexion, dark steel helmet-crown with a small silver crest, blackened-steel and silver engraved armor over deep indigo cloth, a sword at his hip; never blue skin, never a peacock feather, no flute. Hard, watchful expression; right hand on the hilt of his sheathed sword, left hand at his side. Warm torchlight on his face and armor against an indigo night sky with stars — night, no sun. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. No Ashwatthama. No Shiva. No other figures. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 4. Plate `away` — cast: krishna, yudhishthira, arjuna

**Save as:** `plate-away.jpg` → imports to `stills/plate-away.jpg`

**Beat:** The war is won. That night Krishna leads Yudhishthira and his brothers out of their camp, to sleep beside the Oghavati river.

**Light:** night · **Depends on:** needs #1

**Note:** Only Krishna image in the episode (the Pandavas and Krishna slept away from the camp that night). Ep 04 Krishna lock = ref 2.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult men walking along the moonlit grassy bank of a quiet river at nightfall, away from a distant war-camp whose torches glow small on the far left horizon. In front, Krishna (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather — not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; Arjuna's charioteer, here walking on foot with no chariot and no reins; no flute, no bow) turns back toward the others with a calm smile, his right hand gesturing onward along the river, his left hand at his side. Behind him walk Yudhishthira, eldest Pandava king (match the attached Yudhishthira lock: calm noble face, modest dark mustache, simple gold diadem lighter than a heavy crown, cream-white royal dhoti and cream angavastram, gold sash, gold armlets; no gold chest armor, no Gandiva, no flower garland, no peacock feather) and Arjuna (match the attached Arjuna lock: noble adult warrior, dark mustache, tall gold crown, cream-white dhoti and angavastram, gold belt and armlets, quiver on his back, the great Gandiva bow; no flower garland, no peacock feather), the Gandiva resting on Arjuna's shoulder. Exactly six hands in the whole picture. Nightfall after the eighteenth day: deep blue-indigo sky with the last ember-gold glow low on the western horizon, a pale rising moon and the first stars, silver moonlight on the river (this beat is at night — no sun, no daylight; the cream-saffron-gold palette lives only in the carved cartouche and the warm distant torches). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Duryodhana. No Ashwatthama. No Kripa. No Kritavarma. No Shiva. No Karna, no Shalya, no Bhima, no Draupadi. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 5. Plate `owl` — cast: ashwatthama

**Save as:** `plate-owl.jpg` → imports to `stills/plate-owl.jpg`

**Beat:** In a nearby forest, Ashwatthama lies awake beneath a banyan tree. An owl swoops on the sleeping crows — and gives him a terrible idea.

**Light:** night · **Depends on:** needs #1

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly one adult man at night beneath a huge old banyan tree with hanging aerial roots at the edge of a dark forest. Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti; never a child, never white-bearded, no royal crown) lies propped on one elbow on a spread cloth on the ground, wide awake, staring up into the branches, his great bow lying beside him. High in the branches a great pale owl swoops with spread wings among a flock of roosting crows, which burst up in alarm, black feathers scattering in the moonlight. No blood, no dead crows. Deep night after the eighteenth day: indigo-black sky, a pale moon and many stars, cool silver moonlight, warm torch or lamp glow only where described (this beat is at night — no sun, no daylight; the cream-saffron-gold palette lives only in the carved cartouche and the firelight). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Duryodhana. No Kripa. No Kritavarma. No Shiva. No Karna, no Shalya, no Bhima, no Draupadi. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 6. Plate `plan` — cast: ashwatthama, kripa, kritavarma

**Save as:** `plate-plan.jpg` → imports to `stills/plate-plan.jpg`

**Beat:** He wakes Kripa and Kritavarma: they will strike the Pandava camp tonight. Kripa pleads that to attack men in their sleep is against dharma.

**Light:** night · **Depends on:** needs #1 + #2 + #3

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-kripa.jpg`  ← output of #2
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-kritavarma.jpg`  ← output of #3
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult men standing beneath a huge banyan tree at night, distant camp torches glimmering between its hanging roots. In the centre Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti; never a child, never white-bearded, no royal crown) stands with his right fist clenched before his chest and his left hand pointing toward the distant torches, his face fierce. On the left Kripa (match the attached Kripa lock — the old weapons-teacher of the Kuru princes: an elderly Brahmin warrior, lean and upright, grave lined face, close-trimmed silver-grey beard and mustache, silver-grey hair tied in a topknot, three white ash lines on the brow, white sacred thread, slate-grey and silver engraved armor over a cream dhoti, a plain long bow; never saffron robes, never a long flowing white beard, no crown, no flower garland) raises one open palm in protest, his face grave and pleading, his long bow held in his other hand. On the right Kritavarma (match the attached Kritavarma lock — the Yadava chief of the Bhojas: a mature, strongly built adult warrior, square face with a thick black mustache and short black beard, warm brown complexion, dark steel helmet-crown with a small silver crest, blackened-steel and silver engraved armor over deep indigo cloth, a sword at his hip; never blue skin, never a peacock feather, no flute) listens in silence, one hand resting on the hilt of his sheathed sword, the other at his side. Exactly six hands in the whole picture. Deep night after the eighteenth day: indigo-black sky, a pale moon and many stars, cool silver moonlight, warm torch or lamp glow only where described (this beat is at night — no sun, no daylight; the cream-saffron-gold palette lives only in the carved cartouche and the firelight). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Duryodhana. No Shiva. No Karna, no Shalya, no Bhima, no Draupadi. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 7. Plate `guardian` — cast: ashwatthama, shiva

**Save as:** `plate-guardian.jpg` → imports to `stills/plate-guardian.jpg`

**Beat:** Ashwatthama will not listen. At the camp gate a towering guardian blazes with fire, and swallows every weapon he hurls.

**Light:** night · **Depends on:** needs #1

**Note:** Shiva lock is the Ep 06 daylight mountain portrait — take only his face, skin, locks, crescent moon, cobra, tiger skin and trident; keep this beat at night. Exactly two arms on Shiva. No fangs, skulls or blood.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/shiva.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two figures before the carved wooden gate of a sleeping war-camp at night. Filling the gateway and towering far above a man, Shiva (match the attached Shiva lock: pale blue-grey skin, calm stern face, a vertical third-eye mark and three white ash lines on the brow, long matted dark locks piled high with a silver crescent moon, a cobra coiled around his neck, rudraksha beads, tiger-skin garment, a golden trident; exactly two arms and two hands; never Krishna's peacock feather, never a saffron-yellow pitambar) stands as the fierce guardian of the gate, wreathed in a tall aura of golden-orange flame, his face stern and calm, his right hand planting the trident, his left hand open at his side, serpents coiled around his arms. Before him, small and defiant, Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti; never a child, never white-bearded, no royal crown) hurls a spear into the blaze with his right hand; the spear dissolves into sparks in the flames. Exactly four hands in the whole picture. No fangs, no skulls, no blood. Deep night after the eighteenth day: indigo-black sky, a pale moon and many stars, cool silver moonlight, warm torch or lamp glow only where described (this beat is at night — no sun, no daylight; the cream-saffron-gold palette lives only in the carved cartouche and the firelight). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Duryodhana. No Kripa. No Kritavarma. No Karna, no Shalya, no Bhima, no Draupadi. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 8. Plate `boon` — cast: ashwatthama, shiva

**Save as:** `plate-boon.jpg` → imports to `stills/plate-boon.jpg`

**Beat:** Knowing it is Shiva, Ashwatthama prays and offers himself to a sacred fire. Shiva appears, gives him a shining sword, and enters him.

**Light:** night · **Depends on:** needs #1

**Note:** Shiva lock is the Ep 06 daylight mountain portrait — take only his face, skin, locks, crescent moon, cobra, tiger skin and trident; keep this beat at night. Exactly two arms on Shiva. No fangs, skulls or blood.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/shiva.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two figures beside a blazing golden fire altar before the gate of a sleeping war-camp at night. Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti; never a child, never white-bearded, no royal crown) kneels before the altar, reaching up with both hands, having offered himself to the sacred fire; he is unharmed. Rising from the flames, Shiva (match the attached Shiva lock: pale blue-grey skin, calm stern face, a vertical third-eye mark and three white ash lines on the brow, long matted dark locks piled high with a silver crescent moon, a cobra coiled around his neck, rudraksha beads, tiger-skin garment, a golden trident; exactly two arms and two hands; never Krishna's peacock feather, never a saffron-yellow pitambar) leans down and holds out a long shining sword, hilt first, in his right hand, his golden trident in his left hand. A soft white-gold radiance flows from Shiva toward Ashwatthama. Exactly four hands in the whole picture. No burning, no injury. Deep night after the eighteenth day: indigo-black sky, a pale moon and many stars, cool silver moonlight, warm torch or lamp glow only where described (this beat is at night — no sun, no daylight; the cream-saffron-gold palette lives only in the carved cartouche and the firelight). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Duryodhana. No Kripa. No Kritavarma. No Karna, no Shalya, no Bhima, no Draupadi. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 9. Plate `watch` — cast: kripa, kritavarma

**Save as:** `plate-watch.jpg` → imports to `stills/plate-watch.jpg`

**Beat:** Ashwatthama slips into the sleeping camp alone. Kripa and Kritavarma stand guard at the gate, so that no one may escape.

**Light:** night · **Depends on:** needs #1 + #2 + #3

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-kripa.jpg`  ← output of #2
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-kritavarma.jpg`  ← output of #3
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men standing guard on either side of the open carved wooden gate of a sleeping war-camp at night, two torches burning on the gateposts. On the left Kripa (match the attached Kripa lock — the old weapons-teacher of the Kuru princes: an elderly Brahmin warrior, lean and upright, grave lined face, close-trimmed silver-grey beard and mustache, silver-grey hair tied in a topknot, three white ash lines on the brow, white sacred thread, slate-grey and silver engraved armor over a cream dhoti, a plain long bow; never saffron robes, never a long flowing white beard, no crown, no flower garland), his long bow held low in both hands. On the right Kritavarma (match the attached Kritavarma lock — the Yadava chief of the Bhojas: a mature, strongly built adult warrior, square face with a thick black mustache and short black beard, warm brown complexion, dark steel helmet-crown with a small silver crest, blackened-steel and silver engraved armor over deep indigo cloth, a sword at his hip; never blue skin, never a peacock feather, no flute), a drawn sword held low in his right hand, his left hand on the gatepost. Both watch the dark gateway grimly. Through the gate only dark, quiet tents under the moon; no one else is visible. Exactly four hands in the whole picture. Deep night after the eighteenth day: indigo-black sky, a pale moon and many stars, cool silver moonlight, warm torch or lamp glow only where described (this beat is at night — no sun, no daylight; the cream-saffron-gold palette lives only in the carved cartouche and the firelight). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Duryodhana. No Ashwatthama. No Shiva. No Karna, no Shalya, no Bhima, no Draupadi. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 10. Plate `tent` — cast: ashwatthama

**Save as:** `plate-tent.jpg` → imports to `stills/plate-tent.jpg`

**Beat:** He finds the tent where Dhrishtadyumna, who slew his father Drona, lies asleep. What happens inside, the night keeps hidden.

**Light:** night · **Depends on:** needs #1

**Note:** Implication only: no victim, no bodies, no blood — only Ashwatthama is drawn.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly one adult man inside a sleeping war-camp at night. Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti; never a child, never white-bearded, no royal crown) stands at the entrance of a large war-tent, lifting its curtain with his left hand, a long shining sword held low in his right hand, the jewel on his forehead glowing; his face is set and grim. Inside the tent only a small oil lamp's warm glow and deep shadow are visible — no one is shown. Dark tents behind him under the moon. Exactly two hands in the whole picture. Deep night after the eighteenth day: indigo-black sky, a pale moon and many stars, cool silver moonlight, warm torch or lamp glow only where described (this beat is at night — no sun, no daylight; the cream-saffron-gold palette lives only in the carved cartouche and the firelight). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Duryodhana. No Kripa. No Kritavarma. No Shiva. No Karna, no Shalya, no Bhima, no Draupadi. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 11. Plate `fire` — cast: ashwatthama

**Save as:** `plate-fire.jpg` → imports to `stills/plate-fire.jpg`

**Beat:** Before dawn the camp is lost. Draupadi’s five sons and Shikhandi never wake, and fire rises over the tents.

**Light:** night (burning camp) · **Depends on:** needs #1

**Note:** Implication only: no victim, no bodies, no blood — only Ashwatthama is drawn.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly one adult man walking out through the open carved wooden gate of a war-camp at night, toward the viewer. Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti; never a child, never white-bearded, no royal crown) carries a long shining sword lowered at his right side, his left hand clenched, his face weary and grim, the jewel on his forehead glowing. Behind him the tents of the camp burn, tall orange flames and smoke rising into the night sky, sparks drifting. No other people, no bodies, no blood. Exactly two hands in the whole picture. Deep night after the eighteenth day: indigo-black sky streaked with smoke, a pale moon half-hidden, the scene lit from behind by tall orange flames (this beat is at night — no sun, no daylight). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Duryodhana. No Kripa. No Kritavarma. No Shiva. No Karna, no Shalya, no Bhima, no Draupadi. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 12. Plate `dawn` — cast: duryodhana, ashwatthama, kripa, kritavarma

**Save as:** `plate-dawn.jpg` → imports to `stills/plate-dawn.jpg`

**Beat:** At first light the three bring the news to Duryodhana by the lake. Content at last, the fallen king closes his eyes forever.

**Light:** dawn (first light) · **Depends on:** needs #2 + #3

**Note:** Dawn beat by the lake: lake20-master is the Ep 19 late-afternoon lake (byte copy, already exists) — force first light (rose-gold horizon, fading stars, mist), not afternoon gold and not night. Duryodhana alive, peaceful, no wounds.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/lake20-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/duryodhana.jpg`
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-kripa.jpg`  ← output of #2
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-kritavarma.jpg`  ← output of #3

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly four adult men on the sand of a lake shore at first light. Duryodhana, the Kaurava king (match the attached Duryodhana lock: proud upswept mustache, tall jeweled Kuru crown, jewel-tone gold Kaurava armor with a saffron-orange cape, a gold-decked mace), alive, half-reclines against a rock, his jeweled crown fallen on the sand beside him and his mace at his side, his face peaceful with a faint smile, eyes half-closed; no wounds shown. Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti; never a child, never white-bearded, no royal crown) kneels close before him, speaking softly, one hand resting on his own knee. Behind them Kripa (match the attached Kripa lock — the old weapons-teacher of the Kuru princes: an elderly Brahmin warrior, lean and upright, grave lined face, close-trimmed silver-grey beard and mustache, silver-grey hair tied in a topknot, three white ash lines on the brow, white sacred thread, slate-grey and silver engraved armor over a cream dhoti, a plain long bow; never saffron robes, never a long flowing white beard, no crown, no flower garland) and Kritavarma (match the attached Kritavarma lock — the Yadava chief of the Bhojas: a mature, strongly built adult warrior, square face with a thick black mustache and short black beard, warm brown complexion, dark steel helmet-crown with a small silver crest, blackened-steel and silver engraved armor over deep indigo cloth, a sword at his hip; never blue skin, never a peacock feather, no flute) stand with heads bowed. Exactly eight hands in the whole picture. First light of dawn after the night raid: pale rose-gold and grey-blue sky at the horizon, the last stars fading, soft cool light on the still lake, mist on the water — dawn, NOT night: no full moon, no torches, no deep night sky. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Shiva. No Karna, no Shalya, no Bhima, no Draupadi. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 13. Poster — cast: ashwatthama

**Save as:** `poster.jpg` → imports to `stills/poster.jpg`

**Light:** night · **Depends on:** needs #1 (lock-camp20-master.jpg)

**Note:** Poster = Ep 20 thesis (the night raid). If a separate poster pass is cut, copy the GATE C-passed plate-tent.jpg.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_inbox/consumer-imagine/lock-camp20-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/20-night-raid/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra poster, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly one adult man. Ashwatthama (match the attached Ashwatthama lock: young adult Brahmin-warrior, noble lean face, dark mustache, intense dark eyes, a luminous jewel set in the middle of his forehead, dark hair tied back under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti; never a child, never white-bearded, no royal crown) stands before the carved wooden gate of a sleeping war-camp at night, a long shining sword raised before him in his right hand, his left hand clenched, the jewel on his forehead blazing; moonlight and torchlight on his maroon armor; behind the gate dark tents under the moon and a faint red glow. Strong diagonal composition with clear headroom for a title. Exactly two hands. Deep night after the eighteenth day: indigo-black sky, a pale moon and many stars, cool silver moonlight, warm torch or lamp glow only where described (this beat is at night — no sun, no daylight; the cream-saffron-gold palette lives only in the carved cartouche and the firelight). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies, no corpses, no wounds. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Yudhishthira. No Arjuna. No Duryodhana. No Kripa. No Kritavarma. No Shiva. No Karna, no Shalya, no Bhima, no Draupadi. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## After generation

1. Eye-check every file: 3:2, ≥1536×1024, carved gold-and-lotus cartouche, correct night/dawn light, exactly two arms and two hands per person (Shiva included), faces match locks, no watermark, no Karna/Shalya/Bhima/Draupadi anywhere, Krishna and Arjuna only on `away`, Kripa clearly not Drona, Kritavarma not blue, no victims/bodies/blood on `tent`/`fire`, Duryodhana unwounded on `dawn`.
2. `python3 tools/import_consumer_stills.py 20-night-raid` → `python3 tools/stills_review.py episodes/20-night-raid --require`.
3. Fill `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md`.
4. GATE D install (`python3 tools/install_review.py episodes/20-night-raid --report`), registry (`js/episodes.js`, `EP_LOADERS["20"]`, README row, cache bumps in index.html / play.html / landing.js, hub thumbs), ship.
