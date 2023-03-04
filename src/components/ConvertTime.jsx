import { useState, useRef } from "react";
import { Input, Form } from "./";

export const ConvertTime = () => {
  const second = useRef(null);
  const [total, setTotal] = useState(null);

  const converSecond = () => {
    const time = parseInt(second.current.value);
    const hour = Math.floor(time / 3600).toString();
    const minutes = Math.floor((time / 60) % 60).toString();
    const seconds = Math.floor(time % 60).toString();
    setTotal(`${hour}:${minutes}:${seconds}`);
  };

  return (
    <>
      <Form HandleFunction={converSecond}>
        <Input
          type={"number"}
          text="Ingrese los segundos que quiere convertir"
          Ref={second}
        />
      </Form>
      {total && <p className="text-lg mt-10">La hora es: {total}</p>}
    </>
  );
};
