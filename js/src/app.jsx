import { createRoot } from 'react-dom/client';
import WordleGame from './components/WordleGame';

const root = createRoot(document.querySelector('#app'));

root.render(<WordleGame />);
