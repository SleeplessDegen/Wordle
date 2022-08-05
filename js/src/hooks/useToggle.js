import { useState } from 'react';

export function useToggle(initialState) {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((current) => !current);

  return [state, toggle, setState];
}
