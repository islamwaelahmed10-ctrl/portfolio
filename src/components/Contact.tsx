import { useState } from 'react';
import Heading from './Heading';
import Divider from './Divider';
import { SITE, SOCIAL, TEXT } from '../data/content';
import { useLang } from '../lib/i18n';
import { sendForm } from '../lib/forms';

const SUBJECTS = ['Production / arrangement', 'Mixing & mastering', 'Concert booking', 'Collaboration', 'Other'];

export default function Contact() {
  const lang = useLang();
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  return (
    <section id="contact" className="section section--contact">
      <Divider shape="stepsFlip" color="#1E2822" />
      <img className="contact__mark" src="/media/img/logo-light-256.webp" alt="" aria-hidden="true" width="400" height="400" loading="lazy" />
      <div className="wrap split">
        <div className="stack contact__info">
          <Heading ar="راسلني" en="Contact" color="#D9A9AC" />
          <p className={`muted ${lang === 'ar' ? 'ar lead' : 'lead'}`}>{TEXT.contact[lang]}</p>
          <a className="contact__email" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <div className="pills">
            {SOCIAL.map((s) => <a key={s.label} className="pill" href={s.url} target="_blank" rel="noopener">{s.label}</a>)}
          </div>
        </div>
        {state === 'ok' ? <p className={`contact__done ${lang === 'ar' ? 'ar lead' : 'lead'}`}>{TEXT.sent[lang]}</p> : (
          <form className="contact__form" onSubmit={async (e) => {
            e.preventDefault();
            const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
            setState('sending');
            setState((await sendForm(`Website: ${d.subject}`, d)) ? 'ok' : 'err');
          }}>
            <label className="field"><span className="label-sm">NAME</span><input name="name" required autoComplete="name" /></label>
            <label className="field"><span className="label-sm">EMAIL</span><input type="email" name="email" required autoComplete="email" /></label>
            <label className="field wide"><span className="label-sm">SUBJECT</span>
              <select name="subject">{SUBJECTS.map((s) => <option key={s}>{s}</option>)}</select>
            </label>
            <label className="field wide"><span className="label-sm">MESSAGE</span><textarea name="message" rows={5} required /></label>
            <button type="submit" className="btn btn--rose wide-start" disabled={state === 'sending'}>SEND MESSAGE</button>
            {state === 'err' && <p className="form-err wide">{TEXT.failed[lang]}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
