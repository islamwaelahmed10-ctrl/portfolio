// Contact + "notify me" forms go through Web3Forms (free) and land in the email inbox.
// Without a key the form falls back to opening the visitor's email app.
import { SITE } from '../data/content';
const KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

export async function sendForm(subject: string, fields: Record<string, string>): Promise<boolean> {
  if (!KEY) {
    const body = Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n');
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return true;
  }
  try {
    const r = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: KEY, subject, from_name: 'islamwael website', ...fields }),
    });
    return r.ok;
  } catch {
    return false;
  }
}
