import React from "react";

export default function Contact() {
  return (
    <div className="contact-card">
      <img src="./img/mr-whiskerson.png" />
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        <img src="../img/phone-icon.png" />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src="../img/mail-icon.png" />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </div>
  );
}
