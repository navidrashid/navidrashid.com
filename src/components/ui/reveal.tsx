"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "span";
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  style?: CSSProperties;
};

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  variant = "up",
  delay = 0,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal-on-scroll ${className}`.trim()}
      data-reveal={variant === "up" ? undefined : variant}
      style={{
        ...style,
        ["--reveal-delay" as string]: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
