/**
 * Episode 24 — Rajadharma
 * Shanti Parva (Rajadharmanushasana sub-parva) · Bhishma, on his bed of arrows, teaches the new king
 * Logic pass 2026-11-02: next morning Krishna and the five Pandavas return to Kurukshetra; by Krishna's grace Bhishma is free
 * of pain → "Why not teach him yourself?" — Krishna: your words will live as long as the earth → Yudhishthira hangs back,
 * ashamed and fearing a curse → Bhishma: a warrior's duty is righteous battle; the king touches his feet; "Ask me" → the
 * lessons: effort over fate, truth; care for the people as a mother for her child; without a king, big fish eat little fish;
 * take taxes gently, like a bee taking honey → day after day Krishna and the Pandavas listen; the king's grief turns to wisdom.
 * Picks up Ep 23's closing line ("So they go to Kurukshetra, where Bhishma lies on his bed of arrows. 'Teach him, grandsire,'
 * Krishna says, 'and lift his grief.'") and end card ("Tomorrow the grandsire will begin to teach the king how to rule.").
 * Sources: BORI CE/Debroy (Shanti Parva 12.53–59, 12.67, 12.89; Debroy vol. 8) + Gita Press Gorakhpur (Shanti Parva adhyaya
 * 53–59, 67–68, 89, vulgate) + K.M. Ganguli (Santi Parva §53–§59, §67, §88). See plate-bible source_block.
 * Family-friendly: no gore, no wounds, no blood, no bodies; Bhishma serene on the golden arrow bed. Satyaki, Kripa and the
 * rishis are narrated only or absent.
 * Krishna = Ep 04 lock (official reference; FIRST ref) on arrive, why, fear, listen, poster. Yudhishthira, Arjuna, Bhima = Ep 15
 * locks. Nakula + Sahadeva = Ep 05 twins lock. Bhishma = Ep 10 lock. Scene master kuru24 = Ep 23 kuru23 byte copy.
 * One new group lock (pandavas24) for the two seven-figure plates.
 *
 * Audio: orion-00…08 rendered with free local Kokoro-82M bm_george (tools/render_local_voice.sh, speed 0.9);
 * see logic-reviews/RR-tts-kokoro.md. Stills: SuperGrok consumer Imagine (grok.com), prompt pack at
 * stills/_inbox/consumer-imagine/PROMPTS.md (1 group lock + 9 plates + poster).
 * Music: Raga Bhimpalasi preset (js/main.js RAGA_PRESETS.bhimpalasi) — never default flute+tabla.
 */
