// Vector Dubai skyline for the hero backdrop. Deterministic, so server and
// client agree. The Burj Khalifa is its own element so it can be pinned clear
// of the portrait instead of scaling with the backdrop.

const W = 1600;
const H = 520;

function random(seed: number) {
  let s = seed;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Block = { x: number; w: number; h: number };

function blocks(seed: number, min: number, max: number) {
  const rand = random(seed);
  const out: Block[] = [];
  let x = -10;
  while (x < W + 10) {
    const w = 26 + rand() * 46;
    const tall = rand() > 0.86;
    out.push({ x, w, h: min + rand() * (max - min) * (tall ? 1.55 : 1) });
    x += w + rand() * 6;
  }
  return out;
}

export function Skyline({
  layer,
  className,
}: {
  layer: "far" | "near";
  className?: string;
}) {
  const seed = layer === "far" ? 147 : 47;
  const list = layer === "far" ? blocks(seed, 70, 170) : blocks(seed, 90, 250);

  const rand = random(seed + 7);
  const lights =
    layer === "near"
      ? list.flatMap((block) =>
          block.h < 130
            ? []
            : Array.from({ length: 5 }, () => ({
                x: block.x + 4 + rand() * (block.w - 10),
                y: H - block.h + 10 + rand() * (block.h - 24),
              })),
        )
      : [];

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
      focusable="false"
    >
      <g className={layer}>
        {list.map((block, index) => (
          <rect key={index} x={block.x} y={H - block.h} width={block.w} height={block.h} />
        ))}
      </g>
      {lights.map((light, index) => (
        <rect key={index} className="light" x={light.x} y={light.y} width={2.4} height={3.2} />
      ))}
    </svg>
  );
}

/** Burj Khalifa: stepped, tapering tiers with a long spire. */
export function Burj({ className }: { className?: string }) {
  const cx = 40;
  const base = H;
  const tiers: [number, number][] = [
    [30, base],
    [30, base - 190],
    [23, base - 190],
    [23, base - 290],
    [17, base - 290],
    [17, base - 370],
    [12, base - 370],
    [12, base - 430],
    [7, base - 430],
    [7, base - 470],
    [3, base - 470],
    [1.4, base - 512],
  ];
  const left = tiers.map(([hw, y]) => `${cx - hw},${y}`);
  const right = [...tiers].reverse().map(([hw, y]) => `${cx + hw},${y}`);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${cx * 2} ${H}`}
      preserveAspectRatio="xMidYMax meet"
      aria-hidden
      focusable="false"
    >
      <path className="burj" d={`M${left.join(" L")} L${right.join(" L")} Z`} />
    </svg>
  );
}
