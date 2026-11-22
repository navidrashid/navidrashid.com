import { site } from "@/content/site";

/** Structured data so search engines connect the site to the person. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#navid-rashid`,
    name: site.name,
    url: site.url,
    image: `${site.url}/images/portraits/portrait-smile.jpg`,
    jobTitle: "Entrepreneur & Real Estate Expert",
    description:
      "Canadian entrepreneur and real estate expert based in Dubai. Founder of Keybox, the UAE's dedicated off-plan portal.",
    nationality: { "@type": "Country", name: "Canada" },
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    worksFor: {
      "@type": "Organization",
      name: "Keybox",
      url: "https://keybox.ae",
    },
    sameAs: [site.socials.instagram, site.socials.linkedin, site.socials.youtube],
    knowsAbout: [
      "Dubai real estate",
      "Off-plan property",
      "Luxury real estate",
      "Property investment",
      "Toronto real estate",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
