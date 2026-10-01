# Ep 04 — SuperGrok consumer Imagine drop list (2026-10-01)

**Why:** Ep 04 rewrite (logic + sources pass, Ep 14 standard) added a cause beat (Duryodhana's boon) and corrected the ending to the texts: the sages are sated **in the river** and flee; they do not walk back to the hermitage to bless anyone. Two plates must exist / change. No paid xAI API — consumer grok.com Imagine only (WORKFLOW → consumer path).

**Drop folder:** `mahabharata/episodes/04-akshayapatra/stills/_inbox/consumer-imagine/` (untracked; never commit `_inbox`)
**Import:** `python3 tools/import_consumer_stills.py 04-akshayapatra --force` → `python3 tools/stills_review.py episodes/04-akshayapatra --require` → refresh `RR-gateC-visual.md` (visual vs Ep 10 vow/arrows).

**Every image:** grok.com Imagine, **3:2, ≥1536×1024** (reject 720p/16:9). Prompt = bible `prompt_prefix` + that plate's `prompt` in `plate-bible.json`. Carved gold-and-lotus cartouche, cream-saffron-gold light, same density as the shipped Ep 04 plates. No text/plaques/speech bubbles, no modern props, no gore, no Grok watermark. **Never** attach Ep01 `plate-wide-gold.jpg` or any finished `plate-*.jpg`.

## Required (order)

| # | Save as | Refs to attach | One-line intent |
|---|---------|----------------|-----------------|
| 1 | `plate-boon.jpg` (NEW) | Ep10 `_locks/field-master.jpg` (style) + Ep04 `_locks/duryodhana.jpg` (= Ep08 lock) + Ep04 `_locks/durvasa.jpg` | Hastinapura pillared hall: Duryodhana (purple-gold robes, jeweled Kuru crown, proud mustache) bows with joined palms serving Durvasa; the sage, seated on a deer-skin on a low dais, raises a hand granting the boon; hospitality platters. No huts, no Pandavas, no armor. |
| 2 | `plate-satisfied.jpg` (REPLACE) | Ep04 `_locks/hermitage-master.jpg` (forest light only) + Ep04 `_locks/durvasa.jpg` + Ep04 `_locks/disciples.jpg` | Forest river at afternoon gold: Durvasa waist-deep, hand on his suddenly full belly, startled and uneasy, glancing back toward the unseen hermitage; saffron disciples wading to the far bank and slipping into the trees. Modest saffron dhotis. **No huts in frame, no blessing gesture.** |

## Optional polish (not blocking)

| Save as | Refs | Intent |
|---------|------|--------|
| `plate-arrival.jpg` | Ep04 `_locks/durvasa.jpg`, `_locks/disciples.jpg`, `_locks/yudhishthira.jpg` | Same composition as current, add Yudhishthira at the hut edge with joined palms in welcome. |

**Keep (PASS vs rewritten bible):** wide, vessel, empty, arrival, prayer, krishna, grain, wide-gold. Poster unchanged.
**Locks:** `_locks/duryodhana.jpg` copied forward from Ep 08 (no regen). Akshayapatra stays the shipped copper-gold bowl lock (text says copper — stylisation noted in `source_block`).

## Also required before this branch can merge (not plates)

- **Narration:** all 10 beats have new text and `orion-09.mp3` does not exist. Re-render `audio/orion-00…09.mp3` from `script.js` beat text (free path only — e.g. the local Kokoro voice used for Ep 14 on `studio/ep14-drona-fall`, or Orion when credits are approved). Retime `t`/`totalSec` to the real clip lengths.
- **Hub thumbnails:** `stills/thumb.jpg` / `thumb@2x.jpg` are 16:9 hub thumbs and fail `stills_review.py --require` (same for Ep 12/13). Either exempt `thumb*` in the tool or ignore; not a plate.
