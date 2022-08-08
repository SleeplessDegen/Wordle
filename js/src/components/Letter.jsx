import { useContext } from 'react';
import { AppContext } from './WordleGame';

export default function Letter({ row, letterPosition }) {
  const { gameboard, correctWord, currentGuess } = useContext(AppContext); // Hole mir den kontext, um gameboard zu nutzen

  const currentLetter = gameboard[row][letterPosition];

  const letterStyle = 'letter';

  const correct = correctWord[letterPosition] === currentLetter;
  const close =
    !correct && currentLetter !== '' && correctWord.includes(currentLetter);

  const letterState =
    currentGuess.guess > row &&
    (correct
      ? `${letterStyle}__correct`
      : close
      ? `${letterStyle}__close`
      : `${letterStyle}__false`);

  return (
    <div className={letterStyle + ' ' + letterState}>
      {gameboard[row][letterPosition]}
    </div>
  );
}
