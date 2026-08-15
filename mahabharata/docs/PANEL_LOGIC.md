# Panel Logic Review Agent

**Role:** Gate every plate decision for *lore truth*, *prop realism*, *character lock*, *court layout*, and *style lock* before Imagine and again after generation.

**When to run:** After script beats · after plate-bible draft · after each plate batch · before commit.

## Pass criteria (all must pass)

### 1. Lore / narrative

| Check | Rule |
|-------|------|
| Beat match | Panel depicts the beat’s text, not a different moment |
| Continuity | Same scene props persist (apparatus, pool, dais) unless beat changes locus |
| Reveal order | Secrets stay hidden until script reveals them |

### 2. Prop physics (no fantasy junk)

| Check | Rule |
|-------|------|
| Real-world read | Every prop must be a readable real object |
| No orphan props | No decorative junk bows, floating weapons |
| Human scale | All people **same natural size** — no giant women vs dwarf courtiers |
| Quality | Spec must demand **premium painted comic** quality (not crude/sketchy) |

### 2a. Court / balcony layout (durbar / wide plates) — **strict**

| Zone | Who may appear |
|------|----------------|
| **Hall floor** | King, princes, male courtiers, guards **only** |
| **Balconies** | **All women / princesses only** — behind curtains/jali, shyly peering |

| PASS | FAIL |
|------|------|
| Women **only** on upper balconies | Women **standing on the court floor** (giant princesses in the hall) |
| Behind curtains / jali, peering | Sitting on railing/terrace wall |
| Equal human scale | Giant balcony or floor women vs tiny men |

**Why:** A regal durbar does not put royal women as oversized figures in the aisle among princes.

### 3. Fish’s Eye apparatus (Ep 02+ lock) — **mirror + ground fish**

**Canonical setup (replaces glass aquarium):**

1. **Target:** Live fish swimming in a **circular pool set into the ground / floor**  
2. **Aiming aid:** A **large ornamental circular mirror** (gold frame) mounted **high under the palace ceiling**  
3. **Optics:** Archer looks **up into the ceiling mirror**, which shows the fish in the pool; he aims and shoots the **eye of the fish in the ground pool**  
4. **Size:** Mirror is a **large ceiling disc** (same scale continuity as challenge lock) — not a hand mirror  
5. **Forbidden:** Ceiling aquarium/tank of fish; fish only in a hanging vessel; shooting the mirror; standing in the pool  

### 3a. Aim geometry (aim beats)

| Half | Direction | Meaning |
|------|-----------|---------|
| **Eyes / head** | Look **UP** at the **ceiling mirror** | Reads the fish via the mirror |
| **Arms / arrow** | Aim **DOWN** into the **ground pool** | Hits the real fish’s eye in the water |
| **Stage** | Archer **left**, dry floor **beside** pool; mirror **top center**; pool **center bottom** | Clear layout |

**FAIL if:** eyes look only at pool without mirror · arrow aims at mirror · archer stands in pool · fish in ceiling tank · women on hall floor in durbar.

### 4. Character lock (strict)

| Check | Rule |
|-------|------|
| One face | Same face / hair / costume tokens on every plate that lists that id |
| Single-figure locks | `_locks/<id>.jpg` must show **only that character** — no extra people in the lock |
| No costume swap | Do not put another hero’s props on this one (e.g. Krishna’s flower garland on Arjuna) |
| Count | Number of named heroes in the frame = `cast_present` length (extras only as tiny distant ranks) |
| No duplicates | Never two Arjunas / two Krishnas unless the beat is cosmic form |

**Ep 09 Arjuna lock (canonical):** gold crown, dark mustache, cream-white dhoti, quiver on back, **no flower garland**, **no saffron sage robes**.

### 4a. Absent-cast / sage bleed — **strict**

| Check | Rule |
|-------|------|
| Drona / white-bearded saffron sage | **Only** if `drona` is in `cast_present` (Ep 01 teaching plates) |
| Style-ref bleed | Do **not** attach Ep01 `plate-wide-gold.jpg` as an image ref for plates where Drona is absent — it contains Drona and will leak |
| Scene lock | Use `_locks/<scene>-master.jpg` (e.g. chariot-master) or a **people-free** garden plate for style |
| Prompt | Every plate `must_not_show` must list every major hero **not** in `cast_present` |

**FAIL if:** Drona/sage appears on Gita, embassy, swayamvara, or any plate that does not list him.

### 5. Style lock

Charming painted comic, not photoreal. Premium linework. Palette may match Ep01 gold **mood** in words; **do not** composite Drona’s figure plate into later episodes.

## Review output

Write `episodes/<ep>/logic-reviews/RR-NN-<stage>.md` with PASS/FAIL per plate.

**Rule:** FAIL blocks Imagine commit and publish.
