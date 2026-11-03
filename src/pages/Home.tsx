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
import { BIDAYA, YA3ALAM } from '../data/content';
import { PlayerProvider } from '../lib/player';

export default function Home() {
  return (
    <PlayerProvider>
      <a className="skip" href="#ya3alam">Skip to music</a>
      <Nav />
      <main>
        <Hero />
        <AlbumSection album={YA3ALAM} theme={{ bg: '#241E1A', fg: '#F1E6DA', accent: '#D6B48C', soft: 'rgba(214,180,140,0.5)', on: '#241E1A', dim: '#C7AE92' }} />
        <AlbumSection album={BIDAYA} flip divider="curve" theme={{ bg: '#12302F', fg: '#E2F4F1', accent: '#6FD0C5', soft: 'rgba(111,208,197,0.5)', on: '#12302F', dim: '#8FD3CB' }} />
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
