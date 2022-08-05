import { createRoot } from 'react-dom/client';
import FilterForm from './components/FilterForm';
import LightSwitch from './components/LightSwitch';
//import LocationFinder from './components/LocationFinder';
import MoviesFinder from './components/MoviesFinder';
import MoodDisplay from './components/MoodDisplay';
import WordleGame from './components/WordleGame';

const root = createRoot(document.querySelector('#app'));

root.render(<WordleGame />);
