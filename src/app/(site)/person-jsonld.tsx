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
    jobTitle: "Real Estate Broker",
    description:
      "Canadian real estate broker and entrepreneur based in Dubai. Off-plan, secondary market and luxury property in Dubai and Toronto.",
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
      name: "Driven Properties",
      url: "https://www.drivenproperties.com/",
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
