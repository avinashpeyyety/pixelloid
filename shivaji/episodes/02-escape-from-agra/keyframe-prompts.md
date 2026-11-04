# Ep 02 — Escape from Agra · SuperGrok keyframe prompts

**Generate ONLY in SuperGrok consumer Imagine on grok.com (browser, Avinash's subscription). Never the paid xAI API for images.**

Workflow: (1) generate the 4 new character sheets C-01..C-04 first and lock them; (2) for each shot, attach the listed reference images, paste the prompt, pick the best of the 4 variants, download, save as the exact target path; (3) build the contact sheet (`python3 shivaji/tools/contact_sheet.py <keyframe dir>`) and hand it to Avinash for review — **no animation until he approves**.

Reference locks from Ep01 (copied to the box): `/workspace/shivaji-refs/shivaji.png`, `/workspace/shivaji-refs/jijabai.png` (also `tanaji.png`, `suryaji.png`, `udaybhan.png` not needed this episode). New locks once generated are also copied to `/workspace/shivaji-refs/`.

Style line appended to every prompt: _Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold._

Common suffix appended to every prompt: _pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9_

Size: 16:9 (1920×1080 or SuperGrok's 16:9 output). Character sheets: three views on one 16:9 sheet, like Ep01 `chars/*.png`.

## A. New character sheets (generate first)

### 1. C-01 · `sambhaji`
- Attach: `/workspace/shivaji-refs/shivaji.png` (style/family match only)
- Save to: `/workspace/shivaji-ep02-keyframes/chars/sambhaji.png` → after lock, copy to `/workspace/shivaji-refs/sambhaji.png` and repo `shivaji/episodes/02-escape-from-agra/chars/sambhaji.png`
- Prompt:

```
Character sheet of young Sambhaji, son of Shivaji Maharaj, about nine years old (1666): bright curious eyes, round boyish face, no beard, small pagadi turban with a tiny plume echoing his father's, short angarkha with sash, pyjama trousers, juttis; three views side by side (front full body, three-quarter full body, close-up face), plain background, gentle smile. Family resemblance to the attached Shivaji sheet. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 2. C-02 · `aurangzeb`
- Attach: `/workspace/shivaji-refs/shivaji.png` (style/family match only)
- Save to: `/workspace/shivaji-ep02-keyframes/chars/aurangzeb.png` → after lock, copy to `/workspace/shivaji-refs/aurangzeb.png` and repo `shivaji/episodes/02-escape-from-agra/chars/aurangzeb.png`
- Prompt:

```
Character sheet of the Mughal emperor Aurangzeb in his late forties (1666): dignified, slim, upright, calm unsmiling face, long neat white-grey beard, simple white jama and plain turban with a single jewel, prayer beads in one hand; shown with quiet dignity, NOT a villain, NOT a caricature; three views (front full body, three-quarter, close-up face), plain background. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 3. C-03 · `hiroji`
- Attach: `/workspace/shivaji-refs/shivaji.png` (style/family match only)
- Save to: `/workspace/shivaji-ep02-keyframes/chars/hiroji.png` → after lock, copy to `/workspace/shivaji-refs/hiroji.png` and repo `shivaji/episodes/02-escape-from-agra/chars/hiroji.png`
- Prompt:

```
Character sheet of Hiroji Farzand, Shivaji's loyal companion: similar height and build to the attached Shivaji sheet (he could pass for him under a blanket), short beard, simple pheta turban, plain kurta with sash, a ring on his right hand, warm steady eyes and a small brave smile; three views (front full body, three-quarter, close-up face), plain background. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 4. C-04 · `madari`
- Attach: `/workspace/shivaji-refs/shivaji.png` (style/family match only)
- Save to: `/workspace/shivaji-ep02-keyframes/chars/madari.png` → after lock, copy to `/workspace/shivaji-refs/madari.png` and repo `shivaji/episodes/02-escape-from-agra/chars/madari.png`
- Prompt:

```
Character sheet of Madari Mehtar, a young servant/helper of Shivaji, about 14-16: slim, quick, cheerful face, no beard, small cloth cap or simple head-wrap, plain kurta and dhoti, barefoot; finger-to-lips 'shh' pose in one view; three views (front full body, three-quarter, close-up face), plain background. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

## B. Keyframes (one per narration line)

### 5. Sh-01 (line 1)
- Attach: (none — style only; optionally attach `/workspace/shivaji-refs/shivaji.png` for line style)
- Selective color: muted earth tones on the road only
- Save to: `/workspace/shivaji-ep02-keyframes/shot01.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot01.png`
- Prompt:

```
Wide landscape: a small caravan of riders, a covered palanquin and one elephant travelling a long dusty road north across plains toward a distant walled city with domes and minarets on a river (Agra, 1666); a few trees; big sky. Selective color: muted earth tones on the road only; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 6. Sh-02 (line 2)
- Attach: `/workspace/shivaji-refs/shivaji.png`, `/workspace/shivaji-refs/sambhaji.png`
- Selective color: none (pure line art)
- Save to: `/workspace/shivaji-ep02-keyframes/shot02.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot02.png`
- Prompt:

```
Shivaji Maharaj (attached sheet) and his nine-year-old son Sambhaji (attached sheet) riding horses side by side on the road, Sambhaji looking up at his father, Shivaji calm and protective. Selective color: none (pure line art); everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 7. Sh-03 (line 3)
- Attach: `/workspace/shivaji-refs/jijabai.png`, `/workspace/shivaji-refs/shivaji.png`, `/workspace/shivaji-refs/sambhaji.png`
- Selective color: soft saffron at the sky edge only
- Save to: `/workspace/shivaji-ep02-keyframes/shot03.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot03.png`
- Prompt:

```
At a stone fort gate at dawn, Jijabai (attached sheet, nauvari saree over head) holds Shivaji's hands in farewell, young Sambhaji beside them; tender, serious mood. Selective color: soft saffron at the sky edge only; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 8. Sh-04 (line 4)
- Attach: `/workspace/shivaji-refs/aurangzeb.png`
- Selective color: none
- Save to: `/workspace/shivaji-ep02-keyframes/shot04.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot04.png`
- Prompt:

```
Grand Mughal durbar hall in Agra: carved sandstone pillars and arches, patterned carpets, rows of nobles standing; the emperor Aurangzeb (attached sheet) small and distant on a raised throne platform; wide view, orderly and impressive. Selective color: none; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 9. Sh-05 (line 5)
- Attach: `/workspace/shivaji-refs/shivaji.png`, `/workspace/shivaji-refs/sambhaji.png`
- Selective color: none
- Save to: `/workspace/shivaji-ep02-keyframes/shot05.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot05.png`
- Prompt:

```
Inside the durbar, Shivaji Maharaj (attached sheet) stands in a back row of nobles, upright and firm, turning away with dignity; Sambhaji at his side looking up; nobles in front glance back. Selective color: none; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 10. Sh-06 (line 6)
- Attach: `/workspace/shivaji-refs/shivaji.png`, `/workspace/shivaji-refs/sambhaji.png`
- Selective color: torch orange on two gate torches
- Save to: `/workspace/shivaji-ep02-keyframes/shot06.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot06.png`
- Prompt:

```
A walled Agra mansion at dusk: guards (simple silhouettes with spears held upright) at the gate and along the wall; at an upper jharokha window, Shivaji and Sambhaji (attached sheets) look out toward the south. Selective color: torch orange on two gate torches; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 11. Sh-07 (line 7)
- Attach: `/workspace/shivaji-refs/shivaji.png`, `/workspace/shivaji-refs/sambhaji.png`
- Selective color: none
- Save to: `/workspace/shivaji-ep02-keyframes/shot07.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot07.png`
- Prompt:

```
Indoors: Shivaji Maharaj (attached sheet) lying in bed on cushions pretending to be ill, a playful twinkle in his eye, young Sambhaji sitting close trying not to smile, a physician's bowl on a low table. Selective color: none; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 12. Sh-08 (line 8)
- Attach: (none — style only; optionally attach `/workspace/shivaji-refs/shivaji.png` for line style)
- Selective color: saffron and torch orange on the sweets and fruit only
- Save to: `/workspace/shivaji-ep02-keyframes/shot08.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot08.png`
- Prompt:

```
At the mansion gate in the evening, porters carry big round covered wicker baskets on bamboo poles, overflowing with sweets (laddoos) and fruit (mangoes, bananas); one guard lifts a lid to peek, another yawns. Selective color: saffron and torch orange on the sweets and fruit only; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 13. Sh-09 (line 9)
- Attach: `/workspace/shivaji-refs/shivaji.png`
- Selective color: moonlit blue wash
- Save to: `/workspace/shivaji-ep02-keyframes/shot09.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot09.png`
- Prompt:

```
Storybook legend panel with a hand-drawn decorative border: at twilight, two big covered baskets on poles carried by porters past bored, chatting guards; the tip of a small turban plume peeks from under one lid; playful, secretive, funny. Selective color: moonlit blue wash; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 14. Sh-10 (line 10)
- Attach: `/workspace/shivaji-refs/hiroji.png`, `/workspace/shivaji-refs/shivaji.png`
- Selective color: a small torch-orange glint on the ring only
- Save to: `/workspace/shivaji-ep02-keyframes/shot10.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot10.png`
- Prompt:

```
Inside a dim bedroom: Hiroji Farzand (attached sheet) lies in the bed under a blanket pulled up over his head, only one hand showing outside the blanket, wearing a ring (the ring from Shivaji, attached sheet). Selective color: a small torch-orange glint on the ring only; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 15. Sh-11 (line 11)
- Attach: `/workspace/shivaji-refs/madari.png`, `/workspace/shivaji-refs/hiroji.png`
- Selective color: none
- Save to: `/workspace/shivaji-ep02-keyframes/shot11.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot11.png`
- Prompt:

```
Madari Mehtar (attached sheet) sits at the foot of the bed gently pressing the sleeper's feet; in the doorway, Madari and Hiroji (attached sheets) tiptoe out past a sleepy guard, finger to lips 'shh'. Selective color: none; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 16. Sh-12 (line 12)
- Attach: (none — style only; optionally attach `/workspace/shivaji-refs/shivaji.png` for line style)
- Selective color: none
- Save to: `/workspace/shivaji-ep02-keyframes/shot12.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot12.png`
- Prompt:

```
Two Mughal guards (simple, friendly cartoon faces) pull back the blanket and find an empty bed with only pillows; wide surprised eyes, open mouths; comic, not scary. Selective color: none; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 17. Sh-13 (line 13)
- Attach: `/workspace/shivaji-refs/shivaji.png`
- Selective color: saffron on the robe only
- Save to: `/workspace/shivaji-ep02-keyframes/shot13.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot13.png`
- Prompt:

```
Shivaji Maharaj (attached sheet face) disguised as a wandering ascetic: simple saffron cloth, ash on forehead, wooden staff and water pot, hair under a cloth; walking a dusty road beside a quiet river; a small temple town (Mathura) in the distance. Selective color: saffron on the robe only; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 18. Sh-14 (line 14)
- Attach: `/workspace/shivaji-refs/shivaji.png`
- Selective color: muted leaf green on the hills only
- Save to: `/workspace/shivaji-ep02-keyframes/shot14.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot14.png`
- Prompt:

```
The disguised Shivaji (as in shot 13) standing on a ridge at morning, looking at rolling green Sahyadri hills with a hill fort far away; relief and hope. Selective color: muted leaf green on the hills only; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 19. Sh-15 (line 15)
- Attach: `/workspace/shivaji-refs/shivaji.png`, `/workspace/shivaji-refs/jijabai.png`
- Selective color: saffron on the robe only
- Save to: `/workspace/shivaji-ep02-keyframes/shot15.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot15.png`
- Prompt:

```
At a fort doorway, the disguised Shivaji (ascetic robe) bows to touch the feet of Jijabai (attached sheet); Jijabai, hand on her heart, recognising her son with happy tears; warm emotional moment. Selective color: saffron on the robe only; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 20. Sh-16 (line 16)
- Attach: `/workspace/shivaji-refs/sambhaji.png`, `/workspace/shivaji-refs/jijabai.png`
- Selective color: saffron flag only
- Save to: `/workspace/shivaji-ep02-keyframes/shot16.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot16.png`
- Prompt:

```
Rajgad fort on its hilltop with a saffron Bhagwa flag on the highest bastion; on the stone steps, young Sambhaji (attached sheet) runs up into the arms of Jijabai (attached sheet). Selective color: saffron flag only; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

### 21. Sh-17 (line 17)
- Attach: `/workspace/shivaji-refs/shivaji.png`, `/workspace/shivaji-refs/sambhaji.png`, `/workspace/shivaji-refs/jijabai.png`
- Selective color: saffron flag and soft green hills
- Save to: `/workspace/shivaji-ep02-keyframes/shot17.png` → repo `shivaji/episodes/02-escape-from-agra/stills/shot17.png`
- Prompt:

```
On a fort terrace in soft daylight: Shivaji, Sambhaji and Jijabai (attached sheets) smiling together, with Hiroji and Madari (small, behind them); an empty wicker basket at their feet; Bhagwa flag above. Selective color: saffron flag and soft green hills; everything else uncoloured graphite and sepia. Same hand-drawn graphite and sepia-ink style as the attached reference sheet(s); warm off-white sketchbook paper (#F4EEDF) with faint grain; confident single strokes; max 3 main characters; no blood, no weapons drawn; no teal, no gold. pencil and ink line art, children's book sketch, warm off-white paper, light cross-hatching, mostly monochrome, no text, kind expressions, 16:9
```

## Target filenames (checklist)

- [ ] `/workspace/shivaji-ep02-keyframes/chars/sambhaji.png`
- [ ] `/workspace/shivaji-ep02-keyframes/chars/aurangzeb.png`
- [ ] `/workspace/shivaji-ep02-keyframes/chars/hiroji.png`
- [ ] `/workspace/shivaji-ep02-keyframes/chars/madari.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot01.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot02.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot03.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot04.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot05.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot06.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot07.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot08.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot09.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot10.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot11.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot12.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot13.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot14.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot15.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot16.png`
- [ ] `/workspace/shivaji-ep02-keyframes/shot17.png`
- [ ] `/workspace/shivaji-ep02-keyframes/contact_sheet.jpg` (built locally, not generated)

