export const howItWorksSteps = [
  {
    step: "01",
    title: "Call or Text",
    description:
      "Tell us about your place and what you want to make shine. Only takes about a minute.",
  },
  {
    step: "02",
    title: "We Arrange a Quote",
    description:
      "Either an in-person estimate or over the phone, you get a free no-obligation quote.",
  },
  {
    step: "03",
    title: "We Shine",
    description: "A uniformed, insured crew arrives on time and details every surface.",
  },
  {
    step: "04",
    title: "You Relax",
    description:
      "Streak-free guarantee. Love it, or we come back and re-clean for free.",
  },
];

export const membershipPlans = [
  {
    name: "Bi-Annual",
    saving: "$50 Off",
    featured: false,
    perks: [
      { included: true, label: "FREE RainBlock Tech" },
      { included: false, label: "FREE Hard Water Removal" },
      { included: false, label: "7-Day Rain Guarantee" },
    ],
  },
  {
    name: "Quarterly",
    saving: "$100 Off",
    featured: true,
    perks: [
      { included: true, label: "FREE RainBlock Tech" },
      { included: true, label: "FREE Hard Water Removal" },
      { included: true, label: "7-Day Rain Guarantee" },
    ],
  },
  {
    name: "Monthly",
    saving: "$100 Off",
    featured: false,
    perks: [
      { included: true, label: "FREE RainBlock Tech" },
      { included: true, label: "FREE Hard Water Removal" },
      { included: true, label: "7-Day Rain Guarantee" },
    ],
  },
];

export const serviceFaqs = [
  {
    question: (short) => `How long does a ${short.toLowerCase()} visit take?`,
    answer:
      "Most homes take between one and three hours depending on size and access. We give you a clear time window when we confirm your quote.",
  },
  {
    question: () => "Do I need to be home?",
    answer:
      "Not necessarily, as long as we can access the areas being cleaned. Many clients leave a gate code and come home to a sparkling result.",
  },
  {
    question: () => "Are you fully insured?",
    answer:
      "Yes. We're fully insured and every job is backed by our 100% satisfaction guarantee, for complete peace of mind.",
  },
  {
    question: () => "What if I'm not 100% happy?",
    answer:
      "Then we make it right. Our satisfaction guarantee means if something isn't perfect, we come back and re-clean it free of charge.",
  },
];

export const reviews = [
  {
    name: "Eleanor M.",
    area: "New Farm",
    text: "The team turned up on time, were genuinely lovely, and our windows have honestly never looked this good, not even when the house was new.",
    stars: 5,
  },
  {
    name: "James & Priya K.",
    area: "Kenmore",
    text: "Booked the quarterly plan after one clean. Frames, tracks, flyscreens, all spotless. You can tell they actually care about the detail.",
    stars: 5,
  },
  {
    name: "Daniel R.",
    area: "Manly",
    text: "They cleaned and re-fitted every fly screen, the airflow and the view through them is night and day. Didn't know screens could look new again.",
    stars: 5,
  },
  {
    name: "Sophie T.",
    area: "Mount Gravatt",
    text: "Our frameless pool fence was caked in calcium and splash marks. They polished it crystal clear, looks brand new. Faultless job.",
    stars: 5,
  },
  {
    name: "Marcus L.",
    area: "Wynnum",
    text: "Salt builds up fast near the beach. These guys are the only ones who get the glass properly clear and keep it that way.",
    stars: 5,
  },
  {
    name: "Hannah W.",
    area: "Chermside",
    text: "They dug years of grime out of the window tracks and they slide like new again. Polite, tidy, and sent before-and-after photos, easiest tradies I've dealt with.",
    stars: 5,
  },
];
