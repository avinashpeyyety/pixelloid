# Logic review — Ep 15 — GATE C (visual)

Status: **PASS**
Reviewer: Chief (box) — visual eye-check by Avinash (plates/poster) + Chief (plate-calm v2)
Time: 2026-10-05 ~12:45 CT

Source: SuperGrok consumer Imagine drop → `stills/_inbox/consumer-imagine/`
(2 local locks already committed in 61caa5c + 9 plates + poster, all **1728×1152**) →

```bash
python3 tools/import_consumer_stills.py 15-narayanastra --allow-watermark
```

- `plate-invoke` = **v2** download (v1 rejected and deleted before import).
- `plate-calm` = **v2** download. v1 rejected for a continuity bug (Bhima still held the mace after Krishna and Arjuna took it in `pull`). v1 was moved out of the repo to `/home/box/lab-keep/pixelloid-ep15-rejects/plate-calm-v1.jpg`. v2 eye-check: Bhima is empty-handed with the mace lying on the ground, Krishna's hand is on his shoulder, the sky is clear at sunset and the army is quiet. Continuity holds.
- C2PA / byte heuristic WARN `grok`/`Grok`/`GROK` on every import (same as the Ep 08 precedent). **No visible** Grok/xAI watermark: Avinash eye-checked the corners of all plates and the poster, and Chief checked all 4 corners of calm v2. All clean.
- Inbox duplicates were deleted after a byte-identical `cmp` against the imported copies. Ep 08 precedent: git tracks only `.gitkeep` / `PROMPTS.md` in `_inbox`.

Run:

```bash
python3 tools/stills_review.py episodes/15-narayanastra --require
```

Result: **PASS** (17 JPEGs · bar ≥1536×1024 · ~3:2).

Locks in `stills/_locks/`: afternoon15-master, ashwatthama (SuperGrok, local), arjuna, bhima, duryodhana, krishna, yudhishthira.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | **PASS** (plates/poster/master/ashwatthama 1728×1152) |
| No 1280×720 file used as first `image_edit` input | **PASS** (native SuperGrok drop) |
| Imagine refs = scene master + solo locks + Ep 10 field-master | **PASS** (per `PROMPTS.md`) |
| Every named face has `stills/_locks/<id>.jpg` | **PASS** (6 cast locks + scene master) |
| Ep01 `plate-wide-gold.jpg` **not** attached | **PASS** |
| Source path noted | **PASS**: SuperGrok consumer import |
| No visible Grok / xAI watermark | **PASS**: C2PA byte WARN only, corners clean |

## Quality vs Ep 10 bar (eye-check)

| Check | Result | Notes |
|-------|--------|-------|
| Frame | **PASS** | Carved lotus cartouche is part of the painting on every plate |
| Camera | **PASS** | Heroic medium; named cast fills the frame |
| Line | **PASS** | Amar Chitra painted-comic density, matches the Ep 10 bar |
| Cast | **PASS** | Tokens match the bible `cast_present`; no sage or Drona bleed |
| Krishna | **PASS** | Ep 09 family: blue skin, peacock crown, pitambar, garland, reins |
| Arjuna | **PASS** | Crown + quiver + cream-white |
| Drift | **PASS** | Bhima's green armor/sash is stable across bhima, pull and calm |
| Weapon depiction | **PASS** | Golden fire in the sky; no gore, no bodies |

## Per plate

| Plate | Cast | Canvas | Frame | Notes |
|-------|------|--------|-------|-------|
| wide | ashwatthama | PASS | PASS | Grief → fire. Banner: see known deviation 1 |
| invoke | ashwatthama | PASS | PASS | **v2** used. Weapon invoked; golden fire rising |
| storm | yudhishthira | PASS | PASS | Fire arrows/discs fill the sky; despair |
| counsel | krishna+arjuna | PASS | PASS | "Lay down your weapons" |
| surrender | yudhishthira+arjuna | PASS | PASS | Bow set down. See known deviation 2 |
| bhima | bhima | PASS | PASS | Mace raised, fire gathering on him |
| pull | krishna+arjuna+bhima | PASS | PASS | Unarmed pull-down; mace taken |
| calm | krishna+bhima | PASS | PASS | **v2**: Bhima disarmed (mace on the ground), sky clears |
| once | ashwatthama+duryodhana | PASS | PASS | "It cannot be called twice" |
| poster | krishna+arjuna (fire sky) | PASS | PASS | See known deviation 3 |

## Known deviations (minor, non-blocking)

1. **Ashwatthama banner:** shows a sun motif rather than the bible's lion's-tail (simhapuccha) device. Recorded; regen is optional.
2. **plate-surrender Yudhishthira:** wears a thin headband, so he looks close to Arjuna. He stays distinguishable because Arjuna has the crown + quiver.
3. **poster:** limited title headroom at the top. Watch the title overlay on the landing card at ship.

## Strict checks

- [x] `stills_review.py` PASS
- [x] No Drona / saffron sage unless `cast_present`
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] **Watermark eye-check (consumer import):** corners clean on all plates, the poster and calm v2
- [x] Eye-match to Ep 10 density, not Ep 01 gold
- [x] Krishna eye-matches the Ep 09 lock
- [x] Arjuna eye-matches the Ep 09 lock (crown, quiver)
- [x] No invented face; no missing lock; no jewelry/skin/crown/body-type drift (Yudhishthira headband noted)
- [x] Spoken line's speaker and action are on the still (calm continuity fixed in v2)
- [x] **Character lock:** stable across plates

## Verdict

**GATE C PASS** (calm v2 in place). The ship step (registry `js/episodes.js`, merge, publish-pages, RR-ship) is still pending and was intentionally not run in this pass.
