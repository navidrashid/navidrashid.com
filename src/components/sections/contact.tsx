import Image from "next/image";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { ChapterMark } from "@/components/ui/chapter-mark";
import { Reveal } from "@/components/ui/reveal";
import styles from "./contact.module.css";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

const socials = [
  {
    name: "Instagram",
    handle: "@navrsh",
    href: site.socials.instagram,
    brand: "instagram" as const,
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    handle: "Navid Rashid",
    href: site.socials.linkedin,
    brand: "linkedin" as const,
    Icon: LinkedInIcon,
  },
  {
    name: "YouTube",
    handle: "@navidrashid",
    href: site.socials.youtube,
    brand: "youtube" as const,
    Icon: YouTubeIcon,
  },
];

export function Contact() {
  const { contact } = home;

  return (
    <section id={contact.id} className={`section ${styles.section}`}>
      <div className={styles.backdrop} aria-hidden>
        <Image
          src={contact.backdrop.src}
          alt=""
          fill
          className={styles.backdropImage}
          sizes="100vw"
        />
        <span className={styles.backdropScrim} />
      </div>

      <div className={styles.glow} aria-hidden />
      <div className={styles.gridlines} aria-hidden />

      <ChapterMark index={6} label="Connect" />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.live}>
              <i aria-hidden />
              Online now
            </span>
          </div>

          <h2 className={styles.title}>
            Reach me
            <em> where I am.</em>
          </h2>
          <p className={styles.lead}>{contact.lead}</p>
        </Reveal>

        <ul className={styles.channels}>
          {socials.map((social, index) => (
            <Reveal
              key={social.name}
              as="li"
              delay={100 + index * 90}
              variant="scale"
              className={styles.channelItem}
            >
              <a
                className={`${styles.channel} ${styles[social.brand]}`}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${social.name} — ${social.handle}`}
              >
                <span className={styles.iconWrap} aria-hidden>
                  <social.Icon />
                </span>

                <span className={styles.copy}>
                  <span className={styles.name}>{social.name}</span>
                  <span className={styles.handle}>{social.handle}</span>
                </span>

                <span className={styles.action} aria-hidden>
                  <span>Open</span>
                  <span className={styles.arrow}>↗</span>
                </span>

                <span className={styles.wash} aria-hidden />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
