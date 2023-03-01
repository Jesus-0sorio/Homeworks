import { useState, useEffect } from "react";
import { getGifs } from "./getGifs";

export const GifFetchApi = (category) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const img = await getGifs(category);
    console.log(img);
    setImages(img);
  };

  useEffect(() => {
    getImages();
  }, [category]);
  return images;
};
