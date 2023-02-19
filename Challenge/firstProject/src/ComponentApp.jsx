import React, { useState } from "react";

export function ComponentApp() {
  const [category, setCategory] = useState([
    "first category",
    "second category",
  ]);
  const [element, setElement] = useState("");

  const addCategory = () => {
    setCategory([...category, element]);
    setElement("");
  };

  const addElement = (e) => {
    setElement(e.target.value);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <input type="text" value={element} onChange={addElement} />
      <button onClick={addCategory}>Agregar</button>
      <ol>
        {category.map((categories, i) => {
          return <li key={i}>{categories}</li>;
        })}
      </ol>
    </>
  );
}
