import React from "react"; //お作法としてラリブラリをインポートすることを先頭に明示。JSXを使用するだけの場合いらなくなった
import ReactDom from "react-dom"; //htmlにコンポーネントを反映するための記述

const App = () => {
  return (
    <>
      <h1>Hello, React</h1>
      <p>How are you?</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
