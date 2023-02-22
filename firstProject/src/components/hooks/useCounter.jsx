import { useState } from "react";

export const useCounter = (value = 100) => {
  const [counter, setCounter] = useState(value);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(value);
  return { counter, increment, decrement, reset };
};
