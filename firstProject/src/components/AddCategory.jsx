import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [element, setElement] = useState("");
  const addElement = (e) => {
    setElement(e.target.value);
  };
  const addCategory = () => {
    onAddCategory(element);
    setElement("");
  };
  return (
    <>
      <input type="text" value={element} onChange={addElement} />
      <button onClick={addCategory}>Agregar</button>
    </>
  );
};
