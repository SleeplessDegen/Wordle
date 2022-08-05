import { useState } from "react";

export default function Gameboard() {
  
  
  const defaultBoard = createDefaultGameboard({ row: 6, column: 5 });
  const [gameboard, setGameboard] = useState(defaultBoard);



  return <div>Gameboard {console.log(gameboard)}</div>;
}

// Falls spielfeld angaben nicht mitgegeben werden, wird der default genommen. 6x5
function createDefaultGameboard({ row = 6, column = 5 }) {
  const gameboard = new Array(row);
  for (let i = 0; i < row; i++) {
    gameboard[i] = new Array(column);
  }
  return gameboard;
}
