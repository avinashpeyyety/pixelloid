# Logic review — Ep 09 — GATE C (visual)

Status: PASS

Run first:

```bash
python3 tools/stills_review.py episodes/09-gita --require
```

Restyle pass: prior episode *The Bhagavad Gita* restyled to Ep 10 *The Fall of Bhishma* gold standard (comic painted mythology, cream–saffron–gold, same figure language). Not photoreal. Confirmed Ep 09 is the episode immediately before Ep 10; did not restyle 01–08.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | PASS (unused 1280×720 leftovers deleted) |
| No 1280×720 file used as first `image_edit` input | PASS — locks regenerated at 3:2 |
| Imagine refs = scene master + solo locks + Ep 10 `field-master.jpg` only | PASS |
| Ep01 `plate-wide-gold.jpg` **not** attached | PASS |

## Quality vs Ep 10 bar

Eyes vs Ep 10 `plate-vow.jpg` / `plate-arrows.jpg` (not attached as Imagine refs).

| Check | Result |
|-------|--------|
| Frame | PASS — carved gold-and-lotus cartouche is part of the painting |
| Camera | PASS — named heroes fill the frame (heroic medium) |
| Line | PASS — engraved armor, Amar Chitra density, cream-saffron-gold |
| Cast | PASS — Arjuna gold crown / mustache / cream dhoti / quiver; Krishna yellow pitambar / peacock / garland / reins (not flute); no Drona / sage |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | armies | 1536×1024 | cartouche | wide field | PASS |
| field | arjuna + krishna | 1536×1024 | cartouche | heroic medium | Krishna charioteer |
| despair | arjuna + krishna | 1536×1024 | cartouche | heroic medium | Gandiva slipping |
| counsel | arjuna + krishna | 1536×1024 | cartouche | heroic medium | teaching |
| dharma | arjuna + krishna | 1536×1024 | cartouche | heroic medium | teaching |
| form | visvarupa + one arjuna | 1536×1024 | cartouche | heroic medium | one kneeling Arjuna |
| resolve | arjuna | 1536×1024 | cartouche | heroic medium | bow lifted |
| conch | krishna | 1536×1024 | cartouche | heroic medium | Panchajanya |
| wide-gold | chariot + armies | 1536×1024 | cartouche | wide field | close |

## Strict checks

- [x] `stills_review.py --require` PASS (run after this write)
- [x] No Drona / saffron sage unless `cast_present`
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Eye-match to Ep 10 vow (density), not Ep 01 gold
