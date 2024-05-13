import "../style.css";
import memesData from "../memesData";

export default function Meme() {
  /**
   * Challenge: Get a random image from the `memesData` array
   * when the "new meme image" button is clicked.
   *
   * Log the URL of the image to the console. (Don't worry
   * about displaying the image yet)
   */

  function getMeme() {
    // const memeLength = Math.floor(Math.random() * 101);

    // memesData.map((item) => {
    //   console.log(item.data.memes);
    // });

    const memeArr = memesData.data.memes;
    const random = Math.floor(Math.random() * memeArr.length);
    console.log(memeArr[random].url);
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
        {/* <img src="/{}" alt="some image" /> */}
      </div>
    </section>
  );
}
