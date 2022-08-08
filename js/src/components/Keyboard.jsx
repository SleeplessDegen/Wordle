import { useCallback, useContext, useEffect } from 'react';
import Key from './Key';
import { AppContext } from './WordleGame';

const keyboard = ['qwertzuiopü', 'asdfghjklöä', 'yxcvbnm'];
export default function Keyboard() {
  const { onEnter, onDelete, onLetter } = useContext(AppContext);

  const handleUserKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      onEnter();
    } else if (event.key === 'Backspace') {
      onDelete();
    } else {
      keyboard.map((keys) =>
        keys.split('').forEach((key) => {
          if (event.key === key) {
            onLetter(key);
          }
        })
      );
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', handleUserKeyPress);
    return () => {
      document.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <div className="keyboard">
      {keyboard.map((keys, indexRow) => (
        <div key={indexRow} className="keyboard__row">
          {keys.split('').map((keyValue, index) => (
            <>
              {isPrintingDeleteKey(indexRow, index) && (
                <Key big={true} key={index + 'DELETE'} keyValue="DELETE"></Key>
              )}
              <Key big={false} key={index + keyValue} keyValue={keyValue}></Key>
              {isPrintingEnterKey(indexRow, index) && (
                <Key big={true} key={index + 'ENTER'} keyValue="ENTER"></Key>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
}

function isPrintingEnterKey(indexRow, index) {
  return indexRow === 2 && index === 6;
}

function isPrintingDeleteKey(indexRow, index) {
  return indexRow === 2 && index === 0;
}
