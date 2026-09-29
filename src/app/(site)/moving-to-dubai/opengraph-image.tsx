import { renderOg } from "../og";

export const alt = "Moving to Dubai with Navid Rashid: do it in the right order.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "Moving to Dubai",
    title: "Do it in the right order.",
    subtitle: "Start with someone who's done it.",
  });
}
