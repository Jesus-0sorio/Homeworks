import { useCounter } from "./hooks/useCounter";

const CounterHook = ({ value }) => {
  const { counter, increment, decrement, reset } = useCounter(value);

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={increment}>Suma</button>
        <button onClick={decrement}>Resta</button>
        <button onClick={reset}>Reinciar</button>
      </div>
    </>
  );
};

export default CounterHook;
