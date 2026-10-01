# Logic review — Ep 14 — GATE C (visual)

Status: **PASS (with notes)** (2026-10-01, Studio executor) — SuperGrok consumer import.

```bash
python3 tools/import_consumer_stills.py 14-drona-fall --force --allow-watermark
python3 tools/stills_review.py episodes/14-drona-fall --require
# PASS
#   19 jpegs  bar 1536×1024 3:2
```

Source: SuperGrok consumer Imagine (grok.com) → `stills/_inbox/consumer-imagine/` → import. 7 files, all 1728×1152 (3:2).

**Why `--allow-watermark`:** the byte check flagged `grok/Grok/GROK` in all 7 files. Every hit is in the **C2PA content-credentials manifest** (`softwareAgent: Grok Imagine`, `digitalSourceType: trainedAlgorithmicMedia`, signer `xAI Grok Imagine`), which is provenance metadata, not a visible overlay. I eye-checked all four corners of every file at full resolution: only carved cartouche, no logo, no "Made with Grok", no text. C2PA is left in place on purpose (honest AI provenance).

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | PASS (stills_review: 19 jpegs) |
| No 1280×720 file used as first input | PASS |
| Imagine refs = dawn15 master + solo locks + Ep 09 Krishna/Arjuna | PASS per drop list (operator) |
| Every named face has `stills/_locks/<id>.jpg` | PASS — `arjuna.jpg` now present; `yudhishthira.jpg` re-locked |
| Ep01 `plate-wide-gold.jpg` not attached | PASS per drop list (operator) |
| Source path noted | SuperGrok consumer import |
| No visible Grok / xAI watermark | PASS — eye-checked corners at full res (metadata-only C2PA) |

## Per plate (imported this pass)

| Plate | Beat match | Characters | Text / watermark | Frame / camera | Verdict |
|-------|-----------|-----------|------------------|----------------|---------|
| `_locks/yudhishthira` | Solo re-lock | Yudhishthira: modest mustache, simple gold diadem, cream dhoti + angavastram, gold sash, gold armlets, bare-armed, **no chest armor**. Matches counsel/conch canon | None | Cartouche ✓, heroic medium ✓ | **PASS** |
| `_locks/arjuna` | Solo Ep14 lock | Ep 09 face, crown, mustache, quiver, Gandiva; no peacock, no garland. **Note:** jeweled collar + engraved gold panel on the torso under the angavastram (partial cuirass), so the drop-list "NO gold chest armor" is only partly met. Much lighter than the Ep 09 lock's full armor | None | Cartouche ✓ (Ep 09 frame family) | **PASS w/ note**. Re-lock before using it as a ref for future episodes |
| `dharma` | Yudhishthira alone, grave and torn, dawn field, distant ranks | Yudhishthira only, same as new lock, no armor. Fixes prior armor drift | None | ✓ / ✓ | **PASS** |
| `wheel` | Yudhishthira on gold chariot, low 3/4; wheels press the dust (dust plumes at rims); back-turned silhouetted charioteer (not Krishna) | Yudhishthira correct, no armor, no Gandiva | None | ✓ / ✓ | **PASS w/ note**: gaze is level, not "eyes lowered", and rim glow reads as bright, not fading. The core beat (wheels touch the earth) still reads |
| `grief` | Arjuna, tears on cheeks, open hand raised in protest, gold smoke far off, distant ranks; no body, no blood | Arjuna matches Ep 09 face; bare torso + collar, no cuirass, no peacock, no garland | None | ✓ / ✓ | **PASS w/ note**: Gandiva is held upright at his side, not lowered into the dust; quiver not visible |
| `wide-gold` | Closing: Krishna with reins + Yudhishthira on foot side by side at low sun, banners/ranks far off | Krishna matches Ep 09 lock (dusty-blue, peacock, pitambar, garlands, reins). Yudhishthira: no reins, no armor. Fixes prior drift | None | ✓ / ✓ | **PASS** |
| `yoga` (polish) | Drona in yoga, eyes closed, guru-bow laid on the earth beside him | Exactly one Drona; white beard, saffron topknot, pale gold armor | None | ✓ / ✓ | **PASS** (quiver not shown; optional) |

Unchanged PASS plates from 2026-09-29: wide, counsel, elephant, conch, prince, still. `poster.jpg` is still the **previous** yoga plate (the drop list says keep it), so it no longer byte-matches the new `plate-yoga.jpg`.

## Strict checks

- [x] `stills_review.py` PASS
- [x] No Drona / saffron sage unless `cast_present` (Drona only on yoga)
- [x] No graphic gore
- [x] No 16:9 / 720p plates
- [x] Watermark eye-check (consumer import): no visible overlay. C2PA metadata only
- [x] Eye-match to Ep 10 density (Amar Chitra line, carved cartouche)
- [x] Krishna eye-matches Ep 09 lock (wide-gold)
- [x] Arjuna eye-matches Ep 09 face (grief, lock). Costume note above
- [x] Yudhishthira costume drift resolved: cream dhoti, no armor on lock, dharma, wheel, wide-gold
- [ ] Minor beat-detail misses (non-blocking): wheel gaze/glow, grief bow-to-dust, lock-arjuna partial cuirass
