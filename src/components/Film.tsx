import Img, { imgUrl } from './Img';
import Heading from './Heading';
import Divider from './Divider';
import { FILMS, TEXT } from '../data/content';
import { useLang } from '../lib/i18n';

const Laurel = ({ color, flip }: { color: string; flip?: boolean }) => (
  <svg width="18" height="40" viewBox="0 0 18 40" aria-hidden="true" fill="none" stroke={color} strokeWidth="1.5" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M15 38C5 32 3 18 9 4" /><path d="M7 30c-4 0-6-2-6-4 3 0 5 2 6 4zM6 22c-4-1-5-3-5-5 3 1 5 3 5 5zM7 14c-3-2-4-4-3-6 2 1 3 4 3 6z" />
  </svg>
);

export default function Film() {
  const lang = useLang();
  return (
    <section id="film" className="section section--film">
      <Divider shape="angleFlip" color="#0F1415" />
      <div className="wrap stack-xl">
        <div className="intro">
          <Heading ar="أفلام" en="Film" color="#D9A9AC" />
          <p className={`muted ${lang === 'ar' ? 'ar lead' : 'lead'}`}>{TEXT.film[lang]}</p>
        </div>
        {FILMS.map((f) => (
          <article key={f.en} className="film">
            <div className="film__poster" style={{ aspectRatio: f.ratio }}>
              {f.motion
                ? <video src={f.motion} poster={imgUrl(f.poster)} autoPlay muted loop playsInline preload="none" aria-label={`${f.en} film poster`} />
                : <Img name={f.poster} alt={`${f.en} film poster`} sizes="(max-width: 600px) 90vw, 380px" />}
            </div>
            <div className="film__body">
              <h3 className="heading heading--lg"><span lang="ar" className="ar">{f.ar}</span><span className="hand" style={{ color: f.accent }}>{f.en}</span></h3>
              <dl className="credits">
                <div><dt>{f.dirLabel}</dt><dd>{f.director}</dd></div>
                <div><dt>FILM SCORE</dt><dd>Islam Wael</dd></div>
              </dl>
              <div className="fests">
                {f.fests.map((x) => (
                  <div key={x.name} className="fest">
                    <Laurel color={f.accent} />
                    <span><span className="fest__k">OFFICIAL SELECTION</span><span className="fest__name">{x.name}</span><span className="fest__y">{x.year}</span></span>
                    <Laurel color={f.accent} flip />
                  </div>
                ))}
              </div>
              {f.trailer && <>
                <span className="label-sm" style={{ color: f.accent }}>TRAILER</span>
                <video className="film__trailer" style={{ aspectRatio: f.trailerRatio || '16 / 9' }} src={f.trailer} poster={imgUrl(f.still || '')} controls playsInline preload="none" aria-label={`${f.en} trailer`} />
              </>}
              {f.extra?.img && <Img name={f.extra.img} alt={f.extra.alt} sizes="(max-width: 800px) 90vw, 760px" className="film__still" />}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
