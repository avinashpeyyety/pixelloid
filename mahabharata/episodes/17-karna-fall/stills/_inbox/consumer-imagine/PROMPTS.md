# Ep 17 *The Fall of Karna* — SuperGrok consumer Imagine prompt pack

**Status:** PREPARED, NOT GENERATED (2026-10-07). GATE D-dialogue PASS · GATE A/B PASS · Kokoro TTS rendered. Do not ship until GATE C (`stills_review.py --require` + `RR-gateC-visual.md`) and GATE D install pass.

**Path:** grok.com Imagine on Avinash's SuperGrok consumer subscription only. Never api.x.ai / paid xAI credits.

**Drop folder (this folder):** `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/` — save each result under the exact **Save as** name below.

**Import:** `cd /workspace/pixelloid/mahabharata && python3 tools/import_consumer_stills.py 17-karna-fall` (add `--force` to overwrite the copy-forward locks only if intended). `lock-<id>.jpg` → `stills/_locks/<id>.jpg`, `plate-<id>.jpg` → `stills/plate-<id>.jpg`, `poster.jpg` → `stills/poster.jpg`.

**Box caveat:** the import tool converts PNG/WEBP with macOS `sips`, which the Linux box lacks. Save downloads as `.jpg`, or convert first: `python3 -c "from PIL import Image; Image.open('in.png').convert('RGB').save('plate-x.jpg', quality=92)"`.

**Rules for every image:** aspect **3:2 landscape**, ≥1536×1024 (reject 720p / 16:9 / square). Attach refs in the listed order — the **first** ref must be a 3:2 ≥1536×1024 image. Attach **only** the listed refs. **Never** attach `episodes/01-birds-eye/stills/plate-wide-gold.jpg` or any finished `plate-*.jpg`. No text, plaques, speech bubbles, gore, bodies, modern props, or visible Grok watermark. Every person has exactly two arms and two hands. Generate in order — every plate uses image #1 (the scene master) as its first ref, so it is referenced at its **inbox** path (`lock-field17-master.jpg` in this folder); after import the same file is also `stills/_locks/field17-master.jpg`.

**KRISHNA RULE:** Krishna is Arjuna's charioteer in this episode. On every image where Krishna appears, the **first character ref** (right after the scene master) is the **Ep 04 Krishna lock** `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg` (official series reference, Avinash 2026-10-05; byte-copied to `stills/_locks/krishna.jpg`), and the prompt spells out the locked look: pale silvery dusty-blue skin, long loose curls, slim gold band with one peacock feather, white U-tilak, jasmine-rose garland, saffron(-yellow pitambar) dhoti, crimson sash, exactly two hands. Krishna and Arjuna are never in a plate they are not cast in.

**Already locked (copy-forward, no generation needed):** `stills/_locks/krishna.jpg` (= Ep 04 lock), `arjuna.jpg` (= Ep 15/14 lock: gold crown, mustache, cream-white dhoti, quiver, Gandiva), `karna.jpg` (= Ep 16/13 lock: Anga diadem with red gem, gold-crimson armor, crimson cape, Vijaya bow — no kavacha), `shalya.jpg` (= Ep 16 lock: grey-streaked dark beard, silver-gold Madra crown, indigo-blue armor).

**Daylight:** the Karna and Shalya locks are **night** portraits (moon, stars, torches). Every Ep 17 plate is daytime on the seventeenth day — afternoon, the last two in low late-afternoon gold. Each prompt says NOT night; reject any output with a moon, stars or a night sky.

**Arjuna's crown:** gold crown on `meet` and `crown` (where the serpent arrow knocks it off); from `rebuke` on, no crown — hair bound with a plain white cloth (Karna Parva).

**To generate: 11 images** — 1 scene master + 9 beat plates + 1 poster. No new cast locks.

