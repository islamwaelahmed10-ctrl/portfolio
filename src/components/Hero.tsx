import Img from './Img';
import { GENRES, SITE, TEXT } from '../data/content';
import { useLang } from '../lib/i18n';

const CALLI = [
  'يا عالَم · الأَرْضُ لَنْ تَنْسَى · تُراب الناس · بَحر الضَّياع · شايِف السَّراب · النَّدَى · ',
  'لِكُلِّ شَيءٍ · حِلمْ · رَويت · بداية · سحاب · يمضي الزمان · بحلم · دايرة · ',
  'بَحر الضَّياع · يا عالَم · العفو · حِلمْ · تُراب الناس · بداية · ',
  'شايِف السَّراب · سحاب · الأَرْضُ لَنْ تَنْسَى · دايرة · النَّدَى · رَويت · ',
  'يمضي الزمان · لِكُلِّ شَيءٍ · بحلم · يا عالَم · بَحر الضَّياع · سحاب · ',
  'حِلمْ · تُراب الناس · العفو · شايِف السَّراب · بداية · الأَرْضُ لَنْ تَنْسَى · ',
];
const SIZES = [64, 52, 72, 56, 66, 54];
// Real waveform of «لكل شيء», 120 bars.
const WAVE = [0.18,0.19,0.12,0.15,0.08,0.19,0.35,0.15,0.18,0.21,0.22,0.35,0.27,0.27,0.2,0.2,0.24,0.23,0.22,0.18,0.3,0.45,0.38,0.45,0.37,0.32,0.63,0.47,0.36,0.51,0.42,0.44,0.51,0.42,0.34,0.36,0.31,0.38,0.33,0.41,0.29,0.1,0.15,0.19,0.19,0.18,0.2,0.18,0.26,0.2,0.2,0.47,0.38,0.63,0.52,0.34,0.57,0.42,0.5,0.3,0.34,0.48,0.49,0.53,0.49,0.33,0.55,0.29,0.27,0.5,0.34,0.48,0.39,0.53,0.71,0.68,0.73,0.84,0.68,0.69,0.33,0.49,0.43,0.68,0.76,0.67,0.84,0.68,0.42,0.55,0.32,0.37,0.76,0.95,0.87,0.92,0.88,0.97,0.93,0.97,1.0,0.95,0.93,0.8,0.75,0.72,0.75,0.61,0.6,0.4,0.38,0.36,0.28,0.11,0.06,0.04,0.02,0.01,0.0,0.0];

export default function Hero() {
  const lang = useLang();
  return (
    <>
      <section id="top" className="hero staff">
        <div className="calli" aria-hidden="true">
          {CALLI.map((t, i) => (
            <div key={i} className={`calli__row ${i % 2 ? 'drift-r' : 'drift-l'}`} style={{ fontSize: SIZES[i] }}>
              <span>{t}</span><span>{t}</span>
            </div>
          ))}
        </div>
        <div className="hero__inner wrap">
          <div className="hero__text">
            <p className={lang === 'ar' ? 'hero__roles ar' : 'hero__roles label'}>{SITE.roles[lang]}</p>
            <h1 className="hero__name">
              <span lang="ar" className="ar">{SITE.name.ar}</span>
              <span lang="en" className="hand">{SITE.name.en}</span>
            </h1>
            <p className={`hero__tagline ${lang === 'ar' ? 'ar' : ''}`}>{SITE.tagline[lang]}</p>
            <ul className="genres" aria-label={lang === 'ar' ? 'الأنواع' : 'Genres'}>
              {GENRES.map((g) => {
                const ar = lang === 'ar' && g.ar !== 'Alternative Oriental';
                return <li key={g.en} className={ar ? 'ar' : 'label-sm'}>{g[lang]}</li>;
              })}
            </ul>
            <div className="hero__album">
              <Img name="cover-ya3alam" alt="Ya 3alam album cover" sizes="84px" className="round" />
              <div className="hero__album-text">
                <span className="label-sm">{lang === 'ar' ? <span className="ar">الألبوم الأول</span> : 'DEBUT ALBUM'}</span>
                <span className="pair"><span lang="ar" className="ar">يا عالَم</span><span className="hand">Ya 3alam</span></span>
              </div>
              <a className="btn" href="#ya3alam">
                <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="currentColor" /></svg>
                {lang === 'ar' ? <span className="ar">{TEXT.listen.ar}</span> : TEXT.listen.en}
              </a>
            </div>
            <a className={`hero__cta ${lang === 'ar' ? 'ar' : 'label'}`} href="#contact">{TEXT.workWithMe[lang]}</a>
          </div>
          <div className="hero__photo">
            <div className="ring ring--rose">
              <Img name="portrait" alt="Portrait of Islam Wael" sizes="(max-width: 600px) 82vw, 460px" className="round" eager />
              <span className="hero__stamp"><img src="/media/img/logo-dark-256.webp" alt="Islam Wael logo" width="256" height="256" /></span>
            </div>
          </div>
        </div>
        <div className="wave wrap" aria-hidden="true">
          {WAVE.map((v, i) => <i key={i} style={{ height: Math.round(6 + v * 82) }} />)}
        </div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i}><span className="ar">يا عالَم</span><span className="hand">Ya 3alam</span><img src="/media/img/logo-light-96.webp" alt="" width="40" height="40" /></span>
          ))}
        </div>
      </div>
    </>
  );
}
