# Logic review — Ep 07 — GATE C (visual)

Status: **PASS**
Reviewer: executor subagent (box lab-mirror)
Time: 2026-09-17 ~19:32 CT

Source: SuperGrok consumer Imagine READY drop →
`stills/_inbox/consumer-imagine/` (6 locks + 9 plates + poster @ **1728×1152**) →

```bash
python3 tools/import_consumer_stills.py 07-jayadratha --force --allow-watermark
```

C2PA / byte heuristic WARN `grok`/`xAI` on imported files; **no visible** Grok/xAI corner watermark on eye-check (corner crops + OCR).

Run:

```bash
python3 tools/stills_review.py episodes/07-jayadratha --require
```

Result: **PASS** (32 JPEGs · bar ≥1536×1024 · ~3:2 · all stills/locks/poster at **1728×1152**).

Locks in `stills/_locks/`: hermitage-master, draupadi, jayadratha, bhima, arjuna, yudhishthira.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | **PASS** (1728×1152) |
| No 1280×720 file used as first `image_edit` input | **PASS** (native SuperGrok drop) |
| Imagine refs = scene master + solo locks | **PASS** |
| Every named face has `stills/_locks/<id>.jpg` | **PASS** (6 locks) |
| Ep01 `plate-wide-gold.jpg` **not** attached | **PASS** |
| Source path noted | **PASS** — SuperGrok consumer import |
| No visible Grok / xAI watermark | **PASS** — C2PA byte WARN only; corners clean |

## Quality vs Ep 10 bar (eye-check)

| Check | Result | Notes |
|-------|--------|-------|
| Frame | **PASS** | Carved wood/gold + lotus cartouche on plates/locks |
| Camera | **PASS** | Heroic medium; named cast fills frame |
| Line | **SOFT** | Polished cinematic paint (Ep10-like denseness) |
| Draupadi dignity | **PASS** | Deep red sari gold border; modest; **never sexualized** across lock + all plates |
| seize / cry distinct | **PASS** | seize = chariot abduction; cry = three Pandavas turn from hunt — distinct beats |
| mercy | **PASS** | Jayadratha kneels; Yudhishthira (cream + gold sash) raises hand; Draupadi dignified |
| wide-gold plaque | **PASS** | Quiet reunion; **no plaque / EP / ZERO text** (eye + OCR) |
| Arjuna | **PASS** | Cream exile, topknot, mustache, bow; **no peacock** on lock / chase / catch / cry |
| Gore | **PASS** | Tasteful chase/catch/mercy — no graphic blood |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | **PASS** | PASS | PASS | PASS | Draupadi alone at hermitage; cartouche; no plaque |
| alone | **PASS** | PASS | PASS | PASS | Jayadratha + Draupadi on chariot (sighting→take); dignity OK |
| approach | **PASS** | PASS | PASS | PASS | Soft words; queenly dignity |
| seize | **PASS** | PASS | PASS | PASS | Tasteful abduction onto chariot; not sexualized |
| cry | **PASS** | PASS | PASS | PASS | Bhima / Arjuna / Yudhishthira turn from hunt — distinct from seize |
| chase | **PASS** | PASS | PASS | PASS | Arjuna + Bhima run forest road; Arjuna **no peacock** |
| catch | **PASS** | PASS | PASS | PASS | Bhima seizes Jayadratha; Draupadi free/dignified |
| mercy | **PASS** | PASS | PASS | PASS | Hard mercy — Jayadratha kneels; Yudhi-coded eldest; Draupadi OK |
| wide-gold | **PASS** | PASS | PASS | PASS | Quiet reunion; ornate cartouche; **no plaque text** |
| poster | **PASS** | PASS | PASS | PASS | Bhima subdues; Draupadi watches; no caption plaque |

## Locks (eye)

| Lock | Notes |
|------|-------|
| hermitage-master | **PASS** — forest hermitage / thatch / peepal hour + cartouche |
| draupadi | **PASS** — deep red sari gold border, bindi, resolute dignity; **not sexualized** |
| jayadratha | **PASS** — Sindhu king, turban, jewel silks |
| bhima | **PASS** — saffron-yellow, thick mustache, largest Pandava |
| arjuna | **PASS** — cream exile, topknot, mustache, wooden bow; **no peacock** |
| yudhishthira | **PASS** — cream + gold sash, light mustache, composed eldest |

## Strict checks

- [x] `stills_review.py` PASS (dims)
- [x] No Drona / wrong sage
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Watermark eye-check — no visible overlay; `--allow-watermark` for C2PA only
- [x] **Draupadi dignity never sexualized** — **PASS**
- [x] **seize / cry distinct** — **PASS**
- [x] **mercy OK** — **PASS**
- [x] **wide-gold no plaque** — **PASS**
- [x] **Arjuna no peacock** — **PASS**
- [x] Cartouche present

## Soft / non-blocking

| File | Note |
|------|------|
| `plate-alone.jpg` | Already aboard chariot (stronger than pure “sighting”); still distinct from seize soldiers-crowd beat |
| Line density | Cinematic polish vs Amar Chitra engraved line — accept as Ep10-like |

## Outcome

**GATE C PASS.** Bump `play.html` + episode plate cache to `ep07-supergrok-20260917`, commit stills/locks/review, push Pages.

Next: scaffold Ep08 (`08-peace-embassy`) bible/script for SuperGrok drop list.
