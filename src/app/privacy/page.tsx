import type { Metadata } from "next";
import { site } from "@/content/site";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className={`section ${styles.page}`}>
      <div className={`container ${styles.prose}`}>
        <p className="eyebrow">Legal</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: July 23, 2026</p>

        <p>
          This site ({site.url}) is the personal website of {site.name}. It
          collects only what is needed to respond to inquiries and improve the
          experience of visitors.
        </p>

        <h2>Information we collect</h2>
        <p>
          If you use the contact form or email {site.email}, we receive the
          name, email address, and message you provide. Standard server and
          hosting logs (such as IP address, browser type, and pages requested)
          may be collected by our hosting provider.
        </p>

        <h2>How we use information</h2>
        <p>
          Contact details are used solely to respond to your inquiry. We do not
          sell personal information. Analytics, if enabled in the future, would
          be used only to understand aggregate traffic.
        </p>

        <h2>Cookies</h2>
        <p>
          Essential cookies may be set by the hosting platform. This site does
          not use advertising cookies.
        </p>

        <h2>Third parties</h2>
        <p>
          Links to Instagram, YouTube, LinkedIn, and press outlets are operated
          by those services under their own privacy policies.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </main>
  );
}
