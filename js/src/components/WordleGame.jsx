import { createContext, useState } from 'react';
import Gameboard, { createDefaultGameboard } from './Gameboard';
import Keyboard from './Keyboard';

export const AppContext = createContext();
const boardSize = { row: 6, column: 5 };

export default function WordleGame() {
  const [gameboard, setGameboard] = useState(createDefaultGameboard(boardSize));
  const [currentGuess, setCurrentGuess] = useState({
    guess: 0,
    letterPosition: 0,
  });

  const onEnter = () => {
    if (currentGuess.letterPosition < 5) return;
    setCurrentGuess({ guess: currentGuess.guess + 1, letterPosition: 0 });
  };

  const onDelete = () => {
    if (currentGuess.letterPosition === 0) return;
    const newGameboard = [...gameboard];
    newGameboard[currentGuess.guess][currentGuess.letterPosition - 1] = '';
    setCurrentGuess({
      ...currentGuess,
      letterPosition: currentGuess.letterPosition - 1,
    });
    setGameboard(newGameboard);
  };

  const onLetter = (keyValue) => {
    if (currentGuess.letterPosition > 4) return;
    const newGameboard = [...gameboard];
    newGameboard[currentGuess.guess][currentGuess.letterPosition] = keyValue;
    setGameboard(newGameboard);
    setCurrentGuess({
      ...currentGuess,
      letterPosition: currentGuess.letterPosition + 1,
    });
  };

  return (
    <>
      <nav>
        <h1>WordleGame</h1>
      </nav>
      <AppContext.Provider
        value={{
          gameboard,
          setGameboard,
          currentGuess,
          setCurrentGuess,
          onDelete,
          onEnter,
          onLetter
        }}
      >
        <div className="game">
          <div>Message: WON / LOSS</div>
          <Gameboard></Gameboard>
          <Keyboard></Keyboard>
        </div>
      </AppContext.Provider>
    </>
  );
}
