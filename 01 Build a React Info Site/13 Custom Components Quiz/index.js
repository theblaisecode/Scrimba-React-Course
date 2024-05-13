"use strict";

// Quiz!

// 1. What is a React component?
// They are funtions that returrn JSX elements


// 2. What's wrong with this code?
// ```
// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```

// The "m" in "myComponent" is small letter. It components should be Pascal case "M" not Camel case

// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }

// ReactDOM.render(Header(), document.getElementById("root"))
// ```

// The problem is in the ReactDOM.render. Writing Header() is wrong; It should be written as <Header />
