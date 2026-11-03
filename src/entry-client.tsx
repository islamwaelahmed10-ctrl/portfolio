import { hydrateRoot } from 'react-dom/client';
import '@fontsource/vibes/400.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/aref-ruqaa/400.css';
import '@fontsource/aref-ruqaa/700.css';
import './styles.css';
import App from './App';

hydrateRoot(document.getElementById('root')!, <App path={window.location.pathname} />);
