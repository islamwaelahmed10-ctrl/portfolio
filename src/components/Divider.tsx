// Decorative SVG shapes that sit on top of a section and blend it into the one above.
const PATHS: Record<string, [string, number]> = {
  curve: ['M0 20 C 360 84 1080 4 1440 44 L1440 64 L0 64 Z', 64],
  wave: ['M0 28 C 120 8 240 8 360 28 S 600 48 720 28 S 960 8 1080 28 S 1320 48 1440 28 L1440 48 L0 48 Z', 48],
  waveFlip: ['M0 28 C 120 48 240 48 360 28 S 600 8 720 28 S 960 48 1080 28 S 1320 8 1440 28 L1440 48 L0 48 Z', 48],
  angle: ['M0 0 L1440 56 L0 56 Z', 56],
  angleFlip: ['M0 56 L1440 0 L1440 56 Z', 56],
  steps: ['M0 48 L0 32 L480 32 L480 16 L960 16 L960 0 L1440 0 L1440 48 Z', 48],
  stepsFlip: ['M1440 48 L1440 32 L960 32 L960 16 L480 16 L480 0 L0 0 L0 48 Z', 48],
};

export default function Divider({ shape, color }: { shape: keyof typeof PATHS; color: string }) {
  const [d, h] = PATHS[shape];
  return (
    <svg className="divider" aria-hidden="true" viewBox={`0 0 1440 ${h}`} preserveAspectRatio="none" style={{ height: h }}>
      <path d={d} fill={color} />
    </svg>
  );
}
