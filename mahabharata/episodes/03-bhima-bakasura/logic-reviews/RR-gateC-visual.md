# Logic review — Ep 03 — GATE C (visual)

Status: **FAIL**
Reviewer: art/executor agent (Air `527ae34b…`)
Time: 2026-09-16 ~15:50 CT

Run first:

```bash
python3 tools/stills_review.py episodes/03-bhima-bakasura --require
```

Result: **PASS** (16 JPEGs · 1536×1024 · 3:2). Canvas bar cleared. Visual bar did **not**.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | **PASS** |
| No 1280×720 file used as first `image_edit` input | **PASS** (first ref = Ep10 `field-master` / `ekachakra-master`) |
| Imagine refs = scene master + solo locks + Ep 10 `field-master.jpg` | **PASS** (never Ep01 / Ep03 `plate-wide-gold` as ref) |
| Every named face has `stills/_locks/<id>.jpg` | **PASS** (ekachakra-master, bhima, bakasura, kunti, brahmin_father, townsfolk) |
| Ep01 `plate-wide-gold.jpg` **not** attached | **PASS** |

## Quality vs Ep 10 bar (eye-check)

Opened Ep10 `plate-vow.jpg` / field-master densitiy beside new plates.

| Check | Result | Notes |
|-------|--------|-------|
| Frame | **PASS** | Carved gold-and-lotus cartouche integrated (wood + lotus corners) on master/locks/plates |
| Camera | mixed | Heroic medium OK on clash/family; wide establishing drifted |
| Line | mixed | Amar Chitra density OK; several plates over-armored vs comic lock |
| Cast | **FAIL** | See per-plate |
| Drift | **FAIL** | Bhima lock = bare chest + saffron dhoti; several plates put him in gold breastplate |
| Gore | **FAIL** | victory blood; feast bones |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | **FAIL** | PASS | PASS | FAIL | Eye-check: armored heroes / sage bleed — must be worried **townsfolk only** |
| terror | **FAIL** | PASS | PASS | FAIL | Eye-check: armored spear warrior (reads Bhima) — must be **Bakasura** solo |
| family | PASS* | PASS | PASS | PASS | Brahmin grief OK; extra boy not in `cast_present` (soft) |
| kunti | **FAIL** | PASS | PASS | PASS | Kunti OK; Bhima in **gold armor** ≠ bare-chest lock |
| cart | **FAIL** | PASS | PASS | PASS | Bhima pulling cart but **gold breastplate** ≠ lock |
| feast | **FAIL** | PASS | PASS | PASS | Armor drift + **bones** (forbid gore/gross) |
| clash | **PASS** | PASS | PASS | PASS | Best plate — bare-chest Bhima vs stylized Bakasura, no heavy gore |
| victory | **FAIL** | PASS | PASS | PASS | Armor drift + **blood** on Bakasura |
| wide-gold | **FAIL** | PASS | PASS | PASS | Grateful townsfolk OK mood; Bhima **armored** ≠ lock |
| poster | PASS | PASS | PASS | PASS | Copy of clash |

\*family soft-fail only.

## Locks (eye)

| Lock | Notes |
|------|-------|
| ekachakra-master | **PASS** — empty Ekachakra golden-hour street, cartouche |
| bhima | **PASS** — bare chest, saffron-yellow dhoti, thick mustache, topknot |
| bakasura | present @ bar (use for terror regen) |
| kunti / brahmin_father / townsfolk | present @ bar |

## Strict checks

- [x] `stills_review.py` PASS
- [ ] No Drona / saffron sage unless `cast_present` — **FAIL on wide**
- [ ] No graphic gore — **FAIL feast/victory**
- [x] No 16:9 / 720p plates
- [ ] Eye-match to Ep 10 vow (density) — frame OK; cast/costume not
- [ ] Character lock jewelry/skin/crown/**costume** stable — **FAIL** armor vs dhoti
- [ ] Spoken line’s speaker on still (GATE D install) — **FAIL** terror (wrong figure for Bakasura line)

## Blocker

xAI team **credits / monthly spend limit exhausted** (`team_blocked: true`) during visual fix regen. Next Imagine calls returned HTTP 403. Need credits top-up, then regen: **wide, terror, kunti, cart, feast, victory, wide-gold** (+ poster after clash or new victory) with secondary ref = correct cast lock and anti-armor / anti-gore prompts. **Do not ship / do not mark PASS until those land.**

720p archive: `stills/_backup_720p_20260916/`.
