import Image from "next/image";
import type { ReactNode } from "react";
import { home } from "@/content/home";
import { ChapterMark } from "@/components/ui/chapter-mark";
import { Reveal } from "@/components/ui/reveal";
import styles from "./statement.module.css";

function withBold(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function Statement() {
  const { statement } = home;

  return (
    <section id={statement.id} className={`section ${styles.section}`}>
      <ChapterMark index={1} label="Introduction" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.aside}>
          <Reveal className={styles.header}>
            <p className="eyebrow">{statement.eyebrow}</p>
            <h2 className={`section-title ${styles.title}`}>{statement.title}</h2>
            <p className={styles.lead}>{statement.lead}</p>
          </Reveal>

          <Reveal className={styles.media} variant="scale" delay={140}>
            <Image
              src={statement.image.src}
              alt={statement.image.alt}
              fill
              className={styles.image}
              sizes="(max-width: 979px) 100vw, 38vw"
            />
          </Reveal>
        </div>

        <div className={styles.body}>
          {statement.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={120 + index * 70}>
              <p>{withBold(paragraph)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
