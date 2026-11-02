import { createContext, useContext } from 'react';
import type { Lang, T } from '../data/content';

const LangContext = createContext<Lang>('ar');
export const LangProvider = LangContext.Provider;
export const useLang = () => useContext(LangContext);
export const pick = (t: T, lang: Lang) => t[lang];
