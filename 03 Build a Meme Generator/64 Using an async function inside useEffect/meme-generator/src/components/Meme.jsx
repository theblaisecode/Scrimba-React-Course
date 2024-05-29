import "../style.css";
import { useState, useId, useEffect } from "react";

export default function Meme() {
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

  /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically returns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
  */

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemesImages(data.data.memes);
    }

    getMemes();
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
