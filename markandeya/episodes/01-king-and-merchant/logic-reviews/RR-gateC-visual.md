# Logic review — Markandeya Ep 01 *The King and the Merchant* — GATE C (visual)

Status: **PASS** (2026-11-03 ~12:45 PM CT re-check). The Suratha lock was fixed with a grok.com Imagine *edit* (SuperGrok consumer) and re-imported; the dhoti is clean and face/crown/costume are unchanged. History: first pass FAILED on a blood-like red stain on `stills/_locks/suratha.jpg` (see § Re-check).

Reviewer: Chief (box), 2026-11-03 ~12:45 PM CT. Images were generated on grok.com Imagine (SuperGrok consumer). I checked each one by eye on the box: full-frame views of all 15 images, zooms of every hand and waist region of Suratha, and 300 px crops of all four corners of every file. The browser agent's screenshot notes were cross-checked.

## Commands

```bash
python3 tools/import_consumer_stills.py 01-king-and-merchant --allow-watermark   # OK, imported 15
python3 tools/stills_review.py episodes/01-king-and-merchant --require           # PASS, 15 jpegs, bar 1536×1024 3:2 (all 1728×1152)
```

- `--allow-watermark`: the byte check flagged `grok`/`Grok`/`GROK` in all 15 files. A JPEG segment parse puts every hit (4 per file) in APP11, **before SOS (offset ~16.2 KB)**. That is the C2PA content-credentials manifest (`c2pa`, softwareAgent "Grok Imagine"). After SOS: **0 `grok` hits in all 15 files.** The occasional 3-byte `xai` hit is a random match in the compressed scan data. Corner crops show only the carved cartouche (Mahabharata Ep 24 precedent).
- I removed the stray `episodes/01-king-and-merchant/_locks/` folder that was copied in by hand. It was byte-identical to the inbox `lock-*.jpg`, and the series convention is `stills/_locks/<id>.jpg`, which the import script writes.
- The rejected `stills/_locks/suratha.jpg` was removed from the stills tree. The original stays in the inbox as `lock-suratha.jpg`, and a box copy is in `lab-keep/pixelloid-build/mp01-build/rejected/`.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | PASS (1728×1152) |
| No 1280×720 first input | PASS |
| Refs = spine + scene master + solo locks | PASS (per PROMPTS.md) |
| Every named face has `stills/_locks/<id>.jpg` | PASS (suratha lock re-imported after the Imagine edit) |
| No finished plate / poster as ref | PASS |
| Source = SuperGrok consumer import | PASS |
| No visible Grok / xAI watermark | PASS (C2PA bytes only, corners clean) |

## Findings

