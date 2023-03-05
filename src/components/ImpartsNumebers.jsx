import { useState, useRef } from "react";
import { Input, Form } from "./";

export const ImpartsNumebers = () => {
  const refNumber = useRef(null);
  const [result, setResult] = useState("");

  const HandleImparts = () => {
    const number = parseInt(refNumber.current.value);
    const allNumbers = Array.from(
      { length: number - 1 },
      (_, i) => i + 1
    ).filter((x) => x % 2 !== 0);
    setResult(allNumbers);
  };
  return (
    <>
      <Form HandleFunction={HandleImparts}>
        <Input type="text" text="Ingrese un numero" Ref={refNumber} />
      </Form>
      {result && (
        <>
          <p className="text-lg mt-10">Lista de numeros impares:</p>
          <ul className="list-disc pl-12">
            {result.map((number, index) => {
              return <li key={index}>{number}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
};
