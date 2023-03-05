import { useState, useRef } from "react";
import { Input, Form } from "./";

export const DivideNumber = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [newListNumber, setNewListNumber] = useState([]);
  const [showNewList, setShowNewList] = useState(false);
  const refPosition = useRef(null);

  const generatorNumbers = () => {
    setRandomNumbers(
      Array.from({ length: 10 }, (_) => parseInt(Math.random() * 100))
    );
    if (parseInt(refPosition.current.value) !== 0) divideNumbers();
  };

  const divideNumbers = () => {
    const position = parseInt(refPosition.current.value) - 1;

    if (position >= 0 && position <= 9) {
      setShowNewList(true);
      setNewListNumber(
        randomNumbers.map((number) =>
          parseFloat((number / randomNumbers[position]).toFixed(2))
        )
      );
    }
  };

  return (
    <>
      <Form HandleFunction={divideNumbers}>
        <Input
          type="number"
          text="Ingrese el numero de la posicion del numero que desea dividir"
          Ref={refPosition}
        />
      </Form>
      <button
        onClick={generatorNumbers}
        className="mt-8 rounded-md bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-700 text-base font-semibold outline-none mr-3"
      >
        Generar Numeros
      </button>
      {
        <>
          <div className="flex flex-row justify-around">
            <div>
              <p className="text-2xl mt-6">Lista actual de numeros:</p>
              <ol className="list-decimal text-lg pl-9">
                {randomNumbers.map((number, i) => {
                  return <li key={i}>{number}</li>;
                })}
              </ol>
            </div>
            {showNewList && (
              <div>
                <p className="text-2xl mt-6">
                  Lista dividia por {randomNumbers[refPosition.current.value - 1]}:
                </p>
                <ol className="list-decimal text-lg pl-9">
                  {newListNumber.map((number, i) => {
                    return <li key={i}>{number}</li>;
                  })}
                </ol>
              </div>
            )}
          </div>
        </>
      }
    </>
  );
};
