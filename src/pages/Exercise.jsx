import React from "react";
import { ConvertTime, CostCall, Greet } from "../components";
import { useParams } from "react-router-dom";

const exercise = [<ConvertTime />, <CostCall />, <Greet />];

export const Exercise = () => {
  const { id } = useParams();
  return <div className="w-6/12 p-4 mx-auto">{exercise[id - 1]}</div>;
};
