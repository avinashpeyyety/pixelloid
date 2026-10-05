# Ep 15 *The Narayana Weapon* — SuperGrok consumer Imagine prompt pack

**Status:** PREPARED, NOT GENERATED (2026-10-05). GATE D-dialogue PASS · GATE A/B PASS. Do not ship until GATE C (`stills_review.py --require` + `RR-gateC-visual.md`), TTS and GATE D install pass.

**Path:** grok.com Imagine on Avinash's SuperGrok consumer subscription only. Never api.x.ai / paid xAI credits.

**Drop folder (this folder):** `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_inbox/consumer-imagine/` — save each result under the exact **Save as** name below.

**Import:** `cd /workspace/pixelloid/mahabharata && python3 tools/import_consumer_stills.py 15-narayanastra` (add `--force` to overwrite the copy-forward locks only if intended). `lock-<id>.jpg` → `stills/_locks/<id>.jpg`, `plate-<id>.jpg` → `stills/plate-<id>.jpg`, `poster.jpg` → `stills/poster.jpg`.

**Box caveat:** the import tool converts PNG/WEBP with macOS `sips`, which the Linux box lacks. Save downloads as `.jpg`, or convert first: `python3 -c "from PIL import Image; Image.open('in.png').convert('RGB').save('plate-x.jpg', quality=92)"`.

**Rules for every image:** aspect **3:2 landscape**, ≥1536×1024 (reject 720p / 16:9 / square). Attach refs in the listed order — the **first** ref must be a 3:2 ≥1536×1024 image. Attach **only** the listed refs. **Never** attach `episodes/01-birds-eye/stills/plate-wide-gold.jpg` or any finished `plate-*.jpg`. No text, plaques, speech bubbles, gore, modern props, or visible Grok watermark. Generate in order — later items use earlier outputs as refs.

**Already locked (copy-forward, no generation needed):** `stills/_locks/krishna.jpg` (= Ep 09), `arjuna.jpg` (= Ep 14 lock: Ep 09 face, cream-white dhoti, no chest armor — attached for Arjuna instead of the Ep 09 still so the costume does not drift back to armor), `yudhishthira.jpg` (= Ep 14), `bhima.jpg` (= Ep 14), `duryodhana.jpg` (= Ep 13).

**To generate: 12 images** — 1 scene master + 1 new cast lock (Ashwatthama) + 9 beat plates + 1 poster.

| # | Save as | Imports to | Refs |
|---|---------|-----------|------|
| 1 | `lock-afternoon15-master.jpg` | `stills/_locks/afternoon15-master.jpg` | 1 |
| 2 | `lock-ashwatthama.jpg` | `stills/_locks/ashwatthama.jpg` | 2 |
| 3 | `plate-wide.jpg` | `stills/plate-wide.jpg` | 3 |
| 4 | `plate-invoke.jpg` | `stills/plate-invoke.jpg` | 3 |
| 5 | `plate-storm.jpg` | `stills/plate-storm.jpg` | 3 |
| 6 | `plate-counsel.jpg` | `stills/plate-counsel.jpg` | 4 |
| 7 | `plate-surrender.jpg` | `stills/plate-surrender.jpg` | 4 |
| 8 | `plate-bhima.jpg` | `stills/plate-bhima.jpg` | 3 |
| 9 | `plate-pull.jpg` | `stills/plate-pull.jpg` | 5 |
| 10 | `plate-calm.jpg` | `stills/plate-calm.jpg` | 4 |
| 11 | `plate-once.jpg` | `stills/plate-once.jpg` | 4 |
| 12 | `poster.jpg` | `stills/poster.jpg` | 4 |

## 1. Scene master

**Save as:** `lock-afternoon15-master.jpg` → imports to `stills/_locks/afternoon15-master.jpg`

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style, palette and frame of the attached Ep 10 field-master. The Kurukshetra field on the afternoon of the fifteenth day, empty foreground of trampled golden dust and a few abandoned chariot wheels upright (no bodies), distant ranks and banners on the horizon under a hot copper-saffron-gold sky with high smoke haze. Carved gold-and-lotus cartouche integrated into the painting, heroic depth for figures to be placed later. No people in the foreground. Not photoreal. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 2. Cast lock — Ashwatthama (NEW face)

