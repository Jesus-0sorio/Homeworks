import { useState, useRef } from "react";
import { Input, Form } from "./";

export const Salary = () => {
  const refSalary = useRef(null);
  const [salaries, setSalaries] = useState([]);
  const [showSalaries, setShowSalaries] = useState(false);

  const HandleSalary = () => {
    if (salaries.length < 10) {
      const salary = refSalary.current.value;
      setSalaries([...salaries, salary]);
    }
  };

  return (
    <>
      <Form HandleFunction={HandleSalary}>
        <Input
          type="number"
          Ref={refSalary}
          text="Ingrese los salarios"
        ></Input>
        <button className="rounded-md bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-700 text-base font-semibold outline-none">
          Guardar
        </button>
      </Form>
      <button
        onClick={() => setShowSalaries(!showSalaries)}
        className="mt-8 rounded-md bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-700 text-base font-semibold outline-none mr-3"
      >
        Mostrar salarios
      </button>
      <button
        onClick={() => setSalaries([])}
        className="rounded-md bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-700 text-base font-semibold outline-none"
      >
        Borrar salarios
      </button>
      {showSalaries &&
        (salaries.length === 10 ? (
          <>
            <p className="text-lg mt-10">
              Los 10 salarios con un aumento del 8% son:
            </p>
            <ul className="list-decimal pl-12">
              {salaries.map((salary, index) => {
                return (
                  <li key={index}>
                    <span>{salary}</span> - <span>{salary * 1.08}</span>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <p className="text-3xl mt-10">
            No estan los 10 salarios falta: {10 - salaries.length}{" "}
          </p>
        ))}
    </>
  );
};
