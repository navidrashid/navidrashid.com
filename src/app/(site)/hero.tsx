"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { home } from "@/content/home";
import { MapleSeal } from "@/components/ui/maple-seal";
import { Burj, Skyline } from "./skyline";
import styles from "./hero.module.css";

type HeroProps = {
  /** The first line is the default; the rest rotate in. */
  lines: readonly string[];
};

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function Hero({ lines }: HeroProps) {
  const { hero } = home;
  const heroRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [firstName, ...rest] = hero.name.split(" ");
  const lastName = rest.join(" ");

  // Rotating subtitle. The default line dwells longest.
  useEffect(() => {
    if (lines.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(
      () => setIndex((current) => (current + 1) % lines.length),
      index === 0 ? 5200 : 3000,
    );
    return () => window.clearTimeout(timer);
  }, [index, lines.length]);

  useEffect(() => {
    const heroEl = heroRef.current;
    const media = mediaRef.current;
    if (!heroEl || !media) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 900px)");
    let frame = 0;

    // --p: 0 at the top of the hero, 1 when the sticky stage lets go.
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = heroEl.getBoundingClientRect();
        const scrollable = Math.max(heroEl.offsetHeight - window.innerHeight, 1);
        const progress = reduced ? 0 : clamp(-rect.top / scrollable);
        heroEl.style.setProperty("--p", progress.toFixed(4));
        media.style.setProperty(
          "--swap",
          mobile.matches && !reduced ? progress.toFixed(4) : "0",
        );
      });
    };

    const onMove = (event: PointerEvent) => {
      if (mobile.matches) return;
      const rect = media.getBoundingClientRect();
      media.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      media.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    };
    const onEnter = () => {
      if (!mobile.matches) media.style.setProperty("--reveal", "1");
    };
    const onLeave = () => media.style.setProperty("--reveal", "0");

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mobile.addEventListener("change", onScroll);
    media.addEventListener("pointermove", onMove);
    media.addEventListener("pointerenter", onEnter);
    media.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mobile.removeEventListener("change", onScroll);
      media.removeEventListener("pointermove", onMove);
      media.removeEventListener("pointerenter", onEnter);
      media.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${styles.light}`}
      aria-label="Introduction"
    >
      <div className={styles.stage}>
        <div className={styles.city} aria-hidden>
          <div className={styles.sky}>
            <Skyline layer="far" className={styles.far} />
            <Skyline layer="near" className={styles.near} />
            <Burj className={styles.burj} />
          </div>
        </div>

        <h1 className={styles.name} aria-label={hero.name}>
          <span className={`${styles.word} ${styles.first}`} aria-hidden>
            <span className={styles.rise}>{firstName}</span>
          </span>
          <span className={`${styles.word} ${styles.last}`} aria-hidden>
            <span className={styles.rise}>{lastName}</span>
          </span>
        </h1>

        <div className={styles.media} ref={mediaRef} aria-hidden>
          <Image
            src={hero.image.src}
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 90vw, 48vw"
            className={`${styles.image} ${styles.imagePrimary}`}
          />
          <Image
            src={hero.imageHover.src}
            alt=""
            fill
            sizes="(max-width: 900px) 90vw, 48vw"
            className={`${styles.image} ${styles.imageAlt}`}
          />
        </div>

        <div className={styles.foot}>
          <div className={`container ${styles.footRow}`}>
            <p className={styles.tag}>
              <span className={styles.flag}>
                <MapleSeal />
              </span>
              <span className={styles.rotor} aria-label={lines[0]}>
                {lines.map((line, position) => (
                  <span
                    key={line}
                    className={position === index ? styles.on : undefined}
                    aria-hidden
                  >
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p className={styles.cue} aria-hidden>
              Scroll <i />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
