import "../style.css";
import { useState, useId, useEffect } from "react";

export default function Meme() {
  /**
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3si4.jpg",
    randomImageAlt: "Shut Up And Take My Money Fry",
  });

  const id = useId();

  const [allMemeImages, setAllMemesImages] = useState(
    "https://api.imgflip.com/get_memes"
  );

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemesImages(data.data.memes));
  }, []);

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
