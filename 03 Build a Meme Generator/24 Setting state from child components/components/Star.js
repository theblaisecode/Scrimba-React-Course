import React from "react";

export default function Star(prop) {
  const starIcon = prop.isFilled ? "star-filled.png" : "star-empty.png";
  return (
    <button onClick={prop.handleClick} aria-label="">
      <img src={`../images/${prop.starIcon}`} className="card--favorite" />
    </button>
  );
}
