# Logic review — Ep 01 — GATE C (visual)

Status: PASS

Run first:

```bash
python3 tools/stills_review.py episodes/01-birds-eye --require
```

`stills_review` PASS — 14 JPEGs, 1536×1024 3:2. Poster is a copy of `plate-eye.jpg`.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | PASS |
| No 1280×720 file used as first `image_edit` input | PASS |
| Imagine refs = scene master + solo locks + Ep 10 `field-master.jpg` + Ep 09 Arjuna lock | PASS |
| Every named face has `stills/_locks/<id>.jpg` (series 09/10 or local) | PASS (arjuna / drona / yudhishthira) |
| Ep01 `plate-wide-gold.jpg` **not** attached as a ref | PASS |

## Quality vs Ep 10 bar

Open `episodes/10-bhishma-fall/stills/plate-vow.jpg` and `plate-arrows.jpg` beside each new plate.

| Check | Result |
|-------|--------|
| Frame | PASS — carved gold-and-lotus cartouche integrated |
| Camera | PASS — named heroes fill the frame |
| Line | PASS — painted comic, cream-saffron-gold, not photoreal |
| Cast | PASS — Drona saffron/no gold crown; Arjuna Ep 09 tokens |
| Krishna | n/a — not on this field |
| Arjuna | PASS vs Ep 09 counsel/lock tokens: gold crown, dark mustache, cream-white dhoti, quiver; no gold cuirass, no peacock, no flower garland on archery plates |
| Bhishma / Shikhandi | n/a |
| Drift | PASS — same Drona/Arjuna tokens across regen plates |
| Spatial aim | PASS after eye check (see per plate) |
| Lock file | PASS |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | Drona | PASS | PASS | PASS | Bird high in tree; extras' bows lowered; Drona saffron, no gold crown |
| drona | Drona | PASS | PASS | PASS | Points UP at high bird; gaze/finger/bird on one line; bow at side not a horizontal miss; no extras aiming |
| yudhishthira | Yudhishthira | PASS | PASS | PASS | Looks UP at the bird; bow at rest (beat is seeing tree/guru/brothers/bird, not tunnel-aim); simple diadem, cream dhoti |
| aside | Drona | PASS | PASS | PASS | Dismissing a pupil; no drawn bows; Drona no gold crown |
| arjuna-bow | Arjuna | PASS | PASS | PASS | **Spatial PASS** — elevated Gandiva, arrow/gaze/bird on one diagonal; Ep 09 costume (no cuirass, no garland) |
| eye | Arjuna | PASS | PASS | PASS | **Spatial PASS** — arrow elevated at the bird's head; cream-white dhoti; extras not aiming |
| loose | Drona | PASS | PASS | PASS | Command to shoot; finger/gaze on the high bird; extras not aiming |
| release | Arjuna | PASS | PASS | PASS | **Spatial PASS** — loosed shaft + gold-dust path on one line to the bird's head; Ep 09 costume |
| wide-gold | Drona + Arjuna | PASS | PASS | PASS | Embrace; Arjuna cream-white dhoti + gold crown + quiver, no cuirass; Drona no gold crown |

## Strict checks

- [x] `stills_review.py` PASS
- [x] No Drona / saffron sage unless `cast_present`
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Eye-match to Ep 10 vow (density), not old 720p Ep 01 gold
- [x] Krishna (if present) eye-matches Ep 09 lock — n/a
- [x] Arjuna / Bhishma / Shikhandi (if present) eye-match Ep 09/10 locks
- [x] No invented face; no missing lock; no jewelry/skin/crown/body-type drift
- [x] Spoken line’s speaker and action are the figures/props on this still (GATE D)
- [x] **Spatial aim:** if anyone aims at a bird/target, bow, arrow, gaze, and target are on one line — FAIL a horizontal miss under a high bird
- [x] **Character lock:** each named face/body matches the Ep 09/10 (or local) lock on every plate — no jewelry/skin/crown/armor drift
