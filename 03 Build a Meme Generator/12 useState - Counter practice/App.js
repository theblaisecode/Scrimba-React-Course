import React from "react";

export default function App() {
  /*Challenge:
   * Set up state to track our count (initial value is 0)
   * See if you can think of a way to add 1 to the count
   * every time the + button is clicked
   * Add functionality to the minus button
   */

  const [result, setResult] = React.useState(0);

  function minus() {
    setResult(result - 1);
  }

  function plus() {
    setResult(result + 1);
  }

  return (
    <div className="counter">
      <button onClick={minus} className="counter--minus">
        –
      </button>
      <div className="counter--count">
        <h1>{result}</h1>
      </div>
      <button onClick={plus} className="counter--plus">
        +
      </button>
    </div>
  );
}
