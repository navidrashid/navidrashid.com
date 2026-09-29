import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { movingPage } from "./content";
import styles from "./moving.module.css";

export const metadata: Metadata = {
  title: "Moving to Dubai",
  description:
    "Moving to Dubai from Canada or North America? Do it in the right order: where to live, what comes first and who to call.",
  alternates: { canonical: "/moving-to-dubai" },
  openGraph: {
    title: "Moving to Dubai: do it in the right order",
    description:
      "Where to live, what comes first and who to call, from someone who moved from Toronto to Dubai.",
    url: `${site.url}/moving-to-dubai`,
  },
};

const whatsapp = (message: string) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;

export default function MovingToDubaiPage() {
  const { hero, why, order, cta } = movingPage;

  return (
    <main className={styles.page} data-page="moving">
      <div className={`container ${styles.wide}`}>
        <section className={styles.hero} aria-labelledby="moving-title">
          <p className={styles.kicker}>{hero.kicker}</p>
          <h1 id="moving-title" className={styles.h1}>
            {hero.title} <span>{hero.subtitle}</span>
          </h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.actions}>
            <a
              className={styles.pill}
              href={whatsapp(hero.primary.message)}
              target="_blank"
              rel="noreferrer"
            >
              {hero.primary.label}
              <span aria-hidden>↗</span>
            </a>
            <a className={`${styles.pill} ${styles.soft}`} href={hero.secondary.href}>
              {hero.secondary.label}
              <span aria-hidden>↓</span>
            </a>
          </div>
          <div className={`${styles.banner} ${styles.rise}`}>
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 76rem"
              className={styles.bannerImage}
            />
          </div>
        </section>

        <section id={why.id} className={styles.why} aria-labelledby="why-title">
          <h2 id="why-title" className={`${styles.h2} ${styles.rise}`}>
            {why.title} <span>{why.subtitle}</span>
          </h2>

          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.dark} ${styles.s3} ${styles.rise}`}>
              <p className={styles.stat}>{why.tax.stat}</p>
              <p className={styles.statLabel}>{why.tax.label}</p>
              <h3 className={styles.cardTitle}>{why.tax.title}</h3>
              <p className={styles.cardLine}>{why.tax.line}</p>
            </div>

            <div className={`${styles.card} ${styles.s3} ${styles.rise}`}>
              <h3 className={styles.cardTitle}>{why.safety.title}</h3>
              <p className={styles.cardLine}>{why.safety.line}</p>
            </div>

            <div className={`${styles.card} ${styles.s4} ${styles.rise}`}>
              <h3 className={styles.cardTitle}>{why.visas.title}</h3>
              <ul className={styles.routes}>
                {why.visas.routes.map((route) => (
                  <li key={route.name} className={"wide" in route ? styles.routeWide : undefined}>
                    <p className={styles.routeName}>{route.name}</p>
                    <p className={styles.routeLine}>{route.line}</p>
                    {"tiers" in route ? (
                      <ul className={styles.tiers}>
                        {route.tiers.map((tier) => (
                          <li key={tier.label} className={styles.tier}>
                            <span className={styles.tierValue}>{tier.value}</span>
                            <span className={styles.tierLabel}>{tier.label}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
              <p className={styles.note}>{why.visas.note}</p>
            </div>

            <div className={`${styles.s2} ${styles.stack}`}>
              <div className={`${styles.card} ${styles.rise}`}>
                <h3 className={styles.cardTitle}>{why.freehold.title}</h3>
                <p className={styles.cardLine}>{why.freehold.line}</p>
              </div>
              <div className={`${styles.card} ${styles.blue} ${styles.rise}`}>
                <h3 className={styles.cardTitle}>{why.peg.title}</h3>
                <p className={styles.rate} aria-label="US dollar 1 equals 3.67 dirhams">
                  <span>
                    <small>{why.peg.from.unit}</small>
                    {why.peg.from.value}
                  </span>
                  <i aria-hidden>=</i>
                  <span>
                    <small>{why.peg.to.unit}</small>
                    {why.peg.to.value}
                  </span>
                </p>
                <p className={styles.cardLine}>{why.peg.line}</p>
              </div>
            </div>

            {[why.hub, why.business, why.life].map((item) => (
              <div key={item.title} className={`${styles.card} ${styles.s2} ${styles.rise}`}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardLine}>{item.line}</p>
              </div>
            ))}

          </div>
        </section>

        <section className={styles.order} aria-labelledby="order-title">
          <h2 id="order-title" className={`${styles.h2} ${styles.rise}`}>
            {order.title} <span>{order.subtitle}</span>
          </h2>
          <ol className={styles.steps}>
            {order.steps.map((step) => (
              <li key={step.title} className={`${styles.step} ${styles.rise}`}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepLine}>{step.line}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${styles.final} ${styles.rise}`} aria-label="Next steps">
          <Image
            src={cta.image}
            alt=""
            fill
            sizes="(max-width: 1200px) 100vw, 76rem"
            className={styles.finalImage}
          />
          <div className={styles.finalScrim} aria-hidden />
          <div className={styles.finalCopy}>
            <h2 className={styles.finalTitle}>{cta.title}</h2>
            <p className={styles.finalLine}>{cta.line}</p>
            <a
              className={`${styles.pill} ${styles.light}`}
              href={whatsapp(cta.message)}
              target="_blank"
              rel="noreferrer"
            >
              {cta.label}
              <span aria-hidden>↗</span>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
