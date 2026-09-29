import { home } from "@/content/home";

const alt = (src: string) =>
  home.gallery.images.find((image) => image.src === src)?.alt ?? "";

const photo = (
  file: string,
  caption: string,
  width: number,
  height: number,
  altText?: string,
) => {
  const src = `/images/portraits/${file}`;
  return { src, alt: altText ?? alt(src), caption, width, height };
};

export const revamp = {
  hero: {
    subtitle: "Canadian Broker & Entrepreneur",
    /** More than one line rotates; one stays put. */
    lines: ["Canadian Broker & Entrepreneur"],
  },
  about: {
    id: "about",
    kicker: "About",
    statement: [
      "Trust is the only currency in this business. Nine years in, I've earned it the same way every time: show up prepared, tell the truth, close it clean.",
      "My focus is luxury and new development, from first investments to landmark residences.",
    ],
    stats: [
      {
        value: "$250M+",
        currency: "USD",
        label: "in career deal volume, across Toronto and Dubai.",
      },
      { value: "Top 2%", label: "of agents in Canada, in 2021 and 2022." },
      { value: "$25M", currency: "USD", label: "my largest single deal." },
    ],
    image: {
      src: "/images/portraits/portrait-smile.jpg",
      alt: "Portrait of Navid Rashid",
    },
    cta: { label: "Learn more", href: "/about" },
    story: {
      lead: "The full story.",
      line: "From Toronto to Dubai, and everything in between.",
    },
    developers: {
      kicker: "For developers",
      title: "Developers bring me in when a launch needs someone who can",
      emphasis: "actually sell it.",
      lead: "I've led sales on launches in Toronto and Dubai: the team, the pricing and the broker network.",
      cta: { label: "See the work", href: "/developers" },
    },
  },
  driven: {
    id: "driven",
    title: "Driven Properties.",
    subtitle: "Whatever you're doing with property in Dubai.",
    lead: "Driven is a Forbes Global Properties firm. Whichever way you come in, the person you deal with from the first call to the keys is me.",
    logo: {
      src: "/images/driven-logo.png",
      alt: "Driven Properties, Forbes Global Properties",
      width: 1143,
      height: 301,
    },
    site: { label: "drivenproperties.com", href: "https://www.drivenproperties.com/" },
    paths: [
      { name: "Buy", line: "The right place, at the right price.", message: "Hi Navid, I'm looking to buy in Dubai." },
      { name: "Invest", line: "Yield, growth and an exit plan before you commit.", message: "Hi Navid, I'm looking to invest in Dubai property." },
      { name: "Sell", line: "Priced right, presented well, closed clean.", message: "Hi Navid, I'd like to sell my property in Dubai." },
      { name: "Rent", line: "Good tenants at a fair rent, with no chasing.", message: "Hi Navid, I'm looking to rent in Dubai." },
      { name: "Manage", line: "It stays running while you get on with life.", message: "Hi Navid, I'd like help managing my Dubai property." },
    ],
  },
  moving: {
    id: "moving",
    title: "Thinking of moving to Dubai?",
    subtitle: "I can help with that too.",
    lead: "Buying or renting is the easy part. The first month is where people lose time. I'll help you get the order right.",
    cta: { label: "See how it works", href: "/moving-to-dubai" },
    image: {
      src: "/images/atlantis-royal.jpg",
      alt: "Atlantis The Royal on the Palm Jumeirah at dusk",
    },
  },
  gallery: {
    id: "gallery",
    title: "Out in the field.",
    subtitle: "Launches, groundbreakings, closing days.",
    photos: [
      photo("gallery-jw-marriott.jpg", "JW Marriott Residences launch, Dubai Islands", 3584, 4800),
      photo("gallery-dubai-penthouse.jpg", "Touring a Dubai penthouse", 2976, 1648),
      photo("gallery-jw-groundbreaking.jpg", "JW Marriott Residences groundbreaking", 4032, 3024),
      photo("gallery-cg-developers.jpg", "CG Developers showroom", 4032, 3024),
      photo("gallery-3s-presentation.jpg", "Presenting to the sales floor", 910, 1430),
      photo("gallery-priced-to-sell-podcast.jpg", "Hosting Priced to Sell", 1125, 818),
      photo("gallery-with-kris.jpg", "At a luxury sales centre", 5712, 4284),
      photo("portrait-camera.jpg", "Behind the camera", 1200, 1800),
      photo("hero-toronto.jpg", "Toronto, where it started", 2000, 2800, "Navid Rashid in a camel coat walking in downtown Toronto with the CN Tower behind him"),
      photo("gallery-8188-yonge-groundbreaking.jpg", "8188 Yonge groundbreaking, Toronto", 1440, 1440),
      photo("gallery-8188-yonge-award.jpg", "Outstanding Achievement, 8188 Yonge, 2020", 6000, 4000),
      photo("gallery-ferrow-awards.avif", "Awards night with the Ferrow team", 1179, 1176),
      photo("gallery-ferrow-trophies.jpg", "Ferrow team awards", 4032, 3024),
      photo("gallery-ferrow-stadium-event.jpg", "Ferrow team celebration", 1440, 1439),
      photo("gallery-ferrow-point.jpg", "At a Ferrow Real Estate event", 4032, 3024),
      photo("gallery-industry-lounge.jpg", "Industry event", 1179, 2351),
      photo("gallery-opus-homes-seaton.jpg", "Closing gifts with Opus Homes Seaton", 1440, 1439),
      photo("gallery-sold-sign-install.jpg", "Sold topper going up", 4032, 3024),
      photo("gallery-sold-over-asking.jpg", "Sold over asking", 912, 1498),
      photo("gallery-sold-york-condos.jpg", "Closing day in Toronto", 2160, 1440),
      photo("gallery-sold-downtown.jpg", "Closing day downtown", 4032, 3024),
      photo("gallery-sold-waterfront.jpg", "Closing day by the water", 1440, 1440),
      photo("gallery-sold-townhouse.jpg", "Sold townhouse closing", 4032, 3024),
      photo("gallery-sold-house-dusk.jpg", "Sold, at dusk", 4032, 3024),
      photo("gallery-sold-brick-house.jpg", "Sold brick house", 1440, 1440),
      photo("gallery-sold-with-client.jpg", "Closing with a client", 4032, 3024),
      photo("gallery-sold-with-partner.jpg", "Closing with a partner", 1440, 1461),
      photo("gallery-sold-1900.jpg", "Closing day", 1440, 1440),
    ],
  },
  links: {
    title: "Navid Rashid",
    subtitle: "Canadian Broker & Entrepreneur",
    items: [
      {
        name: "WhatsApp",
        line: "The fastest way to reach me",
        message: "Hi Navid, I found you through Instagram.",
      },
      {
        name: "Vessbook",
        line: "CTO & Co-Founder, oil tanker chartering",
        href: "https://vessbook.com",
      },
      {
        name: "YouTube",
        line: "Market breakdowns and property tours",
        href: "https://www.youtube.com/@navidrashid",
      },
      {
        name: "Full website",
        line: "The story, the work and how to reach me",
        href: "https://www.navidrashid.com",
      },
    ],
  },
  vessbook: {
    id: "vessbook",
    kicker: "Also building",
    title: "Vessbook.",
    role: "CTO & Co-Founder",
    status: "Startup",
    lead: "Oil tankers still get chartered through endless phone calls and scattered messages. Vessbook brings tanker owners, brokers and traders onto one platform, built for how the trade actually moves.",
    site: { label: "Visit vessbook.com", href: "https://vessbook.com" },
    logo: {
      src: "/images/vessbook-logo.png",
      alt: "Vessbook",
      width: 6336,
      height: 2688,
    },
  },
  youtube: {
    id: "youtube",
    title: "On YouTube.",
    subtitle: "Meet how I think before we talk.",
    lead: "Market breakdowns, deal strategy and property tours, shot and edited by me. Every video has two jobs: help you make a sharper decision, and prove the expertise behind it.",
    badge: "On a short break. New videos coming.",
    cta: "Visit the channel",
    video: { id: "1sOW_79A3qg", title: "Navid Rashid on YouTube", start: 336 },
  },
  close: {
    id: "contact",
    title: "Let's talk.",
    lead: "Property, a move or just a question. Reach me whichever way suits you.",
    image: {
      src: "/images/portraits/portrait-library.jpg",
      alt: "Navid Rashid seated in front of a library wall, smiling",
    },
  },
} as const;