| # | Save as | Imports to | Refs | Krishna |
|---|---------|-----------|------|---------|
| 1 | `lock-field17-master.jpg` | `stills/_locks/field17-master.jpg` | 1 | — |
| 2 | `plate-meet.jpg` | `stills/plate-meet.jpg` | 5 | yes (Ep 04 lock = ref 2) |
| 3 | `plate-serpent.jpg` | `stills/plate-serpent.jpg` | 4 | — |
| 4 | `plate-crown.jpg` | `stills/plate-crown.jpg` | 4 | yes (Ep 04 lock = ref 2) |
| 5 | `plate-wheel.jpg` | `stills/plate-wheel.jpg` | 4 | — |
| 6 | `plate-plea.jpg` | `stills/plate-plea.jpg` | 3 | — |
| 7 | `plate-rebuke.jpg` | `stills/plate-rebuke.jpg` | 4 | yes (Ep 04 lock = ref 2) |
| 8 | `plate-anjalika.jpg` | `stills/plate-anjalika.jpg` | 4 | yes (Ep 04 lock = ref 2) |
| 9 | `plate-fall.jpg` | `stills/plate-fall.jpg` | 3 | — |
| 10 | `plate-conch.jpg` | `stills/plate-conch.jpg` | 4 | yes (Ep 04 lock = ref 2) |
| 11 | `poster.jpg` | `stills/poster.jpg` | 5 | yes (Ep 04 lock = ref 2) |

## 1. Scene master — Kurukshetra, afternoon of the seventeenth day

**Save as:** `lock-field17-master.jpg` → imports to `stills/_locks/field17-master.jpg`

**Note:** Used by all nine plates and the poster (attached FIRST on each). Generate this first. Daylight master — it is what keeps the night-time Karna/Shalya locks from dragging plates into night.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style, palette and frame of the attached Ep 10 field-master. The Kurukshetra battlefield on the afternoon of the seventeenth day: a wide open stretch of trampled golden dust in the foreground scored with chariot ruts, the two armies drawn back in a vast distant ring to watch, rows of small banners and parasols, a bright warm gold afternoon sun high in a hazy saffron-gold sky, long soft shadows. Carved gold-and-lotus cartouche integrated into the painting, heroic depth for two great chariots to be placed later. No people in the foreground, no named figures. Bright daylight — NOT night: no moon, no stars, no torches. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no watermark. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 2. Plate `meet` — cast: krishna, arjuna, karna, shalya

**Save as:** `plate-meet.jpg` → imports to `stills/plate-meet.jpg`

**Beat:** Seventeenth day. Krishna drives Arjuna; Shalya drives Karna. The two great archers meet at last, and heaven itself takes sides.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/lock-field17-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/karna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/shalya.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly four adult men on two great chariots facing each other across the Kurukshetra field. On the left, Krishna the charioteer (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather — not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; no flute, no bow) holds the reins of Arjuna's chariot, drawn by white horses under a banner with a small golden ape device; behind him stands Arjuna (match the attached Arjuna lock: noble adult warrior, dark mustache, tall gold crown, cream-white dhoti and angavastram, gold belt and armlets, quiver on his back, the great Gandiva bow; no flower garland, no peacock feather), Gandiva raised. On the right, Shalya, king of Madra (match the attached Shalya lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram) holds the reins of Karna's chariot, drawn by white horses the hue of cranes under a white standard with the elephant's-rope device; behind him stands Karna, king of Anga (match the attached Karna lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson engraved armor, crimson cape, gold-backed Vijaya bow; no peacock feather, no divine kavacha), Vijaya bow raised. The two archers' eyes are locked across the gap. Distant ranks drawn back in a vast ring to watch, banners only. No gods drawn. Bright afternoon daylight of the seventeenth day: warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches (the attached Karna and Shalya locks are night portraits; take only their faces, crowns and armor, never their night sky). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 3. Plate `serpent` — cast: karna, shalya

**Save as:** `plate-serpent.jpg` → imports to `stills/plate-serpent.jpg`

