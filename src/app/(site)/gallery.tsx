"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./gallery.module.css";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

type GalleryProps = {
  id: string;
  title: string;
  subtitle: string;
  photos: readonly Photo[];
};

export function Gallery({ id, title, subtitle, photos }: GalleryProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setEdge({
      start: track.scrollLeft < 8,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 8,
    });
  };

  const nudge = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  const step = (direction: 1 | -1) =>
    setActive((current) =>
      current === null ? current : (current + direction + photos.length) % photos.length,
    );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();

    document.body.style.overflow = active === null ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const current = active === null ? null : photos[active];

  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={`container ${styles.head}`}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title} <span>{subtitle}</span>
        </h2>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.control}
            onClick={() => nudge(-1)}
            disabled={edge.start}
            aria-label="Previous photos"
          >
            ←
          </button>
          <button
            type="button"
            className={styles.control}
            onClick={() => nudge(1)}
            disabled={edge.end}
            aria-label="Next photos"
          >
            →
          </button>
        </div>
      </div>

      <ul ref={trackRef} className={styles.track} onScroll={onScroll}>
        {photos.map((photo, index) => {
          const ratio = Math.min(1.5, Math.max(0.68, photo.width / photo.height));
          return (
            <li
              key={photo.src}
              className={styles.item}
              style={{ "--ratio": ratio } as CSSProperties}
            >
              <button
                type="button"
                className={styles.card}
                onClick={() => setActive(index)}
                aria-label={`Open photo: ${photo.caption}`}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="(max-width: 800px) 70vw, 30vw"
                  className={styles.image}
                />
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-label="Photo viewer"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
      >
        {current ? (
          <figure className={styles.figure}>
            <div className={styles.frame}>
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="92vw"
                className={styles.full}
              />
            </div>
          </figure>
        ) : null}
        <button
          type="button"
          className={`${styles.lbControl} ${styles.lbClose}`}
          onClick={() => setActive(null)}
          aria-label="Close"
        >
          ✕
        </button>
        <button
          type="button"
          className={`${styles.lbControl} ${styles.lbPrev}`}
          onClick={() => step(-1)}
          aria-label="Previous photo"
        >
          ←
        </button>
        <button
          type="button"
          className={`${styles.lbControl} ${styles.lbNext}`}
          onClick={() => step(1)}
          aria-label="Next photo"
        >
          →
        </button>
      </dialog>
    </section>
  );
}
