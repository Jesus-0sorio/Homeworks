import { useState, useRef } from "react";
import { Input, Form } from "./";

export const SortList = () => {
  const refNumber = useRef(null);
  const [result, setResult] = useState("");
  const HandleSort = () => {
    const number = parseInt(refNumber.current.value);
    setResult([...result, number].sort((a, b) => a - b));
  };
  return (
    <>
      <Form HandleFunction={HandleSort}>
        <Input type="number" text="Ingrese el numero" Ref={refNumber} />
      </Form>
      {result && (
        <>
          <p className="text-lg mt-10">Lista de numeros:</p>
          <ul className="list-disc pl-12">
            {result.map((number, i) => {
              return <li key={i}>{number}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
};
