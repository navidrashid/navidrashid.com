"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./nav.module.css";

const pages = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about" },
  { label: "Moving to Dubai", href: "/moving-to-dubai" },
] as const;

export function RevampNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // The bio-link page stands alone: no menu, no distractions.
  if (pathname === "/links") return null;

  return (
    <nav className={styles.nav} data-revamp-nav aria-label="Site">
      <Link className={`${styles.pill} ${styles.touch}`} href="/#contact">
        Get in touch
      </Link>
      <div ref={menuRef} className={styles.menu}>
        <button
          type="button"
          className={`${styles.pill} ${styles.trigger}`}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
          <i className={styles.chevron} aria-hidden />
        </button>
        {open ? (
          <ul id="site-menu" className={styles.panel}>
            {pages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={styles.item}
                  aria-current={pathname === page.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {page.label}
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
            {/* Phones fold the top-left pill into the menu. */}
            <li className={styles.touchItem}>
              <Link
                href="/#contact"
                className={`${styles.item} ${styles.itemPrimary}`}
                onClick={() => setOpen(false)}
              >
                Get in touch
                <span aria-hidden>→</span>
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
}
