/**
 * Episode 18 — The Fall of Shalya
 * Shalya Parva · night after the seventeenth day and the eighteenth (last) day of Kurukshetra · shalya-vadha
 * Logic pass 2026-10-07: Karna has fallen → Kripa begs Duryodhana to make peace; he refuses and, at Ashwatthama's word,
 * anoints Shalya commander → at dawn Krishna tells Yudhishthira that none but he can match Shalya, and not to hold back
 * from pity → Shalya leads the remnant host out, blazing like the sun → Bhima and Shalya fight mace to mace like two
 * bulls until both fall back → gentle Yudhishthira rides out in anger, to slay or be slain → Shalya, unhorsed, rushes
 * with sword and shield → Yudhishthira hurls the worshipped gold-and-gem dart → at midday Shalya falls with arms
 * outstretched, as if embracing the earth → Sahadeva slays Shakuni; the host is gone; Duryodhana, alone, walks to a lake.
 * Picks up Ep 17's closing line ("On the eighteenth day, Shalya will lead the Kauravas."). The mace duel at the lake
 * is left for Ep 19.
 * Sources: BORI CE/Debroy (Shalya Parva, Debroy vol. 7) + Gita Press Gorakhpur (Shalya Parva adhyaya 4–8, 11–12, 15–17,
 * 28–29, vulgate) + K.M. Ganguli (Shalya Parva §4–§8, §11–§12, §15–§17, §28–§29). See plate-bible source_block.
 * Family-friendly: no gore, no bodies. Kripa, Sahadeva, Shakuni and Kritavarma are narrated only, never drawn.
 * Krishna = Ep 04 lock (official reference).
 *
 * Audio: orion-00…08 rendered with free local Kokoro-82M bm_george (tools/render_local_voice.sh, speed 0.9);
 * see logic-reviews/RR-tts-kokoro.md. Stills: SuperGrok consumer Imagine (grok.com), prompt pack at
 * stills/_inbox/consumer-imagine/PROMPTS.md (1 scene master + 9 plates + poster).
 * Music: Raga Brindavani Sarang preset (js/main.js RAGA_PRESETS.sarang) — never default flute+tabla.
 */
export const EPISODE = {
  id: "18",
  slug: "shalya-fall",
  title: "The Fall of Shalya",
  subtitle: "Eighteenth day of Kurukshetra",
  style: "cinematic-plates",
  stillsDir: "episodes/18-shalya-fall/stills/",
  voice: {
    provider: "local-kokoro",
    voice_id: "bm_george",
    cache: "ep18-kokoro-20261007",
    note: "Kathavachak — Kokoro-82M bm_george (free local, Apache-2.0, speed 0.9) via tools/render_local_voice.sh; no paid xAI API (SuperGrok-only rule). Files keep orion-NN.mp3 names/fingerprint (24 kHz / 128 kbps / mono / -16 LUFS).",
    base: "episodes/18-shalya-fall/audio/",
  },
  music: {
    raga: "sarang",
    note: "Raga Brindavani Sarang (Kafi thaat) — the bright, fierce midday raga, the hour Shalya falls: S R m P N S' ascending, S' n P m R S descending; both Ni, no Ga, no Dha; dwelling on Re and Pa. Tanpura + bansuri, no tabla. Duck under narration. Not used by any earlier episode. Player preset: js/main.js RAGA_PRESETS.sarang (A2, no tabla).",
  },
  totalSec: 112,
  stills: {
    poster: "episodes/18-shalya-fall/stills/poster.jpg",
  },
  plates: {
    anoint: "plate-anoint.jpg",
    counsel: "plate-counsel.jpg",
    array: "plate-array.jpg",
    mace: "plate-mace.jpg",
    resolve: "plate-resolve.jpg",
    charge: "plate-charge.jpg",
    dart: "plate-dart.jpg",
    fall: "plate-fall.jpg",
    lake: "plate-lake.jpg",
  },
  end: {
    title: "End of Episode 18",
    line: "Shalya has fallen. Duryodhana hides in the lake — and the Pandavas are coming.",
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
      text: "Night after Karna’s fall. Kripa begs Duryodhana to make peace. He refuses, and at Ashwatthama’s word anoints Shalya commander.",
    },
    {
      t: 12,
      plate: "counsel",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-01.mp3",
      who: "Narrator",
      text: "At dawn Krishna tells Yudhishthira: “Shalya is your kin and a mighty warrior. None but you can match him. Do not hold back from pity.”",
    },
    {
      t: 24,
      plate: "array",
      zoom: 1.12,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-02.mp3",
      who: "Narrator",
      text: "The eighteenth day. What is left of the Kaurava host marches out, and Shalya rides at its head, blazing like the sun.",
    },
    {
      t: 36,
      plate: "mace",
      zoom: 1.14,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-03.mp3",
      who: "Narrator",
      text: "Bhima meets Shalya mace to mace. They circle and strike like two bulls, until both stagger and fall back.",
    },
    {
      t: 48,
      plate: "resolve",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-04.mp3",
      who: "Narrator",
      text: "Then Yudhishthira, the gentlest of the brothers, rides out. Today his anger blazes. He will slay Shalya, or be slain.",
    },
    {
      t: 60,
      plate: "charge",
      zoom: 1.14,
      panX: 0.03,
      panY: -0.02,
      audio: "orion-05.mp3",
      who: "Narrator",
      text: "Shalya’s horses and charioteer fall. Unhorsed, the old king leaps down with sword and shield and rushes at Yudhishthira.",
    },
    {
      t: 72,
      plate: "dart",
      zoom: 1.16,
      panX: 0,
      panY: -0.03,
      audio: "orion-06.mp3",
      who: "Narrator",
      text: "Yudhishthira takes up a gleaming dart, adorned with gold and gems and worshipped like a goddess, and hurls it with all his might.",
    },
    {
      t: 84,
      plate: "fall",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-07.mp3",
      who: "Narrator",
      text: "At midday the dart strikes. Shalya falls with arms outstretched, as if embracing the earth he loved.",
    },
    {
      t: 96,
      plate: "lake",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-08.mp3",
      who: "Narrator",
      text: "Sahadeva slays Shakuni. The Kaurava host is gone. Duryodhana, alone, takes up his mace and walks toward a lake.",
    },
    {
      t: 108,
      plate: "lake",
      zoom: 1.02,
      panX: 0,
      panY: 0,
      who: "",
      text: "",
    },
  ],
};