export const EPISODE = {
  id: "24",
  slug: "rajadharma",
  title: "Rajadharma",
  subtitle: "On his bed of arrows, Bhishma teaches the new king",
  style: "cinematic-plates",
  stillsDir: "episodes/24-rajadharma/stills/",
  voice: {
    provider: "local-kokoro",
    voice_id: "bm_george",
    cache: "ep24-kokoro-20261102",
    note: "Kathavachak — Kokoro-82M bm_george (free local, Apache-2.0, speed 0.9) via tools/render_local_voice.sh; no paid xAI API (SuperGrok-only rule). Files keep orion-NN.mp3 names/fingerprint (24 kHz / 128 kbps / mono / -16 LUFS).",
    base: "episodes/24-rajadharma/audio/",
  },
  music: {
    raga: "bhimpalasi",
    note: "Raga Bhimpalasi (Kafi thaat) — a serene, devotional afternoon raga (third prahar of the day) of tender longing and quiet wisdom: a grandfather teaching at a bedside through the long afternoons, the grief that turns into understanding. n S g m P n S' ascending (Re and Dha skipped going up), S' n D P m g R S descending; komal Ga and Ni, shuddha Re and Dha; vadi shuddha Ma, samvadi Sa; pakad n S m, m P g m, g R S. Tanpura + bansuri, no tabla. Duck under narration. Not used by any earlier episode (Ep 15 Shree, 16 Adana, 17 Multani, 18 Brindavani Sarang, 19 Bageshri, 20 Shankara, 21 Jaunpuri, 22 Jogiya, 23 Ahir Bhairav; Ep 09 Bhairav, 10 Darbari, 14 Miyan ki Todi). Player preset: js/main.js RAGA_PRESETS.bhimpalasi (C3, no tabla).",
  },
  totalSec: 112,
  stills: {
    poster: "episodes/24-rajadharma/stills/poster.jpg",
  },
  plates: {
    arrive: "plate-arrive.jpg",
    why: "plate-why.jpg",
    fear: "plate-fear.jpg",
    bless: "plate-bless.jpg",
    effort: "plate-effort.jpg",
    mother: "plate-mother.jpg",
    fish: "plate-fish.jpg",
    bee: "plate-bee.jpg",
    listen: "plate-listen.jpg",
  },
  end: {
    title: "End of Episode 24",
    line: "The grandsire will go on teaching for many days, until the sun turns north.",
    next: "index.html",
    nextLabel: "All episodes",
  },
  palette: {
    cloth: "#cdb88e",
    vermillion: "#a8321c",
    saffron: "#e39a34",
    gold: "#e8c95a",
    indigo: "#2a3c5c",
    leaf: "#3e6044",
  },
  beats: [
    {
      t: 0,
      plate: "arrive",
      zoom: 1.05,
      panX: 0,
      panY: 0,
      audio: "orion-00.mp3",
      who: "Narrator",
      text: "Next morning, Krishna and the five Pandavas return to Kurukshetra. By Krishna's grace, Bhishma's pain is gone, and his mind is clear.",
    },
    {
      t: 12,
      plate: "why",
      zoom: 1.12,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-01.mp3",
      who: "Narrator",
      text: "'Why not teach him yourself?' Bhishma asks. Krishna smiles. 'I want your fame to grow, grandsire. Your words will live as long as the earth.'",
    },
    {
      t: 24,
      plate: "fear",
      zoom: 1.1,
      panX: -0.02,
      panY: 0,
      audio: "orion-02.mp3",
      who: "Narrator",
      text: "But Yudhishthira hangs back, ashamed and afraid. 'He fears your curse,' Krishna says, 'because he led the war that brought you down.'",
    },
    {
      t: 36,
      plate: "bless",
      zoom: 1.14,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-03.mp3",
      who: "Narrator",
      text: "'A warrior's duty is to fight for what is right,' Bhishma says gently. The king touches his feet. 'Do not fear, child. Ask me.'",
    },
    {
      t: 48,
      plate: "effort",
      zoom: 1.1,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-04.mp3",
      who: "Narrator",
      text: "'A king must always strive,' Bhishma teaches. 'Effort is greater than fate. And nothing makes a king as strong as truth.'",
    },
    {
      t: 60,
      plate: "mother",
      zoom: 1.12,
      panX: 0.02,
      panY: -0.03,
      audio: "orion-05.mp3",
      who: "Narrator",
      text: "'Care for your people as a mother cares for her child,' he says, 'putting the child's good before everything she wants for herself.'",
    },
    {
      t: 72,
      plate: "fish",
      zoom: 1.1,
      panX: -0.02,
      panY: 0.02,
      audio: "orion-06.mp3",
      who: "Narrator",
      text: "Another day he warns, 'Without a king, the strong would swallow the weak, like big fish eating little fish. A king protects them all.'",
    },
    {
      t: 84,
      plate: "bee",
      zoom: 1.14,
      panX: 0.02,
      panY: 0,
      audio: "orion-07.mp3",
      who: "Narrator",
      text: "'Take taxes gently,' Bhishma says, 'the way a bee takes honey from a flower, without ever harming the flower.'",
    },
    {
      t: 96,
      plate: "listen",
      zoom: 1.06,
      panX: 0,
      panY: 0.02,
      audio: "orion-08.mp3",
      who: "Narrator",
      text: "Day after day, Krishna and the Pandavas sit at his side and listen. And slowly, the grief in the king's heart turns into wisdom.",
    },
    {
      t: 108,
      plate: "listen",
      zoom: 1.02,
      panX: 0,
      panY: 0,
      who: "",
      text: "",
    },
  ],
};
