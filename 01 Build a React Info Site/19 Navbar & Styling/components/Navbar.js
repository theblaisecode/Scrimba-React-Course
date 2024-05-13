"use strict";

import React from "react";

function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <a id="logo" href="../index.html">
            <img
              src="../img/reactjs-icon.png"
              className="logoImg"
              alt="React logo"
            />
            <span className="logoText">ReactFacts</span>
          </a>

          <ul>
            <li>React Course - Project 1</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
