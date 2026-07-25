import { home } from "@/content/home";
import { Reveal } from "@/components/ui/reveal";
import { FeatureCarousel } from "./feature-carousel";
import { YoutubeEmbed } from "./youtube-embed";
import styles from "./split-feature.module.css";

type Venture = typeof home.venture;
type Media = typeof home.media;

type Props = {
  data: Venture | Media;
  reverse?: boolean;
};

function hasImages(
  data: Venture | Media,
): data is Venture & { images: Venture["images"] } {
  return "images" in data && Array.isArray(data.images);
}

function hasVideo(
  data: Venture | Media,
): data is Media & { video: Media["video"] } {
  return "video" in data && Boolean(data.video);
}

function hasCta(
  data: Venture | Media,
): data is Media & { cta: Media["cta"] } {
  return "cta" in data && Boolean(data.cta);
}

function hasNote(
  data: Venture | Media,
): data is Media & { note: Media["note"] } {
  return "note" in data && Boolean(data.note);
}

export function SplitFeature({ data, reverse = false }: Props) {
  const chapter = data.id === "venture" ? "04" : "05";
  const backdrop = data.id === "venture" ? "Builder" : "Media";

  return (
    <section id={data.id} className={`section ${styles.section}`}>
      <span className={styles.backdrop} aria-hidden>
        {backdrop}
      </span>
      <div
        className={`container ${styles.grid} ${reverse ? styles.reverse : ""}`}
      >
        <Reveal
          className={styles.media}
          variant={reverse ? "right" : "left"}
        >
          {hasImages(data) ? (
            <FeatureCarousel images={data.images} label={`${data.title} gallery`} />
          ) : hasVideo(data) ? (
            <YoutubeEmbed
              videoId={data.video.id}
              title={data.video.title}
              start={data.video.start}
            />
          ) : null}
        </Reveal>
        <Reveal
          className={styles.copy}
          variant={reverse ? "left" : "right"}
          delay={100}
        >
          <span className={styles.chapter}>{chapter}</span>
          <p className="eyebrow">{data.eyebrow}</p>
          <h2 className="section-title">{data.title}</h2>
          <div className={styles.prose}>
            {data.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {hasNote(data) ? <p className={styles.note}>{data.note}</p> : null}
          {hasCta(data) ? (
            <a
              href={data.cta.href}
              className={styles.cta}
              target="_blank"
              rel="noreferrer"
            >
              {data.cta.label}
              <span aria-hidden>→</span>
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
