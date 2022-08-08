import Key from './Key';

const keyboard = ['qwertzuiopü', 'asdfghjklöä', 'yxcvbnm'];
export default function Keyboard() {
  return (
    <div className="keyboard">
      {keyboard.map((keys, indexRow) => (
        <div key={indexRow} className="keyboard__row">
          {keys.split('').map((keyValue, index) => (
            <>
              {isPrintingEnterKey(indexRow, index) && (
                <Key big={true} key={index + 'ENTER'} keyValue="ENTER"></Key>
              )}
              <Key big={false} key={index + keyValue} keyValue={keyValue}></Key>
              {isPrintingDeleteKey(indexRow, index) && (
                <Key big={true} key={index + 'DELETE'} keyValue="DELETE"></Key>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
}

function isPrintingEnterKey(indexRow, index) {
  return indexRow === 2 && index === 0;
}

function isPrintingDeleteKey(indexRow, index) {
  return indexRow === 2 && index === 6;
}
