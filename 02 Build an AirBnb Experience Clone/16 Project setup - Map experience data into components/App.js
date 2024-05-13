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

export default function App() {
  const mapOver = data.map((info) => {
    return (
      <Card
        img={info.coverImg}
        rating={info.stats.rating}
        reviewCount={info.stats.reviewCount}
        location={info.location}
        title={info.title}
        price={info.price}
      />
    );
  });

  return (
    <>
      <Navbar />;
      <Hero />
      {mapOver}
    </>
  );
}
