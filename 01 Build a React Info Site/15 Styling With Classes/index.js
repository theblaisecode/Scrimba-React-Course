"use strict";

import React from "react";
import ReactDOM from "react-dom";

/**
Challenge: 
- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/

function Header() {
  return (
    <header>
      <nav className="navBar">
        <img src="./react-logo.png" className="logo" alt="React Logo"/>

        <ul className="menu">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
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
