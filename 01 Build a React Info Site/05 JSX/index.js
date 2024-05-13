"use strict";

// const h1 = document.createElement("h1");
// h1.textContent = "Hello World!";
// h1.className = "header";
// console.log(h1);

// JSX
ReactDOM.render(
  <h1 className="header">This is JSX</h1>,
  document.querySelector("#root")
);

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const nav = (
  <nav>
    <h1 id="logo">Blaise</h1>

    <ul className="menu">
      <li className="active">
        <a href="">Home</a>
      </li>

      <li>
        <a href="">About</a>
      </li>

      <li>
        <a href="">Menu</a>
      </li>

      <li>
        <a href="">Contact</a>
      </li>
    </ul>
  </nav>
);

ReactDOM.render(nav, document.querySelector("#root"))
