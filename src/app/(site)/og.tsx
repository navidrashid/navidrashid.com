import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

type Card = {
  kicker: string;
  title: string;
  subtitle: string;
  titleSize?: number;
  subtitleSize?: number;
};

/** Share preview: dark card, two-tone headline, cutout portrait on the right. */
export async function renderOg({
  kicker,
  title,
  subtitle,
  titleSize = 76,
  subtitleSize = 40,
}: Card) {
  const portrait = await readFile(
    join(process.cwd(), "public/images/portraits/navid-hero2.png"),
  );
  const src = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          background: "linear-gradient(135deg, #0b0b0c 0%, #141416 60%, #1c1710 100%)",
          color: "#f5f5f7",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 720,
            height: "100%",
            padding: "64px 72px",
          }}
        >
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "#a1a1a6" }}>
            {kicker}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: titleSize,
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 16,
                fontSize: subtitleSize,
                fontWeight: 600,
                lineHeight: 1.15,
                color: "#8a8a90",
              }}
            >
              {subtitle}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#a1a1a6" }}>navidrashid.com</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          width={480}
          height={720}
          alt=""
          style={{ position: "absolute", right: 24, bottom: -90 }}
        />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
