"use strict";

import React from "react";
import ReactDOM from "react-dom";

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

/**
Challenge: 
- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" alt="React Logo" width="40px" />
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <section>
      <h1>Reasons I'm excited to learn React</h1>

      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <small>
        &copy; 2024 | TheBlaiseCode Development. All Rights Reserved.
      </small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Header />

      <MainContent />

      <Footer />
    </>
  );
}

ReactDOM.render(<Page />, document.querySelector("#root"));
