import React from "react";
import Count from "./components/Count";

export default function App() {
  const [result, setResult] = React.useState(0);

  function minus() {
    setResult((prevResult) => prevResult - 1);
  }

  function plus() {
    setResult((prevResult) => prevResult + 1);
  }

  /**
   * Challenge:
   * - Create a new component named Count
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the whole div.counter--count
   *      and display the incoming prop `number`
   * - Replace the div.counter--count below with an instance of
   *   the new Count component
   */

  return (
    <div className="counter">
      <button onClick={minus} className="counter--minus">
        –
      </button>

      <Count number={count} />

      <button onClick={plus} className="counter--plus">
        +
      </button>
    </div>
  );
}