**Beat:** Karna fits his serpent-mouthed arrow. “It will miss — fit another,” Shalya warns. “Karna never aims twice,” he answers.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/lock-field17-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/karna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men on one chariot. Karna, king of Anga (match the attached Karna lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson engraved armor, crimson cape, gold-backed Vijaya bow; no peacock feather, no divine kavacha) draws his bow to the ear with a single blazing arrow whose head is carved like a serpent's open mouth (an arrow, not a living snake); bow, arrow and his fierce gaze lie on one straight line toward his foe off-frame to the left. In front, Shalya, king of Madra (match the attached Shalya lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram) half-turns on the driver's seat, golden reins in one fist and his other hand raised in warning. White horses the hue of cranes, white elephant's-rope standard, distant ranks only. No Arjuna, no Krishna. Bright afternoon daylight of the seventeenth day: warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches (the attached Karna and Shalya locks are night portraits; take only their faces, crowns and armor, never their night sky). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 4. Plate `crown` — cast: krishna, arjuna

**Save as:** `plate-crown.jpg` → imports to `stills/plate-crown.jpg`

**Beat:** Krishna presses the chariot into the earth with his feet. The horses kneel, and the arrow takes only Arjuna’s crown.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/lock-field17-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men on one chariot. Krishna the charioteer (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather — not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; no flute, no bow) rises on the driver's seat, reins in both hands, and presses the chariot down with his feet: the chariot has sunk a cubit into the earth and its four white horses kneel with bent forelegs. Behind him, Arjuna (match the attached Arjuna lock: noble adult warrior, dark mustache, tall gold crown, cream-white dhoti and angavastram, gold belt and armlets, quiver on his back, the great Gandiva bow; no flower garland, no peacock feather) stands steady with Gandiva as a blazing serpent-mouthed arrow streaks in and strikes his gold crown, knocking it from his head in a burst of golden sparks — his head and face unhurt. Bright afternoon daylight of the seventeenth day: warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Karna. No Shalya. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 5. Plate `wheel` — cast: karna, shalya

**Save as:** `plate-wheel.jpg` → imports to `stills/plate-wheel.jpg`

**Beat:** Then the earth swallows Karna’s wheel, as a Brahmin once cursed — and Parashurama’s Brahma weapon slips from his memory.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/lock-field17-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/karna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men on one tilting chariot. The earth is swallowing its left wheel — the rim sinking deep, dust heaving. Karna, king of Anga (match the attached Karna lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson engraved armor, crimson cape, gold-backed Vijaya bow; no peacock feather, no divine kavacha) staggers as the chariot lurches, Vijaya bow in one hand, the other hand pressed to his brow, straining to remember a weapon that will not come. In front, Shalya, king of Madra (match the attached Shalya lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram) hauls on the golden reins as the white horses strain. No Brahmin, no sage, no gods drawn. Bright afternoon daylight of the seventeenth day: warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches (the attached Karna and Shalya locks are night portraits; take only their faces, crowns and armor, never their night sky). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 6. Plate `plea` — cast: karna

**Save as:** `plate-plea.jpg` → imports to `stills/plate-plea.jpg`

**Beat:** Karna leaps down to heave at the wheel. “Wait, Arjuna! You stand on a chariot — I stand on the ground.”

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/lock-field17-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/karna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly one adult man on foot beside his tilted chariot. Karna, king of Anga (match the attached Karna lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson engraved armor, crimson cape, gold-backed Vijaya bow; no peacock feather, no divine kavacha) has leapt down into the dust and grips the rim of the deeply sunken wheel with both hands, heaving it upward with all his strength; his face is turned up toward an unseen foe off-frame left, calling out, eyes wet with tears of wrath. His Vijaya bow leans against the chariot side; white horses and the elephant's-rope standard behind. Nobody else in the frame. Bright afternoon daylight of the seventeenth day: warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches (the attached Karna and Shalya locks are night portraits; take only their faces, crowns and armor, never their night sky). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. No Shalya. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 7. Plate `rebuke` — cast: krishna, arjuna

**Save as:** `plate-rebuke.jpg` → imports to `stills/plate-rebuke.jpg`