**Save as:** `lock-ashwatthama.jpg` → imports to `stills/_locks/ashwatthama.jpg`

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra character lock, in the style and palette of the attached scene master and Ep 10 field-master. ONE figure only, solo: Ashwatthama, the guru's son. Face: Young adult Brahmin-warrior, son of the guru: noble lean face, dark mustache, intense dark eyes wet with grief and blazing with wrath; a luminous jewel (mani) set in the middle of his forehead — his one unmistakable token; never a child, never white-bearded. Hair: Dark hair tied back under a slim bronze-gold warrior band (no royal crown, no peacock feather, no saffron topknot). Costume: Deep maroon and bronze-gold engraved armor, white sacred thread across the chest, cream dhoti, great bow; lion's-tail banner on his chariot — no saffron sage robes, no flower garland. Heroic medium, three-quarter view from mid-thigh up, standing on the afternoon field of Kurukshetra, copper-saffron-gold haze, lion's-tail banner behind him, distant ranks only. Keep the carved gold-and-lotus cartouche integrated into the painting. Nobody else in the frame. Not photoreal. No Drona. No white beard. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 3. Plate `wide` — cast: ashwatthama

**Save as:** `plate-wide.jpg` → imports to `stills/plate-wide.jpg`

**Beat:** Afternoon of the fifteenth day. Ashwatthama, Drona’s son, hears how his father was tricked — and grief turns to fire.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/ashwatthama.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium: Ashwatthama, the guru's son, a young adult Brahmin-warrior with a luminous jewel set in the middle of his forehead, dark mustache, dark hair under a slim bronze-gold band, deep maroon and bronze-gold engraved armor, white sacred thread across the chest, great bow gripped in one fist. He stands on his chariot terrace under a lion's-tail banner, grief hardening into wrath — eyes wet but blazing. Copper-saffron-gold afternoon haze over Kurukshetra, distant ranks only. His father is not shown; no body. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No Arjuna. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 4. Plate `invoke` — cast: ashwatthama

**Save as:** `plate-invoke.jpg` → imports to `stills/plate-invoke.jpg`

**Beat:** He swears vengeance and calls up the Narayana weapon — once Narayana’s gift to his father, now passed to the son.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/ashwatthama.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, same Ashwatthama as the lock: young adult Brahmin-warrior, luminous jewel glowing in the middle of his forehead, dark mustache, deep maroon and bronze-gold engraved armor, white sacred thread. He stands on his chariot and lifts his great bow toward the heavens, swearing vengeance as he calls up the Narayana weapon: above him the copper-gold sky begins to bloom with countless points of golden fire, not yet falling. Lion's-tail banner streaming. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 5. Plate `storm` — cast: yudhishthira

**Save as:** `plate-storm.jpg` → imports to `stills/plate-storm.jpg`

**Beat:** Arrows, discs and maces of fire fill the sky. The harder anyone fights, the fiercer it burns — and Yudhishthira despairs.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/14-drona-fall/stills/_locks/yudhishthira.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium: Yudhishthira the eldest Pandava king (Ep 14 lock: modest dark mustache, simple gold diadem, cream-white royal dhoti and cream angavastram, gold sash, gold armlets — no gold chest armor, no Gandiva, no peacock) stands on his chariot looking up in dismay. Above him the whole copper sky is filled with blazing arrows, spinning razor-edged discs of light and fiery maces falling like a rain of golden sparks toward distant Pandava banners. Grave, despairing face. No bodies, no blood. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 6. Plate `counsel` — cast: krishna, arjuna

**Save as:** `plate-counsel.jpg` → imports to `stills/plate-counsel.jpg`

