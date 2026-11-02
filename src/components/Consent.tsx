import { useEffect, useState } from 'react';
import { getConsent, hasGA, loadCloudflare, loadGA, setConsent } from '../lib/analytics';
import { useLang } from '../lib/i18n';

// Small cookie banner, only shown when Google Analytics is configured.
export default function Consent() {
  const lang = useLang();
  const [show, setShow] = useState(false);
  useEffect(() => {
    loadCloudflare();
    const c = getConsent();
    if (c === 'yes') loadGA();
    else if (c === null && hasGA) setShow(true);
  }, []);
  if (!show) return null;
  const choose = (v: 'yes' | 'no') => { setConsent(v); setShow(false); };
  return (
    <div className="consent" role="dialog" aria-label={lang === 'ar' ? 'الكوكيز' : 'Cookies'}>
      <p className={lang === 'ar' ? 'ar' : ''}>{lang === 'ar' ? 'بنستخدم كوكيز بسيطة عشان نعرف عدد الزيارات.' : 'We use simple cookies to count visits.'}</p>
      <div className="row">
        <button type="button" className="btn" onClick={() => choose('yes')}>{lang === 'ar' ? <span className="ar">موافق</span> : 'OK'}</button>
        <button type="button" className="btn btn--ghost" onClick={() => choose('no')}>{lang === 'ar' ? <span className="ar">لأ، شكراً</span> : 'No thanks'}</button>
      </div>
    </div>
  );
}