**Beat:** Krishna answers: “Where was your dharma when Draupadi was dragged into the hall in a single cloth — and you laughed?”

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/lock-field17-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men on one chariot. Krishna the charioteer (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather — not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; no flute, no bow) sits on the driver's seat with the reins in one hand and raises his other hand, pointing ahead toward a foe off-frame, his face grave and stern as he speaks. Behind him stands Arjuna (match the attached Arjuna lock — same face, dark mustache, cream-white dhoti and angavastram, gold belt, quiver on his back, Gandiva bow — but his gold crown is gone: his dark hair is bound with a plain white cloth; no flower garland, no peacock feather), Gandiva in hand, his face hardening with anger as he remembers. White horses, distant ranks only. No woman, no hall, no gods drawn. Bright afternoon daylight of the seventeenth day: warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Karna. No Shalya. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 8. Plate `anjalika` — cast: krishna, arjuna

**Save as:** `plate-anjalika.jpg` → imports to `stills/plate-anjalika.jpg`

**Beat:** Karna fights on. Arjuna cuts down his standard, then draws the Anjalika arrow, bright as a sunbeam, and looses it.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/lock-field17-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men on one chariot. Arjuna (match the attached Arjuna lock — same face, dark mustache, cream-white dhoti and angavastram, gold belt, quiver on his back, Gandiva bow — but his gold crown is gone: his dark hair is bound with a plain white cloth; no flower garland, no peacock feather) draws Gandiva to the ear with the Anjalika arrow — a great arrow with a broad, gleaming crescent-like head that blazes like a ray of the sun; bow, arrow and his gaze lie on one straight line toward his foe far off-frame to the right. In front, Krishna the charioteer (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather — not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; no flute, no bow) holds the reins steady and turns his head, urging him on. Far in the distance a white elephant's-rope standard topples (no figures). Bright afternoon daylight of the seventeenth day: warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Karna. No Shalya. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 9. Plate `fall` — cast: shalya

**Save as:** `plate-fall.jpg` → imports to `stills/plate-fall.jpg`

**Beat:** In the afternoon Karna, son of the Sun, falls. A radiant light rises from his body and climbs into the sky.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/lock-field17-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/shalya.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly one adult man. Karna's chariot stands tilted on its sunken wheel, the warrior's place behind the driver's seat empty. Shalya, king of Madra (match the attached Shalya lock: mature warrior-king, thick dark mustache and short dark beard streaked with grey, tall silver-and-gold Madra crown, deep indigo-blue and silver-gold engraved armor, white-and-silver angavastram) sits alone on the driver's seat, golden reins slack in his hands, looking up stunned. From beside the chariot a tall radiant column of golden light rises and climbs into the sky toward the sun. White horses standing still, heads bowed; distant ranks only. No body, no head, no blood. Low late-afternoon sun of the seventeenth day, deep gold-amber light and long shadows — still daytime, NOT night: no moon, no stars, no torches. (The attached Shalya lock is a night portrait; take only his face, crown and armor.) Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Krishna. No Arjuna. Karna himself is not shown. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 10. Plate `conch` — cast: krishna, arjuna

**Save as:** `plate-conch.jpg` → imports to `stills/plate-conch.jpg`

**Beat:** Krishna and Arjuna blow their conchs. Arjuna does not know Karna was Kunti’s firstborn — his own elder brother. Krishna knows.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/lock-field17-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly two adult men on one chariot. Arjuna (match the attached Arjuna lock — same face, dark mustache, cream-white dhoti and angavastram, gold belt, quiver on his back, Gandiva bow — but his gold crown is gone: his dark hair is bound with a plain white cloth; no flower garland, no peacock feather) lifts his white conch Devadatta to his lips in victory, Gandiva lowered in his other hand. Beside him, Krishna the charioteer (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather — not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; no flute, no bow), the reins looped over the chariot rail, blows his white conch Panchajanya with both hands, his eyes grave and knowing, turned toward the far field. White horses, distant cheering ranks only. No body, no other named figures. Low late-afternoon sun of the seventeenth day, deep gold-amber light and long shadows — still daytime, NOT night: no moon, no stars, no torches. Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. No Karna. No Shalya. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 11. Poster — cast: karna, krishna, arjuna

