# Ep 16 *Karna Takes Command* — SuperGrok consumer Imagine prompt pack

**Status:** PREPARED, NOT GENERATED (2026-10-05). GATE D-dialogue PASS · GATE A/B PASS · Kokoro TTS rendered. Do not ship until GATE C (`stills_review.py --require` + `RR-gateC-visual.md`) and GATE D install pass.

**Path:** grok.com Imagine on Avinash's SuperGrok consumer subscription only. Never api.x.ai / paid xAI credits.

**Drop folder (this folder):** `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_inbox/consumer-imagine/` — save each result under the exact **Save as** name below.

**Import:** `cd /workspace/pixelloid/mahabharata && python3 tools/import_consumer_stills.py 16-karna-commander` (add `--force` to overwrite the copy-forward locks only if intended). `lock-<id>.jpg` → `stills/_locks/<id>.jpg`, `plate-<id>.jpg` → `stills/plate-<id>.jpg`, `poster.jpg` → `stills/poster.jpg`.

**Box caveat:** the import tool converts PNG/WEBP with macOS `sips`, which the Linux box lacks. Save downloads as `.jpg`, or convert first: `python3 -c "from PIL import Image; Image.open('in.png').convert('RGB').save('plate-x.jpg', quality=92)"`.

**Rules for every image:** aspect **3:2 landscape**, ≥1536×1024 (reject 720p / 16:9 / square). Attach refs in the listed order — the **first** ref must be a 3:2 ≥1536×1024 image. Attach **only** the listed refs. **Never** attach `episodes/01-birds-eye/stills/plate-wide-gold.jpg` or any finished `plate-*.jpg`. No text, plaques, speech bubbles, gore, modern props, or visible Grok watermark. Generate in order — later items use earlier outputs as refs.

**Already locked (copy-forward, no generation needed):** `stills/_locks/karna.jpg` (= Ep 13 lock: Anga diadem with red gem, gold-crimson armor, crimson cape, Vijaya bow — no kavacha), `duryodhana.jpg` (= Ep 13, same file Ep 15 used), `ashwatthama.jpg` (= Ep 15: forehead jewel). Krishna, Arjuna, Yudhishthira and Bhima are narrated only in Ep 16 — none of their locks is attached anywhere.

**Two loci, two masters:** plates `anoint`, `ask`, `outrage`, `tripura` are the **night camp** (first ref = `camp16-master.jpg`); plates `makara`, `reins`, `boast`, `crow`, `secret` and the poster are the **sunrise field** (first ref = `dawn17-master.jpg`).

**To generate: 13 images** — 2 scene masters + 1 new cast lock (Shalya) + 9 beat plates + 1 poster.

| # | Save as | Imports to | Refs |
|---|---------|-----------|------|
| 1 | `lock-camp16-master.jpg` | `stills/_locks/camp16-master.jpg` | 1 |
| 2 | `lock-dawn17-master.jpg` | `stills/_locks/dawn17-master.jpg` | 2 |
| 3 | `lock-shalya.jpg` | `stills/_locks/shalya.jpg` | 2 |
| 4 | `plate-anoint.jpg` | `stills/plate-anoint.jpg` | 5 |
| 5 | `plate-makara.jpg` | `stills/plate-makara.jpg` | 3 |
| 6 | `plate-ask.jpg` | `stills/plate-ask.jpg` | 4 |
| 7 | `plate-outrage.jpg` | `stills/plate-outrage.jpg` | 4 |
| 8 | `plate-tripura.jpg` | `stills/plate-tripura.jpg` | 4 |
| 9 | `plate-reins.jpg` | `stills/plate-reins.jpg` | 4 |
| 10 | `plate-boast.jpg` | `stills/plate-boast.jpg` | 4 |
| 11 | `plate-crow.jpg` | `stills/plate-crow.jpg` | 4 |
| 12 | `plate-secret.jpg` | `stills/plate-secret.jpg` | 4 |
| 13 | `poster.jpg` | `stills/poster.jpg` | 4 |

