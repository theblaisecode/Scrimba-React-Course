"use strict";

import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
  your JSX
3. See if you can guess what will show up in the browser before running
  the code
4. See if you can explain what actually shows up in the browser
 */

// const newDiv = (
//   <div>
//     <h1>TheBlaiseCode</h1>
//     <nav>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   </div>
// );

// console.log(document.querySelector("#root").append(newDiv));

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const newDiv = (
  <div>
    <h1>TheBlaiseCode</h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
);

// ReactDOM.createRoot(document.querySelector("#root")).render(newDiv);
ReactDOM.render(newDiv, document.querySelector("#root"));
