import { useState } from 'react';
import Img, { imgUrl } from './Img';
import Heading from './Heading';
import Divider from './Divider';
import { COVERS, TEXT } from '../data/content';
import { useLang } from '../lib/i18n';

export default function Covers() {
  const lang = useLang();
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="covers" className="section section--covers">
      <Divider shape="waveFlip" color="#1E2822" />
      <div className="wrap stack">
        <div className="row-between">
          <div className="stack-sm">
            <Heading ar="توزيعات" en="Covers" color="#D9A9AC" />
            <p className={`muted ${lang === 'ar' ? 'ar lead' : ''}`}>{TEXT.covers[lang]}</p>
          </div>
          <a className="pill" href="https://www.instagram.com/islam_wael_/" target="_blank" rel="noopener">MORE ON INSTAGRAM</a>
        </div>
        <div className="grid grid--covers">
          {COVERS.map((c) => (
            <figure key={c.n} className="cover">
              {open === c.n ? (
                <video src={c.video} poster={imgUrl(c.poster)} controls autoPlay playsInline className="cover__media" aria-label={`${c.title} — ${c.artist}`} />
              ) : (
                <button type="button" className="cover__poster" onClick={() => setOpen(c.n)} aria-label={`Play cover: ${c.title} — ${c.artist}`}>
                  <Img name={c.poster} alt="" sizes="(max-width: 600px) 50vw, 300px" className="cover__media" />
                  <span className="cover__play"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="#F8F2EF" /></svg></span>
                </button>
              )}
              <figcaption className="cover__cap">
                <span className="label-sm rose">COVER {c.n}</span>
                <span className="cover__title" dir="auto">{c.title}</span>
                <span className="cover__artist">{c.artist}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
