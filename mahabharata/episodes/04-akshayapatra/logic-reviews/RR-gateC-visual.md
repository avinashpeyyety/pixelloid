# Logic review — Ep 04 (rewrite) — GATE C (visual)

Status: **PASS** (boon + satisfied accepted; optional arrival regen **rejected**, shipped arrival kept)
Reviewer: executor subagent (box, worktree `studio/ep04-rewrite`)
Time: 2026-10-02 ~09:45 CT

Supersedes the 2026-09-17 review (which passed the pre-rewrite cut with `satisfied` WEAK).
Brief: `SUPERGROK-DROP-LIST.md` (2026-10-01).

## Source / import

SuperGrok consumer Imagine drops (1728×1152 JPEG) → `stills/_inbox/consumer-imagine/` (untracked, not committed).

| Drop | md5 | Imported? |
|------|-----|-----------|
| `plate-boon.jpg` (NEW) | `fe9b4420d9de2e9d051f170789ce5984` | **yes** → `stills/plate-boon.jpg` |
| `plate-satisfied.jpg` (REPLACE) | `4c95b113a7c071fa2e99f8291acd09ae` | **yes** → `stills/plate-satisfied.jpg` (was `2bebbfc6…`) |
| `plate-arrival.jpg` (optional) | `8d9a1700421dd4fc5b434e92193e4988` | **no**: fails visual (see below); shipped `plate-arrival.jpg` (`1c6cc1f6…`) unchanged |

1. `python3 tools/import_consumer_stills.py 04-akshayapatra --force`: **FAIL** on all three, byte heuristic only
   (`grok`/`Grok`/`GROK`). Every hit is inside the APP11 JUMBF **C2PA** manifest (bytes 2461–4100:
   `softwareAgent: Grok Imagine`, `claim_generator_info: Grok Imagine`, self-signed cert CN `xAI Grok Imagine`).
   No hit in the image data.
2. Eye-check of all four corners (300 px crops) plus full frames: **no visible Grok / xAI mark**, no caption, plaque or text.
3. `python3 tools/import_consumer_stills.py 04-akshayapatra --force --allow-watermark --map {boon, satisfied}`: OK, 2 files.

## Dimension gate

```
$ python3 tools/stills_review.py episodes/04-akshayapatra --require
PASS
  19 jpegs  bar 1536×1024 3:2
```

(Main's tool failed on the 16:9 hub `thumb.jpg` / `thumb@2x.jpg`. Ported the `tools/stills_review.py` change from
`studio/ep14-drona-fall`: skip `thumb*` + `_inbox`, plus a check that every bible plate exists on disk. `plate-boon.jpg` exists.)

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | **PASS** (new plates 1728×1152) |
| No 1280×720 file used as first input | **PASS** |
| Refs = scene master / locks / Ep10 field-master (per drop list) | **PASS** (operator-reported; outputs match locks) |
| Every named face has `stills/_locks/<id>.jpg` | **PASS** (duryodhana, durvasa, disciples, …) |
| Ep01 `plate-wide-gold.jpg` not attached | **PASS** (no Ep01 gold palette/composition) |
| Source path noted | **PASS**: SuperGrok consumer import |
| No visible Grok / xAI watermark | **PASS**: C2PA metadata only |

## Quality vs Ep 10 bar

Compared side by side with Ep10 `plate-vow.jpg` and the Ep04 locks.

| Check | boon | satisfied |
|-------|------|-----------|
| Frame: carved gold-and-lotus cartouche as part of the painting | PASS | PASS |
| Camera: heroic medium, figures fill frame | PASS | PASS |
| Line: engraved detail, clear faces | PASS | PASS |
| Cast: tokens match bible, no sage bleed | PASS | PASS |
| Drift vs locks | PASS | PASS |

## Per plate

| Plate | Verdict | Cast | Canvas | Frame | Camera | Notes |
|-------|---------|------|--------|-------|--------|-------|
| **boon** (NEW) | **PASS** | PASS | PASS | PASS | PASS | Pillared Hastinapura hall. **Duryodhana** matches `_locks/duryodhana.jpg` (purple-gold robes, jeweled purple-gold Kuru turban-crown, upturned mustache, pearls) and bows slightly with joined palms. **Durvasa** matches lock (white beard, grey topknot, saffron, rudraksha, staff), seated on a spotted deer-skin on a low stone dais, right palm raised granting the boon. Fruit platters for hospitality. No huts, no Pandavas, no armour. Durvasa's face is stern, which fits the "short-tempered" line. |
| **satisfied** (REPLACE) | **PASS** | PASS | PASS | PASS | PASS | **River scene**: Durvasa waist-deep in a forest river at golden hour, hand on his suddenly full belly, startled and uneasy, glancing sideways. Saffron disciples wade away toward the tree line. **No huts** in frame. **No blessing gesture** (one hand on belly, one gripping the staff). Modest saffron dhotis. This fixes the old WEAK plate (blessing hand, wrong ending). |
| arrival (optional regen) | **FAIL: not imported** | FAIL | PASS | PASS | PASS | (1) **Yudhishthira missing**, which was the only reason for this regen (no welcoming figure at the hut edge). (2) **Durvasa costume drift**: ornate gold armour plates (pauldron, breastplate, belt, tassets) over the saffron, against the ascetic `_locks/durvasa.jpg` and the drop list's no-armour bar. Kept the shipped `plate-arrival.jpg` (PASS on 2026-09-17; still matches beat 04 apart from Yudhishthira not being shown). |
| wide, vessel, empty, prayer, krishna, grain, wide-gold, poster | PASS (unchanged) | | | | | Kept per drop list ("Keep (PASS vs rewritten bible)"). |

## Strict checks

- [x] `stills_review.py --require` PASS
- [x] No Drona / wrong sage. Durvasa only where `cast_present`
- [x] No graphic gore
- [x] No 16:9 / 720p plates (hub thumbs exempt by tool; not plates)
- [x] Watermark eye-check: corners and margins clean on boon / satisfied / arrival; `--allow-watermark` for C2PA bytes only
- [x] Duryodhana eye-matches `_locks/duryodhana.jpg` (= Ep08 lock)
- [x] Durvasa eye-matches `_locks/durvasa.jpg` on boon + satisfied
- [x] satisfied = river, sated, fleeing; no huts; no blessing (rewrite ending matches the texts)
- [x] boon = Duryodhana serving Durvasa in Hastinapura (cause beat)
- [x] GATE D sync: beat 02 text (Duryodhana serves Durvasa → boon) and beat 08 text (in the river… slip away) match plates

## Outcome

**GATE C PASS** for the Ep04 rewrite plate set.
Optional follow-up (not blocking): regenerate `plate-arrival.jpg` with Yudhishthira at the hut edge in welcome and Durvasa in plain saffron (no armour).
