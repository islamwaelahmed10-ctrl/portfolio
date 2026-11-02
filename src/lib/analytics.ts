// Visits: Cloudflare Web Analytics (cookieless, always on when a token is set)
// and Google Analytics 4 (only after the visitor accepts cookies).
const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;
const CF_TOKEN = import.meta.env.VITE_CF_BEACON as string | undefined;
const KEY = 'iw-consent';

declare global { interface Window { dataLayer: unknown[]; gtag: (...a: unknown[]) => void } }

export const hasGA = Boolean(GA_ID);

export function getConsent(): 'yes' | 'no' | null {
  try { return (localStorage.getItem(KEY) as 'yes' | 'no' | null) ?? null; } catch { return null; }
}
export function setConsent(v: 'yes' | 'no') {
  try { localStorage.setItem(KEY, v); } catch { /* private mode */ }
  if (v === 'yes') loadGA();
}

function addScript(src: string, attrs: Record<string, string> = {}) {
  const s = document.createElement('script');
  s.async = true; s.src = src;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
}

export function loadCloudflare() {
  if (CF_TOKEN) addScript('https://static.cloudflareinsights.com/beacon.min.js', { defer: '', 'data-cf-beacon': JSON.stringify({ token: CF_TOKEN }) });
}

let gaLoaded = false;
export function loadGA() {
  if (!GA_ID || gaLoaded) return;
  gaLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); } as Window['gtag'];
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });
  addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
}
