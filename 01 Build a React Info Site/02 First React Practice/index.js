"use strict";

/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/

ReactDOM.render(
  <div>
    <h1>Hello, I'm Blaise. Here are a couple of things i really like</h1>
    <ul>
      <li>
        I LOVE LOVE K-dramas and Chinese dramas especially the costume one
      </li>
      <li>I like sleeping 🥰</li>
      <li>I love my Family (with a few exceptions of course 🤭)</li>
    </ul>
  </div>,

  document.querySelector("#root")
);
