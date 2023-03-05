import { useState, useRef } from "react";
import { Input, Form } from "./";
import { Table } from "./Table";

export const CreateTable = () => {
  const refFilas = useRef(null);
  const refColumnas = useRef(null);
  const [table, setTable] = useState('')

  const ShowTable = () => {
    setTable(<Table numRows={parseInt(refFilas.current.value)} numCols={parseInt(refColumnas.current.value)} />)
  }

  return (
    <>
      <Form HandleFunction={ShowTable}>
        <Input type="number" text="Ingrese el numero de filas" Ref={refFilas} />
        <Input
          type="number"
          text="Ingrese el numero de columnas"
          Ref={refColumnas}
        />
        <button className="rounded-md bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-700 text-base font-semibold outline-none">Crear table</button>
      </Form>
      {table}
    </>
  );
};
