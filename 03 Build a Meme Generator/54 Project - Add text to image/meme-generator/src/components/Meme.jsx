import "../style.css";
import { useState } from "react";
import { useId } from "react";
import memesData from "../memesData";

export default function Meme() {
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3si4.jpg",
    randomImageAlt: "Shut Up And Take My Money Fry",
  });

  const id = useId();

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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <section id="form">
      <div className="memeForm">
        <div>
          <div className="inputs">
            <label htmlFor={id + "-topText"}>Top text</label>
            <input
              type="text"
              name="topText"
              id={id + "-topText"}
              value={meme.topText}
              onChange={handleChange}
              placeholder="Enter text"
            />
          </div>

          <div className="inputs">
            <label htmlFor={id + "-bottomText"}>Bottom text</label>
            <input
              type="text"
              name="bottomText"
              id={id + "-bottomText"}
              value={meme.bottomText}
              onChange={handleChange}
              placeholder="Enter text"
            />
          </div>
        </div>

        <button onClick={getMeme}>Get a new meme image 🖼</button>
      </div>

      <div id="meme">
        <img src={meme.randomImage} alt={meme.randomImageAlt} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}
