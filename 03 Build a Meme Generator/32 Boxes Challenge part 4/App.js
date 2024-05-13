import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  function boxToggle(id) {
    /**
     * Challenge: use setSquares to update the
     * correct square in the array.
     *
     * Make sure not to directly modify state!
     *
     * Hint: look back at the lesson on updating arrays
     * in state if you need a reminder on how to do this
     */

    function toggle(id) {
      setSquares((prevSquares) => {
        const newSquares = [];
        for (let i = 0; i < prevSquares.length; i++) {
          const currentSquare = prevSquares[i];
          if (currentSquare.id === id) {
            const updatedSquare = {
              ...currentSquare,
              on: !currentSquare.on,
            };
            newSquares.push(updatedSquare);
          } else {
            newSquares.push(currentSquare);
          }
        }
        return newSquares;
      });
    }
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} clicked={boxToggle} />
  ));

  return <main>{squareElements}</main>;
}