**Beat:** Lay down your weapons! Step down from your chariots! This weapon spares whoever stands unarmed on the earth.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/09-gita/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/14-drona-fall/stills/_locks/arjuna.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men on one gold chariot. Krishna the charioteer (Ep 09 lock: dusty-blue youthful divine adult, serene, yellow pitambar, gold crown with one peacock feather, flower garlands, reins in one hand) stands at the chariot's front with his other arm raised high, commanding the whole host to lay down weapons and step down. Arjuna beside him (Ep 09 face: gold crown, dark mustache, cream-white dhoti and angavastram, gold belt, quiver on back; no gold chest armor; Gandiva lowered, not drawn) listens. Behind them the copper sky glitters with falling golden fire. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 7. Plate `surrender` — cast: yudhishthira, arjuna

**Save as:** `plate-surrender.jpg` → imports to `stills/plate-surrender.jpg`

**Beat:** Yudhishthira sets his bow on the earth. Arjuna vows that Gandiva will never be raised against this weapon.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/14-drona-fall/stills/_locks/yudhishthira.jpg`
- `/workspace/pixelloid/mahabharata/episodes/14-drona-fall/stills/_locks/arjuna.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men on foot. Yudhishthira the eldest king (Ep 14 lock: modest dark mustache, simple gold diadem, cream-white royal dhoti, gold sash, no gold chest armor) has stepped down from his chariot and bends to lay his bow on the dust. Arjuna beside him (Ep 09 face: gold crown, dark mustache, cream-white dhoti and angavastram, gold belt, quiver on back; no gold chest armor, no peacock) holds Gandiva lowered with its tip resting on the earth and his other hand on his heart in a vow. Golden fire streams harmlessly overhead. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 8. Plate `bhima` — cast: bhima

**Save as:** `plate-bhima.jpg` → imports to `stills/plate-bhima.jpg`

**Beat:** Only Bhima refuses. “I will answer it with my mace!” He charges — and all the fire gathers around him.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/14-drona-fall/stills/_locks/bhima.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium: Bhima the adult Pandava (Ep 14 lock: broad noble face, full dark mustache, gold warrior circlet, deep gold and leaf-green engraved armor) charges alone on his chariot, roaring defiance, his great gold-decked mace raised high in both hands. The weapon's golden fire spirals down out of the copper sky and gathers around him alone in a ring of flame. Bhima is whole and heroic — no burns, no wounds. Distant unarmed ranks only. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 9. Plate `pull` — cast: krishna, arjuna, bhima

**Save as:** `plate-pull.jpg` → imports to `stills/plate-pull.jpg`

**Beat:** Unarmed, Krishna and Arjuna run into the flames and pull Bhima down from his chariot, taking the mace from his hands.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/09-gita/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/14-drona-fall/stills/_locks/arjuna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/14-drona-fall/stills/_locks/bhima.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly three adult men inside a ring of golden fire that does not burn them. Krishna the charioteer (Ep 09 lock: dusty-blue youthful divine adult, yellow pitambar, gold crown with one peacock feather, flower garlands; reins left on his own chariot) grips Bhima's arm and takes the gold-decked mace from his hands. Arjuna (Ep 09 face: gold crown, dark mustache, cream-white dhoti and angavastram, gold belt, quiver on back; no bow in hand) pulls Bhima down from his chariot by the other arm. Bhima (Ep 14 lock: broad adult, full dark mustache, gold circlet, deep gold and leaf-green armor) resists, roaring, one foot still on the chariot step. No wounds, no gore. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No flute. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 10. Plate `calm` — cast: krishna, bhima

**Save as:** `plate-calm.jpg` → imports to `stills/plate-calm.jpg`

**Beat:** Disarmed and on the earth, Bhima is spared. The Narayana weapon fades, the sky clears, and a cool wind crosses the field.

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/09-gita/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/14-drona-fall/stills/_locks/bhima.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men standing on the earth. Bhima (Ep 14 lock: broad adult, full dark mustache, gold circlet, deep gold and leaf-green armor) stands disarmed, his gold-decked mace lying on the ground at his feet, his anger cooling, shining like the morning sun. Krishna the charioteer beside him (Ep 09 lock: dusty-blue youthful divine adult, serene smile, yellow pitambar, gold crown with one peacock feather, flower garlands, reins looped at his waist) rests a calming hand on his shoulder. Above, the copper fire fades into a clear soft-gold sky; a cool wind lifts their cloth and distant banners; birds return. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 11. Plate `once` — cast: ashwatthama, duryodhana

