import Home from './pages/Home';
import Links from './pages/Links';
import { LangProvider } from './lib/i18n';
import type { Lang } from './data/content';

export const routeOf = (path: string): { page: 'home' | 'links'; lang: Lang } => {
  if (path.startsWith('/links')) return { page: 'links', lang: 'ar' };
  if (path.startsWith('/en')) return { page: 'home', lang: 'en' };
  return { page: 'home', lang: 'ar' };
};

export default function App({ path }: { path: string }) {
  const r = routeOf(path);
  return <LangProvider value={r.lang}>{r.page === 'links' ? <Links /> : <Home />}</LangProvider>;
}
