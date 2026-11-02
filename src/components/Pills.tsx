export default function Pills({ links, tone = 'light' }: { links: { label: string; url: string }[]; tone?: 'light' | 'dark' }) {
  return (
    <div className="pills">
      {links.map((l) => (
        <a key={l.label} className={`pill pill--${tone}`} href={l.url} target="_blank" rel="noopener">{l.label}</a>
      ))}
    </div>
  );
}