## 1. Scene master #1 — Kaurava camp by night

**Save as:** `lock-camp16-master.jpg` → imports to `stills/_locks/camp16-master.jpg`

**Note:** Used by plates anoint, ask, outrage, tripura and the Shalya lock.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style, palette and frame of the attached Ep 10 field-master. The Kaurava war-camp at the edge of Kurukshetra by night: rich striped war-tents, a carved consecration seat and golden water-jars under a canopy, a great empty chariot with white horses tethered nearby, torches and oil lamps casting warm saffron-gold light against an indigo night sky with stars, distant tent-lines and banners. Carved gold-and-lotus cartouche integrated into the painting, heroic depth for figures to be placed later. No people in the foreground. Not photoreal. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 2. Scene master #2 — Kurukshetra at sunrise

**Save as:** `lock-dawn17-master.jpg` → imports to `stills/_locks/dawn17-master.jpg`

**Note:** Used by plates makara, reins, boast, crow, secret and the poster. The camp master is a second ref only to hold palette/frame continuity — keep the dawn locus.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/camp16-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style, palette and frame of the attached Ep 10 field-master. The Kurukshetra field at sunrise: empty foreground of golden dust and wheel-ruts (no bodies), distant ranks and many banners on the horizon under a rose-saffron-gold sunrise sky with soft haze, a few birds high in the sky. Carved gold-and-lotus cartouche integrated into the painting, heroic depth for a chariot and figures to be placed later. No people in the foreground. Not photoreal. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 3. Cast lock — Shalya (NEW face)

**Save as:** `lock-shalya.jpg` → imports to `stills/_locks/shalya.jpg`

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/camp16-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra character lock, in the style and palette of the attached scene master and Ep 10 field-master. ONE figure only, solo: Shalya, king of Madra. Face: Mature king of Madra, maternal uncle of the Pandava twins: strong weathered face, thick dark mustache and short dark beard streaked with grey, proud heavy brows, fierce dark eyes — a seasoned warrior-king, never a sage, never fully white-bearded, never frail. Hair: Dark hair streaked with grey under a tall silver-and-gold Madra crown (no peacock feather, no saffron topknot). Costume: Deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram, gold armlets; as charioteer he holds the golden reins and a charioteer's goad; his own banner is a golden ploughshare — never saffron sage robes, never flower garland. Heroic medium, three-quarter view from mid-thigh up, standing in the torchlit Kaurava camp at night, golden ploughshare banner behind him, lamps glowing, distant tents only. Keep the carved gold-and-lotus cartouche integrated into the painting. Nobody else in the frame. Not photoreal. No Drona. No white beard. No sage robes. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 4. Plate `anoint` — cast: karna, duryodhana, ashwatthama

**Save as:** `plate-anoint.jpg` → imports to `stills/plate-anoint.jpg`

**Beat:** Night of the fifteenth day. Drona has fallen. At Ashwatthama’s word, Duryodhana anoints Karna commander of the Kaurava host.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/camp16-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/karna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/duryodhana.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/ashwatthama.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly three adult men in the torchlit Kaurava camp at night. Karna, king of Anga (Ep 13 lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson engraved armor, crimson cape, Vijaya bow resting beside him), sits on a carved consecration seat, head bowed, as Duryodhana the Kaurava king (Ep 13 lock: proud upswept mustache, tall jeweled Kuru crown, jewel-tone gold armor, saffron-orange cape) pours sanctified water over him from a golden jar. Ashwatthama, the guru's son (Ep 15 lock: young adult Brahmin-warrior, luminous jewel in the middle of his forehead, dark mustache, deep maroon and bronze-gold armor, white sacred thread), stands beside them, one hand raised in counsel. Lamps and golden and earthen water-jars; distant kings as small background figures. Karna glows softly like a second sun. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 5. Plate `makara` — cast: karna

**Save as:** `plate-makara.jpg` → imports to `stills/plate-makara.jpg`

