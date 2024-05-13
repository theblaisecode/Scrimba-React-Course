"use strict";

import React from "react";

function Header() {
  return (
    <header>
      <nav className="navBar">
        <img src="./react-logo.png" className="logo" alt="React Logo" />

        <ul className="menu">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header