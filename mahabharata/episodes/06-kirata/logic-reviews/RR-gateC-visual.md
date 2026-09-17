# Logic review — Ep 06 — GATE C (visual)

Status: **PASS**
Reviewer: executor subagent (box lab-mirror)
Time: 2026-09-17 ~16:18 CT

Source: SuperGrok consumer Imagine hard regen (wide + gift) →
`stills/_inbox/consumer-imagine/` → mapped import:

```bash
python3 tools/import_consumer_stills.py 06-kirata \
  --map /tmp/ep06-wide-gift-map.json --force --allow-watermark
```

Map: `wide` → `plate-wide.jpg`, `gift` → `plate-gift.jpg`. Prior full-batch import (2026-09-17 ~16:00 CT) already landed remaining plates/locks/poster @ **1728×1152**. Hard-regen mtimes **newer** than prior stills (inbox 16:17 CT vs stills 16:00 CT).

C2PA / byte heuristic WARN `grok` on imported files; **no visible** Grok/xAI corner watermark on eye-check.

Run:

```bash
python3 tools/stills_review.py episodes/06-kirata --require
```

Result: **PASS** (30 JPEGs · bar ≥1536×1024 · ~3:2 · all stills/locks/poster at **1728×1152**).

Locks in `stills/_locks/`: mountain-master, arjuna, kirata, shiva, boar.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | **PASS** (1728×1152) |
| No 1280×720 file used as first `image_edit` input | **PASS** (native SuperGrok drop) |
| Imagine refs = scene master + solo locks | **PASS** |
| Every named face has `stills/_locks/<id>.jpg` | **PASS** (5 locks) |
| Ep01 `plate-wide-gold.jpg` **not** attached | **PASS** |
| Source path noted | **PASS** — SuperGrok consumer import + hard regen |
| No visible Grok / xAI watermark | **PASS** — C2PA byte WARN only; corners clean |

## Quality vs Ep 10 bar (eye-check)

| Check | Result | Notes |
|-------|--------|-------|
| Frame | **PASS** | Carved wood/gold + lotus cartouche on plates/locks |
| Camera | **PASS** | Heroic medium; named cast fills frame |
| Line | **SOFT** | Polished cinematic paint (Ep10-like denseness) |
| Cast / Arjuna | **PASS** | Cream ascetic dhoti, topknot, mustache; **no peacock / no gold breastplate** |
| Shiva vs kirata | **PASS** | Hunter leaf-hide ≠ blue-skin jata/crescent/trident/aura reveal |
| Contaminating text | **PASS** | Hard-regen `plate-wide.jpg`: **no ZERO / plaque letters** (eye + OCR crops) |
| Gift props | **PASS** | Hard-regen `plate-gift.jpg`: **glowing Pāśupatastra / arrow of light** — not wrapped box |
| wide-gold plaque | **PASS** | No EP / FIELD-MASTER / ZERO text |
| Gore | **PASS** | Boar / hunter / duel — no graphic blood |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | **PASS** | PASS | PASS | PASS | Hard regen — climb beat; lotus cartouche; **no plaque text** |
| penance | **PASS** | PASS | PASS | PASS | Tapas on ledge; bow at feet; cream exile |
| boar | **PASS** | PASS | PASS | PASS | Aim at charging boar; no gore |
| hunter | **PASS** | PASS | PASS | PASS | Kirata leaf-hide vs Arjuna cream; slain boar clean |
| duel | **PASS** | PASS | PASS | PASS | Crossed bows; leaf swirl; distinct costumes |
| equal | **PASS** | PASS | PASS | PASS | Arjuna kneels; kirata stands with bow |
| reveal | **PASS** | PASS | PASS | PASS | Blue Shiva + crescent/trident/aura; Arjuna pranam |
| gift | **PASS** | PASS | PASS | PASS | Hard regen — glowing astral weapon between Shiva + Arjuna; **no modern box** |
| wide-gold | **PASS** | PASS | PASS | PASS | Blessed Arjuna on peak; ornate cartouche; no plaque text |
| poster | **PASS** | PASS | PASS | PASS | Shiva blessing + Arjuna bow; no caption plaque |

## Locks (eye)

| Lock | Notes |
|------|-------|
| mountain-master | **PASS** — empty Himalayan pines + blue peaks + mist + cartouche |
| arjuna | **PASS** — cream exile, topknot, mustache, wooden bow; **no peacock / no gold armor** |
| kirata | **PASS** — leaf-hide hunter, white face paint, wild hair, bow — distinct from Shiva |
| shiva | **PASS** — blue skin, jata, crescent, cobra, trident, leopard; blessing not horror |
| boar | **PASS** — stylized charge; no gore |

## Strict checks

- [x] `stills_review.py` PASS (dims)
- [x] No Drona / wrong sage
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Watermark eye-check — no visible overlay; `--allow-watermark` for C2PA only
- [x] **wide-gold free of contaminating text** — **PASS**
- [x] Contaminating plaque text — **PASS** on hard-regen `plate-wide.jpg` (no ZERO)
- [x] Gift beat props — **PASS** on hard-regen `plate-gift.jpg` (astral Pāśupata)
- [x] Arjuna costume tokens — **PASS** (no peacock / no gold armor)
- [x] Shiva reveal ≠ kirata disguise — **PASS**
- [x] Cartouche present

## Soft / non-blocking

| File | Note |
|------|------|
| `plate-wide-gold.jpg` | Gold jewelry + ornate golden bow + soft halo — still cream cloth (no breastplate); OK for closing blessing |
| Line density | Cinematic polish vs Amar Chitra engraved line — accept as Ep10-like |

## Outcome

**GATE C PASS.** Bump `play.html` + episode plate cache to `ep06-supergrok-20260917`, commit stills/locks/review, push Pages.

Ep07 (`07-jayadratha`) already scaffolded — no new bible/script this pass.
