export const profile = {
  hero: {
    name: "Navid Rashid",
    title: "Broker & Sales Director",
    locations: "Toronto · Dubai",
    line: "Independent real estate professional building cross-border investment pathways — from first purchases to landmark developments.",
  },
  snapshot: {
    id: "snapshot",
    eyebrow: "Snapshot",
    title: "Who I am.",
    body: [
      "I'm a Canadian real estate broker and sales director operating between Toronto and Dubai. My work sits at the intersection of high-stakes transactions, brand-led selling, and systems that scale trust before the first meeting.",
      "Clients come for clarity in complex deals. Partners come for someone who can lead a room, build a narrative, and close.",
    ],
  },
  proof: {
    id: "proof",
    eyebrow: "Proof",
    title: "Credibility, at a glance.",
    stats: [
      { value: "$250M+", label: "Career deal volume" },
      { value: "Top 2%", label: "Nationwide · 2021 & 2022" },
      { value: "$400K–$30M", label: "Deal range" },
      { value: "2018", label: "Independent since" },
    ],
  },
  experience: {
    id: "experience",
    eyebrow: "Experience",
    title: "Roles that shaped the work.",
    roles: [
      {
        role: "Sales Director",
        org: "CG Developers",
        meta: "Dubai · Present",
        bullets: [
          "Leading sales on the first JW Marriott-branded private residences on Dubai Islands.",
          "Flagship project with AED 400M gross development value.",
          "Building investor pathways for clients thinking beyond a single market.",
        ],
      },
      {
        role: "Real Estate Broker",
        org: "Independent",
        meta: "Toronto & Dubai · 2018–Present",
        bullets: [
          "Closed deals from approachable entries to landmark luxury across off-plan, pre-construction, and assignment sales.",
          "Recognized among the top 2% of agents nationwide (2021, 2022); top 5% in 2020.",
          "Built a personal brand and content engine that earns trust before the first call.",
        ],
      },
      {
        role: "Founder",
        org: "VVS Vapes",
        meta: "Toronto · Exited at 21",
        bullets: [
          "Built a retail-meets-café brand incubator and partnered with labs to launch 30 proprietary brands.",
          "Owned identity through production — design meeting commercial execution.",
          "Exited after two years of rapid growth as the market shifted.",
        ],
      },
    ],
  },
  accomplishments: {
    id: "accomplishments",
    eyebrow: "Accomplishments",
    title: "Selected results.",
    items: [
      {
        title: "Career volume",
        detail: "$250M+ in closed real estate transactions across two markets.",
      },
      {
        title: "National ranking",
        detail: "Top 2% nationwide in 2021 and 2022; Top 5% in 2020.",
      },
      {
        title: "Flagship development",
        detail:
          "Sales leadership on JW Marriott private residences — Dubai Islands.",
      },
      {
        title: "Entrepreneurial exit",
        detail: "Founded and exited VVS Vapes at 21 after scaling brand and product.",
      },
    ],
  },
  approach: {
    id: "approach",
    eyebrow: "Approach",
    title: "How I work.",
    lead: "Creative instinct with commercial discipline — brand, content, CRM, and acquisition systems that support the deal, not distract from it.",
    capabilities: [
      "Brand strategy & creative direction",
      "Content systems & YouTube",
      "Paid acquisition",
      "CRM & funnel automation",
      "Off-plan & pre-construction advisory",
      "Cross-border client leadership",
    ],
  },
  beyond: {
    id: "beyond",
    eyebrow: "Beyond the desk",
    title: "Character outside the transaction.",
    body: "Member of the Constantine Yorkville Run — contributing alongside 30+ charities, with a mandate to beat last year's impact every year. Community is part of the standard, not a side note.",
  },
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Let's talk.",
    lead: "Open to select opportunities, partnerships, and conversations across Toronto and Dubai.",
  },
} as const;
