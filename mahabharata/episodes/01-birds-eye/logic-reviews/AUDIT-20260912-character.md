# Mahābhārata Episode 01 — Character consistency audit

**Episode:** `01-birds-eye` — *The Bird's Eye* (Drona's bhāsa-lakṣya test)  
**Audit date:** 2026-09-12 (America/Chicago)  
**Disk:** MacBook Air `527ae34b-0262-4036-b3f7-857ee85d2009`  
`…/pixelloid/mahabharata/episodes/01-birds-eye/`  
**Trigger:** Dmitri voice — tighten logic and republish Ep 1  
**Live player:** https://avinashpeyyety.github.io/pixelloid/mahabharata/ · `play.html?ep=01`  
**Verdict:** **Do not republish yet.** GATE C **FAIL** (character wardrobe / presence). Script + Orion audio left intact (live player safe). Scoped bible/cast/gate fixes landed on Air.

---

## Scope reviewed

| Artifact | Path | Notes |
|----------|------|-------|
| Script / beat map | `episodes/01-birds-eye/script.js` | 10 beats, Orion `orion-00…08`, plates wired |
| Cast sheet | `cast-sheet.json` | gurukul_youth; **tightened** 2026-09-12 |
| Plate bible | `plate-bible.json` | 9 plates; **cast_present + prompts tightened** |
| Stills | `stills/plate-*.jpg` + `_locks/` | 1536×1024, 3:2 |
| Player | `js/episodes.js`, `play.html`, `js/main.js` | `?ep=01` → birds-eye; cache `?v=ep02-orion` |
| Prior gates | `logic-reviews/RR-gate{B,C,D}-*.md` | Sep 2 all PASS → C reopened FAIL |

---

## Issues list (concrete)

### C1 — Drona / Bhishma bleed (gold kavacha) — **CRITICAL**
- **Cast / factory:** saffron angavastram over cream dhoti; **no** gold breastplate; white hair in saffron topknot; not Bhishma.
- **Plates with gold kavacha / Bhishma-adjacent armor:** `plate-wide.jpg`, `plate-aside.jpg`, `plate-loose.jpg`, `plate-wide-gold.jpg`, and lock `_locks/drona.jpg`.
- **Wardrobe target (soft PASS):** `plate-drona.jpg` — saffron/cream, no kavacha (use as regen target).
- **Also:** AGENTS.md already forbids attaching `plate-wide-gold.jpg` as Imagine style ref (Drona bleed).

### C2 — Drona hair color drift
- `plate-drona.jpg`: hair under topknot reads **dark**; cast requires **white** hair.

### C3 — Aside youth ≠ Yudhishthira wardrobe — **CRITICAL**
- Beat: Drona dismisses Yudhishthira (“This is not for you. Stand apart.”).
- `plate-aside.jpg`: youth in **white long-sleeve tunic** + orange sash.
- `plate-yudhishthira.jpg` / `_locks/yudhishthira.jpg`: bare chest, cream-white dhoti, gold sash/diadem.
- Bible previously listed only `drona` on aside (under-listed the pupil). **Fixed:** `cast_present: [drona, yudhishthira]` + youth prompt language.

### C4 — Yudhishthira line vs plate (logic / GATE D watch)
- Spoken (source-faithful): “I see the tree. I see **you**. I see my brothers. I see the bird.”
- Plate shows Yudhishthira + brothers; **Drona (“you”) not painted**.
- **Do not** drop the source line without TTS regen + source-gate review (`orion-02.mp3`). Prefer Studio add Drona mid-ground.

### C5 — Arjuna strap / bow drift across plates
- `arjuna-bow` / `release`: leather (or simpler) chest straps, woodier bow — closer to lock.
- `eye` (also `poster.jpg`): **gold X pectoral bands** + ornate gold bow.
- Unify to `_locks/arjuna.jpg` + `plate-arjuna-bow.jpg`.

### C6 — wide-gold
- Known bad style ref; Drona scale armor. Keep out of Imagine refs; regen before final ship.

### Non-issues (keep)
- Canvas 1536×1024 / carved cartouche.
- No Krishna / peacock on Arjuna.
- Distant bird generally high/small.
- Princes read as youths vs adult Drona (scale mostly OK).
- No gore; gold-dust release beat OK.
- Dialogue speaker mapping machine-PASS after bible honesty; audio/script sync preserved.

---

## Recommended fixes

### Studio (art regen — required before republish)
1. Regen `_locks/drona.jpg` **without** gold kavacha (match cast-sheet + `plate-drona` wardrobe).
2. Regen Drona plates: `wide`, `aside`, `loose`, `wide-gold` from new lock + garden-master; no Bhishma armor.
3. Regen `aside` youth as **Yudhishthira** (cream dhoti / diadem), shorter than Drona.
4. Regen `yudhishthira` with adult Drona visible mid-ground so “I see you” holds (GATE D + source).
5. Regen `eye` (+ `poster` copy) to match Arjuna strap/bow language on `arjuna-bow`.
6. Re-run `stills_review.py --require`, rewrite GATE C to PASS, eye-check C1–C5.

### Already done on Air (script/captions/wiring-safe — live player untouched)
- Tightened `cast-sheet.json` + `plate-bible.json` costume language (no Drona kavacha; no Yudhishthira tunic; Arjuna strap note).
- Corrected `cast_present`: aside+=yudhishthira; wide/drona/yudhishthira note `armies` where princes appear.
- Aside `prompt` / `must_show` youth wording → GATE B machine PASS again.
- GATE C set to **FAIL** with issue table; GATE B/D annotated.
- Backups: `plate-bible.json.bak-20260912-audit`, `cast-sheet.json.bak-20260912-audit`.
- **Not changed:** `script.js`, Orion mp3s, `play.html`, `js/main.js`, stills binaries.

### Optional later (only with TTS)
- If art cannot show Drona on yudhishthira beat: revise line + re-render `orion-02.mp3` (source-gate required). Prefer art fix.

---

## Publish path (after GATE C PASS)

1. Commit on `pixelloid` repo (Air OneDrive tree): bible/cast/gates + **new stills** (not bible-only).
2. Push `main` → GitHub Pages (`avinashpeyyety/pixelloid`).
3. Or: `ai-lab-vault/scripts/publish-pages.sh pixelloid` (per hub README).
4. Live URLs:
   - Hub: https://avinashpeyyety.github.io/pixelloid/mahabharata/
   - Ep 1: https://avinashpeyyety.github.io/pixelloid/mahabharata/play.html?ep=01
5. After player/script touch: bump `play.html` script `?v=` (currently `ep02-orion`) so caches pick up Ep 01 changes.
6. **Do not** republish bible-only while GATE C FAIL — live plates would still show C1–C5.

---

## Next steps

1. **Studio:** clear C1–C5 art (priority: Drona lock → aside → yudhishthira+Drona → eye/poster → remaining Drona plates).
2. Re-run gates; set GATE C PASS.
3. Commit + `publish-pages.sh pixelloid` (or push `main`).
4. Smoke `play.html?ep=01` end-to-end (Orion + Bhupali + plate order).
5. Leave Ep 02–08 rewrite queue as in `NEXT.md` (01 first, then 02…).

**Executor note:** Studio was messaged in parallel by parent; this agent did not message the user. No live player files destroyed.
