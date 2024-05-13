import "../style.css";
import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  /**
   * Challenge: Save the random meme URL in state
   * - Create new state called `memeImage` with an
   *   empty string as default
   * - When the getMemeImage function is called, update
   *   the `memeImage` state to be the random chosen
   *   image URL
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */

  const [memeImage, setMemeImage] = useState("");
  const [memeImageAlt, setMemeImageAlt] = useState("");

  function getMeme() {
    const memeArr = memesData.data.memes;
    const random = Math.floor(Math.random() * memeArr.length);

    setMemeImage(memeArr[random].url);
    setMemeImageAlt(memeArr[random].name);
  }

  return (
    <section id="form">
      <div className="memeForm">
        <div>
          <div className="inputs">
            <label htmlFor="topText">Top text</label>
            <input
              type="text"
              name="topText"
              id="topText"
              placeholder="Enter text"
            />
          </div>

          <div className="inputs">
            <label htmlFor="bottomText">Bottom text</label>
            <input
              type="text"
              name="bottomText"
              id="bottomText"
              placeholder="Enter text"
            />
          </div>
        </div>

        <button onClick={getMeme}>Get a new meme image 🖼</button>
      </div>

      <div id="meme">
        <img src={memeImage} alt={memeImageAlt} />
      </div>
    </section>
  );
}
