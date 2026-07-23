/**
 * Episode registry — add entries as the series grows.
 * Each playable ep has a module under episodes/<id>/script.js
 */
export const EPISODES = [
  {
    id: "01",
    slug: "birds-eye",
    title: "The Bird's Eye",
    sanskrit: "पक्षिणश्चक्षुः",
    chapter: "Ādi Parva · training of the princes",
    duration: "~90s",
    status: "live",
    blurb:
      "Drona tests his pupils. Only Arjuna sees what must be seen — the eye, and nothing else.",
    play: "play.html?ep=01",
  },
  {
    id: "02",
    slug: "swayamvara",
    title: "The Fish's Eye",
    sanskrit: "मत्स्यचक्षुः",
    chapter: "Ādi Parva · Draupadi’s swayamvara",
    duration: "~96s",
    status: "live",
    blurb:
      "At Drupada’s court the prize is won by looking only at the reflection — Arjuna strings the bow and strikes the fish’s eye.",
    play: "play.html?ep=02",
  },
  {
    id: "03",
    slug: "bhima-bakasura",
    title: "Bhima and Bakasura",
    sanskrit: "भीमबकासुरः",
    chapter: "Ādi Parva · Ekachakra",
    duration: "~100s",
    status: "live",
    blurb:
      "In Ekachakra a rakshasa takes a daily due. Kunti sends Bhima — and the strong keep the helpless safe.",
    play: "play.html?ep=03",
  },
  {
    id: "04",
    slug: "akshayapatra",
    title: "The Akshayapatra",
    sanskrit: "अक्षयपात्रम्",
    chapter: "Vana Parva · Durvasa’s visit",
    duration: "~100s",
    status: "live",
    blurb:
      "When the vessel is empty and Durvasa arrives hungry, one grain of grace is enough — Krishna answers Draupadi’s prayer.",
    play: "play.html?ep=04",
  },
  {
    id: "05",
    slug: "coming-soon",
    title: "Next episode",
    sanskrit: "शीघ्रम्",
    chapter: "TBD",
    duration: "—",
    status: "planned",
    blurb: "Script first, then light. The series grows one parva-beat at a time.",
    play: null,
  },
];
