import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.

https://www.figma.com/file/UWL3pK0esthT1XPXpnevQA/Airbnb-Experiences-(Copy)?type=design&node-id=2-2&mode=design&t=OQJY8IP2cVdvencb-0
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals 

export default function App() {
  const mapOver = data.map((info) => {
    return (
      <Card 
        key={info.id}
        {...item}
      />
    )
  });

  return (
    <>
      <Navbar />;
      <Hero />
      <section className="allCards">
        {mapOver}
      </section>
    </>
  );
}
