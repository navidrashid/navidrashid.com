import type { Metadata } from "next";
import Image from "next/image";
import { linksPage } from "@/content/home";
import styles from "./links.module.css";

export const metadata: Metadata = {
  title: "Links",
  description: "Official links for Navid Rashid — website, YouTube, Instagram, and LinkedIn.",
  alternates: { canonical: "/links" },
};

export default function LinksPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Image
          src="/images/portraits/avatar.jpg"
          alt=""
          width={96}
          height={96}
          className={styles.avatar}
          priority
        />
        <h1 className={styles.title}>{linksPage.title}</h1>
        <p className={styles.subtitle}>{linksPage.subtitle}</p>
        <ul className={styles.list}>
          {linksPage.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
