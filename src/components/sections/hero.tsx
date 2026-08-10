"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { home } from "@/content/home";
import { MapleSeal } from "@/components/ui/maple-seal";
import styles from "./hero.module.css";

export function Hero() {
  const { hero } = home;
  const heroRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [firstName, ...rest] = hero.name.split(" ");
  const lastName = rest.join(" ");

  useEffect(() => {
    const heroEl = heroRef.current;
    const media = mediaRef.current;
    if (!heroEl || !media) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 900px)");
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (mobile.matches) {
          media.style.setProperty("--py", "0px");

          if (reduced) {
            media.style.setProperty("--swap", "0");
            return;
          }

          const rect = heroEl.getBoundingClientRect();
          const scrollable = Math.max(heroEl.offsetHeight - window.innerHeight, 1);
          const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
          media.style.setProperty("--swap", progress.toFixed(4));
          return;
        }

        media.style.setProperty("--swap", "0");
        media.style.setProperty("--py", `${window.scrollY * 0.12}px`);
      });
    };

    const onMove = (event: PointerEvent) => {
      if (mobile.matches) return;
      const rect = media.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      media.style.setProperty("--mx", `${x}%`);
      media.style.setProperty("--my", `${y}%`);
    };

    const onEnter = () => {
      if (mobile.matches) return;
      media.style.setProperty("--reveal", "1");
    };

    const onLeave = () => {
      media.style.setProperty("--reveal", "0");
    };

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
    <section ref={heroRef} className={styles.hero} aria-label="Introduction">
      <div className={styles.stage}>
        <div className={styles.glow} aria-hidden />

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

        <div className={`container ${styles.content}`}>
          <div className={styles.stack}>
            <MapleSeal />
            <h1 className={styles.name} aria-label={hero.name}>
              <span className={styles.lineMask}>
                <span className={styles.lineFirst}>{firstName}</span>
              </span>
              <span className={styles.lineMask}>
                <span className={styles.lineLast}>{lastName}</span>
              </span>
            </h1>
            <p className={styles.subtitle}>Broker &amp; Entrepreneur</p>
          </div>
        </div>
      </div>
    </section>
  );
}
