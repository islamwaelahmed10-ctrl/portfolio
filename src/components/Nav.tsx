import { NAV, SITE } from '../data/content';
import { useLang } from '../lib/i18n';

export default function Nav() {
  const lang = useLang();
  return (
    <header className="nav wrap">
      <a className="nav__brand" href={lang === 'ar' ? '/' : '/en/'}>
        <img src="/media/img/logo-dark-96.webp" alt="" width="48" height="48" />
        <span lang="ar" className="ar">{SITE.name.ar}</span>
        <span lang="en" className="hand">{SITE.name.en}</span>
      </a>
      <nav aria-label={lang === 'ar' ? 'القائمة' : 'Main'} className="nav__links">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`}>
            {lang === 'ar' ? <span lang="ar" className="ar">{n.ar}</span> : <span className="label">{n.en}</span>}
          </a>
        ))}
        <div className="lang" role="group" aria-label="Language">
          <a href="/" lang="ar" className="ar" aria-current={lang === 'ar' ? 'true' : undefined}>عربي</a>
          <a href="/en/" lang="en" aria-current={lang === 'en' ? 'true' : undefined}>EN</a>
        </div>
      </nav>
    </header>
  );
}
