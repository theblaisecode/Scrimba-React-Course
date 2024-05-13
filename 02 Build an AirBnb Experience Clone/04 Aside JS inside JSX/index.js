"use strict";

import React from "react";
import ReactDOM from "react-dom";

function App() {
  const firstName = "Joe";
  const lastName = "Schmoe";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  /**
   * Challenge: finish off the h1 below so it says
   * "Hello Joe Schmoe!"
   */

  /**
   * Challenge: fix the h1 below to use the timeOfDay
   * string we determined in the code above
   */

  return (
    <>
      <h1>
        Hello {firstName} {lastName}!
      </h1>
      <p>It is year {date.getFullYear()}</p>
      <p>It is currently {new Date().getHours() % 12}</p>
      <h2>Good {timeOfDay}!</h2>;
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
