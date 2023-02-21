import { useState } from "react";
import { GifGrid } from "./GifGrid";
import "./grid.css";

const Gifs = () => {
  const [category, setCategory] = useState("");
  const [element, setElement] = useState("");
  const addCategory = (e) => {
    setCategory(e.target.value);
  };

  const onSubmitCategory = () => {
    setElement(category);
    setCategory("");
  };

  return (
    <>
      <div className="gridClass">
        <input
          type="text"
          value={category}
          id="category"
          onChange={addCategory}
        />
        <button onClick={onSubmitCategory}>Buscar</button>
      </div>
      <GifGrid category={element} />
    </>
  );
};

export default Gifs;
