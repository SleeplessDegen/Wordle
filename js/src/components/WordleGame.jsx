import Gameboard from './Gameboard';
import Keyboard from './Keyboard';

export default function WordleGame() {
  return (
    <>
      <nav>
        <h1>WordleGame</h1>
      </nav>
      <div>Message: WON / LOSS</div>
      <Gameboard></Gameboard>
      <Keyboard></Keyboard>
    </>
  );
}
