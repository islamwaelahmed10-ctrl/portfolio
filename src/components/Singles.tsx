import Heading from './Heading';
import Divider from './Divider';
import { SINGLES, TEXT } from '../data/content';
import { useLang } from '../lib/i18n';

export default function Singles() {
  const lang = useLang();
  return (
    <section id="singles" className="section staff">
      <Divider shape="wave" color="#F8F2EF" />
      <div className="wrap stack">
        <div className="row-between">
          <Heading ar="أغاني" en="Singles" color="#9C6B70" />
          <p className={`muted ${lang === 'ar' ? 'ar lead' : 'italic'}`}>{TEXT.singles[lang]}</p>
        </div>
        <div className="grid grid--singles">
          {SINGLES.map((s) => (
            <a key={s.n} className="single" href={s.url} target="_blank" rel="noopener">
              <span className="single__top"><span className="label-sm accent">{s.n}</span><img src="/media/img/logo-dark-96.webp" alt="" width="34" height="34" /></span>
              <span className="single__title" dir="auto">{s.title}</span>
              <span className="label-sm muted">{s.note}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
