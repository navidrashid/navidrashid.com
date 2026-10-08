"use client";

import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import styles from "./whatsapp-float.module.css";

const href = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
  "Hi Navid, I found you through your website.",
)}`;

/** The floating WhatsApp button, the same one as on the market reports.
 *  The links page already leads with WhatsApp, so it skips it there. */
export function WhatsAppFloat() {
  const pathname = usePathname();
  if (pathname.startsWith("/links")) return null;

  return (
    <a
      className={styles.fab}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Navid on WhatsApp"
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.12.55 4.19 1.6 6.01L4 29l8.14-1.56a12 12 0 0 0 3.9.65C22.68 28.09 28 22.69 28 16.06 28 9.4 22.68 3 16.04 3Zm0 22.05c-1.2 0-2.38-.3-3.42-.87l-.49-.28-4.83.93.96-4.7-.3-.5a9.9 9.9 0 0 1-1.52-5.3c0-5.46 4.46-9.9 9.94-9.9 5.45 0 9.9 4.44 9.9 9.9 0 5.5-4.45 9.72-10.24 9.72Zm5.4-7.3c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
