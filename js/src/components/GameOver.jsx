import { useContext } from 'react';
import { AppContext } from './WordleGame';

export default function GameOver() {
  const { gameOver, currentGuess, correctWord } = useContext(AppContext);

  return (
    <div className="gameOver">
      <h1>
        {gameOver.wordGuessed ? 'Du hast Gewonnen!' : 'Du hast Verloren!'}
      </h1>
      <h3>Die Antwort war: {correctWord}</h3>
      {gameOver.wordGuessed && (
        <h3>Du hast {currentGuess.guess} Versuche gebraucht.</h3>
      )}
      <button onClick={restartGame}>Spiel Starten</button>
    </div>
  );
}

function restartGame() {
  window.location.reload(true);
}
