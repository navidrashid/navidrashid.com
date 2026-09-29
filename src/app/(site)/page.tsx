import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { revamp } from "./content";
import { Featured } from "./featured";
import { Gallery } from "./gallery";
import { Hero } from "./hero";
import { Youtube } from "./youtube";
import { PersonJsonLd } from "./person-jsonld";
import styles from "./revamp.module.css";

const whatsapp = (message: string) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;

const channels = [
  {
    name: "WhatsApp",
    handle: "Fastest reply",
    href: whatsapp("Hi Navid, I found you through your website."),
    primary: true,
  },
  { name: "Instagram", handle: "@navrsh", href: site.socials.instagram },
  { name: "LinkedIn", handle: "Navid Rashid", href: site.socials.linkedin },
  { name: "YouTube", handle: "@navidrashid", href: site.socials.youtube },
] as const;

export default function RevampPage() {
  const { about, driven, moving, gallery, vessbook, youtube, close } = revamp;
  const [lead, ...rest] = about.stats;

  return (
    <main className={`${styles.page} revamp-home`}>
      <PersonJsonLd />
      <div className={styles.ink}>
        <Hero lines={revamp.hero.lines} />
      </div>

      <div className={styles.light}>
        <Featured />
      </div>

      <section
        id={about.id}
        className={`${styles.block} ${styles.light}`}
        aria-labelledby="about-statement"
      >
        <div className={`container ${styles.wide}`}>
          <p className={styles.kicker}>{about.kicker}</p>
          <div id="about-statement" className={styles.statement}>
            {about.statement.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className={styles.fill}>
                {paragraph.split(" ").map((word, index) => (
                  <span key={index} className={styles.word}>
                    {word}{" "}
                  </span>
                ))}
              </p>
            ))}
          </div>

          <div className={styles.bento}>
            <div className={`${styles.card} ${styles.portrait} ${styles.rise}`}>
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                sizes="(max-width: 800px) 100vw, 40vw"
                className={styles.portraitImage}
              />
            </div>

            <div className={`${styles.card} ${styles.stat} ${styles.statLead} ${styles.rise}`}>
              <p className={styles.statValue}>
                {lead.value}
                {"currency" in lead ? <small className={styles.cur}>{lead.currency}</small> : null}
              </p>
              <p className={styles.statLabel}>{lead.label}</p>
            </div>

            {rest.map((stat) => (
              <div key={stat.value} className={`${styles.card} ${styles.stat} ${styles.rise}`}>
                <p className={styles.statValue}>
                  {stat.value}
                  {"currency" in stat ? <small className={styles.cur}>{stat.currency}</small> : null}
                </p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>

          <Link className={`${styles.story} ${styles.rise}`} href={about.cta.href}>
            <span className={styles.storyText}>
              <strong>{about.story.lead}</strong> {about.story.line}
            </span>
            <span className={styles.storyGo}>
              {about.cta.label}
              <span aria-hidden>→</span>
            </span>
          </Link>

          <Link className={`${styles.dev} ${styles.rise}`} href={about.developers.cta.href}>
            <span className={styles.devCopy}>
              <span className={styles.devKicker}>{about.developers.kicker}</span>
              <span className={styles.devTitle}>
                {about.developers.title} <span>{about.developers.emphasis}</span>
              </span>
              <span className={styles.devLead}>{about.developers.lead}</span>
            </span>
            <span className={styles.devSide}>
              <span className={styles.devCta}>
                {about.developers.cta.label}
                <span aria-hidden>→</span>
              </span>
            </span>
          </Link>

        </div>
      </section>

      <section
        id={driven.id}
        className={`${styles.block} ${styles.ink} ${styles.driven}`}
        aria-labelledby="driven-title"
      >
        <div className={`container ${styles.wide}`}>
          <Image
            src={driven.logo.src}
            alt={driven.logo.alt}
            width={driven.logo.width}
            height={driven.logo.height}
            className={`${styles.drivenLogo} ${styles.rise}`}
          />
          <h2 id="driven-title" className={`${styles.title} ${styles.rise}`}>
            {driven.title} <span>{driven.subtitle}</span>
          </h2>
          <p className={`${styles.lead} ${styles.rise}`}>{driven.lead}</p>

          <ul className={styles.paths}>
            {driven.paths.map((path) => (
              <li key={path.name} className={styles.rise}>
                <a href={whatsapp(path.message)} target="_blank" rel="noreferrer" className={styles.path}>
                  <span className={styles.pathName}>{path.name}</span>
                  <span className={styles.pathLine}>{path.line}</span>
                  <span className={styles.pathGo} aria-hidden>
                    +
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            className={styles.outbound}
            href={driven.site.href}
            target="_blank"
            rel="noreferrer"
          >
            {driven.site.label}
            <span aria-hidden> ↗</span>
          </a>
        </div>
      </section>

      <section
        id={moving.id}
        className={`${styles.block} ${styles.light}`}
        aria-labelledby="moving-title"
      >
        <div className={`container ${styles.wide}`}>
          <div className={`${styles.card} ${styles.move} ${styles.rise}`}>
            <div className={styles.moveMedia}>
              <Image
                src={moving.image.src}
                alt={moving.image.alt}
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                className={styles.moveImage}
              />
            </div>
            <div className={styles.moveCopy}>
              <h2 id="moving-title" className={`${styles.title} ${styles.moveTitle}`}>
                {moving.title} <span>{moving.subtitle}</span>
              </h2>
              <p className={styles.moveLead}>{moving.lead}</p>
              <Link className={`${styles.pill} ${styles.pillLight}`} href={moving.cta.href}>
                {moving.cta.label}
                <span aria-hidden>→</span>
              </Link>
            </div>
            <p className={styles.moveCaption}>{moving.image.caption}</p>
          </div>
        </div>
      </section>

      <div className={styles.light}>
        <Gallery
          id={gallery.id}
          title={gallery.title}
          subtitle={gallery.subtitle}
          photos={gallery.photos}
        />
      </div>

      <section
        id={vessbook.id}
        className={`${styles.block} ${styles.light}`}
        aria-labelledby="vessbook-title"
      >
        <div className={`container ${styles.wide}`}>
          <div className={`${styles.card} ${styles.vess} ${styles.rise}`}>
            <div className={styles.vessCopy}>
              <p className={styles.kicker}>{vessbook.kicker}</p>
              <h2 id="vessbook-title" className={styles.title}>
                {vessbook.title}
              </h2>
              <p className={styles.role}>
                {vessbook.role}
                <span className={styles.tag}>{vessbook.status}</span>
              </p>
              <p className={styles.lead}>{vessbook.lead}</p>
              <a
                className={`${styles.pill} ${styles.vessPill}`}
                href={vessbook.site.href}
                target="_blank"
                rel="noreferrer"
              >
                {vessbook.site.label}
                <span aria-hidden>↗</span>
              </a>
            </div>
            <div className={styles.vessFrame}>
              <Image
                src={vessbook.logo.src}
                alt={vessbook.logo.alt}
                width={vessbook.logo.width}
                height={vessbook.logo.height}
                className={styles.vessLogo}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id={youtube.id}
        className={`${styles.block} ${styles.tubeBlock} ${styles.light}`}
        aria-labelledby="youtube-title"
      >
        <div className={`container ${styles.wide}`}>
          <div className={`${styles.tube} ${styles.rise}`}>
            <div className={styles.tubeCopy}>
              <p className={styles.badge}>{youtube.badge}</p>
              <h2 id="youtube-title" className={`${styles.title} ${styles.tubeTitle}`}>
                {youtube.title} <span>{youtube.subtitle}</span>
              </h2>
              <p className={styles.tubeLead}>{youtube.lead}</p>
              <a
                className={`${styles.pill} ${styles.pillLight}`}
                href={site.socials.youtube}
                target="_blank"
                rel="noreferrer"
              >
                {youtube.cta}
                <span aria-hidden>↗</span>
              </a>
            </div>
            <div className={styles.tubeFrame}>
              <Youtube
                videoId={youtube.video.id}
                title={youtube.video.title}
                start={youtube.video.start}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id={close.id}
        className={`${styles.block} ${styles.close} ${styles.light}`}
        aria-labelledby="close-title"
      >
        <div className={`container ${styles.wide} ${styles.closeGrid}`}>
          <div className={`${styles.card} ${styles.closePhoto} ${styles.rise}`}>
            <Image
              src={close.image.src}
              alt={close.image.alt}
              fill
              sizes="(max-width: 800px) 100vw, 40vw"
              className={styles.closeImage}
            />
          </div>
          <div className={styles.closeCopy}>
            <h2 id="close-title" className={`${styles.title} ${styles.rise}`}>
            {close.title}
          </h2>
          <p className={`${styles.lead} ${styles.rise}`}>{close.lead}</p>
            <ul className={styles.channels}>
            {channels.map((channel) => (
              <li key={channel.name} className={styles.rise}>
                <a
                  className={`${styles.channel}${"primary" in channel ? ` ${styles.channelPrimary}` : ""}`}
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.channelGo} aria-hidden>
                    ↗
                  </span>
                  <span className={styles.channelName}>{channel.name}</span>
                  <span className={styles.channelHandle}>{channel.handle}</span>
                </a>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
