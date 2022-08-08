import { useContext } from 'react';
import { AppContext } from './WordleGame';

export default function Key({ keyValue, big }) {
  const { onEnter, onDelete, onLetter } = useContext(AppContext);

  function selectLetter() {
    if (keyValue === 'ENTER') {
      onEnter();
    } else if (keyValue === 'DELETE') {
      onDelete();
    } else {
      onLetter(keyValue);
    }
  }

  let cssStyle = 'keyboard__keys';
  cssStyle = big ? `${cssStyle}__big` : cssStyle;

  return (
    <div className={cssStyle} onClick={selectLetter} onKeyDown={selectLetter}>
      {keyValue}
    </div>
  );
}
