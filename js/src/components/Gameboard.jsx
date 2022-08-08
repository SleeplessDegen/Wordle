import Letter from './Letter';

export default function Gameboard() {
  return (
    <div className="gameboard">
      <div className="row">
        <Letter row={0} letterPosition={0}></Letter>
        <Letter row={0} letterPosition={1}></Letter>
        <Letter row={0} letterPosition={2}></Letter>
        <Letter row={0} letterPosition={3}></Letter>
        <Letter row={0} letterPosition={4}></Letter>
      </div>
      <div className="row">
        <Letter row={1} letterPosition={0}></Letter>
        <Letter row={1} letterPosition={1}></Letter>
        <Letter row={1} letterPosition={2}></Letter>
        <Letter row={1} letterPosition={3}></Letter>
        <Letter row={1} letterPosition={4}></Letter>
      </div>

      <div className="row">
        <Letter row={2} letterPosition={0}></Letter>
        <Letter row={2} letterPosition={1}></Letter>
        <Letter row={2} letterPosition={2}></Letter>
        <Letter row={2} letterPosition={3}></Letter>
        <Letter row={2} letterPosition={4}></Letter>
      </div>

      <div className="row">
        <Letter row={3} letterPosition={0}></Letter>
        <Letter row={3} letterPosition={1}></Letter>
        <Letter row={3} letterPosition={2}></Letter>
        <Letter row={3} letterPosition={3}></Letter>
        <Letter row={3} letterPosition={4}></Letter>
      </div>

      <div className="row">
        <Letter row={4} letterPosition={0}></Letter>
        <Letter row={4} letterPosition={1}></Letter>
        <Letter row={4} letterPosition={2}></Letter>
        <Letter row={4} letterPosition={3}></Letter>
        <Letter row={4} letterPosition={4}></Letter>
      </div>

      <div className="row">
        <Letter row={5} letterPosition={0}></Letter>
        <Letter row={5} letterPosition={1}></Letter>
        <Letter row={5} letterPosition={2}></Letter>
        <Letter row={5} letterPosition={3}></Letter>
        <Letter row={5} letterPosition={4}></Letter>
      </div>
    </div>
  );
}

// Falls spielfeld angaben nicht mitgegeben werden, wird der default genommen. 6x5
export function createDefaultGameboard({ row = 6, column = 5 }) {
  return new Array(row).fill('').map(() => new Array(column).fill(''));
}
