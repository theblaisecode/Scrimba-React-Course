import React from "react";

export default function App() {
  // Challenge
  /* Add our new function to the button */

  function handleClick() {
    console.log("I was clicked!");
  }

  // Challenge:
  /* Log something to the console when the mouse hovers over the image */

  function handleMouseEnter() {
    console.log("The mouse is over the image");
  }

  function handleMouseLeave() {
    console.log("The mouse left the image");
  }

  return (
    <div className="container">
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src="https://picsum.photos/640/360"
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );

  /* Add function name without the parenthesis so the function doesn't run immediately the page loads */
}
