import Image from "next/image";
import { press } from "@/content/press";
import styles from "./featured.module.css";

export function Featured() {
  return (
    <section className={styles.section} aria-label="Featured in">
      <div className="container">
        <div className={styles.panel}>
          <p className={styles.label}>Featured in</p>
          <ul className={styles.list}>
            {press.map((item) => {
              const logo = (
                <Image
                  src={item.src}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className={styles.logo}
                  style={
                    "scale" in item && item.scale
                      ? ({ "--logo-scale": item.scale } as React.CSSProperties)
                      : undefined
                  }
                />
              );

              return (
                <li key={item.name}>
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                    >
                      {logo}
                    </a>
                  ) : (
                    <span className={styles.link}>{logo}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
