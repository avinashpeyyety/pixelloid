# Logic review — Ep 04 — GATE C (visual)

Status: **PASS**
Reviewer: executor subagent (box lab-mirror)
Time: 2026-09-17 ~10:40 CT

Source: SuperGrok consumer Imagine → `stills/_inbox/consumer-imagine/` →
`python3 tools/import_consumer_stills.py 04-akshayapatra --force --allow-watermark`
(C2PA `softwareAgent: Grok Imagine` / byte heuristic WARN on some files; **no visible**
Grok/xAI corner watermark or contaminating plaque text on eye-check).

Wide-gold regen (this pass): clean `plate-wide-gold.jpg` re-dropped at
`stills/_inbox/consumer-imagine/plate-wide-gold.jpg` (1728×1152), checksum
`bde372a28f9ab6b5c17c26be7ad59703` (prior still was `a0ca52adc3c75c831565bfa623986304`).
Imported with `--map` wide-gold only + `--force --allow-watermark`. Soft satisfied regen skipped.

Run first:

```bash
python3 tools/stills_review.py episodes/04-akshayapatra --require
```

Result: **PASS** (34 JPEGs · bar ≥1536×1024 · ~3:2 · all stills/locks/poster at **1728×1152**).

Locks landed in `stills/_locks/`: hermitage-master, draupadi, durvasa, krishna, yudhishthira, disciples, akshayapatra.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | **PASS** |
| No 1280×720 file used as first `image_edit` input | **PASS** (720p replaced by import) |
| Imagine refs = scene master + solo locks | **PASS** (consumer regen with locks in inbox) |
| Every named face has `stills/_locks/<id>.jpg` | **PASS** (7 locks) |
| Ep01 `plate-wide-gold.jpg` **not** attached | **PASS** |
| Source path noted | **PASS** — SuperGrok consumer import |
| No visible Grok / xAI watermark | **PASS** — C2PA byte WARN only; corners/margins clean |

## Quality vs Ep 10 bar (eye-check)

Opened Ep10 `plate-vow.jpg` beside new drops; locks for cast/vessel continuity.

| Check | Result | Notes |
|-------|--------|-------|
| Frame | **PASS** | Carved wood + lotus cartouche on all plates/locks |
| Camera | **PASS** | Heroic medium / cast fills frame |
| Line | **SOFT** | Polished cinematic paint (similar to Ep10 vow); not thin cream-mat |
| Cast | **PASS** on most | Tokens match bible; vessel lock (wide bowl, 2 handles, lotus, pedestal) holds across vessel/empty/grain/poster |
| Krishna | **PASS** | Pitambar, peacock, garland, blue skin; matches local `_locks/krishna.jpg` |
| Drift | **PASS** | Draupadi red-rose sari + wavy hair stable; Durvasa saffron + white beard + staff stable |
| Contaminating text | **PASS** | wide-gold plaque **"EP 10: FIELD-MASTER DENSITY"** cleared on regen |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | **PASS** | PASS | PASS | PASS | Yudhishthira + Draupadi hermitage exile; thatch huts; no Drona/bird |
| vessel | **PASS** | PASS | PASS | PASS | Draupadi + glowing Akshayapatra; lock vessel shape |
| empty | **PASS** | PASS | PASS | PASS | Draupadi wiping clean empty bowl; evening hermitage |
| arrival | **PASS** | PASS | PASS | PASS | Fierce Durvasa + saffron disciples on path to huts |
| prayer | **PASS** | PASS | PASS | PASS | Draupadi anjali, lamp light, intimate devotion |
| krishna | **PASS** | PASS | PASS | PASS | Krishna + Draupadi arrival at hermitage |
| grain | **PASS** | PASS | PASS | PASS | Krishna + single glowing grain over lock vessel |
| satisfied | **WEAK** | PASS | PASS | PASS | Durvasa addressing disciples (blessing hand) — calmer than arrival; optional regen later for clearer “content departure” |
| wide-gold | **PASS** | PASS | PASS | PASS | Clean closing peace: Krishna + Draupadi + Yudhishthira + glowing vessel; ornate frame; **no** plaque / EP10 / FIELD-MASTER text |
| poster | **PASS** | PASS | PASS | PASS | Draupadi holding glowing Akshayapatra at hermitage; no caption plaque |

## Locks (eye)

| Lock | Notes |
|------|-------|
| hermitage-master | **PASS** — thatch huts, banyan, chulha, golden hour |
| draupadi | **PASS** — red sari, wavy hair, hermitage |
| durvasa | **PASS** — fierce ascetic lock |
| krishna | **PASS** — pitambar, peacock, garland (series face) |
| yudhishthira | **PASS** — cream exile dhoti, topknot, hermitage |
| disciples | **PASS** — saffron group |
| akshayapatra | **PASS** — wide golden bowl, 2 handles, lotus face, pedestal, glow |

## Strict checks

- [x] `stills_review.py` PASS
- [x] No Drona / wrong sage on non-Durvasa plates
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Watermark eye-check — no visible overlay; `--allow-watermark` for C2PA only
- [x] **wide-gold free of contaminating text** — **PASS** (eye-check Read; no EP 10 / FIELD-MASTER / plaque)
- [~] satisfied beat = content departure — **WEAK** (optional; not blocking)
- [x] Krishna eye-matches lock
- [x] Vessel continuity vs `_locks/akshayapatra.jpg`
- [x] Character jewelry/skin/costume stable across plates

## Outcome

**GATE C PASS.** Ship Ep04: bump `play.html` cache, commit SuperGrok stills + locks + this review, `git push origin main`.

Soft follow-up (non-blocking): optional `plate-satisfied.jpg` regen for clearer “full / bless / turn back” mood.
