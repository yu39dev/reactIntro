/**
 * props:コンポーネントに対して渡される引数のようなもの。
 * コンポーネントの数が膨大になるのを防ぐために動的に使用できるようにするもの。
 */

import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
