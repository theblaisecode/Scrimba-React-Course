import "../style.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="headerContent">
          <div className="contentTop">
            <img src="/troll-face.png" alt="laughing face" />
            <span>Meme Generator</span>
          </div>

          <div className="contentBottom">
            <span>React Course - Project 3</span>
          </div>
        </div>
      </div>
    </header>
  );
}
