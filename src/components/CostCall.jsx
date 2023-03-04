import { useState, useRef } from "react";
import { Input, Form } from "./";

export const CostCall = () => {
  const minutes = useRef(null);
  const [total, setTotal] = useState(undefined);
  const valueCall = () => {
    const time = parseInt(minutes.current.value);
    if (time < 3 && time > 0) setTotal("100 pesos");
    else if (time > 3) {
      const value = time - 3;
      setTotal(`${100 + value * 50} pesos`);
    }
  };
  return (
    <>
      <Form HandleFunction={valueCall}>
        <Input
          type={"number"}
          text={"Ingrese la duracion de la llamada en minutos"}
          Ref={minutes}
        />
      </Form>
      {total && <p className="text-lg mt-10">El total a pagar es: {total}</p>}
    </>
  );
};
