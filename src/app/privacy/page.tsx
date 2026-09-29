import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { site } from "@/content/site";
import styles from "./privacy.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const privacyEmail = "navidrashid.dxb@gmail.com";
const whatsapp = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
  "Hi Navid, I have a question about your privacy policy.",
)}`;

/**
 * Kept out of search results on purpose. Crawling stays allowed in robots.txt,
 * because a blocked URL can still be indexed from external links and Google can
 * only honour `noindex` on a page it is permitted to fetch.
 */
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name}'s website and advertising handle your information.`,
  alternates: { canonical: "/privacy" },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

const toc = [
  ["scope", "Who this covers"],
  ["collect", "Information I collect"],
  ["cookies", "Cookies and similar technologies"],
  ["ads", "Advertising on other platforms"],
  ["lead-forms", "Lead forms and contact lists"],
  ["use", "How I use information"],
  ["marketing", "Marketing messages"],
  ["legal-bases", "Legal bases"],
  ["sharing", "Who I share it with"],
  ["transfers", "International transfers"],
  ["retention", "How long I keep it"],
  ["security", "Security"],
  ["rights", "Your rights and choices"],
  ["signals", "Do Not Track and privacy signals"],
  ["children", "Children"],
  ["links", "Other websites and services"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact"],
] as const;

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <main className={`${styles.page} ${inter.variable}`} data-page="privacy">
      <div className={styles.column}>
        <Link className={styles.back} href="/">
          <span aria-hidden>←</span> Home
        </Link>

        <p className={styles.kicker}>Legal</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: September 29, 2026</p>

        <p className={styles.lead}>
          This policy explains how {site.name} (“I”, “me”) collects, uses, shares and protects
          personal information when you visit navidrashid.com (the “Site”), contact me, or interact
          with my advertising. I’m based in Dubai, United Arab Emirates, and work with clients in
          the UAE, Canada and around the world.
        </p>

        <div className={styles.note}>
          <p>
            <strong>In short.</strong> The Site has no accounts, sign-up forms or shop. It sets no
            cookies of its own and runs no advertising, remarketing or tracking pixels. I do
            advertise on social platforms such as Meta, and I explain how that works below.
          </p>
        </div>

        <nav className={styles.toc} aria-label="Sections">
          <ul>
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <h2 id="scope">Who this covers</h2>
        <p>
          This policy applies to the Site and to information you give me when you contact me about
          property, moving to Dubai, or any other enquiry, including through WhatsApp, email or
          social media. I aim to handle personal information in line with the laws that apply, which
          may include the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data,
          Canadian privacy laws, and the EU and UK GDPR where they apply to you.
        </p>
        <p>
          <strong>Personal information</strong> means information that identifies you or can
          reasonably be linked to you, such as your name, phone number, email address or IP address.{" "}
          <strong>Non-personal information</strong> is information that cannot identify you, such as
          anonymous or aggregated statistics.
        </p>

        <h2 id="collect">Information I collect</h2>
        <h3>Information you give me</h3>
        <p>
          When you message or email me, or submit a form through an advertisement, I receive what
          you choose to share. That can include your name, phone or WhatsApp number, email address,
          the content of your messages, and details about your enquiry such as your budget, areas of
          interest, timeline, whether you want to buy, invest, sell, rent or move, and your country
          of residence. If we work together, I may also receive documents needed for a transaction.
        </p>
        <p>
          Please don’t send passport or ID scans, bank details or payment card numbers through the
          Site or social media messages. If those are needed for a transaction, I’ll tell you how to
          send them securely.
        </p>
        <h3>Information collected automatically</h3>
        <p>
          When you visit the Site, I and the services I use may receive your IP address (which shows
          an approximate location), device, browser and operating system, the page that referred
          you, the pages you view and when, and how you interact with them, such as clicking a
          WhatsApp button. If you arrive from an advertisement, I may also receive campaign details,
          including tracking parameters and click identifiers added to the link.
        </p>
        <h3>Information from other sources</h3>
        <p>
          I may receive information from advertising platforms (for example, the details you enter
          into a lead form) and from messaging or social platforms when you contact me there, such
          as your profile name and phone number.
        </p>

        <h2 id="cookies">Cookies and similar technologies</h2>
        <p>
          A cookie is a small file stored on your device. Similar technologies include pixels,
          scripts and software development kits that report your activity to a service. They can be
          “session” technologies, which end when you close your browser, or “persistent” ones, which
          stay until they expire or you delete them. I use, or may use, these categories:
        </p>
        <ul>
          <li>
            <strong>Strictly necessary.</strong> Needed for the Site to work. The Site sets none
            today.
          </li>
          <li>
            <strong>Analytics and performance.</strong> Help me understand which pages are used.
            I use Vercel Web Analytics, which does not use cookies, and Google Search Console to
            understand how the Site appears in search, which does not place cookies on you.
          </li>
          <li>
            <strong>Advertising and tracking.</strong> The Site does not load advertising or
            remarketing cookies or pixels from Google, Meta or anyone else.
          </li>
          <li>
            <strong>Embedded media.</strong> The YouTube video on the Site only loads after you
            press play. YouTube (Google) may then store cookies or similar data under its own
            policy.
          </li>
        </ul>
        <p>
          <strong>Managing them.</strong> You can block or delete cookies in your browser settings,
          though some features may then not work. If I ever add a tool that uses cookies, I’ll
          update this page and, where the law requires, ask for your consent first.
        </p>

        <h2 id="ads">Advertising on other platforms</h2>
        <p>
          I advertise on social platforms such as Meta (Facebook and Instagram), and I may also use
          Google, YouTube or LinkedIn. Those ads are shown and measured by the platform, under its
          own privacy policy, on its own apps and websites. The Site itself does not run those
          platforms’ tracking pixels, so they don’t follow you around the Site.
        </p>
        <p>
          When you click one of my ads, the platform knows you clicked, and the link to the Site
          may carry campaign details, such as tracking parameters, so I can tell which ad brought
          you here. You can control the ads you see in{" "}
          <Ext href="https://www.facebook.com/adpreferences/">Meta Ad Preferences</Ext> and{" "}
          <Ext href="https://adssettings.google.com/">Google Ads Settings</Ext>, or opt out of
          interest-based advertising at{" "}
          <Ext href="https://optout.aboutads.info/">optout.aboutads.info</Ext> (US and Canada) and{" "}
          <Ext href="https://www.youronlinechoices.com/">youronlinechoices.com</Ext>{" "}
          (Europe). See <Ext href="https://www.facebook.com/privacy/policy/">Meta’s Privacy Policy</Ext>{" "}
          and <Ext href="https://policies.google.com/privacy">Google’s Privacy Policy</Ext> for how
          they handle your information.
        </p>

        <h2 id="lead-forms">Lead forms and contact lists</h2>
        <p>
          If you submit a lead form in a Meta or Google advertisement, that platform passes the
          details to me. I may also upload contact details of people who have enquired, in a
          protected (hashed) form, to advertising platforms, to avoid showing you ads for something
          you have already asked about or to reach similar audiences, where the law allows. If you
          would rather I didn’t, tell me and I’ll remove you.
        </p>

        <h2 id="use">How I use information</h2>
        <ul>
          <li>To reply to your messages and handle your enquiry.</li>
          <li>To provide property, investment and relocation services and introductions.</li>
          <li>To understand how the Site is used and improve it.</li>
          <li>To run and measure my advertising on other platforms.</li>
          <li>To send updates and offers you have agreed to, or that the law allows.</li>
          <li>To keep the Site secure, prevent fraud and resolve disputes.</li>
          <li>
            To meet legal duties, including anti-money-laundering and real estate regulation
            requirements.
          </li>
        </ul>

        <h2 id="marketing">Marketing messages</h2>
        <p>
          I only send marketing messages by WhatsApp, email or phone where the law allows and,
          where required, with your consent. You can opt out at any time by telling me, replying
          “stop”, or using the unsubscribe link, and I’ll stop. I may still contact you about an
          enquiry or transaction you have asked about.
        </p>

        <h2 id="legal-bases">Legal bases</h2>
        <p>
          Where laws such as the GDPR apply, I process personal information on these bases:{" "}
          <strong>consent</strong> (for example, non-essential cookies and marketing);{" "}
          <strong>steps you ask for before entering a contract</strong> (responding to your
          enquiry); <strong>legitimate interests</strong> (running and securing the Site,
          understanding how it is used, and reasonable marketing); and{" "}
          <strong>legal obligations</strong>.
        </p>

        <h2 id="sharing">Who I share it with</h2>
        <p>I don’t sell your personal information for money. I share it only as follows:</p>
        <ul>
          <li>
            <strong>Service providers</strong> that help me run the Site and my business, such as
            hosting and analytics (Vercel), messaging (WhatsApp), and email or customer-management
            tools.
          </li>
          <li>
            <strong>Advertising platforms</strong> such as Meta and Google, when you interact with
            my ads, submit a lead form, or where I upload a contact list as described above.
          </li>
          <li>
            <strong>People needed for your request</strong>, such as developers, my brokerage,
            banks, lawyers, valuers and other professionals, when you ask me to help with a
            property or move.
          </li>
          <li>
            <strong>Authorities</strong>, where the law requires or to protect rights and safety,
            including real estate and anti-money-laundering regulators.
          </li>
          <li>
            <strong>A successor</strong>, if my business is sold or reorganised.
          </li>
        </ul>
        <p>
          Some laws, such as California’s, treat sharing information for targeted advertising as a
          “sale” or “sharing”. If that applies to you, you can opt out by contacting me. I may use aggregated, non-personal information for statistics, and I don’t
          sell it.
        </p>

        <h2 id="transfers">International transfers</h2>
        <p>
          The services I use are run from several countries, so your information may be processed
          outside your own country, including in the UAE, Canada, the United States and Europe. When
          this happens I rely on providers that use appropriate safeguards, such as standard
          contractual clauses or equivalent protections.
        </p>

        <h2 id="retention">How long I keep it</h2>
        <p>
          I keep enquiry details for as long as needed to deal with you and for ordinary business
          records. Property transaction records may need to be kept for a period set by law.
          Analytics and advertising data is kept for the period set by each provider, and you can
          ask me to delete what I hold, subject to legal obligations. When I no longer need
          information, I delete or anonymise it.
        </p>

        <h2 id="security">Security</h2>
        <p>
          I use reasonable technical and organisational measures to protect personal information,
          including encrypted connections to the Site and access controls. No method of transmission
          or storage is completely secure, so I can’t guarantee absolute security.
        </p>

        <h2 id="rights">Your rights and choices</h2>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>ask what personal information I hold about you and get a copy;</li>
          <li>have it corrected, updated or deleted;</li>
          <li>object to, or ask me to restrict, some uses, including direct marketing;</li>
          <li>withdraw consent at any time, without affecting what happened before;</li>
          <li>receive your information in a portable format;</li>
          <li>opt out of targeted advertising and of “sale” or “sharing”.</li>
        </ul>
        <p>
          To use any of these, contact me using the details below. I may need to confirm who you
          are first, and I’ll respond within a reasonable time and in line with the law that applies
          to you. If you’re unhappy with my response, you can complain to your local data
          protection authority, such as the UAE Data Office, the Office of the Privacy Commissioner
          of Canada, or your national authority in Europe.
        </p>

        <h2 id="signals">Do Not Track and privacy signals</h2>
        <p>
          There is no common standard for “Do Not Track” browser signals. Where the law requires it,
          I’ll respect opt-out preference signals such as Global Privacy Control.
        </p>

        <h2 id="children">Children</h2>
        <p>
          The Site is not aimed at children, and I don’t knowingly collect their information. If
          you believe a child has given me information, tell me and I’ll delete it.
        </p>

        <h2 id="links">Other websites and services</h2>
        <p>
          The Site links to services run by others, including WhatsApp and Instagram (Meta),
          LinkedIn, YouTube (Google), Driven Properties and Vessbook. Once you leave the Site,
          their own privacy policies apply, not this one. See{" "}
          <Ext href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp</Ext>,{" "}
          <Ext href="https://privacycenter.instagram.com/policy">Instagram</Ext>,{" "}
          <Ext href="https://www.linkedin.com/legal/privacy-policy">LinkedIn</Ext> and{" "}
          <Ext href="https://vercel.com/legal/privacy-policy">Vercel</Ext>.
        </p>

        <h2 id="changes">Changes to this policy</h2>
        <p>
          If how I handle information changes, for example if I add a new analytics tool, I’ll
          update this page and the date at the top. Where the law requires, I’ll ask for
          your consent to the change.
        </p>

        <h2 id="contact">Contact</h2>
        <p>
          {site.name}, Dubai, United Arab Emirates.
          <br />
          Email: <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>
          <br />
          Or message me on{" "}
          <a href={whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          .
        </p>
      </div>
    </main>
  );
}
