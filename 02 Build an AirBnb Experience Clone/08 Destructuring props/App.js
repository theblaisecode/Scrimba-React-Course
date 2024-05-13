import React from "react";
import Contact from "./components/Contact";

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?

    issue is that they all have the same data
*/

function App() {
  return (
    <div className="contacts">
      <Contact
        img="./img/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        mail="mr.whiskaz@catnap.meow"
      />

      <Contact 
        img="./img/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        mail="fluff@me.com"
      />

      <Contact
        img="./img/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        mail="thecat@hotmail.com"
      />

      <Contact
        img="./img/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        mail="pumpkin@scrimba.com"
      />

    </div>
  );
}
      // <div className="contact-card">
      //   <img src="./img/mr-whiskerson.png" />
      //   <h3>Mr. Whiskerson</h3>
      //   <div className="info-group">
      //     <img src="./img/phone-icon.png" />
      //     <p>(212) 555-1234</p>
      //   </div>
      //   <div className="info-group">
      //     <img src="./img/mail-icon.png" />
      //     <p>mr.whiskaz@catnap.meow</p>
      //   </div>
      // </div>

      // <div className="contact-card">
      //   <img src="./img/fluffykins.png" />
      //   <h3>Fluffykins</h3>
      //   <div className="info-group">
      //     <img src="./img/phone-icon.png" />
      //     <p>(212) 555-2345</p>
      //   </div>
      //   <div className="info-group">
      //     <img src="./img/mail-icon.png" />
      //     <p>fluff@me.com</p>
      //   </div>
      // </div>

      // <div className="contact-card">
      //   <img src="./img/felix.png" />
      //   <h3>Felix</h3>
      //   <div className="info-group">
      //     <img src="./img/phone-icon.png" />
      //     <p>(212) 555-4567</p>
      //   </div>
      //   <div className="info-group">
      //     <img src="./img/mail-icon.png" />
      //     <p>thecat@hotmail.com</p>
      //   </div>
      // </div>

      // <div className="contact-card">
      //   <img src="./img/pumpkin.png" />
      //   <h3>Pumpkin</h3>
      //   <div className="info-group">
      //     <img src="./img/phone-icon.png" />
      //     <p>(0800) CAT KING</p>
      //   </div>
      //   <div className="info-group">
      //     <img src="./img/mail-icon.png" />
      //     <p>pumpkin@scrimba.com</p>
      //   </div>
      // </div>

export default App;
