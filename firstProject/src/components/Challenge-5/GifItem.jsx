import React from "react";

export const GifItem = ({ id, title, url }) => {
  return (
    <>
      <div id={id}>
        <h4>{title}</h4>
        <img src={url} alt="" />
      </div>
    </>
  );
};
