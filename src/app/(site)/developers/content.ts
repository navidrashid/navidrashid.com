const img = (src: string, alt: string, width: number, height: number) => ({
  src,
  alt,
  width,
  height,
});

export const developersPage = {
  hero: {
    kicker: "Selected work",
    title: "Selected work.",
    subtitle: "Proof, not promises.",
    lead: "Three launches, a decade of deals and the numbers behind them. Here's what I actually did on each one.",
  },
  projects: [
    {
      id: "jw-marriott",
      name: "JW Marriott Residences",
      place: "Dubai Islands, Dubai",
      client: "CG Developers",
      role: "Sales Director",
      period: "2025 — 2026",
      headline: "The first JW Marriott-branded private residences on Dubai Islands.",
      stats: [
        { value: "AED 400M", label: "gross development value" },
        { value: "First", label: "JW Marriott-branded residences on Dubai Islands" },
      ],
      did: [
        "Built the sales team from the ground up.",
        "Set luxury pricing and built the pipeline.",
        "Brought brokers across the market on board.",
        "Ran ownership meetings and investor presentations.",
        "Led the launch activations.",
      ],
      photos: [
        img(
          "/images/portraits/gallery-jw-marriott.jpg",
          "Navid Rashid presenting the JW Marriott Residences at Dubai Islands",
          3584,
          4800,
        ),
        img(
          "/images/portraits/gallery-jw-groundbreaking.jpg",
          "JW Marriott Residences groundbreaking ceremony with CG Developers at Dubai Islands",
          4032,
          3024,
        ),
      ],
    },
    {
      id: "8188-yonge",
      name: "8188 Yonge",
      place: "Toronto",
      client: "Constantine",
      role: "Senior Sales Manager",
      period: "2020 — 2021",
      headline: "Retained by the developer to lead sales.",
      stats: [
        { value: "90%", label: "sold in 120 days" },
        { value: "25+", label: "units brokered personally" },
        { value: "10%+", label: "of the building, on my own" },
      ],
      did: [
        "Led sales for the developer.",
        "Personally brokered 25+ units, more than 10% of the building.",
        "Built and ran the outside broker network that carried the project.",
      ],
      photos: [
        img(
          "/images/portraits/gallery-8188-yonge-groundbreaking.jpg",
          "8188 Yonge Street groundbreaking ceremony with Constantine and Trulife Developments",
          1440,
          1440,
        ),
        img(
          "/images/portraits/gallery-8188-yonge-award.jpg",
          "Outstanding Achievement award for Navid Rashid at 8188 Yonge Street, 2020",
          6000,
          4000,
        ),
      ],
    },
    {
      id: "hills-on-bayview",
      name: "Hills on Bayview",
      place: "Toronto",
      client: "Armour Heights Developments",
      role: "Senior Sales Manager",
      period: "2021",
      headline: "Closed out the townhome development.",
      stats: [
        { value: "100+", label: "units" },
        { value: "$125M+", label: "in sales" },
      ],
      did: [
        "Ran the in-house sales operation.",
        "Handled broker relations and client consultations.",
        "Worked alongside the development team from the developer's side.",
      ],
      photos: [
        img(
          "/images/portraits/work-hills-model.jpg",
          "Navid Rashid pointing at the Hills on Bayview townhome model in the sales centre",
          1500,
          2000,
        ),
        img(
          "/images/portraits/work-hills-render.jpg",
          "Rendering of the Hills on Bayview townhomes",
          1200,
          800,
        ),
      ],
    },
  ],
  record: {
    title: "The record.",
    subtitle: "Recognition along the way.",
    items: [
      { value: "Top 2%", label: "of agents in Canada, 2021 and 2022" },
      { value: "Diamond", label: "Award, 2022" },
      { value: "Emerald", label: "Award, 2021" },
      { value: "Top 5%", label: "of agents in Canada, 2020" },
    ],
  },
  cta: {
    title: "Have a launch coming up?",
    line: "Developers bring me in to build the sales team and run the launch. Tell me about the project.",
    label: "Message me",
    message: "Hi Navid, I have a project I'd like to talk to you about.",
  },
} as const;
