import { useState, useRef } from "react";
import { Form, Input } from "./";

export const EqualsNumbers = () => {
  const inputNumber1 = useRef(null);
  const inputNumber2 = useRef(null);
  const inputNumber3 = useRef(null);
  const [result, setResult] = useState("");

  const HandleCompare = () => {
    const numberOne = inputNumber1.current.value;
    const numberTwo = inputNumber2.current.value;
    const numberThree = inputNumber3.current.value;
    switch (true) {
      case numberOne === numberTwo && numberOne === numberThree:
        setResult("Los tres numeros son iguales");
        return;
      case numberOne === numberTwo ||
        numberOne === numberThree ||
        numberTwo === numberThree:
        setResult("Dos numeros son iguales");
        return;
      default:
        setResult("Ninguno de los numeros es igual");
        return;
    }
  };

  return (
    <>
      <Form HandleFunction={HandleCompare}>
        <Input
          type={"number"}
          text={"Ingrese el primer"}
          Ref={inputNumber1}
          name={"numberOne"}
        />
        <Input
          type={"number"}
          text={"Ingrese el segundo"}
          Ref={inputNumber2}
          name={"numberTwo"}
        />
        <Input
          type={"number"}
          text={"Ingrese el tercer"}
          Ref={inputNumber3}
          name={"numberThree"}
        />
        <button className="rounded-md bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-700 text-base font-semibold outline-none">
          Comparar
        </button>
      </Form>
      {<p className="text-lg mt-10">{result}</p>}
    </>
  );
};
