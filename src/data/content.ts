// All site content lives here. Edit this file to add songs, shows, links or text.
export type Lang = 'ar' | 'en';
export type T = { ar: string; en: string };

export const SITE = {
  name: { ar: 'إسلام وائل', en: 'Islam Wael' },
  email: 'islamwaelmusic@gmail.com',
  roles: { ar: 'مؤلف · ملحن · موزّع — القاهرة', en: 'COMPOSER · SONGWRITER · ARRANGER — CAIRO' },
  tagline: {
    ar: 'أغاني، وموسيقى أوركسترا، وموسيقى أفلام — تأليف وتلحين وتوزيع من القاهرة.',
    en: 'Songs, orchestral writing and film scores — composed, written and arranged in Cairo.',
  },
  description: {
    ar: 'إسلام وائل — مؤلف وملحن وموزّع موسيقي من القاهرة. ألبوم «يا عالم»، و«بداية»، وموسيقى أفلام، وتوزيعات.',
    en: 'Islam Wael — composer, songwriter and arranger from Cairo. Debut album Ya 3alam, Bidaya, film scores and arrangements.',
  },
};

export const GENRES: T[] = [
  { ar: 'أغاني عربي', en: 'Arabic songs' },
  { ar: 'روك', en: 'Rock' },
  { ar: 'إلكتروني', en: 'Electronic' },
  { ar: 'أوركسترا', en: 'Orchestral' },
  { ar: 'فولكلور مصري', en: 'Egyptian folklore' },
  { ar: 'موسيقى أفلام', en: 'Film scores' },
  { ar: 'Alternative Oriental', en: 'Alternative Oriental' },
];

export const NAV: { id: string; ar: string; en: string }[] = [
  { id: 'ya3alam', ar: 'اسمع', en: 'LISTEN' },
  { id: 'production', ar: 'إنتاج', en: 'PRODUCTION' },
  { id: 'singles', ar: 'أغاني', en: 'SINGLES' },
  { id: 'film', ar: 'أفلام', en: 'FILM' },
  { id: 'live', ar: 'حفلات', en: 'LIVE' },
  { id: 'story', ar: 'حكاية', en: 'STORY' },
  { id: 'contact', ar: 'راسلني', en: 'CONTACT' },
];

export const SOCIAL = [
  { label: 'INSTAGRAM', url: 'https://www.instagram.com/islam_wael_/' },
  { label: 'FACEBOOK', url: 'https://www.facebook.com/islamwaelofficial/' },
  { label: 'YOUTUBE', url: 'https://www.youtube.com/@IslamWaelmusic' },
  { label: 'TIKTOK', url: 'https://www.tiktok.com/@islamwaelll' },
  { label: 'SOUNDCLOUD', url: 'https://soundcloud.com/islamwael33' },
];

export type Track = { n: string; title: string; note?: string; audio?: string };
export type Album = {
  id: string;
  kicker: T;
  ar: string;
  en: string;
  year: string;
  cover: string;
  coverAlt: string;
  about: T;
  links: { label: string; url: string }[];
  tracks: Track[];
};

