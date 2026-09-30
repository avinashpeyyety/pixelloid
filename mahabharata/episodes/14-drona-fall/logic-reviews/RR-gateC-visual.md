# Logic review — Ep 14 — GATE C (visual)

Status: **FAIL** (2026-09-29, Studio executor) — ship stopped at GATE C; SuperGrok drops required.

```bash
python3 tools/stills_review.py episodes/14-drona-fall --require
```

`stills_review` FAIL — 16 JPEGs all 1536×1024 3:2 (thumbs excluded as hub UI crops), but:
- missing `stills/_locks/arjuna.jpg` (Arjuna now on plate `grief`)
- missing `stills/plate-wheel.jpg` (new logic beat: chariot touches the earth)
- missing `stills/plate-grief.jpg` (new logic beat: Arjuna's grief/protest)

Imagine API regen attempted: **blocked** — `403 permission-denied`, team credits/spend limit (2026-09-29 20:46 CT). Drop list: [`SUPERGROK-DROP-LIST.md`](SUPERGROK-DROP-LIST.md).

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | PASS (existing files) |
| No 1280×720 first `image_edit` input | PASS |
| Imagine refs = dawn15 master + solo locks + Ep 10 field-master + Ep 09 Krishna/Arjuna | PASS (bible) |
| Every named face has `_locks/<id>.jpg` | **FAIL** — arjuna |
| Ep01 gold not attached | PASS |
| Source path | Imagine (prior pass); regen → SuperGrok consumer import |
| Watermark eye-check | PASS on existing 9 plates + 6 locks (no Grok/xAI marks) |

## Quality vs Ep 10 bar

| Check | Result |
|-------|--------|
| Frame | PASS — carved gold-and-lotus cartouche integrated on every plate |
| Camera | PASS — heroic medium throughout |
| Line | PASS — Amar Chitra painted comic, not photoreal |
| Text / plaques / modern props | PASS — none baked in |
| Krishna | PASS — counsel, conch, wide-gold match Ep 09 lock family (pitambar, peacock, garlands, reins; saturated blue consistent with Ep 13) |
| Arjuna | **FAIL** — no plate yet (grief missing); must be Ep 09 face, cream-white dhoti, no gold armor/peacock |
| Drift | **FAIL** — Yudhishthira: cream dhoti bare-armed on counsel/conch, **gold chest armor** on dharma (= current lock), **bronze armor + holding reins** on wide-gold |
| Gore | PASS — elephant as gold dust; Drona stilled as gold light; no blood/head |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Result / notes |
|-------|------|--------|-------|--------|----------------|
| wide | Drona | 1536×1024 | ✓ | ✓ | PASS — acharya-warrior, bow, dawn host |
| counsel | Krishna, Yudhishthira, Bhima | ✓ | ✓ | ✓ | PASS — defines Ep14 Yudhishthira canon (cream dhoti) |
| elephant | Bhima | ✓ | ✓ | ✓ | PASS — war-elephant dissolving as gold dust, no blood |
| dharma | Yudhishthira | ✓ | ✓ | ✓ | **FAIL** — gold chest armor ≠ counsel/conch; regen |
| conch | Yudhishthira, Krishna | ✓ | ✓ | ✓ | PASS — Yudhishthira speaking, Krishna sounds conch |
| wheel | Yudhishthira | — | — | — | **MISSING** — new beat |
| yoga | Drona | ✓ | ✓ | ✓ | PASS (note) — unarmed in yoga; bow on earth not drawn → optional polish |
| prince | Dhrishtadyumna | ✓ | ✓ | ✓ | PASS — adult Panchala prince, sword of light |
| still | Drona, Dhrishtadyumna | ✓ | ✓ | ✓ | PASS — Drona as gold light, no gore |
| grief | Arjuna | — | — | — | **MISSING** — new beat |
| wide-gold | Krishna, Yudhishthira | ✓ | ✓ | ✓ | **FAIL** — Yudhishthira bronze armor and holding reins (two charioteers); regen |
| poster | (= yoga) | ✓ | ✓ | ✓ | PASS |

## Strict checks

- [ ] `stills_review.py` PASS — **no** (see above)
- [x] No Drona / saffron sage unless `cast_present`
- [x] No graphic gore
- [x] No 16:9 / 720p plates (thumbs are hub crops)
- [x] Watermark eye-check on existing files
- [x] Eye-match to Ep 10 density
- [x] Krishna eye-matches Ep 09 lock
- [ ] Arjuna eye-matches Ep 09 lock — pending grief plate
- [ ] No costume drift — Yudhishthira FAIL
- [ ] Speaker/action visible on every beat — wheel, grief missing
