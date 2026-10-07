# Logic review — Ep 16 — GATE C (visual)

Status: **PASS**
Reviewer: Chief (box) — visual eye-check by Avinash (all 13 images); Chief corner/watermark check + contact sheet
Time: 2026-10-06 ~22:55 CT

Source: SuperGrok consumer Imagine drop → `stills/_inbox/consumer-imagine/`
(2 scene masters + Shalya lock + 9 plates + poster, all **1728×1152** JPEG, 3:2) →

```bash
python3 tools/import_consumer_stills.py 16-karna-commander --force --allow-watermark
```

- `plate-outrage` and `plate-secret` are **regenerated** downloads (v1 of each rejected by Avinash before the drop: a third hand on outrage, mismatched horses on secret). Only the accepted versions were dropped.
- `--allow-watermark`: the byte heuristic flagged `grok`/`Grok`/`GROK` in all 13 files. Every hit is in the **C2PA content-credentials manifest** (`softwareAgent: Grok Imagine`, `digitalSourceType: trainedAlgorithmicMedia`, signer `xAI Grok Imagine`). That is provenance metadata, not a visible overlay, and is left in place on purpose (Ep 08 / 14 / 15 precedent). **No visible** Grok/xAI watermark: Avinash eye-checked every image; Chief checked 4-corner crops (260 px) of all 13 files (carved cartouche only, no logo, no text).
- `_locks/camp16-master.jpg`, `_locks/dawn17-master.jpg`, `_locks/shalya.jpg` from the import are byte-identical (md5) to the refs Avinash had already copied into `_locks/` for generation.
- Inbox duplicates deleted after a byte-identical `cmp` against the imported copies (Ep 08 / 15 precedent: git tracks only `PROMPTS.md` in `_inbox`).

Run:

```bash
python3 tools/stills_review.py episodes/16-karna-commander --require
```

Result: **PASS** (16 JPEGs · bar ≥1536×1024 · ~3:2).

Locks in `stills/_locks/`: camp16-master, dawn17-master, shalya (SuperGrok, local, this episode), karna (Ep 13 family), duryodhana, ashwatthama.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | **PASS** (plates/poster/masters/shalya 1728×1152) |
| No 1280×720 file used as first `image_edit` input | **PASS** (native SuperGrok drop) |
| Imagine refs = scene master + solo locks + Ep 10 field-master | **PASS** (per `PROMPTS.md`) |
| Every named face has `stills/_locks/<id>.jpg` | **PASS** (karna, shalya, duryodhana, ashwatthama + 2 scene masters) |
| Ep01 `plate-wide-gold.jpg` **not** attached | **PASS** |
| Source path noted | **PASS**: SuperGrok consumer import |
| No visible Grok / xAI watermark | **PASS**: C2PA byte WARN only, corners clean |

## Quality vs Ep 10 bar (eye-check)

| Check | Result | Notes |
|-------|--------|-------|
| Frame | **PASS** | Integrated carved gold-lotus cartouche is part of the painting on all 13 |
| Camera | **PASS** | Heroic medium; named cast fills the frame |
| Line | **PASS** | Painted-comic (Amar Chitra) density consistent with Ep 10 |
| Cast | **PASS** | Tokens match bible `cast_present`; no Krishna / Arjuna / Drona / sage bleed |
| Krishna / Arjuna | **N/A — PASS** | Narrated only; not drawn on any plate (as the bible requires) |
| Karna | **PASS** | Gold Anga diadem + crimson cape on every plate (Ep 13 lock family) |
| Shalya | **PASS** | Silver-gold Madra crown, indigo armor, grey-streaked dark beard — stable on outrage, tripura, reins, boast, crow, secret, poster |
| Duryodhana / Ashwatthama | **PASS** | Duryodhana's saffron cape (vs Karna's crimson); Ashwatthama's forehead jewel on anoint |
| Drift | **PASS** | Same faces, crowns and capes across plates |
| Gods / cities | **PASS** | `tripura` shows no Shiva / Brahma and no cities (Duryodhana tells; Shalya listens) |
| Text / watermark | **PASS** | No text, plaques or watermark |
| Anatomy | **PASS** | Hands/horses checked; outrage and secret regenerated once (third hand / mismatched horses) |
| Gore | **PASS** | None |

## Per plate

| Plate | Cast | Canvas | Frame | Notes |
|-------|------|--------|-------|-------|
| anoint | karna+duryodhana+ashwatthama | PASS | PASS | Night consecration; Ashwatthama forehead jewel. See deviation 1 |
| makara | karna | PASS | PASS | Makara array at sunrise, Karna at the snout. See deviation 2 |
| ask | karna+duryodhana | PASS | PASS | Karna asks for Shalya. See deviation 3 |
| outrage | shalya+duryodhana | PASS | PASS | **regen v2** (v1 third hand). Shalya's fury |
| tripura | duryodhana+shalya | PASS | PASS | Tripura told, not drawn — no gods, no cities |
| reins | shalya+karna | PASS | PASS | Dawn of the 17th, Shalya takes the reins. See deviation 5 |
| boast | karna+shalya | PASS | PASS | Karna calls to the ranks |
| crow | shalya+karna | PASS | PASS | Crow-and-swan scorn. See deviation 4 |
| secret | karna+shalya | PASS | PASS | **regen v2** (v1 mismatched horses). Karna rides on |
| poster | karna+shalya | PASS | PASS | Commander + charioteer. See deviation 6 |
| _locks/camp16-master | — (scene) | PASS | PASS | Kaurava camp, night 15→16. See deviation 1 |
| _locks/dawn17-master | — (scene) | PASS | PASS | Empty field, dawn of the 17th |
| _locks/shalya | shalya | PASS | PASS | Shalya character lock |

## Known deviations (minor, accepted by Avinash, non-blocking)

1. **anoint / camp16-master:** small background soldiers at the frame edges.
2. **makara:** the standard shows a white elephant (bible: elephant's-rope standard).
3. **ask:** the reins read rope-brown rather than bright gold.
4. **crow:** the crow sits near the swan rather than far behind it.
5. **reins:** mainly one horse is visible.
6. **poster:** modest title headroom; horses galloping, not rearing. Watch the title overlay on the hub card.

## Strict checks

- [x] `stills_review.py` PASS
- [x] No Drona / saffron sage unless `cast_present`
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] **Watermark eye-check (consumer import):** corners clean on all 9 plates, the poster, both masters and the Shalya lock
- [x] Eye-match to Ep 10 density, not Ep 01 gold
- [x] Krishna — not drawn (narrated only)
- [x] Arjuna — not drawn (narrated only)
- [x] No invented face; no missing lock; no jewelry/skin/crown/body-type drift
- [x] Spoken line's speaker and action are on the still (GATE D)
- [x] **Character lock:** Karna / Shalya / Duryodhana stable across plates

## Verdict

**GATE C PASS.**
