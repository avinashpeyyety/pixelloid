# Mahābhārata episode workflow

```
1. Script (episodes/<id>/script.js beats)
2. Cast sheet + plate bible (JSON)
3. GATE A/B — panel-logic agent (docs/PANEL_LOGIC.md)
4. Character / apparatus lock plates (Imagine, style-ref plate-wide-gold)
5. Per-beat plates via image_edit (refs: locks + style master)
6. GATE C — visual logic review of stills
7. Grok TTS orion → audio/
8. GATE D — final install check
9. Registry live · commit · publish-pages
```

## Agents

| Agent | Responsibility |
|-------|----------------|
| **writer** | Beats, dialogue, timing |
| **panel-logic** | Lore, props, apparatus, cast, style gates — **blocks ship on FAIL** |
| **art** | Imagine plates only after PASS; always attach style + cast locks |
| **voice** | Orion TTS matching beat text |
| **ship** | Registry, NEXT, vault daily, Pages |

## Tools

- `tools/logic_review.py` — validates plate-bible JSON against PANEL_LOGIC rules  
- Human / model visual pass — open stills and fill `logic-reviews/` report  

## Style master

Always: `episodes/01-birds-eye/stills/plate-wide-gold.jpg`  
Never photoreal. See `STYLE.md`.
