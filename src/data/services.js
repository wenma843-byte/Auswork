/**
 * Five specialist window services — slugs used in /services/[slug]
 */
export const services = [
  {
    slug: "interior-window-cleaning",
    name: "Interior Window Cleaning",
    short: "Interior Windows",
    tagline: "Crystal-clear glass from the inside.",
    blurb:
      "Smudges, dust and fingerprints gone, interior glass cleaned and hand-detailed so every room feels brighter.",
    intro:
      "The inside of your glass cops fingerprints, dust, cooking film and the odd pet nose-print. We hand-clean every interior pane, wipe the sills and detail the edges, leaving rooms brighter and glass invisibly clear, shoes off and floors protected the whole time.",
    included: [
      "Interior glass, edge to edge",
      "Sills & ledges wiped down",
      "Shoe-off, floors protected",
      "Streak-free finish",
    ],
    result: "Rooms that feel brighter the moment we leave.",
    ctaHeading: "Ready for spotless interior windows?",
  },
  {
    slug: "exterior-window-cleaning",
    name: "Exterior Window Cleaning",
    short: "Exterior Windows",
    tagline: "Spotless glass, top to bottom.",
    blurb:
      "Pure-water poles reach every exterior pane up to four storeys, no ladders, no marks, no streaks.",
    intro:
      "Salt and grime build up fast on Brisbane's exterior glass. Our water-fed pure-water poles safely reach up to four storeys from the ground, lifting the build-up and drying spot-free with no detergents and no ladder marks on your home.",
    included: [
      "Exterior glass up to 4 storeys",
      "Pure-water pole system",
      "Frames & sills rinsed",
      "Salt & grime removal",
      "Holsters",
      "No ladders, no marks",
      "Spot-free dry",
    ],
    result: "Glass so clear you'll forget it's even there.",
    ctaHeading: "Ready for spotless exterior windows?",
  },
  {
    slug: "track-cleaning",
    name: "Track Cleaning",
    short: "Track Cleaning",
    tagline: "The detail everyone else skips.",
    blurb:
      "Window and door tracks dug out, scrubbed and vacuumed so they run smooth and look brand new.",
    intro:
      "Tracks are where the grime hides, dirt, leaves, dead bugs and grit that jam your windows and doors. We dig them out, scrub the channels and vacuum every corner so they slide smoothly and look factory-fresh again.",
    included: [
      "Window & sliding-door tracks",
      "Dirt, grit & debris removed",
      "Channels scrubbed clean",
      "Vacuumed & wiped dry",
      "Smooth-sliding finish",
      "Corner detail",
    ],
    result: "Tracks that slide like the day they were installed.",
    ctaHeading: "Ready for spotless tracks?",
  },
  {
    slug: "screen-cleaning",
    name: "Screen Cleaning",
    short: "Screen Cleaning",
    tagline: "Fly screens that breathe again.",
    blurb:
      "Screens removed, washed, de-dusted and re-fitted, clearer views and better airflow through every window.",
    intro:
      "Fly screens trap a surprising amount of dust, pollen and cobwebs that dull your view and choke the airflow. We carefully remove each screen, wash and de-dust the mesh, then re-fit it, so you get clearer views and fresh air moving through the house again.",
    included: [
      "Screens removed & washed",
      "Mesh de-dusted & rinsed",
      "Frames wiped down",
      "Cobweb removal",
      "Carefully re-fitted",
      "Clearer views & airflow",
    ],
    result: "Clearer views and fresh air through every window.",
    ctaHeading: "Ready for spotless screens?",
  },
  {
    slug: "pool-glass-cleaning",
    name: "Pool Glass Cleaning",
    short: "Pool Glass",
    tagline: "Frameless glass without a smudge.",
    blurb:
      "Glass pool fencing and balustrades polished streak-free, with calcium and splash marks lifted away.",
    intro:
      "Frameless glass pool fencing shows every splash, fingerprint and calcium spot. We clean and polish both sides streak-free, lift hard-water and mineral marks, and leave your pool surrounds razor-sharp, so the glass disappears and the view doesn't.",
    included: [
      "Both sides polished clear",
      "Calcium & splash marks lifted",
      "Frameless & semi-frameless",
      "Balustrades wiped",
      "Streak-free finish",
      "Hard-water treatment",
    ],
    result: "Pool glass so clear it almost isn't there.",
    ctaHeading: "Ready for spotless pool glass?",
  },
];

/** Short labels for homepage pills */
export const windowSpecialties = services.map((s) => ({
  slug: s.slug,
  title: s.short,
}));

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug) ?? null;
}

export function getOtherServices(slug) {
  return services.filter((s) => s.slug !== slug);
}