**Beat:** At sunrise Karna draws the host into the makara, the sea-beast array, himself at its snout. Dusk falls with no victory.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/dawn17-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/karna.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium: Karna, king of Anga (Ep 13 lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson engraved armor, crimson cape), stands alone on his great chariot at the very snout of the Kaurava army, blowing a conch, Vijaya bow raised in his other hand. His chariot is drawn by white horses the hue of cranes under a white standard bearing the elephant's-rope device. Behind him the distant host is drawn up in the long curving shape of a makara, the sea-beast array — banners and silhouettes only. Rose-saffron-gold sunrise haze over Kurukshetra. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 6. Plate `ask` — cast: karna, duryodhana

**Save as:** `plate-ask.jpg` → imports to `stills/plate-ask.jpg`

**Beat:** That night Karna tells Duryodhana: “Arjuna has Krishna at his reins. Give me Shalya — his equal with horses — and I will win.”

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/camp16-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/karna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/duryodhana.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men inside a torchlit Kaurava war-tent at night. Karna (Ep 13 lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson engraved armor, crimson cape) speaks earnestly, holding out a pair of golden chariot reins in one fist toward Duryodhana — asking for a charioteer. Duryodhana the Kaurava king (Ep 13 lock: proud upswept mustache, tall jeweled Kuru crown, jewel-tone gold armor, saffron-orange cape) leans in, listening, hope rising. Lamps glow; Vijaya bow leans on a stand. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 7. Plate `outrage` — cast: shalya, duryodhana

**Save as:** `plate-outrage.jpg` → imports to `stills/plate-outrage.jpg`

