const img = (
  src: string,
  alt: string,
  width: number,
  height: number,
) => ({ src, alt, width, height });

export const aboutPage = {
  intro: {
    kicker: "About",
    title: "Excuses don't close deals.",
    subtitle: "Preparation does.",
    lead: "Nine years in real estate, two countries and a few companies later, the method hasn't changed. Show up prepared. Tell the truth. Close it clean.",
    image: img(
      "/images/portraits/about-sofa.jpg",
      "Navid Rashid seated on a cream sofa in a black suit against a grey panelled wall",
      1333,
      2000,
    ),
    facts: [
      { value: "$250M+", label: "career deal volume" },
      { value: "Top 2%", label: "of agents in Canada, twice" },
    ],
  },
  chapters: [
    {
      id: "origin",
      year: "Origin",
      title: "I come from humble beginnings.",
      subtitle: "Kurdish by descent, raised in Canada.",
      paragraphs: [
        "I'm Kurdish by descent, and I've lived in Canada since I was two years old. I didn't grow up with much, and I don't say that for sympathy. It's the reason I work the way I do.",
        "I tell the truth, even when a softer answer would be easier. And I almost always give more than I get. It's probably my biggest weakness, and it's also why people trust me.",
      ],
      facts: [],
      photos: [],
    },
    {
      id: "sales",
      year: "2016",
      title: "I started selling at 16.",
      subtitle: "And I haven't stopped.",
      paragraphs: [
        "I've ranked number one in sales in every corporate role I've held. At Glentel I sold phone plans and home services through cold outreach and social media, and I consistently ranked among the top 30 for gross commission earnings.",
        "I started with nothing, and that taught me the only edge that lasts: keep moving.",
      ],
      facts: [],
      photos: [
        img(
          "/images/portraits/about-glentel.jpg",
          "A young Navid Rashid selling phones at a Glentel mall kiosk",
          2000,
          1500,
        ),
        img(
          "/images/portraits/about-glentel-2.jpg",
          "A young Navid Rashid helping a customer on a laptop inside a Glentel store",
          2000,
          1500,
        ),
      ],
      row: 2,
    },
    {
      id: "toronto",
      year: "2017",
      title: "Then I found real estate.",
      subtitle: "Toronto's off-plan market first.",
      paragraphs: [
        "I started at Cloud Realty on a dedicated development team, specializing in off-plan and pre-construction across the GTA. I closed $20M in my first year through cold calling, lead generation and digital marketing.",
        "Off-plan is a different kind of selling. There's nothing to walk through, only floor plans, a model in a sales gallery and your word. I learned to read a project before it was built, explain it clearly and earn a buyer's trust on something that didn't exist yet. It's the foundation for everything I've done since.",
      ],
      facts: [
        { value: "$20M", label: "closed in my first year" },
        { value: "13", label: "off-plan deals closed" },
      ],
      photos: [
        img(
          "/images/portraits/hero-toronto.jpg",
          "Navid Rashid in a camel coat walking in downtown Toronto with the CN Tower behind him",
          2000,
          2800,
        ),
        img(
          "/images/portraits/about-showroom.jpg",
          "Navid Rashid standing beside a condo model in a sales gallery",
          1500,
          2000,
        ),
      ],
      row: 2,
    },
    {
      id: "homelife",
      year: "2018",
      title: "Then I moved into resale.",
      subtitle: "Homelife Bayview.",
      paragraphs: [
        "At Homelife Bayview I moved into resale and brokered $40M+ across both markets.",
        "It's also where I started my YouTube channel. Market breakdowns, deal strategy and property tours, all shot and edited by me. It was the first time I treated content as part of the job, and it's how clients started arriving already knowing how I think.",
      ],
      facts: [
        { value: "$40M+", label: "brokered across both markets" },
        { value: "2 markets", label: "off-plan and resale" },
      ],
      photos: [
        img(
          "/images/portraits/about-homelife.jpg",
          "A modern luxury home in Toronto with a white Tesla parked out front",
          1242,
          809,
        ),
        img(
          "/images/portraits/about-homelife-2.jpg",
          "A Rashid Brothers flyer from Homelife Bayview Realty: We will get your home sold",
          768,
          1024,
        ),
      ],
      row: 2,
    },
    {
      id: "vvs",
      year: "2019",
      title: "I built a company, too.",
      subtitle: "VVS Vapes, Toronto.",
      paragraphs: [
        "At 21 years of age, I opened VVS Vapes, a retail store and café where the floor doubled as a brand incubator. We partnered with labs to launch 30 proprietary brands, and I owned the work from identity through production.",
        "It passed $600,000 in revenue in its first year and won the award for most creative storefront design in the vaping industry. I sold the company after one year.",
        "The point was never only to open a store. It was to prove I could build a brand end to end.",
      ],
      facts: [
        { value: "$600K+", label: "revenue in year one" },
        { value: "30", label: "proprietary brands launched" },
        { value: "Sold", label: "the company after one year" },
      ],
      photos: [
        img("/images/vvs-vapes/store-lounge.jpg", "VVS Vapes lounge with mural, product wall, and seating", 4032, 3024),
        img("/images/vvs-vapes/store-counter.jpg", "VVS Vapes retail counter with bar stools and product displays", 4032, 3024),
        img("/images/vvs-vapes/store-bar.jpg", "VVS Vapes service bar with illuminated shelves and brand screen", 4032, 3024),
        img("/images/vvs-vapes/store-mural.jpg", "Street-art mural wall inside VVS Vapes with e-liquid displays", 4032, 3024),
        img("/images/vvs-vapes/product-lineup.jpg", "VVS Premium e-liquid lineup with branded silicone bands", 4032, 3024),
        img("/images/vvs-vapes/valentines-giveaway.jpg", "VVS Vapes Valentine's giveaway campaign creative", 1600, 900),
      ],
      row: 3,
    },
    {
      id: "launches",
      year: "2020",
      title: "I learned to run a launch.",
      subtitle: "Not just close my own deals.",
      paragraphs: [
        "At Ferrow Real Estate I became Head of Sales, and developers started retaining me to lead sales on their buildings. I never stopped brokering, though. I kept closing my own deals alongside the launches, including the biggest one of my career, a $25M USD sale.",
        "8188 Yonge by Constantine was a landmark launch. I personally brokered 25+ units, more than 10% of the building, while running an outside broker network that took the project to 90% sold in 120 days.",
        "On Hills on Bayview by Armour Heights, I closed out the townhome development: 100+ units and $125M+ in sales.",
        "In 2021 and 2022 I ranked in the top 2% of agents in Canada, with the Emerald Award (2021) and the Diamond Award (2022) along the way.",
      ],
      facts: [
        { value: "25+", label: "units personally brokered at 8188 Yonge" },
        { value: "90%", label: "of 8188 Yonge sold in 120 days" },
        { value: "Top 2%", label: "in Canada, 2021 and 2022" },
      ],
      photos: [
        img(
          "/images/portraits/gallery-8188-yonge-groundbreaking.jpg",
          "8188 Yonge Street groundbreaking ceremony with Constantine and Trulife Developments",
          1440,
          1440,
        ),
        img(
          "/images/portraits/gallery-ferrow-awards.avif",
          "Navid Rashid holding an award with colleagues at an industry event",
          1179,
          1176,
        ),
      ],
      row: 2,
    },
    {
      id: "dubai",
      year: "2023",
      title: "Then I moved to Dubai.",
      subtitle: "And the deals got bigger.",
      paragraphs: [
        "I landed in 2023 at MG Properties, advising high-net-worth Canadian clients on portfolio allocation and investment, and facilitating over AED 100M in transactions.",
        "Then I was recruited to lead sales on the first JW Marriott-branded private residences on Dubai Islands, a CG Developers project with an AED 400M gross development value. I built the sales team from the ground up and ran luxury pricing, pipeline, broker engagement, ownership meetings, investor presentations and the launch itself.",
        "Today I'm at Driven Properties, a Forbes Global Properties firm.",
      ],
      facts: [
        { value: "AED 400M", label: "JW Marriott Residences, gross development value" },
        { value: "AED 100M+", label: "in transactions at MG Properties" },
        { value: "$250M+", label: "career deal volume to date" },
      ],
      photos: [
        img(
          "/images/portraits/gallery-jw-marriott.jpg",
          "Navid Rashid presenting the JW Marriott Residences at Dubai Islands",
          3584,
          4800,
        ),
        img(
          "/images/portraits/gallery-dubai-penthouse.jpg",
          "Navid Rashid in a Dubai penthouse overlooking the skyline",
          2976,
          1648,
        ),
      ],
      row: 2,
    },
    {
      id: "luxury",
      year: "Luxury",
      title: "My focus is the top of the market.",
      subtitle: "Where trust matters most.",
      paragraphs: [
        "Luxury is where one decision carries serious capital, and where the buyer notices everything. I work both sides of Dubai's market, off-plan and secondary, and my deals have ranged from $400K to $25M.",
        "At this level the details are the job: pricing that holds, a presentation that matches the product, and a senior person on every conversation from the first call to the handover.",
        "Branded residences and ultra-luxury launches have been at the centre of my work in Dubai.",
      ],
      facts: [
        { value: "$25M", label: "USD, my largest single deal" },
        { value: "$400K–$25M", label: "USD, the range I've closed" },
      ],
      photos: [
        img(
          "/images/portraits/about-luxury-1.jpg",
          "Navid Rashid seated on a cream sofa in black, against a grey panelled wall",
          1333,
          2000,
        ),
        img(
          "/images/portraits/about-luxury-2.jpg",
          "Black and white portrait of Navid Rashid seated in a room with a marble bust and fireplace",
          1333,
          2000,
        ),
      ],
      row: 2,
    },
    {
      id: "craft",
      year: "The craft",
      title: "I make things, too.",
      subtitle: "Software, design, content and stages.",
      paragraphs: [
        "The close is the last five percent. Everything before it is the engine: brand strategy, creative direction, content, CRM and paid acquisition.",
        "But creating is what I love most. I design and build software and websites, this one included, and I write, shoot and edit my own content. Clients arrive already knowing how I think.",
        "I also love the stage. I speak in public, and I make time to motivate the younger generation coming up behind me.",
      ],
      facts: [],
      photos: [
        img(
          "/images/portraits/about-laptop.jpg",
          "Navid Rashid working on a laptop on a cream sofa",
          1333,
          2000,
        ),
        img(
          "/images/portraits/portrait-camera.jpg",
          "Navid Rashid with a camera, creating content",
          1200,
          1800,
        ),
      ],
      row: 2,
    },
  ],
  now: {
    title: "Right now.",
    subtitle: "Two things, both in Dubai.",
    items: [
      {
        name: "Driven Properties",
        role: "Forbes Global Properties",
        line: "Buying, investing, selling, renting and managing property in Dubai. The person on your deal is me.",
        cta: { label: "Back to the desk", href: "/#driven", external: false },
      },
      {
        name: "Vessbook",
        role: "CTO & Co-Founder",
        line: "A platform for how oil tankers get chartered, bringing owners, brokers and traders into one place. A startup.",
        cta: { label: "Visit vessbook.com", href: "https://vessbook.com", external: true },
      },
    ],
  },
  record: {
    title: "The full record.",
    subtitle: "Roles, in order.",
  },
} as const;
