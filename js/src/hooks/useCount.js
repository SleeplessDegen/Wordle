import { useState } from 'react';

export function useCount(initialValue, max, min = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () =>
    setCount((current) => (current + step > max ? max : current + step));

  const decrement = () =>
    setCount((current) => (current - step < min ? min : current - step));

  const reset = () => setCount(initialValue);

  const isMax = count === max;
  const isMin = count === min;

  return { count, setCount, increment, decrement, reset, isMax, isMin };
}
