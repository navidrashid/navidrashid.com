import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { press } from "@/content/press";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import styles from "./profile.module.css";

export const metadata: Metadata = {
  title: "Profile (example structure)",
  description:
    "Example professional dossier layout for Navid Rashid — resume-style personal site structure.",
  robots: { index: false, follow: false },
};

export default function ProfilePage() {
  return (
    <main className={styles.page}>
      <p className={styles.banner}>
        Example structure — homepage is unchanged.{" "}
        <Link href="/">Back to current site</Link>
      </p>

      <section className={styles.hero} aria-label="Introduction">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>
            {profile.hero.title}
            <span>{profile.hero.locations}</span>
          </p>
          <h1 className={styles.name}>{profile.hero.name}</h1>
          <p className={styles.line}>{profile.hero.line}</p>
          <div className={styles.heroCtas}>
            <a className={styles.primary} href="#contact">
              Get in touch
            </a>
            <a className={styles.secondary} href="#experience">
              View experience
            </a>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <Image
            src="/images/portraits/navid-hero.png"
            alt="Navid Rashid"
            fill
            priority
            sizes="(max-width: 900px) 80vw, 40vw"
            className={styles.heroImage}
          />
        </div>
      </section>

      <section id={profile.snapshot.id} className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>{profile.snapshot.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{profile.snapshot.title}</h2>
        </div>
        <div className={styles.prose}>
          {profile.snapshot.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section id={profile.proof.id} className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>{profile.proof.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{profile.proof.title}</h2>
        </div>
        <ul className={styles.stats}>
          {profile.proof.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
        <ul className={styles.press}>
          {press.map((item) => (
            <li key={item.name}>
              <Image
                src={item.src}
                alt={item.name}
                width={item.width}
                height={item.height}
                className={styles.pressLogo}
              />
            </li>
          ))}
        </ul>
      </section>

      <section id={profile.experience.id} className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>{profile.experience.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{profile.experience.title}</h2>
        </div>
        <ol className={styles.roles}>
          {profile.experience.roles.map((role) => (
            <li key={role.org + role.role} className={styles.role}>
              <div className={styles.roleTop}>
                <div>
                  <h3>{role.role}</h3>
                  <p className={styles.org}>{role.org}</p>
                </div>
                <p className={styles.meta}>{role.meta}</p>
              </div>
              <ul>
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id={profile.accomplishments.id} className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>{profile.accomplishments.eyebrow}</p>
          <h2 className={styles.sectionTitle}>
            {profile.accomplishments.title}
          </h2>
        </div>
        <ul className={styles.wins}>
          {profile.accomplishments.items.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id={profile.approach.id} className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>{profile.approach.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{profile.approach.title}</h2>
        </div>
        <p className={styles.lead}>{profile.approach.lead}</p>
        <ul className={styles.caps}>
          {profile.approach.capabilities.map((cap) => (
            <li key={cap}>{cap}</li>
          ))}
        </ul>
      </section>

      <section id={profile.beyond.id} className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>{profile.beyond.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{profile.beyond.title}</h2>
        </div>
        <p className={styles.lead}>{profile.beyond.body}</p>
      </section>

      <section id={profile.contact.id} className={`${styles.section} ${styles.contact}`}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>{profile.contact.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{profile.contact.title}</h2>
        </div>
        <p className={styles.lead}>{profile.contact.lead}</p>
        <ul className={styles.contactLinks}>
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href={site.socials.youtube} target="_blank" rel="noreferrer">
              YouTube
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
