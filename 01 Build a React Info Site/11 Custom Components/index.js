"use strict";

// import React from "react";
// import ReactDOM from "react-dom";

// const newDiv = (
//   <>
//     <h1>TheBlaiseCode</h1>
//     <nav>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   </>
// );

// function TemporaryName() {
//   return (
//     <>
//       <img src="./react-logo.png" alt="React LOgo" width="40px" />
//       <h1>Fun facts about React</h1>

//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </>
//   );
// }

// ReactDOM.render(<TemporaryName />, document.querySelector("#root"));

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react";
import ReactDOM from "react-dom";

function OrderedList() {
  return (
    <>
      <h1>Reasons why I'm excited to learn React</h1>

      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </>
  );
}

ReactDOM.render(<OrderedList />, document.querySelector("#root"));
