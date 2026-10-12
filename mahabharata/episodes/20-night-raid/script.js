/**
 * Episode 20 — The Night Raid
 * Shalya Parva (close) + Sauptika Parva · the night after the eighteenth day of Kurukshetra and the dawn after
 * Logic pass 2026-10-12: Krishna leads the Pandavas out of their camp to sleep by the Oghavati → in a forest nearby, sleepless
 * Ashwatthama sees an owl fall on sleeping crows → he wakes Kripa and Kritavarma; Kripa pleads that killing sleepers is against
 * dharma → Ashwatthama will not listen; at the camp gate a towering guardian swallows every weapon he hurls → knowing it is
 * Shiva, he offers himself to a sacred fire; Shiva gives him a shining sword and enters him → he goes in alone; Kripa and
 * Kritavarma guard the gate → he finds Dhrishtadyumna's tent (what happens inside is never shown) → before dawn the camp is
 * lost: Draupadi's sons and Shikhandi never wake; fire over the tents → at first light the three tell the fallen Duryodhana,
 * who dies content.
 * Picks up Ep 19's closing line ("The war is won by day. By night, Ashwatthama swears revenge.").
 * Draupadi's vow, the pursuit and the brahmashira (Aishika sub-parva) are left for Ep 21.
 * Sources: BORI CE/Debroy (Shalya Parva close; Sauptika Parva ch. 1–9, Debroy vol. 7) + Gita Press Gorakhpur (Shalya Parva
 * adhyaya 62; Sauptika Parva adhyaya 1–9, vulgate) + K.M. Ganguli (Shalya Parva §62; Sauptika Parva §1–§9).
 * See plate-bible source_block.
 * Family-friendly: the raid is told by implication only — no victims, bodies, gore or wounds are drawn. Bhima, Nakula,
 * Sahadeva, Satyaki, Dhrishtadyumna, Shikhandi, Draupadi and her sons are narrated only.
 * Krishna = Ep 04 lock (official reference), away plate only. Shiva = Ep 06 lock. Kripa, Kritavarma = new Ep 20 locks.
 *
 * Audio: orion-00…08 rendered with free local Kokoro-82M bm_george (tools/render_local_voice.sh, speed 0.9);
 * see logic-reviews/RR-tts-kokoro.md. Stills: SuperGrok consumer Imagine (grok.com), prompt pack at
 * stills/_inbox/consumer-imagine/PROMPTS.md (1 scene master + 2 locks + 9 plates + poster).
 * Music: Raga Shankara preset (js/main.js RAGA_PRESETS.shankara) — never default flute+tabla.
 */
