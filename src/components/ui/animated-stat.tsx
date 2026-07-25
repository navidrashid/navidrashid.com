"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./animated-stat.module.css";

type Props = {
  value: string;
  label: string;
  delay?: number;
};

function parseValue(value: string) {
  // Skip ranges like $400K–$30M
  if (/[–-]/.test(value) && (value.match(/\d+/g)?.length ?? 0) > 1) {
    return null;
  }

  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    number: Number(match[2]),
    suffix: match[3],
    decimals: match[2].includes(".") ? match[2].split(".")[1].length : 0,
  };
}

export function AnimatedStat({ value, label, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(value);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !parsed) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const duration = 1400;
    const start = performance.now() + delay;

    const tick = (now: number) => {
      if (now < start) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed.number * eased;
      setDisplay(
        `${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`,
      );
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, parsed, value, delay]);

  return (
    <div
      ref={ref}
      className={`${styles.stat} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className={styles.value}>{parsed ? display : value}</p>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
