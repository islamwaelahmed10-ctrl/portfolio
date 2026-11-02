import { useState } from 'react';
import Img, { imgUrl } from './Img';
import Heading from './Heading';
import { NOIR_CLIPS, NOIR_PHOTOS, SHOWS, TEXT, TTP_CLIPS, TTP_PHOTOS } from '../data/content';
import { useLang } from '../lib/i18n';
import { sendForm } from '../lib/forms';

type Photo = { img: string; alt: string; span: string; pos?: string };
const Bento = ({ photos }: { photos: Photo[] }) => (
  <div className="bento">
    {photos.map((p) => <Img key={p.img} name={p.img} alt={p.alt} sizes="(max-width: 700px) 50vw, 600px" className={`bento__${p.span || 'one'}`} style={p.pos ? { objectPosition: p.pos } : undefined} />)}
  </div>
);

function Notify() {
  const lang = useLang();
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  return (
    <div className="notify">
      <div className="stack-xs">
        <span className="label-sm gold">NEXT SHOW · <span className="ar">الحفلة الجاية</span></span>
        <span className={lang === 'ar' ? 'ar notify__title' : 'notify__title hand'}>{TEXT.nextShow[lang]}</span>
        <span className={lang === 'ar' ? 'ar muted' : 'muted'}>{TEXT.nextShowSub[lang]}</span>
      </div>
      {state === 'ok' ? <p className={lang === 'ar' ? 'ar' : ''}>{TEXT.sent[lang]}</p> : (
        <form className="notify__form" onSubmit={async (e) => {
          e.preventDefault();
          const email = new FormData(e.currentTarget).get('email') as string;
          setState('sending');
          setState((await sendForm('Notify me — next show', { email })) ? 'ok' : 'err');
        }}>
          <label className="field"><span className="label-sm">EMAIL</span>
            <input type="email" name="email" required placeholder="you@email.com" autoComplete="email" />
          </label>
          <button type="submit" className="btn btn--gold" disabled={state === 'sending'}>NOTIFY ME · <span className="ar">خليك قريب</span></button>
          {state === 'err' && <p className="form-err">{TEXT.failed[lang]}</p>}
        </form>
      )}
    </div>
  );
}

export default function Live() {
  const lang = useLang();
  return (
    <section id="live" className="section section--live">
      <div className="wrap stack">
        <div className="intro">
          <Heading ar="حفلات" en="Live" color="#E3B67A" />
          <p className={`muted ${lang === 'ar' ? 'ar lead' : 'lead'}`}>{TEXT.live[lang]}</p>
        </div>
        <Notify />
        <div className="grid grid--shows">
          {SHOWS.map((s) => (
            <article key={s.title} className="show">
              <Img name={s.poster} alt={s.alt} sizes="150px" className="show__poster" />
              <div className="stack-xs">
                <span className="label-sm gold">{s.tag}</span>
                <span className="hand show__title">{s.title}</span>
                <span>{s.date}</span>
                <span className="muted">{s.venue}</span>
                {s.note && <span className="muted small">{s.note}</span>}
              </div>
            </article>
          ))}
        </div>

        <p className="label-sm gold live__sub">FROM THE FIRST SHOW · NOIR ART ZONE · OCT 24, 2025</p>
        <div className="grid grid--clips">
          {NOIR_CLIPS.map((c) => (
            <figure key={c.n} className="clip">
              <video src={c.video} poster={imgUrl(c.poster)} controls playsInline preload="none" aria-label={`${c.title}, live at Noir`} />
              <figcaption><span className="label-sm muted">{c.n}</span><span lang="ar" className="ar">{c.title}</span><span className="label-sm gold">{c.tag}</span></figcaption>
            </figure>
          ))}
        </div>
        <Bento photos={NOIR_PHOTOS} />

        <p className="label-sm gold live__sub">FROM MAZRA3A · THE THIRD PLACE · MAADI · NOV 15, 2025</p>
        <div className="grid grid--vclips">
          {TTP_CLIPS.map((c) => (
            <figure key={c.n} className="clip clip--v">
              <video src={c.video} poster={imgUrl(c.poster)} controls playsInline preload="none" aria-label={`${c.title}, live at The Third Place`} />
              <figcaption><span lang="ar" className="ar">{c.title}</span><span className="label-sm gold">{c.tag}</span></figcaption>
            </figure>
          ))}
        </div>
        <Bento photos={TTP_PHOTOS} />
      </div>
    </section>
  );
}
