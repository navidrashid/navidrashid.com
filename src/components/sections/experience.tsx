import Image from "next/image";
import { home } from "@/content/home";
import { Reveal } from "@/components/ui/reveal";
import styles from "./experience.module.css";

type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  badge: string;
  logo: string;
  summary: string;
};

type ExperienceGroup = {
  label: string;
  items: readonly ExperienceItem[];
};

function monogram(company: string) {
  const cleaned = company.replace(/[^A-Za-z0-9 ]/g, " ").trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function Experience() {
  const { experience } = home;

  return (
    <section id={experience.id} className={`section ${styles.section}`}>
      <span className={styles.chapter} aria-hidden>
        02 / EXPERIENCE
      </span>
      <div className="container">
        <Reveal className={styles.intro}>
          <p className="eyebrow">{experience.eyebrow}</p>
          <h2 className="section-title">{experience.title}</h2>
          <p className="section-lead">{experience.lead}</p>
        </Reveal>

        <div className={styles.groups}>
          {(experience.groups as readonly ExperienceGroup[]).map((group) => (
            <div key={group.label} className={styles.group}>
              <Reveal className={styles.groupHead}>
                <span className={styles.groupLabel}>{group.label}</span>
                <span className={styles.groupRule} aria-hidden />
                <span className={styles.groupCount}>
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </Reveal>

              <ul className={styles.list}>
                {[...group.items].map((item, index) => (
                  <Reveal
                    key={`${item.company}-${item.role}`}
                    as="li"
                    className={styles.item}
                    delay={80 + index * 70}
                  >
                    <div className={styles.logo} aria-hidden={!item.logo}>
                      {item.logo ? (
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          fill
                          className={styles.logoImg}
                          sizes="176px"
                          quality={95}
                        />
                      ) : (
                        <span className={styles.monogram}>
                          {monogram(item.company)}
                        </span>
                      )}
                    </div>

                    <div className={styles.main}>
                      <div className={styles.topRow}>
                        <h3 className={styles.role}>{item.role}</h3>
                        <span className={styles.period}>
                          {item.badge === "building" ? (
                            <span className={`${styles.badge} ${styles.building}`}>
                              <i aria-hidden />
                              In the works
                            </span>
                          ) : null}
                          {item.badge === "exited" ? (
                            <span className={`${styles.badge} ${styles.exited}`}>
                              Exited
                            </span>
                          ) : null}
                          {item.period}
                        </span>
                      </div>

                      <p className={styles.meta}>
                        <span className={styles.company}>{item.company}</span>
                        {item.type ? (
                          <span className={styles.metaDot}>{item.type}</span>
                        ) : null}
                        <span className={styles.metaDot}>{item.location}</span>
                      </p>

                      <p className={styles.summary}>{item.summary}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
