// import React from "react";
import Jokes from "./Jokes";
import "./style.css";
import jokesData from "./jokeData";

/*
Challenge: See if you can correctly pass the necessary props to the 
Joke component in the .map() (and render the jokeElements array) so 
the jokes show up on the page again
*/

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    console.log(joke);
    return (
      <Jokes setup={joke.setup || joke.question} punchline={joke.punchline} />
    );
  });

  return <div>{jokeElements}</div>;
}

// export default function App() {
//   return (
//     <>
//       <Jokes
//         punchline="It’s hard to explain puns to kleptomaniacs because
//         they always take things literally."
//       />

//       <Jokes
//         setup="I got my daughter a fridge for her birthday."
//         punchline="I can't wait to see her face light up when she opens it."
//       />

//       <Jokes
//         setup="How did the hacker escape the police?"
//         punchline="He just ransomware!"
//       />

//       <Jokes
//         setup="Why don't pirates travel on mountain roads?"
//         punchline="Scurvy."
//       />

//       <Jokes
//         setup="Why do bees stay in the hive in the winter?"
//         punchline="Swarm."
//       />

//       <Jokes
//         setup="What's the best thing about Switzerland?"
//         punchline="I don't know, but the flag is a big plus!"
//       />
//     </>
//   );
// }
