# Operator card — SuperGrok consumer Imagine → import

**When:** `XAI_API_KEY` team credits are blocked (`team_blocked`) or you prefer a browser beauty pass for beat plates.  
**Bar unchanged:** ≥1536×1024 · ~3:2 · carved cartouche · character locks · **never** Ep01 `plate-wide-gold` as ref · **no** 720p.  
**GATE C still required** (`stills_review.py` + visual report).

## Inbox convention

```
episodes/<id>/stills/_inbox/consumer-imagine/
```

Drop downloaded Imagine files **here** (per episode). Do not scatter into `stills/` by hand — the import script renames/copies into the GATE C layout.

## Steps

1. **Open** [grok.com](https://grok.com) Imagine (SuperGrok consumer).
2. **Attach lock refs** (first image = 3:2 ≥1536×1024 scene master or Ep10 `field-master.jpg`):
   - This episode `stills/_locks/<scene>-master.jpg`
   - Only the cast locks in `cast_present` for that beat
   - Ep10 `episodes/10-bhishma-fall/stills/_locks/field-master.jpg` for style spine
   - **Never** attach Ep01 `plate-wide-gold.jpg`
3. **Prompt** with bible `prompt_prefix` + beat plate prompt. Prefer heroic medium; keep cartouche; match costume locks (no armor drift, no gore).
4. **Download** the result (PNG or JPEG). Prefer export **without** Grok watermark when the UI offers it.
5. **Drop** into `episodes/<id>/stills/_inbox/consumer-imagine/`:
   - Either name files `plate-wide.jpg`, `plate-terror.jpg`, … / `poster.jpg` / `lock-<id>.jpg`
   - Or keep download names and pass a JSON `--map`
6. **Import:**

```bash
cd mahabharata   # or pixelloid/mahabharata
python3 tools/import_consumer_stills.py <id>
# with map:
python3 tools/import_consumer_stills.py <id> --map /path/to/map.json
# overwrite existing plates:
python3 tools/import_consumer_stills.py <id> --force
```

Example map:

```json
{
  "wide": "grok-download-1.png",
  "terror": "grok-download-2.png",
  "kunti": "kunti-regen.jpg",
  "cart": "cart.png",
  "feast": "feast.png",
  "victory": "victory.png",
  "wide-gold": "wide-gold.png",
  "poster": "clash-or-victory.png"
}
```

7. **Eye-check watermark** on every imported plate (corners). The script’s byte heuristic can miss UI overlays — GATE C template has a manual checkbox.
8. **GATE C:**

```bash
python3 tools/stills_review.py episodes/<id> --require
# then fill episodes/<id>/logic-reviews/RR-gateC-visual.md from docs/GATE_C_TEMPLATE.md
```

9. On visual **PASS** → publish path (registry / commit / publish-pages).

## What still prefers API / beauty pass

| Asset | Preferred path |
|-------|----------------|
| **Scene master** + first **cast locks** | grok.com beauty pass *or* Imagine API `image_gen` / `image_edit` |
| **Beat key panels** | Imagine API `image_edit` **or** this consumer import path |
| Dimension / visual gate | Always `stills_review` + `RR-gateC-visual.md` |

## Ep 03 failing plates (regen list)

When credits are blocked, use this card for: **wide, terror, kunti, cart, feast, victory, wide-gold** (+ poster after a PASS clash/victory). Clash already PASS — leave unless regenerating intentionally.

## Do not

- Ship 720p / 16:9
- Use Ep01 gold as Imagine ref
- Mark GATE C PASS with a visible Grok watermark
- Invent plates or skip the drop folder — if inbox is empty, stop and wait for downloads
