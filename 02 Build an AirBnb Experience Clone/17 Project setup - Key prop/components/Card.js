import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="cardTop">
          <img src={`../images/${props.img}`} alt={props.imgAlt} />
          <small>Sold out</small>
        </div>

        <div className="cardBottom">
          <div className="rating">
            <img src="../images/star.png" alt="star" />
            <span>
              {props.rating}{" "}
              <span className="highlight">
                ({props.reviewCount}) • {props.location}
              </span>
            </span>
          </div>
          <h2 className="quote">{props.title}</h2>
          <div className="price">
            <span>From ${props.price}</span> / person
          </div>
        </div>
      </div>
    </>
  );
}
