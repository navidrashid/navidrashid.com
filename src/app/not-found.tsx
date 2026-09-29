import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { site } from "@/content/site";
import styles from "./not-found.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  const message = encodeURIComponent("Hi Navid, I couldn't find a page on your website.");

  return (
    <main className={`${styles.page} ${inter.variable}`} data-page="404">
      <p className={styles.code} aria-hidden>
        404
      </p>
      <h1 className={styles.title}>
        That page doesn&apos;t exist. <span>Let&apos;s get you back.</span>
      </h1>
      <p className={styles.lead}>
        The link may be old, or the page may have moved. Everything worth finding starts on the home
        page.
      </p>
      <div className={styles.actions}>
        <Link className={styles.pill} href="/">
          Back home
        </Link>
        <a
          className={`${styles.pill} ${styles.soft}`}
          href={`https://wa.me/${site.whatsapp.number}?text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          Message me
          <span aria-hidden>↗</span>
        </a>
      </div>
    </main>
  );
}
