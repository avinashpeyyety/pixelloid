/**
 * Episode 23 — The Reluctant King
 * Shanti Parva (Rajadharmanushasana sub-parva) · the king who does not want his kingdom
 * Logic pass 2026-10-29: a month of mourning by the Ganga; Yudhishthira grieves for Karna and Kunti consoles him →
 * he tells Arjuna he wants no kingdom and will go to the forest → Arjuna and Bhima argue that a king must act → Draupadi
 * pleads: protect your people, rule with dharma → Vyasa: the forest is not your path → Krishna takes his hand and tells of
 * the great kings of old; the grief begins to lift → in Hastinapura Yudhishthira is crowned, Draupadi beside him, Krishna
 * pouring the conch water → one morning Krishna sits in meditation, thinking of Bhishma → Krishna brings Yudhishthira to
 * Bhishma on his bed of arrows: "Teach him, grandsire."
 * Picks up Ep 22's closing line ("The water rites are done. Yudhishthira rises from the Ganga — a king who no longer wants a kingdom.").
 * Sources: BORI CE/Debroy (Shanti Parva, Rajadharmanushasana, Debroy vol. 8) + Gita Press Gorakhpur (Shanti Parva adhyaya
 * 1–52, vulgate) + K.M. Ganguli (Santi Parva §1–§52). See plate-bible source_block.
 * Family-friendly: no gore, no wounds, no blood, no bodies; Bhishma serene on the golden arrow bed. Karna, Narada and Dhaumya
 * are narrated only or absent.
 * Krishna = Ep 04 lock (official reference) on comfort, crown, meditate, bedside, poster. Yudhishthira, Arjuna, Bhima = Ep 15
 * locks. Draupadi = Ep 04 lock. Kunti = Ep 22 lock. Vyasa = Ep 21 lock. Bhishma = Ep 10 lock. No new character locks.
 *
 * Audio: orion-00…08 rendered with free local Kokoro-82M bm_george (tools/render_local_voice.sh, speed 0.9);
 * see logic-reviews/RR-tts-kokoro.md. Stills: SuperGrok consumer Imagine (grok.com), prompt pack at
 * stills/_inbox/consumer-imagine/PROMPTS.md (2 scene masters + 9 plates + poster).
 * Music: Raga Ahir Bhairav preset (js/main.js RAGA_PRESETS.ahirbhairav) — never default flute+tabla.
 */
export const EPISODE = {
  id: "23",
  slug: "reluctant-king",
  title: "The Reluctant King",
  subtitle: "After the war — the king who did not want his kingdom",
  style: "cinematic-plates",
  stillsDir: "episodes/23-reluctant-king/stills/",
  voice: {
    provider: "local-kokoro",
    voice_id: "bm_george",
    cache: "ep23-kokoro-20261029",
    note: "Kathavachak — Kokoro-82M bm_george (free local, Apache-2.0, speed 0.9) via tools/render_local_voice.sh; no paid xAI API (SuperGrok-only rule). Files keep orion-NN.mp3 names/fingerprint (24 kHz / 128 kbps / mono / -16 LUFS).",
    base: "episodes/23-reluctant-king/audio/",
  },
  music: {
    raga: "ahirbhairav",
    note: "Raga Ahir Bhairav (Bhairav thaat family; Bhairav in the lower tetrachord, Kafi in the upper) — an early-morning raga of shanti: devotion, gentle sorrow and quiet resolve, the grief that lifts at dawn — the month by the Ganga, the counsel, the coronation and Krishna's meditation at sunrise. S r G m P D n S' ascending, S' n D P m G r S descending; komal Re and Ni, shuddha Ga and Dha; vadi shuddha Ma, samvadi Sa; pakad G m r S, D n r S. Tanpura + bansuri, no tabla. Duck under narration. Not used by any earlier episode (Ep 15 Shree, 16 Adana, 17 Multani, 18 Brindavani Sarang, 19 Bageshri, 20 Shankara, 21 Jaunpuri, 22 Jogiya; Ep 09 Bhairav, 10 Darbari, 14 Miyan ki Todi). Player preset: js/main.js RAGA_PRESETS.ahirbhairav (D3, no tabla).",
  },
  totalSec: 112,
  stills: {
    poster: "episodes/23-reluctant-king/stills/poster.jpg",
  },
  plates: {
    mourn: "plate-mourn.jpg",
    renounce: "plate-renounce.jpg",
    brothers: "plate-brothers.jpg",
    plea: "plate-plea.jpg",
    counsel: "plate-counsel.jpg",
    comfort: "plate-comfort.jpg",
    crown: "plate-crown.jpg",
    meditate: "plate-meditate.jpg",
    bedside: "plate-bedside.jpg",
  },
  end: {
    title: "End of Episode 23",
    line: "Krishna takes away Bhishma's pain. Tomorrow the grandsire will begin to teach the king how to rule.",
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
      plate: "mourn",
      zoom: 1.05,
      panX: 0,
      panY: 0,
      audio: "orion-00.mp3",
      who: "Narrator",
      text: "For a month the Pandavas stay by the Ganga, outside the city. Yudhishthira cannot stop grieving for Karna, and Kunti tries to console him.",
    },
    {
      t: 12,
      plate: "renounce",
      zoom: 1.1,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-01.mp3",
      who: "Narrator",
      text: "'Our kinsmen are gone,' Yudhishthira tells Arjuna. 'I want no kingdom. I will go to the forest. You rule this earth.'",
    },
    {
      t: 24,
      plate: "brothers",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-02.mp3",
      who: "Narrator",
      text: "Arjuna and Bhima argue back. 'Then why did we fight at all?' cries Bhima. 'A king must act, and protect his people.'",
    },
    {
      t: 36,
      plate: "plea",
      zoom: 1.12,
      panX: 0,
      panY: -0.03,
      audio: "orion-03.mp3",
      who: "Narrator",
      text: "Then Draupadi speaks. 'Your brothers are crying out to you. Protect your people, and rule the earth with dharma.'",
    },
    {
      t: 48,
      plate: "counsel",
      zoom: 1.14,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-04.mp3",
      who: "Narrator",
      text: "Vyasa counsels him. 'The forest is not your path. A king's dharma is to protect his people.'",
    },
    {
      t: 60,
      plate: "comfort",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-05.mp3",
      who: "Narrator",
      text: "Krishna takes the king's hand and tells him of great kings of old, who all had to pass. At last, the grief begins to lift.",
    },
    {
      t: 72,
      plate: "crown",
      zoom: 1.16,
      panX: 0,
      panY: -0.03,
      audio: "orion-06.mp3",
      who: "Narrator",
      text: "In Hastinapura, Yudhishthira is crowned at last. Draupadi sits beside him, and Krishna pours the sacred water from a conch over his head.",
    },
    {
      t: 84,
      plate: "meditate",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-07.mp3",
      who: "Narrator",
      text: "One morning, the king finds Krishna sitting perfectly still. 'Bhishma is thinking of me,' Krishna says. 'When he goes, all his knowledge goes with him.'",
    },
    {
      t: 96,
      plate: "bedside",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-08.mp3",
      who: "Narrator",
      text: "So they go to Kurukshetra, where Bhishma lies on his bed of arrows. 'Teach him, grandsire,' Krishna says, 'and lift his grief.'",
    },
    {
      t: 108,
      plate: "bedside",
      zoom: 1.02,
      panX: 0,
      panY: 0,
      who: "",
      text: "",
    },
  ],
};
