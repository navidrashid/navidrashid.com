import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { developersPage } from "./content";
import styles from "./developers.module.css";

export const metadata: Metadata = {
  title: "For developers",
  description:
    "Selected work by Navid Rashid: the JW Marriott Residences on Dubai Islands, 8188 Yonge and Hills on Bayview.",
  alternates: { canonical: "/developers" },
  openGraph: {
    title: "For developers: selected work",
    description:
      "Three launches and the numbers behind them: JW Marriott Residences, 8188 Yonge and Hills on Bayview.",
    url: `${site.url}/developers`,
  },
};

type Photo = { src: string; alt: string; width: number; height: number };

const ratio = (photo: Photo) => Math.min(1.8, Math.max(0.6, photo.width / photo.height));

const whatsapp = (message: string) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;

export default function DevelopersPage() {
  const { hero, projects, record, cta } = developersPage;

  return (
    <main className={styles.page} data-page="developers">
      <div className={`container ${styles.wide}`}>
        <section className={styles.hero} aria-labelledby="developers-title">
          <p className={styles.kicker}>{hero.kicker}</p>
          <h1 id="developers-title" className={styles.h1}>
            {hero.title} <span>{hero.subtitle}</span>
          </h1>
          <p className={styles.lead}>{hero.lead}</p>
        </section>

        <div className={styles.projects}>
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className={`${styles.project} ${styles.rise}`}
              aria-labelledby={`${project.id}-title`}
            >
              <header className={styles.head}>
                <p className={styles.meta}>
                  {project.place} · {project.client}
                </p>
                <h2 id={`${project.id}-title`} className={styles.name}>
                  {project.name}
                </h2>
                <p className={styles.headline}>{project.headline}</p>
                <p className={styles.role}>
                  <span>{project.role}</span>
                  <span>{project.period}</span>
                </p>
              </header>

              <div className={styles.content}>
              {project.photos.length > 0 ? (
                <div
                  className={styles.media}
                  style={{ "--cols": project.photos.length } as React.CSSProperties}
                >
                  {project.photos.map((photo) => (
                    <figure
                      key={photo.src}
                      className={styles.figure}
                      style={{ "--ratio": ratio(photo) } as React.CSSProperties}
                    >
                      {/* Soft blurred copy fills the tile; the whole photo sits on top, uncropped. */}
                      <Image
                        src={photo.src}
                        alt=""
                        fill
                        sizes="20vw"
                        className={styles.backdrop}
                        aria-hidden
                      />
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
              ) : null}

              <div className={styles.body}>
                <ul className={styles.stats}>
                  {project.stats.map((stat) => (
                    <li key={stat.value} className={styles.stat}>
                      <p className={styles.statValue}>{stat.value}</p>
                      <p className={styles.statLabel}>{stat.label}</p>
                    </li>
                  ))}
                </ul>
                <div className={styles.did}>
                  <h3 className={styles.didTitle}>What I did</h3>
                  <ul>
                    {project.did.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
            </article>
          ))}
        </div>

        <section className={styles.record} aria-labelledby="record-title">
          <h2 id="record-title" className={`${styles.h2} ${styles.rise}`}>
            {record.title} <span>{record.subtitle}</span>
          </h2>
          <ul className={styles.recordGrid}>
            {record.items.map((item) => (
              <li key={item.value + item.label} className={`${styles.recordCard} ${styles.rise}`}>
                <p className={styles.statValue}>{item.value}</p>
                <p className={styles.statLabel}>{item.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${styles.final} ${styles.rise}`} aria-label="Get in touch">
          <h2 className={styles.finalTitle}>{cta.title}</h2>
          <p className={styles.finalLine}>{cta.line}</p>
          <a
            className={styles.pill}
            href={whatsapp(cta.message)}
            target="_blank"
            rel="noreferrer"
          >
            {cta.label}
            <span aria-hidden>↗</span>
          </a>
        </section>
      </div>
    </main>
  );
}