export const YA3ALAM: Album = {
  id: 'ya3alam',
  kicker: { ar: 'الألبوم الأول', en: 'DEBUT ALBUM' },
  ar: 'يا عالَم',
  en: 'Ya 3alam',
  year: '2024',
  cover: 'cover-ya3alam',
  coverAlt: 'Ya 3alam album cover: a hand reaching up through a circle of figures',
  about: {
    ar: 'تأليف وإنتاج وميكس وماستر إسلام وائل، وهو كاتب أغلب الأغاني — تمن أغاني بأصوات مختلفة، وشارك إسلام الجندي وهيثم صبحي في التلحين.',
    en: 'Composed, produced, mixed and mastered by Islam Wael, who also wrote most of the songs — eight tracks with a range of vocalists, with Islam El Gendy and Hitham Sobhy also taking part in composing.',
  },
  links: [
    { label: 'SPOTIFY', url: 'https://open.spotify.com/album/2RWtubb9v4NdRtjlliYts8' },
    { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/album/%D9%8A%D8%A7-%D8%B9%D8%A7%D9%84-%D9%85/1772193988' },
    { label: 'ANGHAMI', url: 'https://play.anghami.com/album/1058825343' },
    { label: 'DEEZER', url: 'https://www.deezer.com/album/652578321' },
    { label: 'MUSIC VIDEO', url: 'https://youtu.be/M3vvyrf7sTY' },
  ],
  tracks: [
    { n: '01', title: 'لِكُلِّ شَيءٍ', note: 'FEAT. ISLAM EL GENDY' },
    { n: '02', title: 'الأَرْضُ لَنْ تَنْسَى', note: 'FEAT. HEBA SAYED' },
    { n: '03', title: 'النَّدَى', note: 'FEAT. HOSSAM HASSAN' },
    { n: '04', title: 'حِلمْ', note: 'FEAT. HITHAM SOBHY' },
    { n: '05', title: 'رَويت', note: 'FEAT. HEBA MAGDY' },
    { n: '06', title: 'تُراب الناس', note: 'FEAT. ISLAM EL GENDY' },
    { n: '07', title: 'بَحر الضَّياع', note: 'FEAT. HITHAM SOBHY' },
    { n: '08', title: 'شايِف السَّراب', note: 'FEAT. ISLAM EL GENDY' },
  ].map((t, i) => ({ ...t, audio: `/media/audio/ya3alam-${String(i + 1).padStart(2, '0')}.m4a` })),
};

export const BIDAYA: Album = {
  id: 'bidaya',
  kicker: { ar: 'إسلام وائل مع سرد', en: 'ISLAM WAEL FEAT. SARD' },
  ar: 'بداية',
  en: 'Bidaya',
  year: '2023',
  cover: 'cover-bidaya',
  coverAlt: 'Bidaya album cover: an unborn child inside a teal vinyl record',
  about: {
    ar: 'لما الحكاية تقابل الموسيقى. تأليف وإنتاج وميكس وماستر إسلام وائل. تسجيل البيانو والكيبورد لإسلام وائل. الجيتاريست عمرو شوقي كان جزء كبير من صناعة الألبوم، وشارك المطرب حسام حسن كمان.',
    en: 'Storytelling meets music. Composed, produced, mixed and mastered by Islam Wael, who also recorded the piano and keyboards. Guitarist Amr Shawky was a major part of making it, and vocalist Hossam Hassan contributed too.',
  },
  links: [
    { label: 'SPOTIFY', url: 'https://open.spotify.com/album/0J1KplHK2EJtI7ogFoXI8T' },
    { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/album/%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9/1668158641' },
    { label: 'ANGHAMI', url: 'https://open.anghami.com/eR9bQym53Qb' },
    { label: 'SOUNDCLOUD', url: 'https://on.soundcloud.com/ZfeXNcaqLecexwNV6' },
  ],
  tracks: [
    { n: '01', title: '00:00 AM' },
    { n: '02', title: '129 هـ', note: 'FEAT. TUQA TAREK' },
    { n: '03', title: 'بحلم' },
    { n: '04', title: 'سحاب' },
    { n: '05', title: 'يمضي الزمان' },
    { n: '06', title: 'Shadow of the Day', note: 'LINKIN PARK COVER' },
    { n: '07', title: '23:37 PM' },
  ].map((t, i) => ({ ...t, audio: `/media/audio/bidaya-${String(i + 1).padStart(2, '0')}.m4a` })),
};

export const PRODUCTION = {
  about: {
    ar: 'تأليف وتوزيع وإنتاج وميكس وماستر لأعمال فنانين تانيين.',
    en: "Composition, arrangement, production, mixing and mastering for other artists' records.",
  },
  pink: {
    artistAr: 'مي الغيطي',
    artistEn: 'May Elghety',
    cover: 'cover-pink',
    credits: [
      { k: 'MELODY & LYRICS', v: 'May Elghety' },
      { k: 'HARMONY & ARRANGEMENT', v: 'Islam Wael' },
      { k: 'PIANO & KEYBOARDS (RECORDED)', v: 'Islam Wael' },
      { k: 'BASS GUITAR · MELODY & HARMONY', v: 'Islam Amr', wide: true },
    ],
    tracks: ['Breathe Up', 'To the End of My Love', '45', 'Alright', 'Pink'].map((title, i) => ({
      n: String(i + 1).padStart(2, '0'),
      title,
      audio: `/media/audio/pink-${String(i + 1).padStart(2, '0')}.m4a`,
    })) as Track[],
    links: [
      { label: 'SPOTIFY', url: 'https://open.spotify.com/album/0ITx2SRTYErw5nDwTZRKMR' },
      { label: 'ANGHAMI', url: 'https://open.anghami.com/7D10Url33Qb' },
      { label: 'SOUNDCLOUD', url: 'https://on.soundcloud.com/c53pLrzccd8xFxHt8' },
    ],
    stats: [
      { n: '5', k: 'TRACKS ARRANGED' },
      { n: '5', k: 'TRACKS MIXED' },
      { n: '4', k: 'TRACKS MASTERED' },
    ],
  },
  minFat: {
    title: 'من فات قديمه',
    cover: 'cover-minfat',
    tracks: [
      { title: 'وا حبيبي', role: 'ARRANGEMENT · HARMONY · PRODUCTION · PIANO & KEYS' },
      { title: 'أنا أتوب', role: 'FULL HARMONY · PIANO & KEYS' },
    ],
    links: [
      { label: 'APPLE MUSIC', url: 'https://music.apple.com/us/album/%D9%85%D9%86-%D9%81%D8%A7%D8%AA-%D9%82%D8%AF%D9%8A%D9%85%D9%87-ep/1865618362' },
      { label: 'DEEZER', url: 'https://www.deezer.com/en/album/888139762' },
    ],
  },
  services: ['COMPOSITION', 'ARRANGEMENT', 'PRODUCTION', 'MIXING', 'MASTERING'],
};

export const SINGLES = [
  { n: '01', title: 'العفو', note: 'FEAT. ISLAM EL GENDY', url: 'https://open.spotify.com/album/2qzkzMgqpeNxV8G1esegiq' },
  { n: '02', title: 'دايرة', note: 'ORIGINAL', url: 'https://on.soundcloud.com/uPfYRJF4TVym2BLC6' },
  { n: '03', title: 'Quarantine Time', note: 'ORIGINAL', url: 'https://on.soundcloud.com/L3YhNehL8sA9BoaK7' },
  { n: '04', title: 'Imaginary Feel', note: 'ORIGINAL', url: 'https://on.soundcloud.com/Lrwj6N1qemKQqpAE7' },
  { n: '05', title: 'Conan', note: 'ORIGINAL', url: 'https://on.soundcloud.com/tafbxcVXqXW8dneo8' },
];

export const COVERS = [
  { title: 'رجاوي فلسطيني', artist: 'Raja Casablanca fans' },
  { title: 'شايف البحر شو كبير', artist: 'Fairouz' },
  { title: 'علموني عنيكي', artist: 'Mohamed Mounir' },
  { title: 'متستعجبش متستغربش', artist: 'Ismail Yassin' },
  { title: 'مسافر', artist: 'Shadia' },
  { title: 'يلا بينا تعالوا', artist: 'El Kit Kat · Sayed Mekkawy' },
  { title: 'شبابيك', artist: 'Mohamed Mounir' },
  { title: 'جانا الهوى', artist: 'Abdel Halim Hafez' },
  { title: 'حالك وحالي', artist: 'Khateeb · El Waili' },
].map((c, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { ...c, n, poster: `cover-${n}`, video: `/media/video/cover-${n}.mp4` };
});

export const FILMS = [
  {
    ar: 'لسّة فاكِر', en: 'Lingering', accent: '#7CC7C9', dirLabel: 'DIRECTED BY', ratio: '1262 / 1800',
    poster: 'film-lingering-poster', motion: '/media/video/lingering-motion.mp4',
    trailer: '/media/video/lingering-trailer.mp4', still: 'film-lingering-still',
    extra: { img: 'film-lingering-eaff', alt: 'Still from Lingering, Official Selection Egyptian American Film Festival 2026' },
    fests: [
      { name: 'Busan Inter-City Film Festival', year: '10th · 2026' },
      { name: 'Alexandria Short Film Festival', year: '12th · 2026' },
      { name: 'Egyptian American Film Festival', year: '2026' },
    ],
  },
  {
    ar: 'زحمة', en: 'Overwhelming', accent: '#A9B9E0', dirLabel: 'WRITTEN & DIRECTED BY', ratio: '4 / 5',
    poster: 'film-zahma-poster', motion: '', trailer: '/media/video/zahma-trailer.mp4', still: 'film-zahma-still', extra: null,
    fests: [
      { name: 'Festival Internazionale del Cinema di Salerno', year: '78th' },
      { name: 'Egyptian American Film Festival', year: '5th edition · Student projects' },
    ],
  },
];

export const SHOWS = [
  { tag: 'FIRST LIVE · YA 3ALAM', title: 'Ya 3alam — Live for the first time', date: 'Oct 24, 2025 · 8 PM', venue: 'Noir Art Zone — Suleiman El Halabi St., Downtown Cairo', note: '', poster: 'show-noir', alt: 'Poster: Ya 3alam live for the first time at Noir Art Zone' },
  { tag: 'MAZRA3A COMMUNITY · YA 3ALAM', title: 'Islam Wael & Friends — Music Night', date: 'Saturday, Nov 15, 2025', venue: 'The Third Place — Maadi', note: 'With the Mazra3a community', poster: 'show-ttp', alt: 'Poster: Islam Wael and Friends music night at The Third Place, Maadi' },
];

export const NOIR_CLIPS = ['لِكُلِّ شَيءٍ', 'الأَرْضُ لَنْ تَنْسَى', 'النَّدَى', 'حِلمْ', 'رَويت', 'تُراب الناس', 'بَحر الضَّياع', 'شايِف السَّراب'].map((title, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { n, title, video: `/media/video/noir-clip-${n}.mp4`, poster: `noir-poster-${n}`, tag: 'LIVE · 0:30' };
});

export const TTP_CLIPS = [
  { title: 'لِكُلِّ شَيءٍ', tag: 'LIVE · 0:30' },
  { title: 'تقديم الألبوم', tag: 'INTRO · 0:20' },
  { title: 'الأَرْضُ لَنْ تَنْسَى', tag: 'LIVE · 0:30' },
  { title: 'رَويت', tag: 'LIVE · 0:30' },
  { title: 'تُراب الناس', tag: 'LIVE · 0:30' },
  { title: 'تحية للعازفين', tag: 'THE BAND · 0:27' },
].map((c, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { ...c, n, video: `/media/video/ttp-clip-${n}.mp4`, poster: `ttp-poster-${n}` };
});

export const NOIR_PHOTOS = [
  { img: 'noir-01', alt: 'Islam Wael smiling at the keys with the band at Noir', span: 'big', pos: 'center 35%' },
  { img: 'noir-02', alt: 'Islam Wael at the keyboard', span: 'tall' },
  { img: 'noir-03', alt: 'Singer at the microphone', span: 'tall' },
  { img: 'noir-04', alt: 'Oud player', span: 'wide' },
  { img: 'noir-05', alt: 'Singer performing with the oud behind her', span: 'tall' },
  { img: 'noir-06', alt: 'Singer in a striped shirt', span: 'tall' },
  { img: 'noir-07', alt: 'Islam Wael on keys with the band at Noir', span: 'wide' },
  { img: 'noir-08', alt: 'Bass player', span: 'wide' },
  { img: 'noir-09', alt: 'Percussionist with a riq', span: 'wide', pos: 'center 30%' },
];

export const TTP_PHOTOS = [
  { img: 'ttp-01', alt: 'The band playing under the Mazra3a neon sign', span: 'big' },
  { img: 'ttp-02', alt: 'Islam Wael at the keys with guitar and bass', span: 'tall' },
  { img: 'ttp-03', alt: 'Oud player', span: 'tall' },
  { img: 'ttp-04', alt: 'Islam Wael on keys next to the oud', span: 'wide', pos: 'center 40%' },
  { img: 'ttp-05', alt: 'Oud and riq', span: '' },
  { img: 'ttp-06', alt: 'Guitarist', span: '' },
];

export const STORY: T[] = [
  {
    ar: 'اتولد إسلام في القاهرة سنة 1995، واتعلّم حب الشعر من والده مدرّس اللغة العربية، ودخل الموسيقى عن طريق أخوه الكبير، المنتج الموسيقي. بدأ الإنتاج سنة 2009، والكيبورد سنة 2015، وبدأ مشواره كمنتج ومؤلف سنة 2016.',
    en: 'Born in Cairo in 1995, Islam learned to love poetry from his father, an Arabic teacher who cared deeply about it, and found his way into music through his older brother, a music producer. He started producing in 2009, picked up the keyboard in 2015, and launched his career as a producer and composer in 2016.',
  },
  {
    ar: 'مؤلف وملحن وموزّع لأغاني وموسيقى أوركسترا وموسيقى أفلام بألوان مختلفة — من الروك والإلكتروني للفولكلور المصري — وبيعزف البيانو والكيبورد في أعماله. وزّع EP «Pink» لمي الغيطي، وأسّس مشروع سرد، وأصدر ألبومه الأول «يا عالم»، وعمل موسيقى فيلمي «لسّة فاكر» و«زحمة».',
    en: "He composes, writes and arranges songs, orchestral music and film scores across many styles — from rock and electronic music to Egyptian folklore — and plays piano and keyboards on his records. He arranged May Elghety's Pink EP, founded the project Sard, released his debut album, Ya 3alam, and scored the short films Lingering and Overwhelming.",
  },
];

export const PRESS_KIT_URL = '/press-kit.pdf';

export const TEXT = {
  singles: { ar: 'أغاني أصلية وريمكسات — تأليف وتوزيع وميكس وماستر.', en: 'Originals and remixes — composed, arranged, mixed and mastered.' },
  covers: { ar: 'أغاني تعرفها، بهارموني وتوزيع جديد — من إنستجرام على طول.', en: 'Songs you know, re-harmonized and re-arranged — straight from Instagram.' },
  film: { ar: 'موسيقى تصويرية لأفلام قصيرة.', en: 'Original scores for short films.' },
  live: { ar: '«يا عالَم» على المسرح', en: 'Ya 3alam on stage' },
  contact: { ar: 'إنتاج، توزيع، حفلات، أو تعاون — ابعتلي رسالة.', en: 'Production, arrangement, concerts or collaboration — send a message.' },
  nextShow: { ar: 'مفيش مواعيد جديدة دلوقتي', en: 'No new dates yet' },
  nextShowSub: { ar: 'سيب إيميلك وهتعرف الأول.', en: "Leave your email and you'll hear first." },
  pressKitSub: { ar: 'بايو قصير، صور بجودة عالية، ولينكات', en: 'Short bio, high-res photos and links' },
  workWithMe: { ar: 'اشتغل معايا ←', en: 'WORK WITH ME →' },
  listen: { ar: 'اسمع', en: 'LISTEN' },
  sent: { ar: 'وصلت، شكراً! هرد عليك قريب.', en: "Sent — thank you! I'll get back to you soon." },
  failed: { ar: 'حصلت مشكلة، ابعت على الإيميل مباشرة.', en: 'Something went wrong — please email directly.' },
};
