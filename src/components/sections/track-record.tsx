import Image from "next/image";
import { home } from "@/content/home";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { Reveal } from "@/components/ui/reveal";
import styles from "./track-record.module.css";

export function TrackRecord() {
  const { trackRecord } = home;

  return (
    <section id={trackRecord.id} className={`section ${styles.section}`}>
      <span className={styles.chapter} aria-hidden>
        02 / PROOF
      </span>
      <div className="container">
        <Reveal className={styles.intro}>
          <p className="eyebrow">{trackRecord.eyebrow}</p>
          <h2 className="section-title">{trackRecord.title}</h2>
          <p className="section-lead">{trackRecord.lead}</p>
        </Reveal>

        <ul className={styles.stats}>
          {trackRecord.stats.map((stat, index) => (
            <li key={stat.label} className={styles.statShell}>
              <span className={styles.statIndex} aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <AnimatedStat
                value={stat.value}
                label={stat.label}
                delay={index * 120}
              />
            </li>
          ))}
        </ul>

        <div className={styles.body}>
          <Reveal className={styles.copy} variant="left">
            {trackRecord.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className={styles.awards}>
              {trackRecord.awards.map((award, index) => (
                <Reveal key={award} as="li" delay={100 + index * 90}>
                  {award}
                </Reveal>
              ))}
            </ul>
          </Reveal>
          <Reveal className={styles.media} variant="right" delay={140}>
            <div className={styles.frame}>
              <Image
                src={trackRecord.image.src}
                alt={trackRecord.image.alt}
                width={900}
                height={1200}
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 40vw"
              />
              <div className={styles.crosshair} aria-hidden />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
