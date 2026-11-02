import images from '../data/images.json';

type Size = [number, number, number]; // [requested width, real width, real height]
const table = images as unknown as Record<string, Size[]>;

type Props = { name: string; alt: string; sizes?: string; className?: string; style?: React.CSSProperties; eager?: boolean };

// Responsive WebP image built from the generated manifest.
export default function Img({ name, alt, sizes = '100vw', className, style, eager }: Props) {
  const set = table[name];
  if (!set) return null;
  const sorted = [...set].sort((a, b) => a[1] - b[1]);
  const largest = sorted[sorted.length - 1];
  return (
    <img
      src={`/media/img/${name}-${largest[0]}.webp`}
      srcSet={sorted.map(([w, real]) => `/media/img/${name}-${w}.webp ${real}w`).join(', ')}
      sizes={sizes}
      width={largest[1]}
      height={largest[2]}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      className={className}
      style={style}
    />
  );
}

export const imgUrl = (name: string) => {
  const set = table[name];
  if (!set) return '';
  const big = [...set].sort((a, b) => b[1] - a[1])[0];
  return `/media/img/${name}-${big[0]}.webp`;
};
