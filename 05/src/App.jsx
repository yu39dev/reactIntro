import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>Hello, React</h1>{" "}
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">Fine!</ColorfulMessage>
      <button onClick={onClickCountUp}>countUp</button>
      <p>{num}</p>
    </>
  );
};

export default App;
