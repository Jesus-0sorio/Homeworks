import { useState } from "react";
import { FirstApp, Counter, ComponentApp, GifExpertApp } from "./components";

const arrayComponent = [
  <FirstApp />,
  <Counter value={0} />,
  <ComponentApp />,
  <GifExpertApp />,
];

export function App() {
  const [component, setComponent] = useState(0);

  const changeComponent = (e) => {
    const result = e.target.id === "plus" ? component + 1 : component - 1;
    const size = arrayComponent.length - 1;
    return result > size
      ? setComponent(0)
      : result < 0
      ? setComponent(size)
      : setComponent(result);
  };

  return (
    <>
      {arrayComponent[component]}
      <div>
        <button onClick={changeComponent}>{"<"}</button>
        <button onClick={changeComponent} id="plus">{">"}</button>
      </div>
    </>
  );
}
