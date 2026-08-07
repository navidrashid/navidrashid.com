import Link from "next/link";
import styles from "./corner-frame.module.css";

export function CornerFrame() {
  return (
    <div className={styles.frame}>
      <Link href="/#contact" className={styles.contact}>
        Get in touch <i aria-hidden>✦</i>
      </Link>

      <p className={styles.coords} aria-hidden>
        43.6532° N — 25.2048° N
      </p>
    </div>
  );
}
