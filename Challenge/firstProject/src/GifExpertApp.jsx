import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GidGrid";

export const GifExpertApp = () => {
  const [category, setCategory] = useState(["Zodiac"]);

  const onAddCategory = (element) => {
    setCategory([...category, element]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {category.map((categories, key) => {
          return <GifGrid categories={categories} key={key} />;
        })}
      </ol>
    </>
  );
};
