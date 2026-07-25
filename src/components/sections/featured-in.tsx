import Image from "next/image";
import { press } from "@/content/press";
import styles from "./featured-in.module.css";

export function FeaturedIn() {
  return (
    <section className={styles.section} aria-label="Featured in">
      <div className={styles.heading}>
        <p className={styles.label}>Featured in</p>
        <div className={styles.rule} />
      </div>
      <ul className={styles.list}>
        {press.map((item) => {
          const logo = (
            <Image
              src={item.src}
              alt={item.name}
              width={item.width}
              height={item.height}
              className={`${styles.logo}${item.name === "CP24" ? ` ${styles.logoClean}` : ""}`}
              style={
                "scale" in item && item.scale
                  ? ({ "--logo-scale": item.scale } as React.CSSProperties)
                  : undefined
              }
            />
          );

          return (
            <li key={item.name} className={styles.item}>
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
      <p className={styles.note}>As seen across Canadian business media</p>
    </section>
  );
}
