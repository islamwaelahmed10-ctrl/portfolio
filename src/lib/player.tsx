import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

// One shared audio element: starting a preview stops whatever was playing.
type Player = { playing: string | null; toggle: (id: string, src: string) => void };
const PlayerContext = createContext<Player>({ playing: null, toggle: () => {} });

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState<string | null>(null);
  const audio = useRef<HTMLAudioElement | null>(null);

  const toggle = useCallback((id: string, src: string) => {
    if (audio.current) audio.current.pause();
    if (playing === id) { setPlaying(null); return; }
    const a = audio.current ?? new Audio();
    audio.current = a;
    a.src = src;
    a.onended = () => setPlaying(null);
    a.play().catch(() => setPlaying(null));
    setPlaying(id);
  }, [playing]);

  useEffect(() => () => { audio.current?.pause(); }, []);

  // Pause previews when a video starts.
  useEffect(() => {
    const onPlay = (e: Event) => {
      if (e.target instanceof HTMLVideoElement && audio.current && !audio.current.paused) {
        audio.current.pause();
        setPlaying(null);
      }
    };
    document.addEventListener('play', onPlay, true);
    return () => document.removeEventListener('play', onPlay, true);
  }, []);

  return <PlayerContext.Provider value={{ playing, toggle }}>{children}</PlayerContext.Provider>;
}

export const usePlayer = () => useContext(PlayerContext);
