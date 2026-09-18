# Ep 08 rewrite status — 2026-09-17 (evening CT)

**Episode:** `08-peace-embassy` — *The Peace Embassy* (Udyoga · Krishna embassy · five villages · refusal · form)  
**Disk:** lab-mirror pixelloid (box)  
**Bar:** Ep 09/10 (canvas 1536×1024 3:2, carved cartouche, heroic medium)  
**Time:** 2026-09-17 ~19:35 CT  
**Pattern:** Ep 07 scaffold / SuperGrok consumer path. No Imagine API this pass.

## What landed this pass

| Artifact | Status |
|----------|--------|
| `plate-bible.json` | Upgraded to full 09/10 schema: `canvas`, `camera`, carved cartouche `frame`, `prompt_prefix`, `quality_bar_ref` → Ep10 `field-master`, `scene_lock_ref` → `sabha-master` (path reserved), `imagine_refs` (Ep09 Krishna + local locks; **no** wide-gold / finished plates), `source_block` + per-plate sources (≥2 of BORI/Debroy, Gita Press, Ganguli), cast tokens, per-plate prompts for all 9 plates |
| `cast-sheet.json` | Clear tokens for `krishna`, `duryodhana`, `dhritarashtra`, `yudhishthira` — comic mythology; Krishna Ep 09 lock (pitambar, peacock, garland); cosmic form tasteful not horror |
| `script.js` | Named Hindustani **raga `yaman`**; `voice.cache` plan → `ep08-09-10-bar` (**audio not re-rendered**); end → Ep 09 |
| `stills/_inbox/consumer-imagine/.gitkeep` | Created for SuperGrok consumer drop |
| Stills / locks binaries | **Untouched** (still 1280×720 archive; existing `_locks/krishna.jpg` wrong aspect) |

## Gate results

| Gate | Command | Result |
|------|---------|--------|
| **D (dialogue)** | `python3 tools/dialogue_review.py episodes/08-peace-embassy --report` | **PASS** |
| **A/B (bible)** | `python3 tools/logic_review.py episodes/08-peace-embassy/plate-bible.json --report` | **PASS** (expected after scaffold) |
| **C (stills)** | `python3 tools/stills_review.py episodes/08-peace-embassy --require` | **FAIL (expected)** — 1280×720 archive; missing `sabha-master.jpg` / `duryodhana.jpg` / `dhritarashtra.jpg` / `yudhishthira.jpg` |

GATE C was **not** rewritten to PASS. 720p stills remain archive until SuperGrok / Imagine.

## SuperGrok drop list (all stills currently 720p)

Drop downloads into `stills/_inbox/consumer-imagine/` then:
`python3 tools/import_consumer_stills.py 08-peace-embassy --force` (or with `--map`).  
Bar: **≥1536×1024 · ~3:2 · carved cartouche**. Attach Ep10 `field-master` + Ep09 `krishna` + locks below. **Never** Ep01 `plate-wide-gold`.

### Locks (regen first — scene master + solos)

| File | Note |
|------|------|
| `_locks/sabha-master.jpg` | **NEW** scene master — Hastinapura sabha empty of finished beat staging; cream-saffron-gold hour; carved cartouche |
| `_locks/krishna.jpg` | Replace wrong-aspect archive — Ep 09 face family: yellow pitambar, peacock, flower garland |
| `_locks/duryodhana.jpg` | **NEW** — proud Kuru prince, fierce mustache, jewel-tone silks, crown |
| `_locks/dhritarashtra.jpg` | **NEW** — elderly blind king, white beard, royal white-gold, throne |
| `_locks/yudhishthira.jpg` | **NEW** — cream dress, light mustache, simple topknot, composed eldest |

### Plates + poster

| File | Beat |
|------|------|
| `plate-wide.jpg` | Exile ends; camps gather — last chance for peace |
| `plate-mission.jpg` | Yudhishthira asks Krishna to go as peace envoy |
| `plate-journey.jpg` | Krishna rides toward Hastinapura |
| `plate-court.jpg` | Blind Dhritarashtra; Duryodhana’s pride fills the sabha |
| `plate-offer.jpg` | Five villages for the sons of Pandu |
| `plate-refuse.jpg` | Duryodhana refuses — not land for a needle’s point |
| `plate-form.jpg` | Tasteful cosmic form — hall trembles (not horror) |
| `plate-war.jpg` | Krishna returns; road to Kurukshetra open |
| `plate-wide-gold.jpg` | Closing resolve — **no plaque text** |
| `poster.jpg` | Hub poster — prefer offer or form hero frame |

## Blockers

- **No Imagine API** this pass (box-first scaffold only).
- Do **not** single-image-edit existing 720p files.
- Do **not** attach Ep01 `plate-wide-gold.jpg` or this episode’s `plate-wide-gold.jpg` as Imagine refs.
- Krishna must eye-match Ep 09 `_locks/krishna.jpg`.

## Next

1. SuperGrok: regen `sabha-master` + solo locks at native 3:2 ≥1536×1024.  
2. Regen all 9 beat plates + poster; drop in `_inbox/consumer-imagine/`; import.  
3. Re-run `stills_review.py --require` + write `RR-gateC-visual.md`.  
4. Later: Orion re-render under cache `ep08-09-10-bar` + wire Yaman bed.


## GATE C (2026-09-18)

**PASS** — SuperGrok consumer import + stills_review --require. Poster = plate-offer (3:2). Ship Pages.
