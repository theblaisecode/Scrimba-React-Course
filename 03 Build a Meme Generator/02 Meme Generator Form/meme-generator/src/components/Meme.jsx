import "../style.css";

export default function Meme() {
  return (
    <section id="form">
      <form action="">
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

        <button type="submit">Get a new meme image 🖼</button>
      </form>
    </section>
  );
}
