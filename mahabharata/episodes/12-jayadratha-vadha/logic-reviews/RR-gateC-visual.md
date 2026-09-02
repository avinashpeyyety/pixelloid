# Logic review — Ep 12 — GATE C (visual)

Status: PASS

Run first:

```bash
python3 tools/stills_review.py episodes/12-jayadratha-vadha --require
```

`stills_review` PASS — 16 JPEGs, 1536×1024 3:2.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | PASS |
| No 1280×720 file used as first `image_edit` input | PASS (field14-master + Ep 09 Krishna / solo locks) |
| Imagine refs = scene master + solo locks + Ep 10 `field-master.jpg` + Ep 09 Krishna lock | PASS |
| Ep01 `plate-wide-gold.jpg` **not** attached | PASS |

## Quality vs Ep 10 bar / Ep 09 Krishna

| Check | Result |
|-------|--------|
| Frame | PASS — carved gold-and-lotus cartouche integrated; cream–saffron–gold hour |
| Camera | PASS — named heroes fill the frame on beat plates |
| Line | PASS — engraved armor, Amar Chitra density, not photoreal |
| Cast | PASS — Drona only on wall; Krishna tokens (pitambar, peacock, garland, reins) match Ep 09 lock on Krishna plates |
| Krishna | PASS vs `episodes/09-gita/stills/_locks/krishna.jpg` — identity copied into this episode’s lock; wide/veil keep dusty-blue charioteer, not flute |
| Gore | PASS — shaft is gold light + crown-disc into the father’s lap, no severed neck |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | arjuna, krishna | 1536×1024 | cartouche | heroic | Dawn chariot; Krishna lock holds |
| vow | arjuna, krishna | 1536×1024 | cartouche | heroic | Reins taut |
| wall | drona, jayadratha | 1536×1024 | cartouche | heroic | No Krishna |
| hunt | arjuna, krishna | 1536×1024 | cartouche | heroic | Gold shafts as light |
| dusk | arjuna, krishna | 1536×1024 | cartouche | heroic | Sun west |
| veil | krishna, arjuna, jayadratha | 1536×1024 | cartouche | heroic | Disc veils sun; poster source |
| reveal | arjuna, krishna, jayadratha | 1536×1024 | cartouche | heroic | Sun returns |
| shaft | arjuna, jayadratha, vriddhakshatra | 1536×1024 | cartouche | heroic | Gold-light crown, no gore |
| wide-gold | arjuna, krishna | 1536×1024 | cartouche | heroic | Vow kept |

## Strict checks

- [x] `stills_review.py` PASS
- [x] No Drona / saffron sage unless `cast_present`
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Eye-match to Ep 10 vow (density), not Ep 01 gold
- [x] Krishna (if present) eye-matches Ep 09 lock — not a drifted face
