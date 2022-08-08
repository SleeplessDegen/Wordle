import { createContext, useEffect, useState } from 'react';
import Gameboard, { createDefaultGameboard } from './Gameboard';
import Keyboard from './Keyboard';
import { generateWordSet } from '../wordleHelper';
import GameOver from './GameOver';

export const AppContext = createContext();
const boardSize = { row: 6, column: 5 };

export default function WordleGame() {
  const [gameboard, setGameboard] = useState(createDefaultGameboard(boardSize));
  const [currentGuess, setCurrentGuess] = useState({
    guess: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    wordGuessed: false,
  });

  const correctWord = 'falte'.toLowerCase();
  useEffect(() => {
    generateWordSet().then((words) => {
      console.log(words);
      // es wird ein Objekt zurückgegeben, daher muss hier auf das Objekt-Attribut zugegriffen werden
      setWordSet(words.wordSet);
    });
  }, []);

  const onEnter = () => {
    if (currentGuess.letterPosition < 5) return;

    let currentWord = '';
    for (let i = 0; i < 5; i++) {
      currentWord += gameboard[currentGuess.guess][i];
    }
    // Prüfen ob es ein gültiges Wort ist
    if (wordSet.has(currentWord)) {
      setCurrentGuess({ guess: currentGuess.guess + 1, letterPosition: 0 });
    } else {
      alert('Wort nicht gefunden!');
    }

    if (currentWord === correctWord) {
      setGameOver({ gameOver: true, wordGuessed: true });
      return;
    }

    if (currentGuess.guess === 5) {
      setGameOver({ gameOver: true, wordGuessed: false });
    }
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
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          gameboard,
          setGameboard,
          currentGuess,
          setCurrentGuess,
          onDelete,
          onEnter,
          onLetter,
          correctWord,
          gameOver,
          setGameOver,
        }}
      >
        <div className="game">
          <Gameboard></Gameboard>
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </>
  );
}
