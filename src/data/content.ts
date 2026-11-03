// Site content comes from the JSON files in /content, which the dashboard at /admin edits.
// Only structural things (navigation) live in code.
import site from '../../content/site.json';
import texts from '../../content/texts.json';
import ya3alam from '../../content/album-ya3alam.json';
import bidaya from '../../content/album-bidaya.json';
import production from '../../content/production.json';
import singles from '../../content/singles.json';
import covers from '../../content/covers.json';
import films from '../../content/films.json';
import live from '../../content/live.json';
import workshops from '../../content/workshops.json';
import story from '../../content/story.json';

export type Lang = 'ar' | 'en';
export type T = { ar: string; en: string };
export type Link = { label: string; url: string };
export type Track = { n: string; title: string; note?: string; audio?: string };
export type Album = {
  id: string; kicker: T; ar: string; en: string; year: string; cover: string; coverAlt: string;
  about: T; links: Link[]; tracks: Track[];
};
export type Photo = { img: string; alt: string; span: string; pos?: string };
export type Clip = { n?: string; title: string; tag: string; video: string; poster: string };
export type Concert = { label: string; place: string; vertical: boolean; clips: Clip[]; photos: Photo[] };
export type Film = {
  ar: string; en: string; accent: string; dirLabel: string; director: string; ratio: string; poster: string; motion?: string;
  trailer?: string; still?: string; extra?: { img: string; alt: string } | null; fests: { name: string; year: string }[];
};

export const SITE = { name: site.name as T, email: site.email, roles: site.roles as T, tagline: site.tagline as T, description: site.description as T };
export const GENRES: T[] = site.genres;
export const SOCIAL: Link[] = site.social;
export const PRESS_KIT_URL: string = site.pressKitUrl;
export const TEXT = texts as Record<keyof typeof texts, T>;

export const NAV: { id: string; ar: string; en: string }[] = [
  { id: 'ya3alam', ar: 'اسمع', en: 'LISTEN' },
  { id: 'production', ar: 'إنتاج', en: 'PRODUCTION' },
  { id: 'singles', ar: 'أغاني', en: 'SINGLES' },
  { id: 'film', ar: 'أفلام', en: 'FILM' },
  { id: 'live', ar: 'حفلات', en: 'LIVE' },
  { id: 'workshops', ar: 'ورش', en: 'WORKSHOPS' },
  { id: 'story', ar: 'حكاية', en: 'STORY' },
  { id: 'contact', ar: 'راسلني', en: 'CONTACT' },
];

export const YA3ALAM = ya3alam as Album;
export const BIDAYA = bidaya as Album;

export const PRODUCTION = production as {
  about: T;
  pink: {
    artistAr: string; artistEn: string; cover: string;
    credits: { k: string; v: string; wide?: boolean }[];
    tracks: Track[]; links: Link[]; stats: { n: string; k: string }[];
  };
  minFat: { title: string; cover: string; tracks: { title: string; role: string }[]; links: Link[] };
  services: string[];
};

export const SINGLES = singles.items as { n: string; title: string; note?: string; url: string }[];
export const COVERS = covers.items as { n: string; title: string; artist: string; poster: string; video: string }[];
export const FILMS = films.items as Film[];
export const SHOWS = live.shows as { tag: string; title: string; date: string; venue: string; note?: string; poster: string; alt: string }[];
export const CONCERTS = live.concerts as Concert[];
export const WORKSHOPS_INTRO = workshops.intro as T;
export const WORKSHOPS = workshops.items as { tag: string; title: T; body: T; places?: T[] }[];
export const STORY = story.paragraphs as T[];
