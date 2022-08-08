import { useContext } from 'react';
import { AppContext } from './WordleGame';

export default function Letter({ row, letterPosition }) {
  const { gameboard } = useContext(AppContext); // Hole mir den kontext, um gameboard zu nutzen

  return <div className="letter">{gameboard[row][letterPosition]}</div>;
}
