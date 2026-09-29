import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { revamp } from "../content";
import styles from "./links.module.css";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Navid Rashid: WhatsApp, Driven Properties, Vessbook and YouTube.",
  alternates: { canonical: "/links" },
  openGraph: {
    title: "Navid Rashid: links",
    description:
      "WhatsApp, Driven Properties, Vessbook and YouTube, all in one place.",
    url: `${site.url}/links`,
  },
};

const whatsapp = (message: string) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;

export default function RevampLinksPage() {
  const { title, subtitle, items } = revamp.links;

  return (
    <main className={styles.page} data-page="links">
      <div className={styles.card}>
        <Image
          src="/images/portraits/avatar.jpg"
          alt="Navid Rashid"
          width={96}
          height={96}
          priority
          className={styles.avatar}
        />
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        <ul className={styles.list}>
          {items.map((item, index) => {
            const href = "message" in item ? whatsapp(item.message) : item.href;
            return (
              <li key={item.name}>
                <a
                  className={`${styles.link}${index === 0 ? ` ${styles.primary}` : ""}`}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.text}>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.line}>{item.line}</span>
                  </span>
                  <span className={styles.go} aria-hidden>
                    ↗
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
