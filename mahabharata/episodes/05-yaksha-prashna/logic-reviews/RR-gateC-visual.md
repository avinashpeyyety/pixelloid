# Logic review — Ep 05 — GATE C (visual)

Status: **PASS**
Reviewer: executor subagent (box lab-mirror)
Time: 2026-09-17 ~13:45 CT

Source: SuperGrok consumer Imagine hard regenerations →
`stills/_inbox/consumer-imagine/` → mapped import:

```bash
python3 tools/import_consumer_stills.py 05-yaksha-prashna \
  --map /tmp/ep05-regen-map.json --force --allow-watermark
```

Map: `_locks/arjuna` + `plate-lake` only (soft twin regen skipped).
C2PA / byte heuristic WARN `grok` on imported files; **no visible** Grok/xAI corner
watermark on eye-check of BR/TL strips.

Run:

```bash
python3 tools/stills_review.py episodes/05-yaksha-prashna --require
```

Result: **PASS** (32 JPEGs · bar ≥1536×1024 · ~3:2 · all stills/locks/poster at **1728×1152**).

Locks in `stills/_locks/`: lake-master, yudhishthira, yaksha, bhima, arjuna, nakula_sahadeva.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | **PASS** (1728×1152) |
| No 1280×720 file used as first `image_edit` input | **PASS** (native SuperGrok drop) |
| Imagine refs = scene master + solo locks | **PASS** |
| Every named face has `stills/_locks/<id>.jpg` | **PASS** (6 locks present) |
| Ep01 `plate-wide-gold.jpg` **not** attached | **PASS** |
| Source path noted | **PASS** — SuperGrok consumer import |
| No visible Grok / xAI watermark | **PASS** — C2PA byte WARN only; corners/margins clean |

## Quality vs Ep 10 bar (eye-check)

| Check | Result | Notes |
|-------|--------|-------|
| Frame | **PASS** | Carved wood/gold + lotus cartouche on plates/locks |
| Camera | **PASS** | Heroic medium; named cast fills frame |
| Line | **SOFT** | Polished cinematic paint (Ep10-like); not thin cream-mat |
| Cast | **PASS** | Arjuna lock + lake plate now cream exile dhoti; **no gold breastplate** |
| Drift | **SOFT** | Twins lock still palace BG / royal jewelry vs Vana cream exile (non-blocking soft) |
| Contaminating text | **PASS** | wide-gold / poster / plates — **no** plaque / EP / FIELD-MASTER text |
| Five brothers | **PASS** when required | wide, yudhi, rise, wide-gold show 5; fall shows 4 (correct) |
| Gore | **PASS** | Sleep-still falls; no blood |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | **PASS** | PASS | PASS | PASS | Five weary Pandavas on forest path; exile dress; no armor |
| thirst | **PASS** | PASS | PASS | PASS | Yudhishthira (cream) gestures + Bhima (saffron-yellow) |
| lake | **PASS** | PASS | PASS | PASS | Arjuna cream exile dhoti + uttariya; bare chest; **shore approach**; not waist-deep; wooden bow |
| fall | **PASS** | PASS | PASS | PASS | Four brothers sleep-still; pots; no gore |
| yudhi | **PASS** | PASS | PASS | PASS | Yudhishthira grief-composed + four fallen; five total |
| yaksha | **PASS** | PASS | PASS | PASS | Luminous yaksha on water; Yudhishthira anjali |
| answers | **PASS** | PASS | PASS | PASS | Dharma dialogue two-shot; raised hand |
| rise | **PASS** | PASS | PASS | PASS | Five brothers + yaksha blessing light |
| wide-gold | **PASS** | PASS | PASS | PASS | Five brothers at lake; ornate cartouche; **no plaque text** |
| poster | **PASS** | PASS | PASS | PASS | Yudhishthira + yaksha hero; no caption plaque |

## Locks (eye)

| Lock | Notes |
|------|-------|
| lake-master | **PASS** — empty forest lake, mist, cartouche |
| yudhishthira | **PASS** — cream exile, topknot, serene |
| yaksha | **PASS** — luminous pale spirit, mist-white/gold, not gore |
| bhima | **PASS** — saffron-yellow dhoti, thick mustache, powerful |
| arjuna | **PASS** — cream-white exile dhoti + shoulder cloth; bare chest; **no gold armor**; topknot + mustache; wooden bow; shore stance |
| nakula_sahadeva | **SOFT** — twins present; palace/temple skyline + jewelry vs cream exile (deferred soft regen) |

## Strict checks

- [x] `stills_review.py` PASS (dims)
- [x] No Drona / wrong sage
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Watermark eye-check — no visible overlay; `--allow-watermark` for C2PA only
- [x] **wide-gold free of contaminating text** — **PASS**
- [x] Character costume tokens match bible — **PASS** (Arjuna cream exile; hard regens cleared gold armor)
- [x] Five brothers when present / fall = four — narrative OK
- [x] Cartouche present

## Prior FAIL cleared

| File | Prior fail | Regen result |
|------|------------|--------------|
| `_locks/arjuna.jpg` | Gold breastplate | Cream exile dhoti, bare chest, no armor |
| `plate-lake.jpg` | Gold cuirass + waist-deep | Shore approach, cream exile, no armor |
| `_locks/nakula_sahadeva.jpg` | Soft palace/jewelry | **Skipped** this pass (non-blocking) |

## Outcome

**GATE C PASS.** Ship: commit stills/locks + Gate C + bump `play.html` / script cache; push `origin main`.

Checksums (hard-regen ship):
- `_locks/arjuna.jpg` `9c9e7d4322dda74edda23ce8cf904bd3`
- `plate-lake.jpg` `b61a53cff9b1d0466419052d094845fa`

Cache tag: `ep05-supergrok-20260917`
