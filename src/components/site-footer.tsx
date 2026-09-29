import Link from "next/link";
import { site } from "@/content/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.credit}>
        Site by {site.name}
        <span aria-hidden> · </span>
        <Link href="/privacy">Privacy</Link>
      </p>
    </footer>
  );
}