**Save as:** `plate-once.jpg` → imports to `stills/plate-once.jpg`

**Beat:** Duryodhana begs for it again. “It cannot be called twice,” Ashwatthama answers. “Called back, it would slay its caller.”

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/ashwatthama.jpg`
- `/workspace/pixelloid/mahabharata/episodes/13-ghatotkacha/stills/_locks/duryodhana.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra, in the style and palette of the attached Ep 10 field-master. Heroic medium, exactly two adult men. Duryodhana the Kaurava king (Ep 13 lock: proud upswept mustache, tall jeweled Kuru crown, jewel-tone gold armor with saffron-orange cape, mace at his side) stands beside a chariot with his hand stretched out, urging. Ashwatthama on the chariot (this episode's lock: young adult Brahmin-warrior, luminous jewel in his forehead, dark mustache, deep maroon and bronze-gold armor, white sacred thread) turns away, head lowered, his great bow at rest, sighing as he refuses. Lion's-tail banner hangs still. Clear late-afternoon gold sky, distant Pandava banners re-forming. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Krishna. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## 12. Poster — cast: krishna, arjuna

**Save as:** `poster.jpg` → imports to `stills/poster.jpg`

**Attach refs (in this order):**

- `/workspace/pixelloid/mahabharata/episodes/15-narayanastra/stills/_locks/afternoon15-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/10-bhishma-fall/stills/_locks/field-master.jpg`
- `/workspace/pixelloid/mahabharata/episodes/09-gita/stills/_locks/krishna.jpg`
- `/workspace/pixelloid/mahabharata/episodes/14-drona-fall/stills/_locks/arjuna.jpg`

**Prompt (paste exactly):**

```text
Premium Amar Chitra / painted-comic illustration, native 3:2 canvas at least 1536×1024. Carved gold-and-lotus cartouche frame integrated into the artwork (not a thin sticker border, not a cream mat with four corner lotuses). Heroic medium shot: named figures fill the frame with engraved armor, refined linework, cream-saffron-gold hour. Not photoreal, not 16:9, not tiny distant heroes. Premium painted comic Amar Chitra poster, in the style and palette of the attached Ep 10 field-master. Heroic medium: Krishna the charioteer (Ep 09 lock: dusty-blue youthful divine adult, yellow pitambar, gold crown with one peacock feather, flower garlands, reins in hand) and Arjuna (Ep 09 face: gold crown, dark mustache, cream-white dhoti and angavastram, gold belt, quiver on back, Gandiva lowered to the earth) stand on foot, calm and unarmed, beneath a vast copper sky raining golden arrows, discs and maces of the Narayana weapon that part around them. Strong central composition with clear headroom for a title. Carved gold-and-lotus cartouche integrated into the painting. Not photoreal. No Drona. No flute. No gore. No English text. Output: native 3:2 landscape, at least 1536×1024. No watermark.
```

## After generation

1. Eye-check every file: 3:2, ≥1536×1024, cartouche, faces match locks (Ashwatthama's forehead jewel on every Ashwatthama plate; Krishna = Ep 09; Arjuna cream-white, no chest armor), no watermark, no Drona/sage, no gore.
2. `python3 tools/import_consumer_stills.py 15-narayanastra` → `python3 tools/stills_review.py episodes/15-narayanastra --require`.
3. Fill `logic-reviews/RR-gateC-visual.md` from `docs/GATE_C_TEMPLATE.md` (vs Ep 10 `plate-vow.jpg` — look, don't attach).
4. Then TTS (`tools/render_local_voice.sh episodes/15-narayanastra`, bm_george), add a `shree` preset to `js/main.js` RAGA_PRESETS, GATE D install, registry.
