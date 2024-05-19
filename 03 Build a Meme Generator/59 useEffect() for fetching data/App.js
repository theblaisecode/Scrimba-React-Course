import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0);

  /**
   * Quiz:
   * 1. What will happen if I put back our Star Wars API call
   *    into the effect function?
   * Will run normally without the loop and as much as the add button is clicked

   * 2. How will the useEffect be different if I use
   *    setStarWarsData() instead of console.log()
   * Will run normally without the loop and as much as the add button is clicked

   * 3. What SHOULD be in our dependencies array in this case? 
   * [] because you're not making use of the count dependency array in this case
   */
  React.useEffect(function () {
    console.log("Effect ran");
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, []);

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
