import React from "react";

export default function App() {
  /*Challenge:
   * Set up state to track our count (initial value is 0)
   * See if you can think of a way to add 1 to the count
   * every time the + button is clicked
   * Add functionality to the minus button
   */

  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */

  const [result, setResult] = React.useState(0);

  function minus() {
    setResult(function (prevResult) {
      return prevResult - 1;
    });
  }

  function plus() {
    setResult((prevResult) => prevResult + 1);
  }

  return (
    <div className="counter">
      <button onClick={minus} className="counter--minus">–</button>
      <div className="counter--count">
        <h1>{result}</h1>
      </div>
      <button onClick={plus} className="counter--plus">+</button>
    </div>
  );
}
