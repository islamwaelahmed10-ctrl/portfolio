import Img from './Img';
import Heading from './Heading';
import Pills from './Pills';
import TrackList from './TrackList';
import Divider from './Divider';
import { PRODUCTION } from '../data/content';
import { useLang } from '../lib/i18n';

export default function Production() {
  const lang = useLang();
  const { pink, minFat } = PRODUCTION;
  return (
    <section id="production" className="section section--production">
      <Divider shape="angle" color="#E8EEE6" />
      <div className="wrap stack-lg">
        <div className="intro">
          <Heading ar="إنتاج" en="Production for artists" color="#9C6B70" />
          <p className={`lead ${lang === 'ar' ? 'ar' : ''}`}>{PRODUCTION.about[lang]}</p>
        </div>

        <article className="card card--pink" style={{ ['--line' as string]: 'rgba(229,143,196,0.6)' }}>
          <div className="card--pink__media">
            <div className="ring" style={{ borderColor: 'rgba(229,143,196,0.55)' }}>
              <Img name={pink.cover} alt="Pink EP artwork, May Elghety" sizes="(max-width: 600px) 76vw, 360px" className="round" />
            </div>
          </div>
          <div className="card--pink__body">
            <p className="kicker" style={{ color: '#E58FC4' }}>PINK EP</p>
            <Heading ar={pink.artistAr} en={pink.artistEn} color="#E58FC4" level={3} />
            <dl className="credits">
              {pink.credits.map((c) => (
                <div key={c.k} className={c.wide ? 'wide' : undefined}><dt>{c.k}</dt><dd>{c.v}</dd></div>
              ))}
            </dl>
            <TrackList id="pink" tracks={pink.tracks} accent="#E58FC4" on="#161515" dim="#E58FC4" />
            <Pills links={pink.links} />
            <div className="stats">
              {pink.stats.map((s) => <div key={s.k}><span className="stats__n">{s.n}</span><span className="label-sm">{s.k}</span></div>)}
            </div>
          </div>
        </article>

        <article className="card card--minfat" style={{ ['--line' as string]: '#1E2822' }}>
          <Img name={minFat.cover} alt="Min Fat Adimo EP cover by Sard" sizes="(max-width: 600px) 90vw, 280px" className="card--minfat__cover" />
          <div className="card--minfat__body">
            <p className="kicker" style={{ color: '#12302F' }}><span className="badge">NEW · 2026</span>SARD · EP</p>
            <h3 className="heading heading--md"><span lang="ar" className="ar">{minFat.title}</span></h3>
            <ol className="roles">
              {minFat.tracks.map((t) => <li key={t.title}><span lang="ar" className="ar">{t.title}</span><span className="label-sm">{t.role}</span></li>)}
            </ol>
            <Pills links={minFat.links} />
          </div>
        </article>

        <ul className="services">
          {PRODUCTION.services.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </section>
  );
}
