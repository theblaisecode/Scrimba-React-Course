import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.

https://www.figma.com/file/UWL3pK0esthT1XPXpnevQA/Airbnb-Experiences-(Copy)?type=design&node-id=2-2&mode=design&t=OQJY8IP2cVdvencb-0
*/

export default function App() {
  return (
    <>
      <Navbar />;
      <Hero />
      <Card
        img="katie-zaferes.png"
        imgAlt="Katie Zaferes"
        rating="5.0"
        reviewCount={6}
        country="China"
        title="Life Lessons with Katie Zeferes"
        price={136}
      />
    </>
  );
}
