import React from "react";

export default function Contact(props) {
  /**
   * Challenge: Fix the code below to use the `props`
   * object values in place of the hardcoded values below
   */

  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="../img/phone-icon.png" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="../img/mail-icon.png" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
