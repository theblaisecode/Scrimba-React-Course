import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0);

  console.log("Component rendered");

  // side effects
  // React.useEffect(
  //   function () {
  //     console.log("Effect ran");
  // fetch("https://swapi.dev/api/people/1")
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // },
  // [0]
  // ); // [0] compared to [0]

  /**
   * Challenge: re-write the useEffect
   * It should run any time `count` changes
   * For now, just console.log("Effect function ran")
   */

  React.useEffect(() => {
    console.log("Effect function ran");
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))
  }, [count]);

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  );
}
