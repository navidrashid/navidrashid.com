"use client";

import { useEffect, useState } from "react";
import styles from "./scroll-rail.module.css";

const chapters = [
  { id: "statement", label: "Intro" },
  { id: "experience", label: "Career" },
  { id: "approach", label: "Skills" },
  { id: "venture", label: "Venture" },
  { id: "media", label: "Media" },
  { id: "contact", label: "Contact" },
] as const;

type ChapterId = (typeof chapters)[number]["id"];

export function ScrollRail() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<ChapterId>(chapters[0].id);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      const marker = window.innerHeight * 0.42;
      let current: ChapterId = chapters[0].id;
      for (const chapter of chapters) {
        const section = document.getElementById(chapter.id);
        if (section && section.getBoundingClientRect().top <= marker) {
          current = chapter.id;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <aside className={styles.rail} aria-label="Page sections">
      <div className={styles.progress}>
        <span style={{ transform: `scaleY(${progress})` }} />
      </div>
      <nav>
        {chapters.map((chapter, index) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className={active === chapter.id ? styles.active : ""}
            aria-current={active === chapter.id ? "location" : undefined}
          >
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.label}>{chapter.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
