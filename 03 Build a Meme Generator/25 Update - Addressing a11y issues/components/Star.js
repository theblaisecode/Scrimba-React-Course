import React from "react";

export default function Star(prop) {
  const starIcon = prop.isFilled ? "star-filled.png" : "star-empty.png";
  /**
   * Challenge:
   * If the star is filled, add an aria-label of "Unmark as favorite".
   * Otherwise, use the aria-label of "Mark as favorite".
   */

  const ariaLabel = prop.isFilled ? "Unmark as favorite" : "Mark as favorite";

  return (
    <button
      onClick={prop.handleClick}
      aria-label={ariaLabel}
      aria-pressed={props.isFilled}
      className="card--favorite-button">
      <img
        src={`../images/${prop.starIcon}`}
        className="card--favorite"
        alt="stat icon"
      />
    </button>
  );
}
