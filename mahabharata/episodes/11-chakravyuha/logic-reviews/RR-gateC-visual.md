# Logic review — Ep 11 — GATE C (visual)

Status: PASS

Run first:

```bash
python3 tools/stills_review.py episodes/11-chakravyuha --require
```

Restyle pass: *The Chakravyuha* restyled to Ep 09/10 cream–saffron–gold cartouche. Imagine native **2k** 2496×1664 PNG, sips-downscaled to JPEG 1536×1024 q90. **No Lanczos upscale.** First Imagine ref = Ep 10 `field-master.jpg`. Never Ep 01 gold. Never Ep 10 vow/arrows/fall/bed as refs. Megh + Jhaptal BGM unchanged. Dialogue unchanged (GATE D skipped).

`stills_review.py --require`: **PASS** — 16 JPEGs, all 1536×1024 3:2.

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | PASS (native 2k → 1536×1024) |
| No 1280×720 file used as first `image_edit` input | PASS — Ep 10 field-master 1536×1024 |
| Imagine refs = scene master + solo locks + Ep 10 `field-master.jpg` only | PASS (two string data-URIs per edit) |
| Ep01 `plate-wide-gold.jpg` **not** attached | PASS |

JPEG SOF 1536×1024; byte sizes (locks / plates):

| File | Bytes |
|------|------:|
| _locks/vyuha-master.jpg | 897058 |
| _locks/drona.jpg | 862323 |
| _locks/abhimanyu.jpg | 840205 |
| _locks/jayadratha.jpg | 903255 |
| _locks/arjuna.jpg | 826673 |
| _locks/krishna.jpg | 854909 |
| plate-wide.jpg | 825466 |
| plate-vyuha.jpg | 718377 |
| plate-counsel.jpg | 818902 |
| plate-enter.jpg | 852155 |
| plate-gate.jpg | 852881 |
| plate-storm.jpg | 847486 |
| plate-wheel.jpg | 855813 |
| plate-dusk.jpg | 777318 |
| plate-wide-gold.jpg | 851877 |
| poster.jpg | 852155 |

## Quality vs Ep 10 bar

Eyes vs Ep 09 `plate-counsel.jpg` and Ep 10 `field-master.jpg` (not attached as figure-plate refs).

| Check | Result |
|-------|--------|
| Frame | PASS — burnished gold-and-lotus cartouche is part of the painting |
| Camera | PASS — named heroes fill the frame (heroic medium) |
| Line | PASS — engraved armor, Amar Chitra density, cream-saffron-gold hour |
| Cast | PASS — Drona only on wide/vyuha; Abhimanyu adult indigo-blue + small diadem; Jayadratha crimson/gold + shield; closing Arjuna gold crown / cream dhoti / quiver + Krishna charioteer |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| wide | Drona + armies | 1536×1024 | cartouche | heroic medium | Commander, saffron, bow |
| vyuha | Drona + armies | 1536×1024 | cartouche | heroic medium | Raised hand over concentric rings |
| counsel | Abhimanyu | 1536×1024 | cartouche | heroic medium | Open-hand resolve; no Drona |
| enter | Abhimanyu | 1536×1024 | cartouche | heroic medium | Solo driver into the wheel (regen ×2) |
| gate | Jayadratha | 1536×1024 | cartouche | heroic medium | Crimson/gold, shield as living gate |
| storm | Abhimanyu | 1536×1024 | cartouche | heroic medium | Gold shaft-light, no gore |
| wheel | Abhimanyu | 1536×1024 | cartouche | heroic medium | Chariot wheel as last weapon |
| dusk | Abhimanyu | 1536×1024 | cartouche | heroic medium | Composed fall, no gore (regen ×2) |
| wide-gold | Arjuna + Krishna | 1536×1024 | cartouche | heroic medium | Krishna reins; Arjuna vow; no Drona |

## Strict checks

- [x] `stills_review.py --require` PASS
- [x] No Drona / saffron sage unless `cast_present` (wide, vyuha only)
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Eye-match to Ep 09/10 gold hour, not Ep 01 gold
- [x] Abhimanyu adult warrior proportions
- [x] Native 2k downscale — no Lanczos-upscale footnote
