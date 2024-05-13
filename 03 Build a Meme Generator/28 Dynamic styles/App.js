import React from "react";
import boxes from "./boxes";

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes);
  props.darkMode;

  // Challenge: use a ternary to determine the backgroundColor.
  // If darkMode is true, set it to #222222
  // If darkMode is false, set it to #cccccc

  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc", // You code here
    borderColor: props.darkMode ? "#cccccc" : "#222222", // You code here
  };

  const squareElements = squares.map((square) => (
    <div style={styles} className="box" key={square.id}></div>
  ));
  return <main>{squareElements}</main>;
}
