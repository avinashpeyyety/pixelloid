# Logic review — Ep 04 (rewrite) — GATE D (install)

Status: **PASS**
Reviewer: executor subagent (box, worktree `studio/ep04-rewrite` → merge to `main`)
Time: 2026-10-02 ~12:05 CT

Prior gates this rewrite: GATE A/B + D-dialogue PASS (`RR-gateD-dialogue.md`, `logic_review.py`); GATE C PASS (`RR-gateC-visual.md`, `stills_review.py --require` 19 jpegs ≥1536×1024 3:2).

## Install checks

| Check | Result |
|-------|--------|
| Every beat `plate` key resolves via `EPISODE.plates` to an on-disk still | **PASS** |
| Every beat `audio` file loads under `episodes/04-akshayapatra/audio/` | **PASS** (orion-00…09) |
| Speaker / action matches script beats (Narrator + plate semantics) | **PASS** |
| Named raga wired in script + player | **PASS** — `music.raga: "yaman"`; `main.js` has `yaman` bed |
| `totalSec` | **130** |
| Voice path | **Kokoro local** (`voice.provider: "local-kokoro"`, `bm_george`); files keep **orion-NN.mp3** names/fingerprint (24 kHz / 128 kbps / mono / −16 LUFS). No paid xAI API. |

## Beat → plate → audio map

| t | plate key | still file | audio | who | action / note |
|---|-----------|------------|-------|-----|---------------|
| 0 | wide | plate-wide.jpg | orion-00.mp3 | Narrator | Hermitage / exile open |
| 12 | vessel | plate-vessel.jpg | orion-01.mp3 | Narrator | Akshayapatra vessel |
| 24 | boon | plate-boon.jpg | orion-02.mp3 | Narrator | Duryodhana’s boon (new plate, GATE C) |
| 40 | empty | plate-empty.jpg | orion-03.mp3 | Narrator | Vessel spent |
| 52 | arrival | plate-arrival.jpg | orion-04.mp3 | Narrator | Durvasa + disciples arrive |
| 65 | prayer | plate-prayer.jpg | orion-05.mp3 | Narrator | Draupadi prays |
| 77 | krishna | plate-krishna.jpg | orion-06.mp3 | Narrator | Krishna arrives hungry |
| 89 | grain | plate-grain.jpg | orion-07.mp3 | Narrator | Grain on the rim |
| 101 | satisfied | plate-satisfied.jpg | orion-08.mp3 | Narrator | River sated / flee (rewrite ending) |
| 114 | wide-gold | plate-wide-gold.jpg | orion-09.mp3 | Narrator | Empty bank; trap closes on nothing |
| 126 | wide-gold | plate-wide-gold.jpg | — | — | Hold / end plate (no audio) |

## Commands / evidence

```
$ python3 tools/stills_review.py episodes/04-akshayapatra --require
PASS  (19 jpegs, bar 1536×1024 3:2)

$ python3 tools/dialogue_review.py … --report   → PASS (prior)
$ python3 tools/logic_review.py …               → PASS (prior)
```

On-disk file check (this run): every mapped still present; orion-00…09.mp3 present and non-empty; `stills/_inbox/` left untracked (not part of install).

## Strict checks

- [x] No missing plate file for a script beat key
- [x] No missing audio for narration beats
- [x] Speaker on plate / action visible (boon = Duryodhana+Durvasa hall; satisfied = river, not hut blessing)
- [x] Yaman underscoring named in episode module
- [x] totalSec 130 matches retimed Kokoro clips
- [x] SuperGrok consumer / local Kokoro only — no xAI API credit spend

**GATE D install: PASS** — ready to registry bump, merge `main`, publish-pages.
