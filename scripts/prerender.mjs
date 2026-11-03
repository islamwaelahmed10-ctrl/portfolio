// Turns the built app into real HTML pages (/, /en/, /links/) so they load fast and Google can read them.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const SITE = (process.env.VITE_SITE_URL || 'https://islamwael.pages.dev').replace(/\/$/, '');
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Islam Wael',
  alternateName: 'إسلام وائل',
  jobTitle: ['Composer', 'Songwriter', 'Arranger'],
  url: SITE + '/',
  image: SITE + '/media/img/portrait-900.webp',
  email: 'mailto:islamwaelmusic@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
  sameAs: [
    'https://www.instagram.com/islam_wael_/',
    'https://www.facebook.com/islamwaelofficial/',
    'https://www.youtube.com/@IslamWaelmusic',
    'https://www.tiktok.com/@islamwaelll',
    'https://soundcloud.com/islamwael33',
    'https://open.spotify.com/album/2RWtubb9v4NdRtjlliYts8',
  ],
};
const album = (name, alt, year, url) => ({ '@context': 'https://schema.org', '@type': 'MusicAlbum', name, alternateName: alt, datePublished: year, byArtist: { '@type': 'Person', name: 'Islam Wael' }, url });

const routes = [
  {
    path: '/', lang: 'ar', dir: 'rtl',
    title: 'إسلام وائل | Islam Wael — مؤلف وملحن وموزّع موسيقي',
    desc: 'إسلام وائل — مؤلف وملحن وموزّع موسيقي من القاهرة. ألبوم «يا عالم»، و«بداية»، وموسيقى أفلام، وتوزيعات.',
    ld: [person, album('يا عالَم', 'Ya 3alam', '2024', 'https://open.spotify.com/album/2RWtubb9v4NdRtjlliYts8'), album('بداية', 'Bidaya', '2023', 'https://open.spotify.com/album/0J1KplHK2EJtI7ogFoXI8T')],
  },
  {
    path: '/en/', lang: 'en', dir: 'ltr',
    title: 'Islam Wael | إسلام وائل — Composer, Songwriter & Arranger',
    desc: 'Islam Wael — composer, songwriter and arranger from Cairo. Debut album Ya 3alam, Bidaya, film scores and arrangements.',
    ld: [person],
  },
  {
    path: '/links/', lang: 'ar', dir: 'rtl',
    title: 'إسلام وائل — Links',
    desc: 'كل لينكات إسلام وائل: يا عالم، بداية، Pink، والسوشيال. All of Islam Wael’s links in one place.',
    ld: [person],
  },
];

for (const r of routes) {
  const url = SITE + r.path;
  const head = [
    `<title>${esc(r.title)}</title>`,
    `<meta name="description" content="${esc(r.desc)}" />`,
    `<link rel="canonical" href="${url}" />`,
    r.path !== '/links/' ? `<link rel="alternate" hreflang="ar" href="${SITE}/" /><link rel="alternate" hreflang="en" href="${SITE}/en/" /><link rel="alternate" hreflang="x-default" href="${SITE}/" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.desc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE}/media/img/og.jpg" />`,
    `<meta property="og:locale" content="${r.lang === 'ar' ? 'ar_EG' : 'en_US'}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<link rel="preload" as="image" href="/media/img/portrait-480.webp" />`,
    ...r.ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x)}</script>`),
  ].join('\n    ');
  const html = template
    .replace('<html lang="ar" dir="rtl">', `<html lang="${r.lang}" dir="${r.dir}">`)
    .replace('<!--head-->', head)
    .replace('<!--app-->', render(r.path));
  const out = path.join(dist, r.path, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log('prerendered', r.path, Math.round(html.length / 1024) + 'KB');
}

fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map((r) => `  <url><loc>${SITE}${r.path}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${SITE}/sitemap.xml\n`);
// Cloudflare Pages caching: hashed assets and media forever, HTML always fresh.
fs.writeFileSync(path.join(dist, '_headers'), `/assets/*
  Cache-Control: public, max-age=31536000, immutable
/media/*
  Cache-Control: public, max-age=2592000
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
`);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('done');