**Beat:** Duryodhana asks Shalya, king of Madra. Shalya flares in fury: “Shall a crowned king drive the chariot of a charioteer’s son?”

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/camp16-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/duryodhana.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men in the torchlit Kaurava camp at night. Shalya, king of Madra (this episode's lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram), rises in fury — brows drawn into three lines, eyes red with wrath, one arm flung out in refusal, his gold mace at his side. Duryodhana the Kaurava king (Ep 13 lock: proud upswept mustache, tall jeweled Kuru crown, jewel-tone gold armor, saffron-orange cape) stands before him with joined hands, asking. Behind them, Karna's empty chariot with white horses waits in the torchlight. Nobody else in the foreground. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 8. Plate `tripura` — cast: duryodhana, shalya

**Save as:** `plate-tripura.jpg` → imports to `stills/plate-tripura.jpg`

**Beat:** Duryodhana tells him of Tripura: when Shiva rode to burn the three cities, Brahma himself held the reins. The driver is the greater.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/camp16-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/duryodhana.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/shalya.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men in the lamplit Kaurava camp at night. Duryodhana the Kaurava king (Ep 13 lock: proud upswept mustache, tall jeweled Kuru crown, jewel-tone gold armor, saffron-orange cape) bows his head and offers a pair of golden chariot reins to Shalya with both hands, telling an ancient tale. Shalya, king of Madra (this episode's lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold armor), listens with one hand on his chest, his wrath cooling into proud consideration. No gods drawn; no cities drawn. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 9. Plate `reins` — cast: shalya, karna

**Save as:** `plate-reins.jpg` → imports to `stills/plate-reins.jpg`

**Beat:** Shalya agrees — on one condition: he may say whatever he likes to Karna. At dawn of the seventeenth day he takes the reins.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/dawn17-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/karna.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men on one great chariot at dawn. Shalya, king of Madra (this episode's lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold armor), sits in the driver's seat at the front and gathers the golden reins and a charioteer's goad. Karna (Ep 13 lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson armor, crimson cape) stands tall behind him with the Vijaya bow, cheerful and ready. White horses the hue of cranes; white standard with the elephant's-rope device. Rose-saffron-gold sunrise over Kurukshetra, distant ranks only. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 10. Plate `boast` — cast: karna, shalya

**Save as:** `plate-boast.jpg` → imports to `stills/plate-boast.jpg`

**Beat:** Karna calls to the ranks: “Whoever shows me Arjuna shall have jewels, a hundred cows, and a chariot of gold!”

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/dawn17-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/karna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/shalya.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men on one chariot rolling forward at dawn. Karna (Ep 13 lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson armor, crimson cape) stands tall, Vijaya bow in one hand, the other arm flung out toward the ranks as he calls out his challenge and promise of rewards. Shalya (this episode's lock: mature king of Madra, dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold armor) drives in front with the golden reins, lips curled in scorn. White horses at a canter, elephant's-rope standard streaming, distant ranks only. Rose-saffron-gold morning haze. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 11. Plate `crow` — cast: shalya, karna

**Save as:** `plate-crow.jpg` → imports to `stills/plate-crow.jpg`

**Beat:** Shalya laughs in scorn. “A crow once raced a swan across the sea — and had to be carried home by the swan.”

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/dawn17-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/karna.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men on one chariot at dawn. Shalya (this episode's lock: mature king of Madra, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold armor) half-turns on the driver's seat, golden reins in his fists, laughing in scorn back at Karna. Karna (Ep 13 lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson armor, crimson cape) glares down at him, jaw set, Vijaya bow gripped. High in the rose-gold dawn sky, a single white swan flies strong and far ahead of a small tired black crow. Distant ranks only. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 12. Plate `secret` — cast: karna, shalya

**Save as:** `plate-secret.jpg` → imports to `stills/plate-secret.jpg`

**Beat:** Karna rides on; he knows who Krishna and Arjuna are. He does not know that Shalya once promised Yudhishthira to break his spirit.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/dawn17-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/karna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/shalya.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men on one chariot surging forward into the morning. Karna (Ep 13 lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson armor, crimson cape, Vijaya bow) faces ahead in profile, resolute and unbowed. Shalya at the golden reins (this episode's lock: mature king of Madra, dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold armor) casts a guarded sidelong glance back at him, a hidden purpose in his eyes. White horses at full stride, elephant's-rope standard streaming, dust rising, distant ranks ahead. Rose-saffron-gold morning light. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 13. Poster — cast: karna, shalya

**Save as:** `poster.jpg` → imports to `stills/poster.jpg`

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/dawn17-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/karna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/16-karna-commander/stills/_locks/shalya.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra poster, in the style and palette of the attached Ep 10 field-master. Heroic medium: Karna the commander (Ep 13 lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson engraved armor, crimson cape) stands tall on his great chariot with the Vijaya bow raised, and Shalya, king of Madra (this episode's lock: mature warrior-king, dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold armor), sits at the golden reins in front, eyes turned sidelong. White horses the hue of cranes rear forward; elephant's-rope standard streams; rose-saffron-gold sunrise over Kurukshetra. Strong central composition with clear headroom for a title. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## After generation

1. Eye-check every file: 3:2, ≥1536×1024, cartouche, faces match locks (Karna = Ep 13: Anga diadem with red gem, crimson cape, no peacock, no kavacha; Shalya = this episode's lock on every Shalya plate — grey-streaked dark beard, silver-gold Madra crown, indigo-blue armor; Duryodhana's saffron cape vs Karna's crimson; Ashwatthama's forehead jewel), Karna's chariot = white horses + white elephant's-rope standard on every chariot plate, no watermark, no Drona/sage, no Shiva/Brahma on `tripura`, no Krishna/Arjuna anywhere, no gore.
2. `python3 tools/import_consumer_stills.py 16-karna-commander` → `python3 tools/stills_review.py episodes/16-karna-commander --require`.
3. Fill `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md` (vs Ep 10 `plate-vow.jpg` — look, don't attach).
4. TTS is already rendered (`audio/orion-00…08.mp3`, see `logic-reviews/RR-tts-kokoro.md`); Raga Adana preset is in `js/main.js`. Then GATE D install (`python3 tools/install_review.py episodes/16-karna-commander --report`), registry (`js/episodes.js`, `EP_LOADERS["16"]`, cache bumps), ship.
