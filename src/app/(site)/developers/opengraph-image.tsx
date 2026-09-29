import { renderOg } from "../og";

export const alt = "Selected work by Navid Rashid: launches, numbers and what I actually did.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Selected work",
    title: "Proof, not promises.",
    subtitle: "JW Marriott Residences · 8188 Yonge · Hills on Bayview",
    subtitleSize: 34,
  });
}
