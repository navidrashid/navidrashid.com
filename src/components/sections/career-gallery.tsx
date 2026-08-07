"use client";

import Image from "next/image";
import { useEffect, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { home } from "@/content/home";
import styles from "./career-gallery.module.css";

export function CareerGallery() {
  const { gallery } = home;
  const photos = gallery.images;
  const [active, setActive] = useState<number | null>(null);
  const [canScrollMore, setCanScrollMore] = useState(true);
  const stripRef = useRef<HTMLUListElement | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  const showPrev = useCallback(() => {
    setActive((current) => {
      if (current === null) return current;
      return (current - 1 + photos.length) % photos.length;
    });
  }, [photos.length]);

  const showNext = useCallback(() => {
    setActive((current) => {
      if (current === null) return current;
      return (current + 1) % photos.length;
    });
  }, [photos.length]);

  const updateScrollHint = useCallback(() => {
    const node = stripRef.current;
    if (!node) return;
    const remaining = node.scrollWidth - node.scrollLeft - node.clientWidth;
    setCanScrollMore(remaining > 12);
  }, []);

  useEffect(() => {
    const node = stripRef.current;
    if (!node) return;

    updateScrollHint();
    node.addEventListener("scroll", updateScrollHint, { passive: true });
    window.addEventListener("resize", updateScrollHint);

    return () => {
      node.removeEventListener("scroll", updateScrollHint);
      window.removeEventListener("resize", updateScrollHint);
    };
  }, [updateScrollHint]);

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "Left") {
        event.preventDefault();
        showPrev();
        return;
      }

      if (event.key === "ArrowRight" || event.key === "Right") {
        event.preventDefault();
        showNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKey);
    lightboxRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, showPrev, showNext]);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartX.current = null;

    if (startX === null || endX === undefined || photos.length < 2) {
      return;
    }

    const delta = endX - startX;
    if (Math.abs(delta) < 48) return;

    if (delta > 0) showPrev();
    else showNext();
  };

  const activeImage = active === null ? null : photos[active];

  const lightbox =
    activeImage && typeof document !== "undefined"
      ? createPortal(
          <div
            ref={lightboxRef}
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            tabIndex={-1}
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              type="button"
              className={styles.close}
              onClick={close}
              aria-label="Close"
            >
              Close
            </button>

            {photos.length > 1 ? (
              <>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.prev}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className={`${styles.nav} ${styles.next}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            ) : null}

            <div
              className={styles.figure}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={1600}
                height={2000}
                className={styles.figureImage}
                sizes="(max-width: 720px) 100vw, 92vw"
                priority
              />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <section
      id={gallery.id}
      className={styles.section}
      aria-label={gallery.eyebrow}
    >
      <div className={styles.heading}>
        <p className={styles.label}>{gallery.eyebrow}</p>
        <div className={styles.rule} aria-hidden="true" />
        <p className={styles.hint} aria-hidden={!canScrollMore}>
          <span>Swipe</span>
          <span className={styles.hintArrow}>→</span>
        </p>
      </div>

      <div
        className={`${styles.track} ${canScrollMore ? styles.hasMore : ""}`}
      >
        <ul ref={stripRef} className={styles.strip}>
          {photos.map((image, index) => (
            <li key={image.src} className={styles.item}>
              <button
                type="button"
                className={styles.thumb}
                onClick={() => setActive(index)}
                aria-label={`View photo ${index + 1} of ${photos.length}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 720px) 58vw, 22vw"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {lightbox}
    </section>
  );
}