| Check | Result | Notes |
|-------|--------|-------|
| Gore | PASS (after fix; first pass FAIL) | First pass: `_locks/suratha.jpg`: red drips run down the cream dhoti under the sword hand. At zoom they read as blood next to a sword (Ep 21 `turn` precedent: a red smear that read as blood was regenerated). This defect is **not** on any plate or the poster: I zoom-checked Suratha's dhoti on ride, merchant, cling, ashram, worry, ask, mahamaya, king and poster, and all are clean. The locks are not shown in the player, but they are committed and published with the repo, and they are the series reference for Suratha. |
| Arms / hands | PASS | Every human has 2 arms and 2 hands. Checked closely: king family (father's hand on the child's shoulder, the child holds the basket with both hands), cling (Suratha's left arm around Samadhi, right hand on his heart; Samadhi has a hand on his heart and the other on the bundle), mahamaya (Medhas points up with his right hand and holds the staff with his left; Suratha holds the nest up with one hand and rests the other on the hilt), worry, ask, poster. |
| Duplicates | PASS | No duplicate people. The ashram regeneration (the first take had two Surathas) is correct. |
| Text / watermark | PASS | No letters, captions or logos. |
| Goddess not a person | PASS | Shown only as a golden lotus-radiance in the sky on mahamaya and the poster. No figure anywhere. |
| Cast drift | PASS w/ notes | Suratha (ruby mukuta, upturned mustache, no beard, indigo cloth, pearls, red-jewel armlets, sheathed gold hilt) is the same person on all 9 images. Samadhi (white turban, mustard shawl, bundle) and Medhas (white hair and beard, cream, red-white tilak) are consistent, and so is Markandeya (dark jata, ochre). |

## Per plate

| Plate | Cast | Canvas | Gore | Notes |
|-------|------|--------|------|-------|
| lock ashram01-master | none | ✓ | ✓ | Banyan + round platform, 3 huts, fire altar, pond, deer + tiger. Matches spec. |
| lock markandeya | Markandeya | ✓ | ✓ | Rudraksha bead armlets/wristbands, which are beads rather than jewels. Acceptable. Matches tale. |
| lock medhas | Medhas | ✓ | ✓ | Rudraksha-style mala where the spec says tulsi. Minor, consistent on all plates. |
| lock suratha (v2, Imagine edit) | Suratha | ✓ | ✓ | v1 FAILED (blood-like red drips on the dhoti); v2 dhoti clean cream silk with gold border. Also mounted on his horse with pillars instead of standing in the hall. Not a fail on its own: the lock prompt itself says "rides a white horse". |
| lock samadhi | Samadhi | ✓ | ✓ | Matches spec. |
| tale | Markandeya | ✓ | ✓ | Storyteller gesture, manuscript (book-style rather than palm-leaf), Himalayan river at dawn. Small fire. No weapons. |
| king | Suratha + generic family | ✓ | ✓ | Blessing gesture, grateful family offering mangoes. An unrequested lion lies beside the throne: a royal emblem, not a person, does not break the beat. |
| ride | Suratha | ✓ | ✓ | Faces forward instead of looking back. The distant fort is visible. The beat ("rode away alone") still reads. |
| ashram | Medhas, Suratha | ✓ | ✓ | Welcome, joined palms, tiger + deer. Horse present (fine). Single Suratha. |
| worry | Suratha | ✓ | ✓ | Hand on cheek, dream-cloud fort, elephant and treasure chest. Daylight. |
| merchant | Suratha, Samadhi | ✓ | ✓ | Samadhi sad with bundle, Suratha kind on horseback. |
| cling | Suratha, Samadhi | ✓ | ✓ | Both have a hand on the heart and sit by the lotus pond. They are not clearly looking at their reflections. The beat (two friends sharing the same ache) holds. |
| ask | Medhas, Suratha, Samadhi | ✓ | ✓ | Medhas on deerskin. Suratha kneels with joined palms. Samadhi holds the bundle instead of joining his palms. The banyan platform is not visible (generic grove). Acceptable. |
| mahamaya | Medhas, Suratha, Samadhi | ✓ | ✓ | Medhas points at a mother bird dropping food to chicks in the nest. Formless golden lotus light. The horse beside Suratha is fine. |
| poster | Medhas, Suratha, Samadhi | ✓ | ✓ | Lotus radiance fills the top. There is little clean sky for a title, which is fine because the page adds the title outside the image. |

## Strict checks

- [x] `stills_review.py` PASS (before the rejected lock was removed)
- [x] No named face outside `cast_present`
- [x] No graphic gore (PASS after the Suratha lock edit; v1 FAIL)
- [x] No 16:9 / 720p
- [x] Watermark eye-check: corners clean on all 15
- [x] Density matches the Mahabharata Ep 10 bar (cartouche integrated, heroic medium, dense linework)
- [x] Named faces on the plates are consistent, and the v2 Suratha lock matches them
- [x] Goddess only as formless golden light. Medhas is white-bearded in cream and Markandeya is dark-haired in ochre.
- [x] Jewelry, skin, crown and body type are stable across the plates

## Fix (Chief, grok.com Imagine, SuperGrok consumer)

**Preferred (keeps the face identical to the 9 plates): Imagine edit.** Upload the current `lock-suratha.jpg` as the image to edit and use this prompt:

> Edit this image: remove the red streaks and drips on the cream silk dhoti below the sword hilt so the dhoti is clean, unstained cream silk with only its gold border. Keep everything else exactly the same: same king, same face, crown, mustache, indigo cloth, pearls, armlets, sheathed sword, white horse, pillars and carved gold-and-lotus frame. No red marks on any cloth, no blood, no stains. No text, no watermark. Native 3:2 landscape, at least 1536x1024.

**Alternative: regenerate** with the PROMPTS.md §4 prompt (spine ref only), adding:
> The cream silk dhoti is clean and spotless — no red marks, drips, streaks or stains anywhere on his clothes.

If you regenerate, eye-match the new face to the 9 plates (ruby mukuta, upturned mustache, no beard). Drift would mean the plates no longer match their lock.

Save as `lock-suratha.jpg` in `stills/_inbox/consumer-imagine/` (overwrite), then run:
`python3 tools/import_consumer_stills.py 01-king-and-merchant --allow-watermark --force` → `stills_review --require` → zoom-check the dhoti → flip this review to PASS.

## Re-check after fix (Chief, box, 2026-11-03 ~12:45 PM CT)

Chief saved a grok.com Imagine **edit** (SuperGrok consumer) of `lock-suratha.jpg` over `stills/_inbox/consumer-imagine/lock-suratha.jpg` (1728×1152). The v1 original is not in the repo; it is in `lab-keep/pixelloid-build/mp01-build/rejected/lock-suratha-v1-redstain.jpg` (byte-identical to the inbox `.orig` copy, which was deleted).

```bash
python3 tools/import_consumer_stills.py 01-king-and-merchant --allow-watermark --force   # OK, imported 15 (14 unchanged bytes; suratha lock new)
python3 tools/stills_review.py episodes/01-king-and-merchant --require                   # PASS, 15 jpegs, bar 1536×1024 3:2
```

| Check | Result |
|-------|--------|
| Dhoti zoom (v1 vs v2 side-by-side, 2× crop of the waist/sword-hand region) | PASS: red drips gone; unstained cream silk with gold border. Box copy: `rejected/lock-suratha-v2-fixed-vs-v1-dhoti-zoom.png` |
| Sword hand, 8× zoom | PASS: index fingertip is a pink, outlined fingernail/skin tone; no drip or stain below it |
| Face / crown / costume vs v1 | PASS: same face, ruby mukuta, upturned mustache, no beard, earrings, pearls, indigo cloth, red-jewel armlets, sheathed gold hilt, white horse, pillars. The pixel diff is only re-render edge noise everywhere, with the one real change at the dhoti |
| Face vs plates (king, worry, ride, plus earlier checks) | PASS: same person |
| Watermark | PASS: 4 `grok` hits, all in APP11 (C2PA) before SOS (~15.8 KB); 0 after SOS; 300 px corners show only the cartouche |
| Arms / hands | PASS: 2 arms, 2 hands |
