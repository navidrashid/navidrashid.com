"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./youtube-embed.module.css";

type Props = {
  videoId: string;
  title: string;
  start?: number;
};

export function YoutubeEmbed({ videoId, title, start = 0 }: Props) {
  const [playing, setPlaying] = useState(false);

  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
  });
  if (start > 0) params.set("start", String(start));

  return (
    <div className={styles.embed}>
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
            className={styles.poster}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority={false}
          />
          <span className={styles.scrim} aria-hidden />
          <span className={styles.play} aria-hidden>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
          <span className={styles.caption}>Play on YouTube</span>
        </button>
      )}
    </div>
  );
}
