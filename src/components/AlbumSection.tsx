import Img from './Img';
import Heading from './Heading';
import Pills from './Pills';
import TrackList from './TrackList';
import Divider from './Divider';
import type { Album } from '../data/content';
import { useLang } from '../lib/i18n';

export default function AlbumSection({ album, flip, divider }: { album: Album; flip?: boolean; divider?: 'curve' }) {
  const lang = useLang();
  const { bg, fg, accent } = album.theme;
  // Softer tones are mixed from the three colours set in the dashboard.
  const theme = { bg, fg, accent, soft: `color-mix(in srgb, ${accent} 50%, transparent)`, on: bg, dim: `color-mix(in srgb, ${accent} 75%, ${fg})` };
  const style = { background: theme.bg, color: theme.fg, ['--line' as string]: theme.soft } as React.CSSProperties;
  return (
    <section id={album.id} className="section section--album" style={style}>
      {divider && <Divider shape={divider} color={theme.bg} />}
      <div className={`wrap split ${flip ? 'split--flip' : ''}`}>
        <div className="split__media">
          <div className="ring" style={{ borderColor: theme.soft }}>
            <Img name={album.cover} alt={album.coverAlt} sizes="(max-width: 600px) 80vw, 420px" className="round" />
          </div>
        </div>
        <div className="split__body">
          <p className={lang === 'ar' ? 'kicker ar' : 'kicker'} style={{ color: theme.accent }}>{album.kicker[lang]} · {album.year}</p>
          <Heading ar={album.ar} en={album.en} color={theme.accent} size="lg" />
          <p className={`lead ${lang === 'ar' ? 'ar' : ''}`}>{album.about[lang]}</p>
          <Pills links={album.links} />
          <TrackList id={album.id} tracks={album.tracks} accent={theme.accent} on={theme.on} dim={theme.dim} />
        </div>
      </div>
    </section>
  );
}
