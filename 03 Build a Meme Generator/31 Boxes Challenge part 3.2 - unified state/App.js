import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   *
   * Pass that function down to each of the Box components
   * and set it up so when they get clicked it runs the function
   */

  function boxToggle(id) {
    console.log("clicked");
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} clicked={boxToggle} />
  ));

  return <main>{squareElements}</main>;
}
