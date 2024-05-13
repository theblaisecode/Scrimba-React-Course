import "../style.css";
import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  /**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   *
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   *
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   *
   * Lastly, update the `getMemeImage` function and the markup
   * to reflect our newly reformed state object and array in the
   * correct way.
   */

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3si4.jpg",
    randomImageAlt: "Shut Up And Take My Money Fry",
  });

  const [allMemeImages] = useState(memesData.data.memes);

  function getMeme() {
    const random = Math.floor(Math.random() * allMemeImages.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: allMemeImages[random].url,
        randomImageAlt: allMemeImages[random].name,
      };
    });
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
        <img src={meme.randomImage} alt={meme.randomImageAlt} />
      </div>
    </section>
  );
}
