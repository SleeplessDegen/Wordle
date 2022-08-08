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
