import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GidGrid";

export default function GifExpertApp () {
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
