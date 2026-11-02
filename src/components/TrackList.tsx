import { usePlayer } from '../lib/player';
import type { Track } from '../data/content';

// A list of tracks; the round button plays a 30-second preview of each.
export default function TrackList({ id, tracks, accent, on, dim }: { id: string; tracks: Track[]; accent: string; on: string; dim: string }) {
  const { playing, toggle } = usePlayer();
  return (
    <ol className="tracks" style={{ ['--accent' as string]: accent, ['--on' as string]: on, ['--dim' as string]: dim }}>
      {tracks.map((t) => {
        const key = `${id}-${t.n}`;
        const active = playing === key;
        return (
          <li key={key} className={active ? 'is-playing' : undefined}>
            {t.audio && (
              <button type="button" className="play" aria-label={`${active ? 'Pause' : 'Play'} preview: ${t.title}`} aria-pressed={active} onClick={() => toggle(key, t.audio!)}>
                {active
                  ? <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" fill="currentColor" /><rect x="14" y="5" width="4" height="14" fill="currentColor" /></svg>
                  : <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="currentColor" /></svg>}
              </button>
            )}
            <span className="tracks__n">{t.n}</span>
            <span className="tracks__title" dir="auto">{t.title}</span>
            {active && <span className="eq" aria-hidden="true"><i /><i /><i /><i /></span>}
            {t.note && <span className="tracks__note">{t.note}</span>}
          </li>
        );
      })}
    </ol>
  );
}