export const EPISODE = {
  id: "20",
  slug: "night-raid",
  title: "The Night Raid",
  subtitle: "The night after the eighteenth day — the sleeping camp",
  style: "cinematic-plates",
  stillsDir: "episodes/20-night-raid/stills/",
  voice: {
    provider: "local-kokoro",
    voice_id: "bm_george",
    cache: "ep20-kokoro-20261012",
    note: "Kathavachak — Kokoro-82M bm_george (free local, Apache-2.0, speed 0.9) via tools/render_local_voice.sh; no paid xAI API (SuperGrok-only rule). Files keep orion-NN.mp3 names/fingerprint (24 kHz / 128 kbps / mono / -16 LUFS).",
    base: "episodes/20-night-raid/audio/",
  },
  music: {
    raga: "shankara",
    note: "Raga Shankara (Bilawal thaat) — the second-prahar night raga (9 PM–midnight) named for Shiva, in veer and raudra rasa: the fierce night, the guardian at the gate and Shiva's sword. S G P N D S' ascending (D grazed, vakra), S' N P G P D P G P R G R S descending; Ma omitted, Re only weak in descent; vadi Ga, samvadi Ni; nyasa on Ni after G P N D S'. Tanpura + bansuri, no tabla. Duck under narration. Not used by any earlier episode (Ep 15 Shree, 16 Adana, 17 Multani, 18 Brindavani Sarang, 19 Bageshri; Ep 10 Darbari, Ep 13 Malkauns). Player preset: js/main.js RAGA_PRESETS.shankara (D#3, no tabla).",
  },
  totalSec: 112,
  stills: {
    poster: "episodes/20-night-raid/stills/poster.jpg",
  },
  plates: {
    away: "plate-away.jpg",
    owl: "plate-owl.jpg",
    plan: "plate-plan.jpg",
    guardian: "plate-guardian.jpg",
    boon: "plate-boon.jpg",
    watch: "plate-watch.jpg",
    tent: "plate-tent.jpg",
    fire: "plate-fire.jpg",
    dawn: "plate-dawn.jpg",
  },
  end: {
    title: "End of Episode 20",
    line: "The night is over. The Pandavas learn what it has done — and Bhima rides after Ashwatthama.",
    next: "index.html",
    nextLabel: "All episodes",
  },
  palette: {
    cloth: "#b89c6e",
    vermillion: "#a8321c",
    saffron: "#d9821e",
    gold: "#e0bf4a",
    indigo: "#141d36",
    leaf: "#24402e",
  },
  beats: [
    {
      t: 0,
      plate: "away",
      zoom: 1.05,
      panX: 0,
      panY: 0,
      audio: "orion-00.mp3",
      who: "Narrator",
      text: "The war is won. That night Krishna leads Yudhishthira and his brothers out of their camp, to sleep beside the Oghavati river.",
    },
    {
      t: 12,
      plate: "owl",
      zoom: 1.1,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-01.mp3",
      who: "Narrator",
      text: "In a nearby forest, Ashwatthama lies awake beneath a banyan tree. An owl swoops on the sleeping crows — and gives him a terrible idea.",
    },
    {
      t: 24,
      plate: "plan",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-02.mp3",
      who: "Narrator",
      text: "He wakes Kripa and Kritavarma: they will strike the Pandava camp tonight. Kripa pleads that to attack men in their sleep is against dharma.",
    },
    {
      t: 36,
      plate: "guardian",
      zoom: 1.12,
      panX: 0,
      panY: -0.03,
      audio: "orion-03.mp3",
      who: "Narrator",
      text: "Ashwatthama will not listen. At the camp gate a towering guardian blazes with fire, and swallows every weapon he hurls.",
    },
    {
      t: 48,
      plate: "boon",
      zoom: 1.14,
      panX: 0.02,
      panY: -0.02,
      audio: "orion-04.mp3",
      who: "Narrator",
      text: "Knowing it is Shiva, Ashwatthama prays and offers himself to a sacred fire. Shiva appears, gives him a shining sword, and enters him.",
    },
    {
      t: 60,
      plate: "watch",
      zoom: 1.12,
      panX: -0.02,
      panY: -0.02,
      audio: "orion-05.mp3",
      who: "Narrator",
      text: "Ashwatthama slips into the sleeping camp alone. Kripa and Kritavarma stand guard at the gate, so that no one may escape.",
    },
    {
      t: 72,
      plate: "tent",
      zoom: 1.16,
      panX: 0,
      panY: -0.03,
      audio: "orion-06.mp3",
      who: "Narrator",
      text: "He finds the tent where Dhrishtadyumna, who slew his father Drona, lies asleep. What happens inside, the night keeps hidden.",
    },
    {
      t: 84,
      plate: "fire",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-07.mp3",
      who: "Narrator",
      text: "Before dawn the camp is lost. Draupadi’s five sons and Shikhandi never wake, and fire rises over the tents.",
    },
    {
      t: 96,
      plate: "dawn",
      zoom: 1.12,
      panX: 0.02,
      panY: 0.02,
      audio: "orion-08.mp3",
      who: "Narrator",
      text: "At first light the three bring the news to Duryodhana by the lake. Content at last, the fallen king closes his eyes forever.",
    },
    {
      t: 108,
      plate: "dawn",
      zoom: 1.02,
      panX: 0,
      panY: 0,
      who: "",
      text: "",
    },
  ],
};
