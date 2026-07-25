"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./feature-carousel.module.css";

type CarouselImage = {
  src: string;
  alt: string;
};

type Props = {
  images: readonly CarouselImage[];
  label?: string;
};

export function FeatureCarousel({ images, label = "Gallery" }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;
  const active = images[index];

  const showPrev = useCallback(() => {
    setIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const showNext = useCallback(() => {
    setIndex((current) => (current + 1) % total);
  }, [total]);

  useEffect(() => {
    if (total < 2 || paused) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  if (!active) return null;

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className={styles.frame} aria-roledescription="carousel" aria-label={label}>
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={`${styles.slide} ${imageIndex === index ? styles.active : ""}`}
            aria-hidden={imageIndex !== index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority={imageIndex === 0}
            />
          </div>
        ))}

        {total > 1 ? (
          <>
            <button
              type="button"
              className={`${styles.nav} ${styles.prev}`}
              onClick={showPrev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.nav} ${styles.next}`}
              onClick={showNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div className={styles.meta}>
          <p className={styles.count} aria-live="polite">
            {String(index + 1).padStart(2, "0")}
            <span>/</span>
            {String(total).padStart(2, "0")}
          </p>
          <div className={styles.dots} role="tablist" aria-label="Select image">
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={imageIndex === index}
                aria-label={`Show image ${imageIndex + 1}`}
                className={`${styles.dot} ${imageIndex === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(imageIndex)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
