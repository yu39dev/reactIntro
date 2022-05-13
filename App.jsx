import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello, React</h1>{" "}
      {/*外側がJS記述。内側がオブジェクト。プロパティはstringで記述*/}
      <p style={contentStyle}>How are you?</p>
      <button onClick={onClickButton}>ボタン</button>{" "}
      {/*タグの中のイベントやスタイルの名称はキャメルケースで記述。{}内がJSになるので関数を記述*/}
    </>
  );
};

export default App; //他のファイルで使うために（＝コンポーネント化のために）明示
