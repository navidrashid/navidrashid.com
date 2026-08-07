import Image from "next/image";
import { home } from "@/content/home";
import { ChapterMark } from "@/components/ui/chapter-mark";
import { Reveal } from "@/components/ui/reveal";
import styles from "./approach.module.css";

export function Approach() {
  const { approach } = home;

  return (
    <section id={approach.id} className={`section ${styles.section}`}>
      <ChapterMark index={3} label="Skills" />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.intro}>
          <p className="eyebrow">{approach.eyebrow}</p>
          <h2 className={`section-title ${styles.title}`}>{approach.title}</h2>
          <p className={styles.lead}>{approach.lead}</p>
        </Reveal>

        <Reveal className={styles.copy} delay={80}>
          <div className={styles.prose}>
            {approach.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className={styles.media} variant="right" delay={120}>
          <Image
            src={approach.image.src}
            alt={approach.image.alt}
            fill
            className={styles.image}
            sizes="(max-width: 979px) 100vw, 27rem"
          />
        </Reveal>

        <div className={styles.skills}>
          {approach.groups.map((group, groupIndex) => (
            <Reveal
              key={group.label}
              className={styles.group}
              delay={160 + groupIndex * 100}
            >
              <div className={styles.groupHead}>
                <p className={styles.groupLabel}>{group.label}</p>
                <span className={styles.groupIndex}>
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className={styles.list}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
