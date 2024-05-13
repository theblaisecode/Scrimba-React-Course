"use strict";

// 1. Why do we need to `import React from "react"` in our files?

// Cos we no longer use the CDNs to write react, so we need to import react from the dependencies for it to work. The JSX is defined in react

// 2. If I were to console.log(page) in index.js, what would show up?

// You would get an object breaking down every single element contained in the page variable

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```

// The html code is not wrapped in a single parent/tag, thus you'll get error messages

// 4. What does it mean for something to be "declarative" instead of "imperative"?

// declarative : I can tell the program what to do and it knows how to do it step by step

// imperative: I need to tell the program what to do and i would also tell it step by step how to do it

// 5. What does it mean for something to be "composable"?
// composable: I can create small pieces that i can put together to create a greater/larger whole. Like a puzzle
