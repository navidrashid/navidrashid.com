import styles from "./corner-frame.module.css";

export function CornerFrame() {
  return (
    <div className={styles.frame}>
      <a href="/#contact" className={styles.contact}>
        Get in touch <i aria-hidden>✦</i>
      </a>

      <p className={styles.coords} aria-hidden>
        43.6532° N — 25.2048° N
      </p>
    </div>
  );
}
