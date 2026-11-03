/**
 * Mārkaṇḍeya Purāṇa — episode registry.
 * Arc 1: Devī Māhātmyam (Durgā Saptaśatī, MP cantos 81–93), in story order.
 * Each playable ep has a module under episodes/<id>-<slug>/script.js and an
 * EP_LOADERS entry in js/main.js. status "live" = card links to the player;
 * anything else renders as "Coming soon" (unpublished).
 * Pace: ONE episode per week. Flip status to "live" only after GATE C +
 * install_review PASS (see NEXT.md).
 */
export const EPISODES = [
  {
    id: "01",
    slug: "king-and-merchant",
    title: "The King and the Merchant",
    sanskrit: "सुरथः समाधिश्च",
    chapter: "Devī Māhātmyam · Chapter 1 (frame story)",
    duration: "~114s",
    status: "live", // shipped 2026-11-03 (GATE C + install PASS)
    blurb:
      "A good king who lost his kingdom and a kind merchant cast out by his family meet in a sage's forest hermitage. Why do our hearts hold on? The sage Medhas begins to tell of Mahāmāyā, the Great Goddess.",
    play: "play.html?ep=01",
  },
  {
    id: "02",
    slug: "madhu-kaitabha",
    title: "Madhu and Kaitabha",
    sanskrit: "मधुकैटभवधः",
    chapter: "Devī Māhātmyam · Chapter 1 (first charitra)",
    duration: "",
    status: "planned",
    blurb:
      "Vishnu sleeps on the cosmic ocean. Two giants threaten Brahma on his lotus — and Brahma's hymn wakes the Goddess of Yoga-sleep.",
  },
  {
    id: "03",
    slug: "light-of-the-gods",
    title: "The Light of the Gods",
    sanskrit: "देवीप्रादुर्भावः",
    chapter: "Devī Māhātmyam · Chapter 2",
    duration: "",
    status: "planned",
    blurb:
      "Mahishasura drives the gods from heaven. Their anger becomes light, the light becomes the Devi, and every god gives her a gift — Himavan gives the lion.",
  },
  {
    id: "04",
    slug: "mahishas-generals",
    title: "Mahisha's Generals",
    sanskrit: "महिषासुरसैन्यवधः",
    chapter: "Devī Māhātmyam · Chapters 2–3",
    duration: "",
    status: "planned",
    blurb:
      "Chikshura, Chamara and the asura armies march on the Devi. Her lion roars, and her breath becomes an army of helpers.",
  },
  {
    id: "05",
    slug: "mahishasuramardini",
    title: "Mahishasuramardini",
    sanskrit: "महिषासुरमर्दिनी",
    chapter: "Devī Māhātmyam · Chapter 3",
    duration: "",
    status: "planned",
    blurb:
      "Buffalo, lion, elephant, warrior — Mahisha changes shape again and again, until the Devi stills him with her trident.",
  },
  {
    id: "06",
    slug: "hymn-of-the-gods",
    title: "The Gods' Hymn",
    sanskrit: "शक्रादिस्तुतिः",
    chapter: "Devī Māhātmyam · Chapter 4",
    duration: "",
    status: "planned",
    blurb:
      "Indra and the gods sing their thanks. The Devi promises: whenever you remember me in trouble, I will come.",
  },
  {
    id: "07",
    slug: "ambika-in-the-himalaya",
    title: "Ambika in the Himalaya",
    sanskrit: "देवीदूतसंवादः",
    chapter: "Devī Māhātmyam · Chapter 5 (third charitra begins)",
    duration: "",
    status: "planned",
    blurb:
      "Shumbha and Nishumbha seize the three worlds. The gods' hymn calls Ambika forth from Parvati — and she answers the emperor's messenger with a smile and a vow.",
  },
  {
    id: "08",
    slug: "dhumralochana",
    title: "Dhumralochana",
    sanskrit: "धूम्रलोचनवधः",
    chapter: "Devī Māhātmyam · Chapter 6",
    duration: "",
    status: "planned",
    blurb:
      "Shumbha sends the smoke-eyed general to drag the Devi to his court. One sound — 'Hum!' — and the smoke is gone.",
  },
  {
    id: "09",
    slug: "chanda-munda",
    title: "Chanda, Munda and Chamunda",
    sanskrit: "चण्डमुण्डवधः",
    chapter: "Devī Māhātmyam · Chapter 7",
    duration: "",
    status: "planned",
    blurb:
      "From the Devi's brow comes Kali, fierce protector. She stops Chanda and Munda, and the Devi names her Chamunda.",
  },
  {
    id: "10",
    slug: "raktabija",
    title: "Raktabija",
    sanskrit: "रक्तबीजवधः",
    chapter: "Devī Māhātmyam · Chapter 8",
    duration: "",
    status: "planned",
    blurb:
      "Every spark that falls from Raktabija becomes another Raktabija. The Mothers gather, and Kali makes sure no new spark ever lands.",
  },
  {
    id: "11",
    slug: "nishumbha",
    title: "Nishumbha",
    sanskrit: "निशुम्भवधः",
    chapter: "Devī Māhātmyam · Chapter 9",
    duration: "",
    status: "planned",
    blurb:
      "The younger brother charges with mace and a thousand arrows. The Devi and her lion stand firm.",
  },
  {
    id: "12",
    slug: "i-am-alone",
    title: "Shumbha — I Am Alone",
    sanskrit: "शुम्भवधः",
    chapter: "Devī Māhātmyam · Chapter 10",
    duration: "",
    status: "planned",
    blurb:
      "'You lean on others' strength,' says Shumbha. 'I am alone in this world,' says the Devi — and all the Mothers return into her.",
  },
  {
    id: "13",
    slug: "the-promise",
    title: "The Promise",
    sanskrit: "नारायणीस्तुतिः",
    chapter: "Devī Māhātmyam · Chapters 11–13",
    duration: "",
    status: "planned",
    blurb:
      "The gods sing to Narayani. The Devi promises to return whenever the world needs her — and the king and the merchant receive their boons.",
  },
];
