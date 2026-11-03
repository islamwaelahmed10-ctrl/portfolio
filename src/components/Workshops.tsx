import Heading from './Heading';
import Divider from './Divider';
import { WORKSHOPS, WORKSHOPS_INTRO } from '../data/content';
import { useLang } from '../lib/i18n';

export default function Workshops() {
  const lang = useLang();
  const ar = lang === 'ar';
  return (
    <section id="workshops" className="section section--workshops">
      <Divider shape="wave" color="#EFE6E1" />
      <div className="wrap stack-lg">
        <div className="intro">
          <Heading ar="ورش وتدريب" en="Workshops" color="#9C6B70" />
          <p className={ar ? 'ar lead' : 'lead'}>{WORKSHOPS_INTRO[lang]}</p>
        </div>
        <div className="grid grid--workshops">
          {WORKSHOPS.map((w) => (
            <article key={w.tag} className="workshop">
              <span className="label-sm workshop__tag">{w.tag}</span>
              <h3 className={ar ? 'ar workshop__title' : 'hand workshop__title'}>{w.title[lang]}</h3>
              <p className={ar ? 'ar workshop__body' : 'workshop__body'}>{w.body[lang]}</p>
              {w.places && (
                <ul className="workshop__places">
                  {w.places.map((pl) => <li key={pl.en} className={ar ? 'ar' : ''}>{pl[lang]}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
