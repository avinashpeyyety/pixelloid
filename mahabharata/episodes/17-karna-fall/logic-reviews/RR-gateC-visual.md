# Logic review — Ep 17 — GATE C (visual)

Status: **PASS**
Reviewer: Chief (box) — visual eye-check by Avinash at generation (all 11 images); Chief independent eye-check of every image + 4-corner watermark crops
Time: 2026-10-07 ~12:40 CT

Source: SuperGrok consumer Imagine on grok.com (consumer subscription, no paid API) → `stills/_inbox/consumer-imagine/`
(1 scene master + 9 plates + poster, all **1728×1152** JPEG, 3:2, daytime) →

```bash
python3 tools/import_consumer_stills.py 17-karna-fall --allow-watermark
```

- `plate-meet` is a **regenerated** download: v1 was rejected because Karna rendered as a woman. v1 is kept off-repo at `/home/box/lab-keep/pixelloid-ep17-rejects/`. The redo prompt had one mojibake `×` hand-fixed before generating.
- `plate-crown` was **regenerated once**: the first attempt duplicated Arjuna.
- `--allow-watermark`: the byte heuristic flagged `grok`/`Grok`/`GROK` in all 11 files. Every hit (4 per file) sits **before the JPEG scan data**, inside the **C2PA content-credentials manifest** (`softwareAgent: Grok Imagine`, `generator_info: Grok Imagine`, signer `xAI Grok Imagine`); 0 hits in the image scan. That is provenance metadata, not a visible overlay, and is left in place on purpose (Ep 08 / 14 / 15 / 16 precedent). **No visible** Grok/xAI watermark: Chief checked 300 px crops of all four corners of all 11 files (carved cartouche only, no logo, no text).
- Inbox duplicates deleted after a byte-identical `cmp` against the imported copies (git tracks only `PROMPTS.md` in `_inbox`).
- `_locks/krishna.jpg` is md5-identical to `episodes/04-akshayapatra/stills/_locks/krishna.jpg` (official Ep 04 Krishna reference).

Run:

```bash
python3 tools/stills_review.py episodes/17-karna-fall --require
```

Result: **PASS** (15 JPEGs · bar ≥1536×1024 · ~3:2).

Locks in `stills/_locks/`: field17-master (SuperGrok, this episode), krishna (Ep 04, official), arjuna (Ep 09 → 14/15 lineage), karna (Ep 13 → 16), shalya (Ep 16).

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | **PASS** (plates/poster/master 1728×1152) |
| No 1280×720 file used as first `image_edit` input | **PASS** (native SuperGrok drop) |
| Imagine refs = scene master + solo locks + Ep 10 field-master | **PASS** (per `PROMPTS.md`; Ep 04 Krishna lock first character ref on every Krishna image) |
| Every named face has `stills/_locks/<id>.jpg` | **PASS** (krishna, arjuna, karna, shalya + field17 master) |
| Ep01 `plate-wide-gold.jpg` **not** attached | **PASS** |
| Source path noted | **PASS**: SuperGrok consumer import |
| No visible Grok / xAI watermark | **PASS**: C2PA byte WARN only, corners clean |

## Quality vs Ep 10 bar (eye-check)

| Check | Result | Notes |
|-------|--------|-------|
| Frame | **PASS** | Integrated carved cartouche with gold lotuses is part of the painting on all 11. Most read as carved brown wood; `crown`, `rebuke` and `poster` use an all-gilded carved variant (Chief note, minor) |
| Camera | **PASS** | Heroic medium; named cast fills the frame |
| Line | **PASS** | Painted-comic (Amar Chitra) density consistent with Ep 10 / 16 |
| Cast | **PASS** | Tokens match bible `cast_present`; no Drona / sage bleed; Draupadi, Kunti, Surya, Indra, the Brahmin and Parashurama not drawn |
| Krishna | **PASS** | Ep 04 look on meet, crown, rebuke, anjalika, conch, poster: silvery dusty-blue skin, U-tilak, slim gold band + one peacock feather, pitambar, crimson sash, jasmine-rose garland, reins; **no flute**, exactly two arms |
| Arjuna | **PASS** | Crown + mustache + cream-white on meet/crown; from `rebuke` on, hair bound in a white cloth (rebuke, anjalika, conch, poster) as the bible requires |
| Karna | **PASS** | Clearly male (meet v2); gold Anga diadem, gold-crimson armor, crimson cape on meet, serpent, wheel, plea, poster (Ep 13/16 lock family) |
| Shalya | **PASS** | Silver-gold crown, indigo-blue/silver armor, grey-streaked beard — stable on meet, serpent, wheel, fall |
| Drift | **PASS** | Same faces, crowns and capes across plates |
| Text / watermark | **PASS** | No text, plaques or watermark |
| Anatomy | **PASS** | Hands/horses checked; meet and crown regenerated (see above). See deviations 3 and 7 |
| Gore | **PASS** | None; `fall` shows Shalya and the rising light only — no body |
| Time of day | **PASS** | Daytime / afternoon sun on all plates |

