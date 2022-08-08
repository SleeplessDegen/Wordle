import { useContext } from 'react';
import { AppContext } from './WordleGame';

export default function Key({ keyValue, big }) {
  const { gameboard, setGameboard, currentGuess, setCurrentGuess } =
    useContext(AppContext);

  function selectLetter() {
    if (keyValue === 'ENTER') {
      console.log('ENTER');
      if (currentGuess.letterPosition < 4) return;
      console.log(currentGuess);
      setCurrentGuess({ guess: currentGuess.guess + 1, letterPosition: 0 });
    } else if (keyValue === 'DELETE') {
      console.log('DELETE');
      if (currentGuess.letterPosition === 0) return;
      const newGameboard = [...gameboard];
      newGameboard[currentGuess.guess][currentGuess.letterPosition - 1] = '';
      setCurrentGuess({
        ...currentGuess,
        letterPosition: currentGuess.letterPosition - 1,
      });
      setGameboard(newGameboard);
    } else {
      if (currentGuess.letterPosition > 4) return;
      console.log(currentGuess);
      const newGameboard = [...gameboard];
      newGameboard[currentGuess.guess][currentGuess.letterPosition] = keyValue;
      setGameboard(newGameboard);
      setCurrentGuess({
        ...currentGuess,
        letterPosition: currentGuess.letterPosition + 1,
      });
    }
  }

  let cssStyle = 'keyboard__keys';
  cssStyle = big ? `${cssStyle}__big` : cssStyle;

  return (
    <div className="keyboard__keys" className={cssStyle} onClick={selectLetter}>
      {keyValue}
    </div>
  );
}
