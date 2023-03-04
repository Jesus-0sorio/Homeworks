import { useRef, useState } from "react";
import { Form, Input } from "./";

export const Greet = () => {
  const inputName = useRef(null);
  const inputTime = useRef(null);
  const [result, setResult] = useState("");
  const HandleGreeting = () => {
    const time = inputTime.current.value.split(":");
    const name = inputName.current.value;
    if (parseInt(time[0]) >= 0 && parseInt(time[0]) < 12) {
      setResult(`Buenos dias, ${name}`);
    } else if (parseInt(time[0]) >= 12 && parseInt(time[0]) < 18) {
      setResult(`Buenos tardes, ${name}`);
    } else {
      setResult(`Buenos noches, ${name}`);
    }
  };

  return (
    <>
      <Form HandleFunction={HandleGreeting}>
        <Input type={"time"} text={"Ingrese la hora"} Ref={inputTime} />
        <Input type={"text"} text={"Ingrese su nombre"} Ref={inputName} />
      </Form>
      {<p className="text-lg mt-10">{result}</p>}
    </>
  );
};
