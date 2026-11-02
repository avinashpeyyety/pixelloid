# Logic review — Ep 24 — GATE C (visual)

Status: **PASS**
Reviewer: Chief (box) — generated on grok.com Imagine (SuperGrok consumer, standing rule Ep 17 onward) and eye-checked image by image (Avinash's review notes 2026-11-02, re-checked on the box with full-frame views of all 11 images plus four-corner watermark crops)
Time: 2026-11-02 ~12:50 CT

Source: SuperGrok consumer Imagine on grok.com (consumer subscription, no paid API) → `stills/_inbox/consumer-imagine/`
(1 group lock + 9 plates + poster, all **1728×1152** JPEG, 3:2) →

```bash
python3 tools/import_consumer_stills.py 24-rajadharma --allow-watermark
```

- **New lock approved:** `_locks/pandavas24.jpg` (the five Pandava brothers in a row: Nakula, Bhima, Yudhishthira, Arjuna, Sahadeva; exactly five men, ten hands) — approved by Avinash 2026-11-02 and installed as a lock, the way Ep 22 (gandhari, kunti) and Ep 23 (palace23, kuru23) installed theirs. Used as ref 3 on `arrive` and `listen`.
- **Regenerations (rejects kept off the repo):**
  - #5 `bless` — regenerated once (v1 had Bhishma with 3 hands); same prompt; v2 clean.
  - #8 `fish` — two attempts with the original prompt failed (one twin missing, only three men). The prompt was tweaked to **v2** (explicit "FOUR men; the twins are TWO separate young men… never merged into one" and "many (at least eight) small silver fish swimming away together"); v2 attempt 1 kept. v2 text recorded in `PROMPTS.md`.
  - #9 `bee` — regenerated once (v1 Yudhishthira had 3 hands); same prompt; v2 pass.
  - #10 `listen` — v1 drew Bhishma sitting cross-legged; regenerated with the **v2** prompt ("stretched out horizontally, reclining on his back (NOT sitting up, NOT cross-legged)"); v2 kept. v2 text recorded in `PROMPTS.md`.
  - No other image was regenerated. Rejected tries were not committed.
- `--allow-watermark`: the byte heuristic flagged `grok`/`Grok`/`GROK` in all 11 files. A JPEG segment parse puts every hit (4 per file) in the APP11 segment **before the JPEG scan data (SOS, offset ~16.2 KB)**, i.e. the **C2PA content-credentials manifest** (Grok Imagine provenance; `c2pa` label present). After SOS: **0 `grok` and 0 `xAI` hits in all 11 files.** No visible Grok/xAI mark: 300 px crops of all four corners of all 11 files show only the carved cartouche (Ep 08 / 14–23 precedent). The override is justified by the APP11 content credentials only.
- Inbox duplicates deleted after a byte-identical `cmp` against the imported copies (git tracks only `PROMPTS.md` in `_inbox`).
- Copy-forward locks cmp-verified: `_locks/krishna.jpg` = Ep 04 (official Krishna reference), `yudhishthira.jpg` + `arjuna.jpg` + `bhima.jpg` = Ep 15, `nakula_sahadeva.jpg` = Ep 05, `bhishma.jpg` = Ep 10, `kuru24-master.jpg` = Ep 23 `kuru23-master.jpg`. New: `_locks/pandavas24.jpg` (group lock). No new scene master, no new single-face locks.

Run:

```bash
python3 tools/logic_review.py episodes/24-rajadharma/plate-bible.json   # PASS (re-run after import)
python3 tools/dialogue_review.py episodes/24-rajadharma                  # PASS (re-run after import)
python3 tools/stills_review.py episodes/24-rajadharma --require
```

Result: **PASS** (18 JPEGs · bar ≥1536×1024 · ~3:2).

## Canvas / factory

| Check | Result |
|-------|--------|
| Every still + lock ≥ 1536×1024, aspect ~3:2 | **PASS** (plates/poster/pandavas24 lock 1728×1152) |
| No 1280×720 file used as first `image_edit` input | **PASS** (consumer path; first ref = Ep 04 Krishna lock, kuru24 master or Yudhishthira lock per manifest) |
| Imagine refs = scene master + solo/group locks + Ep 10 field-master | **PASS** (per `PROMPTS.md` / `manifest.tsv`; Ep 04 Krishna lock FIRST on arrive, why, fear, listen, poster; pandavas24 = ref 3 on arrive and listen) |
| Every named face has `stills/_locks/<id>.jpg` | **PASS** (krishna, yudhishthira, arjuna, bhima, nakula_sahadeva, bhishma, pandavas24 + kuru24 master) |
| Ep01 `plate-wide-gold.jpg` **not** attached | **PASS** |
| Source path noted | **PASS** — SuperGrok consumer import |
| No visible Grok / xAI watermark | **PASS**: C2PA byte WARN only, corners clean |

## Quality vs Ep 10 bar (eye-check)

| Check | Result | Notes |
|-------|--------|-------|
| Frame | **PASS** | Integrated carved-wood cartouche with gold lotuses on all 11 |
| Camera | **PASS** | Heroic medium / medium-wide; named cast fills the frame |
| Line | **PASS** | Painted-comic (Amar Chitra) density consistent with Ep 16–23 |
| Cast | **PASS** | Every plate shows exactly its bible `cast_present`; no Satyaki, Kripa, rishis, Draupadi, Vyasa, Duryodhana, Karna or soldiers; the mother on `mother` is a golden cloud vision only |
| Krishna | **PASS** | Only on arrive, why, fear, listen and the poster: pale silvery dusty-blue skin, long loose curls, slim gold band + one peacock feather, white U-tilak, jasmine-rose garland, saffron-yellow pitambar, crimson sash; on foot, no reins, no flute, no bow; exactly two hands everywhere — matches the Ep 04 lock |
| Yudhishthira | **PASS** | Ep 15 lock on all 10 images he is in: modest mustache, simple gold diadem, cream-white dhoti/angavastram, gold sash and armlets; no chest armor, no bow |
| Arjuna / Bhima | **PASS** | Arjuna (lock, arrive, effort, bee, listen) tall gold crown, mustache, quiver, Gandiva — Ep 15 lock (Gandiva reads strung; deviations 1, 6, 9); Bhima (lock, arrive, effort, listen) topknot + gold circlet, gold-green armor, red sash, gold mace — Ep 15 lock |
| Nakula / Sahadeva | **PASS** | Ep 05 twins lock on lock, arrive, fish, listen: clean-shaven, long curls, cream + saffron, no crowns, no armor; both twins present on fish (v2) |
| Bhishma | **PASS** | Ep 10 lock: white beard and hair, silver armor and diadem; serene on the golden arrow bed on every plate he is in — no arrow through him, no blood, never standing |
| Text / watermark | **PASS** | None |
| Anatomy | **PASS** | Hands counted on every plate; every person has exactly two arms and two hands (bless, bee re-checked after their regenerates; listen 14 hands, fish 8 hands, poster 6 hands) |
| Gore / family-friendly | **PASS** | No body, corpse, blood, wound, skull, bones, carrion bird or pyre on any image; the war only by implication (distant tents and banners) |
| Time of day | **PASS** | Daylight on all 11; no moon, stars or night sky. arrive/why/fear/bless early morning, effort/mother/fish day, bee late afternoon, listen golden sunset, poster golden late afternoon |

## Per plate

| Plate | Cast | Canvas | Frame | Camera | Notes |
|-------|------|--------|-------|--------|-------|
| _locks/pandavas24 | yudhishthira+arjuna+bhima+nakula_sahadeva (group lock) | PASS | PASS | PASS | Five brothers in a row (Nakula, Bhima, Yudhishthira, Arjuna, Sahadeva), ten hands, plain cream-gold backdrop. Approved lock. Deviation 1 |
| arrive | krishna+5 pandavas+bhishma | PASS | PASS | PASS | Krishna leads on foot, hand open toward the canopy; the five brothers behind him; Bhishma on the arrow bed, hand raised in greeting. Deviation 2 |
| why | krishna+bhishma | PASS | PASS | PASS | Bhishma's hand lifted in question; Krishna smiles down, hand raised in blessing, left hand on heart. Deviation 3 |
| fear | krishna+yudhishthira+bhishma | PASS | PASS | PASS | Yudhishthira stands back at the canopy's edge with palms joined; Krishna's hand open toward him, speaking for him. Deviation 4 |
| bless | yudhishthira+bhishma | PASS | PASS | PASS | Regenerated once (v1 Bhishma 3 hands). Yudhishthira kneels and touches the grandsire's feet; Bhishma's hand raised in blessing. Clean |
| effort | yudhishthira+arjuna+bhima+bhishma | PASS | PASS | PASS | Bhishma teaches, one finger lifted; Yudhishthira palms joined, Arjuna with the Gandiva across his knees, Bhima with the mace. Deviation 5 |
| mother | yudhishthira+bhishma | PASS | PASS | PASS | Golden cloud vision of a village mother holding her baby; Yudhishthira looks up, palms joined; Bhishma's hand on his heart. No notable flaws |
| fish | yudhishthira+nakula_sahadeva+bhishma | PASS | PASS | PASS | v2 prompt, attempt 1: four men, eight hands, daylight; Yudhishthira and both twins kneel at the water where Bhishma points. Deviation 6 |
| bee | yudhishthira+arjuna+bhishma | PASS | PASS | PASS | Regenerated once (v1 Yudhishthira 3 hands). Bhishma points at a golden honeybee on pink flowers; Yudhishthira palms joined, Arjuna kneeling. Deviation 7 |
| listen | krishna+5 pandavas+bhishma | PASS | PASS | PASS | Regenerated with v2 prompt (v1 Bhishma sat cross-legged). Bhishma reclines on the arrow bed at the centre; Krishna (Ep 04 look) seated at his head; the five brothers in a half-circle; 14 hands; golden sunset. Deviation 8 |
| poster | krishna+yudhishthira+bhishma | PASS | PASS | PASS | Bhishma teaches, finger lifted; Yudhishthira cross-legged, palms joined; Krishna stands at the bedside, hand raised in blessing; 6 hands. No notable flaws |

## Known deviations (minor, non-blocking, accepted)

1. **_locks/pandavas24:** Arjuna's Gandiva looks strung (prompt asked for unstrung).
2. **arrive:** Bhishma's bow on the grass is drawn as a silvery coil.
3. **why:** Bhishma half-reclines on a cushion in front of the arrow cage, so the arrow bed is less obvious.
4. **fear:** Yudhishthira's head is only slightly bowed.
5. **effort:** the Gandiva looks strung; Bhishma's lifted pointing finger is stylized.
6. **fish:** two original-prompt attempts failed (one twin missing); v2 attempt 1 kept. About ten similar-size silver fish and no big fish chasing them — the big-fish/little-fish lesson relies on the narration.
7. **bee:** the Gandiva lies on the grass rather than under Arjuna's hand.
8. **listen:** Bhishma's teaching hand is not raised (both hands rest on his chest); the Gandiva is not visible.

## Strict checks

- [x] `stills_review.py` PASS
- [x] No Drona / saffron sage; no rishis, Satyaki or Kripa drawn
- [x] No graphic gore; family-friendly rule held (no bodies, blood, wounds, pyres; Bhishma serene, unpierced)
- [x] No 16:9 / 720p plates
- [x] **Watermark eye-check (consumer import):** corners clean on all 9 plates, the poster and the group lock
- [x] Eye-match to Ep 10 density, not Ep 01 gold
- [x] Krishna eye-matches the **Ep 04** lock (arrive, why, fear, listen, poster) — only on those five, always two hands
- [x] Yudhishthira, Arjuna, Bhima match the Ep 15 locks; the twins the Ep 05 lock; Bhishma the Ep 10 lock; arrive/listen brothers match the new pandavas24 group lock
- [x] No invented face; no missing lock; no jewelry/skin/crown/body-type drift beyond the deviations above
- [x] Spoken line's speaker and action are on the still (GATE D)
- [x] **Character lock:** Yudhishthira, Bhishma and Krishna stable across plates; all 11 carry the integrated gold-lotus cartouche

## Verdict

**GATE C PASS.**
