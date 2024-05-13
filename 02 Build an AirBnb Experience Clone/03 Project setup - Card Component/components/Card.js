import React from "react";

export default function Hero() {
  return (
    <>
      <div className="card">
        <div className="cardTop">
          <img src="../img/katie-zaferes.png" alt="Katie Zaferes photo" />
          <small>Sold out</small>
        </div>

        <div className="cardBottom">
          <div className="rating">
            <img src="../img/star.png" alt="star" />
            <span>
              5.0 <span className="highlight">(0) • USA</span>
            </span>
          </div>
          <h2 className="quote">Life lessons with Katie Zaferes</h2>
          <div className="price">
            <span>From $136</span> / person
          </div>
        </div>
      </div>
    </>
  );
}
