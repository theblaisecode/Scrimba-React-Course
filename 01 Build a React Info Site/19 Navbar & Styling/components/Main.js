"use strict";

import React from "react";

export default function Main() {
  return (
    <main>
      <div className="container">
        <h1>Fun facts about React</h1>

        <ul className="list">
          <li className="item">Was first released in 2013</li>
          <li className="item">Was originally created by Jordan Walke</li>
          <li className="item">Has well over 100K stars on GitHub</li>
          <li className="item">Is maintained by Facebook</li>
          <li className="item">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </div>

      <img src="../img/reactjs-icon 2.png" className="logoImg" alt="React logo" />
    </main>
  );
}
