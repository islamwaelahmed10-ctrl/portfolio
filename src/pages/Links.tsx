import Img from '../components/Img';
import { BIDAYA, PRESS_KIT_URL, SITE, YA3ALAM, PRODUCTION } from '../data/content';
import Consent from '../components/Consent';

const ICONS: { label: string; url: string; d: JSX.Element }[] = [
  { label: 'Instagram', url: 'https://www.instagram.com/islam_wael_/', d: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" /></> },
  { label: 'YouTube', url: 'https://www.youtube.com/@IslamWaelmusic', d: <><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10 9.2l5 2.8-5 2.8z" fill="currentColor" stroke="none" /></> },
  { label: 'TikTok', url: 'https://www.tiktok.com/@islamwaelll', d: <><path d="M13.5 4v10.5a3.5 3.5 0 1 1-3.5-3.5" /><path d="M13.5 4c.6 2.6 2.4 4.2 5 4.4" /></> },
  { label: 'Facebook', url: 'https://www.facebook.com/islamwaelofficial/', d: <path d="M14.5 7.5h2V4h-2.5a4 4 0 0 0-4 4v2.5H8V14h2v6h3.5v-6h2.4l.6-3.5h-3V8.3c0-.5.4-.8 1-.8z" /> },
  { label: 'SoundCloud', url: 'https://soundcloud.com/islamwael33', d: <><path d="M8 17h10a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.6-1.3" /><path d="M3 14v3M5.5 11.5V17M8 10v7" /></> },
];

const Arrow = ({ color }: { color: string }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>;

export default function Links() {
  return (
    <main className="links">
      <header className="links__head">
        <div className="ring ring--rose links__ring">
          <Img name="portrait" alt="Islam Wael" sizes="124px" className="round" eager />
          <span className="links__stamp"><img src="/media/img/logo-light-96.webp" alt="" width="28" height="28" /></span>
        </div>
        <h1 className="links__name"><span lang="ar" className="ar">{SITE.name.ar}</span><span className="hand">{SITE.name.en}</span></h1>
        <p className="ar links__roles">مؤلف · ملحن · موزّع</p>
        <p className="label-sm">COMPOSER · SONGWRITER · ARRANGER</p>
      </header>
      <nav className="links__icons" aria-label="Social">
        {ICONS.map((i) => (
          <a key={i.label} href={i.url} aria-label={i.label} target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">{i.d}</svg>
          </a>
        ))}
      </nav>

      <article className="lcard lcard--ya">
        <div className="lcard__row">
          <Img name="cover-ya3alam" alt="Ya 3alam album cover" sizes="76px" className="lcard__cover" />
          <div><span className="label-sm">NEW ALBUM · 2024</span><span className="pair"><span lang="ar" className="ar">يا عالَم</span><span className="hand">Ya 3alam</span></span></div>
        </div>
        <div className="lcard__grid">{YA3ALAM.links.slice(0, 4).map((l, i) => <a key={l.label} className={i === 0 ? 'lpill lpill--solid' : 'lpill'} href={l.url} target="_blank" rel="noopener">{l.label}</a>)}</div>
      </article>

      <a className="lrow" href="https://youtu.be/M3vvyrf7sTY" target="_blank" rel="noopener">
        <span className="lrow__thumb"><Img name="noir-poster-01" alt="" sizes="96px" /></span>
        <span className="stack-xs"><span lang="ar" className="ar">لِكُلِّ شَيءٍ</span><span className="label-sm accent">OFFICIAL MUSIC VIDEO</span></span>
      </a>

      <article className="lcard lcard--bidaya">
        <div className="lcard__row">
          <Img name="cover-bidaya" alt="Bidaya album cover" sizes="64px" className="lcard__cover round" />
          <div><span className="label-sm">ISLAM WAEL FEAT. SARD · 2023</span><span className="pair"><span lang="ar" className="ar">بداية</span><span className="hand">Bidaya</span></span></div>
        </div>
        <div className="lcard__grid">{BIDAYA.links.map((l, i) => <a key={l.label} className={i === 0 ? 'lpill lpill--solid' : 'lpill'} href={l.url} target="_blank" rel="noopener">{l.label}</a>)}</div>
      </article>

      <a className="lrow lrow--pink" href={PRODUCTION.pink.links[0].url} target="_blank" rel="noopener">
        <Img name="cover-pink" alt="Pink EP cover" sizes="56px" className="lrow__sq" />
        <span className="stack-xs grow"><span className="hand">Pink — May Elghety</span><span className="label-sm">ARRANGED &amp; PRODUCED BY ISLAM</span></span>
        <Arrow color="#E58FC4" />
      </a>
      <a className="lrow lrow--live" href="/#live">
        <span className="stack-xs grow"><span className="label-sm">LIVE · <span className="ar">حفلات</span></span><span>Clips from Noir &amp; The Third Place</span></span>
        <Arrow color="#E3B67A" />
      </a>

      <div className="stack-sm">
        <a className="lbtn lbtn--solid" href="/">THE FULL WEBSITE · <span className="ar">الموقع</span></a>
        <a className="lbtn" href={PRESS_KIT_URL} download>PRESS KIT (PDF)</a>
        <a className="lbtn lbtn--rose" href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </div>
      <footer className="links__foot"><img src="/media/img/logo-dark-96.webp" alt="Islam Wael logo" width="34" height="34" /></footer>
      <Consent />
    </main>
  );
}
