"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./youtube.module.css";

type Props = {
  videoId: string;
  title: string;
  start?: number;
};

/** Click-to-play YouTube embed: loads nothing from YouTube until played. */
export function Youtube({ videoId, title, start = 0 }: Props) {
  const [playing, setPlaying] = useState(false);

  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
  });
  if (start > 0) params.set("start", String(start));

  return (
    <div className={styles.frame}>
      {playing ? (
        <iframe
          className={styles.player}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className={styles.facade}
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt=""
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className={styles.poster}
          />
          <span className={styles.fade} aria-hidden />
          <span className={styles.play} aria-hidden>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
          <span className={styles.label}>Watch the video</span>
        </button>
      )}
    </div>
  );
}
