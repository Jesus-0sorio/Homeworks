import React from "react";
import {
  ConvertTime,
  CostCall,
  Greet,
  EqualsNumbers,
  SortList,
  ImpartsNumebers,
  Salary,
  DivideNumber,
  CreateTable,
} from "../components";
import { useParams } from "react-router-dom";

const exercise = [
  <ConvertTime />,
  <CostCall />,
  <Greet />,
  <EqualsNumbers />,
  <SortList />,
  <ImpartsNumebers />,
  <Salary />,
  <DivideNumber />,
  <CreateTable />,
];

export const Exercise = () => {
  const { id } = useParams();
  return <div className="w-6/12 p-4 mx-auto">{exercise[id - 1]}</div>;
};
