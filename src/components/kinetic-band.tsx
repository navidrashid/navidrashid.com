import styles from "./kinetic-band.module.css";

type KineticBandProps = {
  words: readonly string[];
  tone?: "acid" | "rose";
  reverse?: boolean;
};

export function KineticBand({
  words,
  tone = "acid",
  reverse = false,
}: KineticBandProps) {
  const phrase = words.flatMap((word) => [word, "✦"]);
  const repeated = [...phrase, ...phrase];

  return (
    <div
      className={`${styles.band} ${styles[tone]} ${reverse ? styles.reverse : ""}`}
      aria-hidden="true"
    >
      <div className={styles.track}>
        {repeated.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={word === "✦" ? styles.star : undefined}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
