import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { PersonJsonLd } from "../person-jsonld";
import { aboutPage } from "./content";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Navid Rashid: from selling at 16 to Toronto's top 2%, VVS Vapes, and luxury real estate in Dubai.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Navid Rashid",
    description:
      "From selling at 16 to Toronto's top 2%, VVS Vapes, and luxury real estate in Dubai.",
    url: `${site.url}/about`,
  },
};

type Photo = { src: string; alt: string; width: number; height: number };

const ratio = (photo: Photo) =>
  Math.min(1.8, Math.max(0.6, photo.width / photo.height));

const chunk = <T,>(items: readonly T[], size: number) => {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
};

const whatsapp = (message: string) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;

const roles = [
  {
    company: "Driven Properties",
    role: "Broker",
    location: "Dubai, UAE",
    period: "Now",
    summary:
      "A Forbes Global Properties firm. Buying, investing, selling, renting and managing property in Dubai.",
    logo: "",
  },
  {
    company: "Vessbook",
    role: "CTO & Co-Founder",
    location: "Dubai, UAE",
    period: "2026 — Now",
    summary:
      "Building a platform for how oil tankers get chartered, bringing owners, brokers and traders into one place.",
    logo: "",
  },
  ...home.experience.groups.flatMap((group) =>
    group.items.map((item) => ({
      company: item.company,
      role: item.role,
      location: item.location,
      period: item.period,
      summary: item.summary,
      logo: item.logo as string,
    })),
  ),
];

const channels = [
  { label: "Instagram", href: site.socials.instagram },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "YouTube", href: site.socials.youtube },
] as const;

export default function RevampAboutPage() {
  const { intro, chapters, now, record } = aboutPage;

  return (
    <main className={`${styles.page} revamp-about`}>
      <PersonJsonLd />
      <div className={`container ${styles.wide}`}>
        <section className={styles.intro} aria-labelledby="about-title">
          <div className={styles.introCopy}>
            <p className={styles.kicker}>{intro.kicker}</p>
            <h1 id="about-title" className={styles.h1}>
              {intro.title} <span>{intro.subtitle}</span>
            </h1>
            <p className={styles.introLead}>{intro.lead}</p>
            <dl className={styles.introFacts}>
              {intro.facts.map((fact) => (
                <div key={fact.value}>
                  <dt>{fact.value}</dt>
                  <dd>{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className={styles.introPhoto}>
            <Image
              src={intro.image.src}
              alt={intro.image.alt}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 42vw"
              className={styles.introImage}
            />
          </div>
        </section>

        {chapters.map((chapter) => (
          <section
            key={chapter.id}
            id={chapter.id}
            className={styles.chapter}
            aria-labelledby={`${chapter.id}-title`}
          >
            <p className={styles.year}>{chapter.year}</p>
            <div className={styles.body}>
              <h2 id={`${chapter.id}-title`} className={`${styles.title} ${styles.rise}`}>
                {chapter.title} <span>{chapter.subtitle}</span>
              </h2>
              <div className={styles.prose}>
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)} className={styles.rise}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {chapter.facts.length > 0 ? (
                <ul className={styles.facts}>
                  {chapter.facts.map((fact) => (
                    <li key={fact.value} className={`${styles.card} ${styles.rise}`}>
                      <p className={styles.factValue}>{fact.value}</p>
                      <p className={styles.factLabel}>{fact.label}</p>
                    </li>
                  ))}
                </ul>
              ) : null}

              {chapter.photos.length > 0
                ? chunk(chapter.photos, "row" in chapter ? chapter.row : 2).map(
                    (row, rowIndex) => (
                      <div key={rowIndex} className={styles.media}>
                        {row.map((photo) => (
                          <figure
                            key={photo.src}
                            className={`${styles.figure} ${styles.rise}`}
                            style={
                              {
                                "--ratio": ratio(photo),
                              } as React.CSSProperties
                            }
                          >
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              sizes="(max-width: 800px) 100vw, 50vw"
                              className={styles.photo}
                            />
                          </figure>
                        ))}
                      </div>
                    ),
                  )
                : null}
            </div>
          </section>
        ))}

        <section
          id="now"
          className={styles.chapter}
          aria-labelledby="now-title"
        >
          <p className={styles.year}>Now</p>
          <div className={styles.body}>
            <h2 id="now-title" className={`${styles.title} ${styles.rise}`}>
              {now.title} <span>{now.subtitle}</span>
            </h2>
            <ul className={styles.now}>
              {now.items.map((item) => (
                <li key={item.name} className={`${styles.card} ${styles.nowCard} ${styles.rise}`}>
                  <p className={styles.nowRole}>{item.role}</p>
                  <p className={styles.nowName}>{item.name}</p>
                  <p className={styles.nowLine}>{item.line}</p>
                  {item.cta.external ? (
                    <a
                      className={styles.pill}
                      href={item.cta.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.cta.label}
                      <span aria-hidden>↗</span>
                    </a>
                  ) : (
                    <Link className={styles.pill} href={item.cta.href}>
                      {item.cta.label}
                      <span aria-hidden>→</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <details className={`${styles.record} ${styles.rise}`}>
              <summary className={styles.recordSummary}>
                <span>
                  {record.title} <span>{record.subtitle}</span>
                </span>
                <i aria-hidden />
              </summary>
              <ul className={styles.roles}>
                {roles.map((role) => (
                  <li key={`${role.company}-${role.role}`} className={styles.role}>
                    <span className={styles.roleLogo}>
                      {role.logo ? (
                        <Image
                          src={role.logo}
                          alt=""
                          width={72}
                          height={72}
                          className={styles.roleLogoImage}
                        />
                      ) : (
                        <b aria-hidden>{role.company.slice(0, 1)}</b>
                      )}
                    </span>
                    <div className={styles.roleText}>
                      <p className={styles.roleTitle}>{role.role}</p>
                      <p className={styles.roleMeta}>
                        {role.company}
                        {role.location ? ` · ${role.location}` : ""}
                      </p>
                      <p className={styles.roleSummary}>{role.summary}</p>
                    </div>
                    <p className={styles.rolePeriod}>{role.period}</p>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        <section className={styles.end} aria-labelledby="end-title">
          <h2 id="end-title" className={styles.h1}>
            Let&apos;s talk.
          </h2>
          <p className={styles.introLead}>
            Property, a move or just a question. Reach me whichever way suits you.
          </p>
          <div className={styles.endLinks}>
            <a
              className={styles.pill}
              href={whatsapp("Hi Navid, I read your story and I'd like to talk.")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
              <span aria-hidden>↗</span>
            </a>
            {channels.map((channel) => (
              <a
                key={channel.label}
                className={`${styles.pill} ${styles.pillSoft}`}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
              >
                {channel.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
