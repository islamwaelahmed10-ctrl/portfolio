import Img from './Img';
import Heading from './Heading';
import Divider from './Divider';
import { PRESS_KIT_URL, STORY, TEXT } from '../data/content';
import { useLang } from '../lib/i18n';

export default function Story() {
  const lang = useLang();
  return (
    <section id="story" className="section staff">
      <Divider shape="steps" color="#F8F2EF" />
      <div className="wrap split split--center">
        <div className="split__media">
          <div className="ring ring--rose">
            <Img name="studio" alt="Islam Wael playing keyboard in the studio" sizes="(max-width: 600px) 80vw, 380px" className="round" />
          </div>
        </div>
        <div className="split__body">
          <Heading ar="حكاية" en="Story" color="#9C6B70" />
          {STORY.map((p, i) => <p key={i} className={`body ${lang === 'ar' ? 'ar' : ''}`}>{p[lang]}</p>)}
          <div className="row">
            <a className="btn" href={PRESS_KIT_URL} download>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3v12m0 0l-5-5m5 5l5-5M4 19h16" /></svg>
              PRESS KIT (PDF)
            </a>
            <span className={lang === 'ar' ? 'ar muted' : 'muted'}>{TEXT.pressKitSub[lang]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
