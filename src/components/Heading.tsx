import type { ReactNode } from 'react';

// Section title: Arabic in Vibes + English handwritten, side by side.
export default function Heading({ ar, en, color, level = 2, size = 'md', children }: {
  ar: string; en: string; color?: string; level?: 2 | 3; size?: 'md' | 'lg'; children?: ReactNode;
}) {
  const Tag = level === 2 ? 'h2' : 'h3';
  return (
    <Tag className={`heading heading--${size}`}>
      <span lang="ar" className="ar">{ar}</span>
      <span lang="en" className="hand" style={color ? { color } : undefined}>{en}</span>
      {children}
    </Tag>
  );
}
