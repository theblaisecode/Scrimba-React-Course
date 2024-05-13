"use strict";

import React from "react";
import ReactDOM from "react-dom";

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

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
