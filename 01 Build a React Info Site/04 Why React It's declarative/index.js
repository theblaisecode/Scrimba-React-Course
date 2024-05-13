"use strict";

// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

// Challenge - recreate the above line of code in vanilla JS by creating and appending an h1 to our div#root (without using innerHTML).

// - Create a new h1 element
const newElement = document.createElement("h1");

// - Give it some textContent
newElement.textContent = "I am Blaise";

// - Give it a class name of "header"
newElement.className = "header";

// - append it as a child of the div#root
let root = document.querySelector("#root");
root.append(newElement);
