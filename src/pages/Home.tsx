import Nav from '../components/Nav';
import Hero from '../components/Hero';
import AlbumSection from '../components/AlbumSection';
import Production from '../components/Production';
import Singles from '../components/Singles';
import Covers from '../components/Covers';
import Film from '../components/Film';
import Live from '../components/Live';
import Workshops from '../components/Workshops';
import Story from '../components/Story';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Consent from '../components/Consent';
import { ALBUMS } from '../data/content';
import { PlayerProvider } from '../lib/player';

export default function Home() {
  return (
    <PlayerProvider>
      <a className="skip" href={`#${ALBUMS[0]?.id ?? 'contact'}`}>Skip to music</a>
      <Nav />
      <main>
        <Hero />
        {ALBUMS.map((a, i) => <AlbumSection key={a.id} album={a} flip={i % 2 === 1} divider={i > 0 ? 'curve' : undefined} />)}
        <Production />
        <Singles />
        <Covers />
        <Film />
        <Live />
        <Workshops />
        <Story />
        <Contact />
      </main>
      <Footer />
      <Consent />
    </PlayerProvider>
  );
}
