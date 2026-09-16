# Ep 03 rewrite status — 2026-09-16 (afternoon CT)

**Episode:** `03-bhima-bakasura`  
**Disk:** MacBook Air `527ae34b-0262-4036-b3f7-857ee85d2009`  
**Bar:** Ep 09/10 canvas 1536×1024 3:2

## Landed this Imagine pass

| Artifact | Status |
|----------|--------|
| Backup | `stills/_backup_720p_20260916/` (old 720p plates + bhima/bakasura locks) |
| `ekachakra-master.jpg` | **PASS** · 1536×1024 from Ep10 field-master spine |
| Solo locks | bhima, bakasura, kunti, brahmin_father, townsfolk · all 1536×1024; **bhima lock eye-PASS** (bare chest / saffron dhoti) |
| 9 plates + poster | All **canvas** 1536×1024; **visual FAIL** on most (armor drift / wrong cast / gore) — clash OK |
| `stills_review.py --require` | **PASS** (also skips `_backup*` trees) |
| GATE C visual | **FAIL** — see `RR-gateC-visual.md` |
| Orion TTS | **skipped** — credits exhausted; existing `orion-*.mp3` remain |
| Publish | **blocked** — GATE C visual FAIL + no credits for fix |

## Gates

| Gate | Result |
|------|--------|
| D dialogue | PASS |
| A/B bible | PASS |
| C canvas (`stills_review --require`) | PASS |
| C visual (eye vs Ep10) | **FAIL** |
| D install (speaker on plate) | **FAIL** on terror (and weak on armored Bhima plates) |

## Blocker

**xAI API credits / spend limit** — team `0a0eef05-…` blocked. Fix regen aborted on first visual repair call.

## Next (after credits)

1. Regen plates: wide (townsfolk), terror (bakasura), kunti/cart/feast/victory/wide-gold (bare-chest Bhima lock; no gore).
2. Poster from best plate; re-eye GATE C → PASS.
3. Optional Orion under `ep03-09-10-bar` if feast line vs mp3 mismatch.
4. Commit + push Pages + bump `play.html` `?v=`.
