import Image from "next/image";
import { home } from "@/content/home";
import { Reveal } from "@/components/ui/reveal";
import styles from "./story.module.css";

export function Story() {
  const { story } = home;

  return (
    <section id={story.id} className={`section ${styles.section}`}>
      <span className={styles.chapter} aria-hidden>
        01
      </span>
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.copy} variant="left">
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 className="section-title">{story.title}</h2>
          <div className={styles.prose}>
            {story.paragraphs.map((p, index) => (
              <Reveal
                key={p}
                delay={120 + index * 80}
                as="div"
                className={styles.moment}
              >
                <span aria-hidden>{String(index + 1).padStart(2, "0")}</span>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal className={styles.media} variant="right" delay={120}>
          <div className={styles.frame}>
            <Image
              src={story.image.src}
              alt={story.image.alt}
              width={900}
              height={1200}
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 42vw"
            />
            <p className={styles.imageCaption}>
              Toronto → Dubai
              <span>Built one transaction at a time</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