## Per plate

| Plate | Cast | Canvas | Frame | Notes |
|-------|------|--------|-------|-------|
| _locks/field17-master | — (scene) | PASS | PASS | Sunlit Kurukshetra, two hosts, churned field; carved brown wood with gold lotus accents |
| meet | krishna+arjuna+karna+shalya | PASS | PASS | **regen v2** (v1 Karna rendered as a woman). See deviation 1 |
| serpent | karna+shalya | PASS | PASS | Karna draws; Shalya raises a warning hand. See deviation 2 |
| crown | krishna+arjuna | PASS | PASS | **regen v2** (v1 duplicated Arjuna). Horses kneel. See deviation 3 |
| wheel | karna+shalya | PASS | PASS | Karna's hand to his brow (the weapon forgotten). See deviation 4 |
| plea | karna | PASS | PASS | Karna at the wheel, pleading. No notable flaws |
| rebuke | krishna+arjuna | PASS | PASS | Krishna points; Arjuna with white cloth. No notable flaws |
| anjalika | krishna+arjuna | PASS | PASS | Arjuna looses the bright arrow. See deviation 5 |
| fall | shalya | PASS | PASS | Light rising into the sky beside Karna's chariot; no body. No notable flaws |
| conch | krishna+arjuna | PASS | PASS | Both blow conchs. See deviation 6 |
| poster | karna+arjuna+krishna | PASS | PASS | Karna at the sunken wheel, Arjuna drawing, Krishna at the reins. No notable flaws |

## Known deviations (minor, accepted by Avinash, non-blocking)

1. **meet (v2):** the right chariot shows a blue-silver armored warrior (Shalya's armor) holding the bow beside gold-crimson Karna, so Karna/Shalya roles read slightly ambiguous. Karna is clearly male. Accepted.
2. **serpent:** the arrowhead is not clearly serpent-mouthed.
3. **crown (v2):** five horses instead of four; the crown is struck by a burst rather than clearly knocked off.
4. **wheel:** the stuck wheel is understated (the plea plate and poster carry the wheel clearly).
5. **anjalika:** decorative sun-face on the arrow tip (a second sun in frame); red curtain / pillar at top-left.
6. **conch:** Krishna's arm near the conch slightly awkward, but two arms each.
7. **frame variance (Chief):** crown, rebuke and poster use an all-gilded carved cartouche instead of the brown-wood-with-gold-lotus variant; still an integrated carved frame.

Chief independent check: no hard fail found; nothing overrides Avinash's acceptance.

## Strict checks

- [x] `stills_review.py` PASS
- [x] No Drona / saffron sage unless `cast_present`
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] **Watermark eye-check (consumer import):** corners clean on all 9 plates, the poster and the field17 master
- [x] Eye-match to Ep 10 density, not Ep 01 gold
- [x] Krishna eye-matches the **Ep 04** lock (standing rule; template/`logic_review.py` still name the Ep 09 path — see NEXT.md ticket)
- [x] Arjuna eye-matches the Ep 09/14/15 lock lineage
- [x] No invented face; no missing lock; no jewelry/skin/crown/body-type drift
- [x] Spoken line's speaker and action are on the still (GATE D) — meet's bow-holder ambiguity noted (deviation 1)
- [x] Spatial aim: bow, arrow, gaze and target on one line (serpent, anjalika, poster)
- [x] **Character lock:** Krishna / Arjuna / Karna / Shalya stable across plates

## Verdict

**GATE C PASS.**