**Save as:** `poster.jpg` → imports to `stills/poster.jpg`

**Note:** Poster = Ep 17 thesis (the sunken wheel: Karna on the ground, Arjuna on the chariot, Krishna at the reins). If a separate poster pass is cut, copy the GATE C-passed plate-plea.jpg.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_inbox/consumer-imagine/lock-field17-master.jpg`  ← output of #1
- `/workspace/pixelloid/mahabharata/episodes/04-akshayapatra/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/17-karna-fall/stills/_locks/karna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra poster, in the style and palette of the attached scene master and Ep 10 field-master. Heroic medium, exactly three adult men. In the left foreground Karna, king of Anga (match the attached Karna lock: proud dark mustache, sun-warmed skin, tall jeweled gold Anga diadem with a red gem, deep gold and crimson engraved armor, crimson cape, gold-backed Vijaya bow; no peacock feather, no divine kavacha) stands on foot in the dust, both hands gripping the rim of his deeply sunken chariot wheel, face turned up in defiance. On the right, on a chariot drawn by white horses, Krishna the charioteer (match the attached Ep 04 Krishna lock exactly: pale silvery dusty-blue skin, youthful divine adult, serene dark eyes, long loose dark curls, a slim gold band with one peacock feather — not a tall crown, white U-tilak on the brow, jasmine-and-rose flower garland, saffron-yellow pitambar dhoti, crimson sash, gold jewelry, exactly two hands; no flute, no bow) holds the reins, and behind him Arjuna (match the attached Arjuna lock — same face, dark mustache, cream-white dhoti and angavastram, gold belt, quiver on his back, Gandiva bow — but his gold crown is gone: his dark hair is bound with a plain white cloth; no flower garland, no peacock feather) draws Gandiva with a gleaming arrow, bow, arrow and gaze on one straight line toward Karna. Strong diagonal composition with clear headroom for a title. Bright afternoon daylight of the seventeenth day: warm gold sun, hazy saffron-gold sky — daytime, NOT night: no moon, no stars, no torches (the attached Karna and Shalya locks are night portraits; take only their faces, crowns and armor, never their night sky). Carved gold-and-lotus cartouche integrated into the painting. Every person has normal anatomy with exactly two arms and two hands. Not photoreal. No Drona. No flute. No gore, no blood, no bodies. No text, no letters, no plaques, no speech bubbles, no watermark. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## After generation

1. Eye-check every file: 3:2, ≥1536×1024, carved gold-and-lotus cartouche, daylight (no moon/stars), exactly two arms and two hands per person, faces match locks (Krishna = Ep 04: silvery dusty-blue skin, curls, gold band + one peacock feather, U-tilak, jasmine-rose garland, saffron-yellow dhoti, crimson sash, no flute; Arjuna = Ep 14/15 lock with gold crown on `meet`/`crown` and white cloth from `rebuke` on, no garland/peacock; Karna = Anga diadem with red gem, crimson cape, no peacock, no kavacha; Shalya = grey-streaked dark beard, silver-gold Madra crown, indigo-blue armor), both chariots with white horses (Arjuna's ape-device banner, Karna's elephant's-rope standard), no watermark, no Drona/sage, no Draupadi/Kunti/gods drawn, no body or head on `fall`, no Krishna/Arjuna on `serpent`/`wheel`/`plea`/`fall`, no gore.
2. `python3 tools/import_consumer_stills.py 17-karna-fall` → `python3 tools/stills_review.py episodes/17-karna-fall --require`.
3. Fill `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md` (vs Ep 10 `plate-vow.jpg` — look, don't attach).
4. TTS is already rendered (`audio/orion-00…08.mp3`, see `logic-reviews/RR-tts-kokoro.md`); Raga Multani preset is in `js/main.js`. Then GATE D install (`python3 tools/install_review.py episodes/17-karna-fall --report`), registry (`js/episodes.js`, `EP_LOADERS["17"]`, cache bumps), ship.
