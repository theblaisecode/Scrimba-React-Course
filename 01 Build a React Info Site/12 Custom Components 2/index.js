"use strict";

/**
Challenge Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
  "© 20xx <last name here> development. All rights reserved."
*/

import React from "react";
import ReactDOM from "react-dom";

function OrderedList() {
  return (
    <>
      <header>
        <nav>
          <img src="./react-logo.png" alt="React Logo" width="40px" />
        </nav>
      </header>

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

      <footer>
        <small>&copy; 2024 | TheBlaiseCode Development. All Rights Reserved.</small>
      </footer>
    </>
  );
}

ReactDOM.render(<OrderedList />, document.querySelector("#root"));
