export const movingPage = {
  hero: {
    kicker: "Moving to Dubai",
    title: "Moving to Dubai?",
    subtitle: "Do it in the right order.",
    lead: "Most people lose their first month to the wrong order of things: the wrong area, the wrong lease, the wrong call. I moved from Toronto in 2023, and I help people make the same move without the guesswork.",
    image: {
      src: "/images/atlantis-royal.jpg",
      alt: "Atlantis The Royal on the Palm Jumeirah at dusk",
    },
    primary: {
      label: "Talk to me",
      message: "Hi Navid, I'm thinking of moving to Dubai.",
    },
    secondary: { label: "Why Dubai?", href: "#why" },
  },
  why: {
    id: "why",
    title: "Why Dubai?",
    subtitle: "The real reasons.",
    tax: {
      stat: "0%",
      label: "personal income tax",
      title: "Keep what you earn.",
      line: "The UAE doesn't tax personal income, and there's no capital gains tax on property.",
    },
    safety: {
      title: "One of the safest cities in the world.",
      line: "Dubai is widely ranked among the safest cities anywhere, with very low violent crime. It's a big part of why families move here.",
    },
    visas: {
      title: "Residency, three ways.",
      routes: [
        { name: "Employment", line: "Your employer sponsors your visa." },
        {
          name: "Your own company",
          line: "Set up in a free zone or on the mainland, with full foreign ownership for most businesses.",
        },
        {
          name: "Property",
          wide: true,
          line: "Buy property in the UAE and residency can come with it. The qualifying amount is the property’s value, so a mortgage-financed purchase can still qualify, subject to your bank’s approval and the current rules.",
          tiers: [
            { value: "AED 750,000", label: "2-year residency visa" },
            { value: "AED 2M", label: "10-year Golden Visa" },
          ],
        },
      ],
      note: "Requirements change, so I check the current rules with you before you commit.",
    },
    freehold: {
      title: "Own it outright.",
      line: "Foreigners can buy freehold with full ownership, in designated areas.",
    },
    peg: {
      title: "Pegged to the dollar.",
      from: { unit: "US$", value: "1" },
      to: { unit: "AED", value: "3.67" },
      line: "The dirham is pegged to the US dollar.",
    },
    hub: {
      title: "Connected to everything.",
      line: "One of the world's busiest airports, with direct flights to most major cities.",
    },
    business: {
      title: "Easy to build in.",
      line: "Full foreign ownership is possible for businesses, and there are free zones built for specific industries.",
    },
    life: {
      title: "Life, made easy.",
      line: "Sunshine most of the year, English spoken everywhere, and international schools in British, American and IB curricula.",
    },
  },
  order: {
    title: "The first month,",
    subtitle: "in order.",
    steps: [
      {
        title: "Before you land",
        line: "Get clear on your budget, your timeline and the life you want. Shortlist two or three areas. Ask before you book, sign or send money to anyone.",
      },
      {
        title: "Your first week",
        line: "See your shortlist in person, at different times of day. Walk the streets, check the commute and talk to people who live there.",
      },
      {
        title: "Where you live",
        line: "Rent first or buy? I'll tell you what fits your situation, and go through the details with you before you sign anything.",
      },
      {
        title: "The setup",
        line: "The rest of the admin has to happen in a sensible order. I'll walk you through what comes first, so nothing gets missed.",
      },
      {
        title: "Once you're settled",
        line: "When life is running, we can look at property as an investment, off-plan or ready, properly and without pressure.",
      },
    ],
  },
  cta: {
    title: "Start with a message.",
    line: "Tell me where you are in the move, and I'll tell you what I'd do next.",
    label: "Message me",
    message: "Hi Navid, I'm thinking of moving to Dubai.",
    image: "/images/burj-al-arab.jpg",
  },
} as const;
