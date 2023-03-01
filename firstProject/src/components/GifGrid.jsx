import React from "react";
import { GifFetchApi } from "./GifFetchApi";
import { GifItem } from "./GifItem";
import "./grid.css";

export const GifGrid = ({ category }) => {
  const images = GifFetchApi(category);
  return (
    <>
      <h3>{category}</h3>
      <div className="cardGrid">
        {images.map((image, i) => {
          return <GifItem key={i} {...image} />;
        })}
      </div>
    </>
  );
};
