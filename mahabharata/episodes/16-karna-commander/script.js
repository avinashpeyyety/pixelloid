/**
 * Episode 16 — Karna Takes Command
 * Karna Parva · night of the fifteenth day → dawn of the seventeenth · Karna-senapatya-abhisheka + Shalya-sarathya
 * Logic pass 2026-10-05: Drona has fallen → at Ashwatthama's counsel Duryodhana consecrates Karna commander →
 * sixteenth day: Karna forms the makara array, the day ends without the victory → that night Karna names his one
 * lack (Arjuna has Krishna at the reins) and asks for Shalya → Shalya, king of Madra, is enraged at driving a
 * suta's son → Duryodhana tells of Tripura (Brahma drove Shiva's chariot; the driver is the greater) and offers the
 * reins → Shalya accepts on one condition — he may say what he likes to Karna — and takes the reins at dawn of the
 * seventeenth → Karna's boast (rewards for whoever shows him Arjuna) → Shalya's scorn and the crow-and-swan
 * parable → Karna rides on; he does not know Shalya once promised Yudhishthira to break his spirit.
 * Picks up Ep 15's closing line ("Soon Karna will lead the Kaurava host"). The Karna–Arjuna duel, the sunken wheel
 * and Karna's fall are left for Ep 17; Bhima/Dushasana is not in this episode.
 * Sources: BORI CE/Debroy (Karna Parva 8.6–8.29; Udyoga 5.8) + Gita Press Gorakhpur (Karna Parva, vulgate) +
 * K.M. Ganguli (Karna Parva §10–42; Udyoga §8). See plate-bible source_block.
 * Family-friendly: no gore, no bodies. Shiva, Brahma, Arjuna, Krishna and Yudhishthira are narrated only, never drawn.
 *
 * Audio: orion-00…08 rendered 2026-10-05 with free local Kokoro-82M bm_george (tools/render_local_voice.sh,
 * speed 0.9); PRONOUNCE adds Shalya/Madra/makara/Tripura/Brahma. Longest clip 10.58 s (orion-04) — all fit the
 * 12 s grid (≥1.4 s gap), no retime. Stills: SuperGrok consumer import 2026-10-06 (2 masters + Shalya lock + 9 plates + poster, 1728×1152), GATE C PASS.
 * Music: Raga Adana preset (js/main.js RAGA_PRESETS.adana) — never default flute+tabla.
 */
export const EPISODE = {
  id: "16",
  slug: "karna-commander",
  title: "Karna Takes Command",
  subtitle: "Sixteenth and seventeenth days of Kurukshetra",
  style: "cinematic-plates",
  stillsDir: "episodes/16-karna-commander/stills/",
  voice: {
    provider: "local-kokoro",
    voice_id: "bm_george",
    cache: "ep16-kokoro-20261005",
    note: "Kathavachak — Kokoro-82M bm_george (free local, Apache-2.0, speed 0.9) via tools/render_local_voice.sh; no paid xAI API (SuperGrok-only rule). Files keep orion-NN.mp3 names/fingerprint (24 kHz / 128 kbps / mono / -16 LUFS).",
    base: "episodes/16-karna-commander/audio/",
  },
  music: {
    raga: "adana",
    note: "Raga Adana (Asavari/Kafi family, Kanada anga) — the heroic, proud late-night cousin of Darbari: komal Ga, komal Dha, komal Ni, upper-tetrachord (uttaranga) heavy, sung brisk and bold with none of Darbari's slow andolan. Vira rasa for Karna's command and the quarrel of pride with Shalya. Tanpura + sparse bansuri, no tabla. Duck under narration. Not used by any earlier episode. Player preset: js/main.js RAGA_PRESETS.adana (C#3, no andolan, no tabla).",
  },
  totalSec: 112,
  stills: {
    poster: "episodes/16-karna-commander/stills/poster.jpg",
  },
  plates: {
    anoint: "plate-anoint.jpg",
    makara: "plate-makara.jpg",
    ask: "plate-ask.jpg",
    outrage: "plate-outrage.jpg",
    tripura: "plate-tripura.jpg",
    reins: "plate-reins.jpg",
    boast: "plate-boast.jpg",
    crow: "plate-crow.jpg",
    secret: "plate-secret.jpg",
  },
  end: {
    title: "End of Episode 16",
    line: "Shalya holds the reins. Karna rides to meet Arjuna.",
    next: "index.html",
    nextLabel: "All episodes",
  },
  palette: {
    cloth: "#c4a06a",
    vermillion: "#b83218",
    saffron: "#e08a1e",
    gold: "#e8c547",
    indigo: "#1a2744",
    leaf: "#2a5a38",
  },
  beats: [
    {
      t: 0,
      plate: "anoint",
      zoom: 1.05,
      panX: 0,
      panY: 0,
      audio: "orion-00.mp3",
      who: "Narrator",
      text: "Night of the fifteenth day. Drona has fallen. At Ashwatthama’s word, Duryodhana anoints Karna commander of the Kaurava host.",
    },
    {
      t: 12,
      plate: "makara",
      zoom: 1.12,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-01.mp3",
      who: "Narrator",
      text: "At sunrise Karna draws the host into the makara, the sea-beast array, himself at its snout. Dusk falls with no victory.",
    },
    {
      t: 24,
      plate: "ask",
      zoom: 1.14,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-02.mp3",
      who: "Narrator",
      text: "That night Karna tells Duryodhana: “Arjuna has Krishna at his reins. Give me Shalya — his equal with horses — and I will win.”",
    },
    {
      t: 36,
      plate: "outrage",
      zoom: 1.14,
      panX: 0.03,
      panY: -0.02,
      audio: "orion-03.mp3",
      who: "Narrator",
      text: "Duryodhana asks Shalya, king of Madra. Shalya flares in fury: “Shall a crowned king drive the chariot of a charioteer’s son?”",
    },
    {
      t: 48,
      plate: "tripura",
      zoom: 1.16,
      panX: 0,
      panY: -0.03,
      audio: "orion-04.mp3",
      who: "Narrator",
      text: "Duryodhana tells him of Tripura: when Shiva rode to burn the three cities, Brahma himself held the reins. The driver is the greater.",
    },
    {
      t: 60,
      plate: "reins",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-05.mp3",
      who: "Narrator",
      text: "Shalya agrees — on one condition: he may say whatever he likes to Karna. At dawn of the seventeenth day he takes the reins.",
    },
    {
      t: 72,
      plate: "boast",
      zoom: 1.14,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-06.mp3",
      who: "Narrator",
      text: "Karna calls to the ranks: “Whoever shows me Arjuna shall have jewels, a hundred cows, and a chariot of gold!”",
    },
    {
      t: 84,
      plate: "crow",
      zoom: 1.16,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-07.mp3",
      who: "Narrator",
      text: "Shalya laughs in scorn. “A crow once raced a swan across the sea — and had to be carried home by the swan.”",
    },
    {
      t: 96,
      plate: "secret",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-08.mp3",
      who: "Narrator",
      text: "Karna rides on; he knows who Krishna and Arjuna are. He does not know that Shalya once promised Yudhishthira to break his spirit.",
    },
    {
      t: 108,
      plate: "secret",
      zoom: 1.02,
      panX: 0,
      panY: 0,
      who: "",
      text: "",
    },
  ],
};
