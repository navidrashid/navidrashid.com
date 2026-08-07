import styles from "./chapter-mark.module.css";

type Props = {
  index: number;
  label: string;
};

export function ChapterMark({ index, label }: Props) {
  return (
    <span className={styles.mark} aria-hidden>
      <span className={styles.number}>{String(index).padStart(2, "0")}</span>
      <span className={styles.rule} />
      <span className={styles.label}>{label}</span>
    </span>
  );
}
