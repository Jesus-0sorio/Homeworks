import React, { useState } from "react";
import "./../App.css";

export default function Counter({ value }) {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubsstract = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={() => handleAdd()}>Suma</button>
        <button onClick={() => handleSubsstract()}>Resta</button>
        <button onClick={() => handleReset()}>Reinciar</button>
      </div>
    </>
  );
}
