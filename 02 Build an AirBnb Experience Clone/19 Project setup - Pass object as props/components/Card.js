import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  /*
  Challenge:
  1. Display the correct text in the badge based on the logic above
  2. Only display the badge if badgeText has a value
  */

  return (
    <>
      <div className="card">
        <div className="cardTop">
          <img
            src={`../images/${props.item.coverImg}`}
            alt={props.item.imgAlt}
          />
          {badgeText && <small>{badgeText}</small>}
        </div>

        <div className="cardBottom">
          <div className="rating">
            <img src="../images/star.png" alt="star" />
            <span>
              {props.item.stats.rating}{" "}
              <span className="highlight">
                ({props.item.stats.reviewCount}) • {props.item.location}
              </span>
            </span>
          </div>
          <h2 className="quote">{props.item.title}</h2>
          <div className="price">
            <span>From ${props.item.price}</span> / person
          </div>
        </div>
      </div>
    </>
  );
}
