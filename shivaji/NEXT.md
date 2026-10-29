# NEXT — shivaji

## Hard rules
- **Images only via SuperGrok consumer app** (Avinash's subscription). **Never** the paid xAI API, never paid tools.
- Ep01 script approved by Avinash (2026-10-28).
- Kid-friendly: no gore, no blood, no shown death. Legend (ghorpad/Yashwanti, Jijabai's wish) always labelled "legend says / the story goes".
- Palette per README; **no teal, no gold**. Monochrome line-art + selective color only.
- Grok Imagine motion only for climb (Sh-09) and duel (Sh-12), ≤6 s each.
- Draw-on reveal with local free tools (Python + ffmpeg). 3–4 min runtime.

## Now
- [x] Avinash approved `episodes/01-sinhagad/script.md`
- [x] Character sheets generated → `episodes/01-sinhagad/chars/` (shivaji, tanaji, suryaji, udaybhan, jijabai)
- [x] 17 keyframes generated → `episodes/01-sinhagad/stills/shot01–17.png` + `contact_sheet.jpg`
- [x] Narration → `episodes/01-sinhagad/audio/line01–17.mp3` (Kokoro-82M bm_george, local; `tts_ep01.py` with phonetic respellings)
- [x] **Ep01 v1 rendered** (2026-10-28) → `episodes/01-sinhagad/render/shivaji_ep01_sinhagad_v1.mp4` (3:34, 1280x720/24fps, H.264+AAC, 42.5 MB) via `build_ep01.py` (stroke-order draw-on reveal → shading → selective color → Ken Burns; local climb pan Sh-09, duel shake Sh-11/12; title/end cards; no music bed)
- [ ] **Avinash reviews v1** (also still pending: stills review, pronunciation check)
- [ ] Optional: swap local motion for Grok Imagine clips (≤6 s) on Sh-09 climb + Sh-11/12 duel

## Later
- [ ] Ep 02 candidates: Escape from Agra (1666), Pratapgad (1659), Coronation (1674)
