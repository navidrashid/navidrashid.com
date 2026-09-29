import { renderOg } from "../og";

export const alt = "About Navid Rashid: Excuses don't close deals. Preparation does.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "About",
    title: "Excuses don't close deals.",
    subtitle: "Preparation does.",
  });
}
