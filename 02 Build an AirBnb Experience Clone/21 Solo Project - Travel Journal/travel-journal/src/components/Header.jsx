import logo from "../img/logo.png"
import "../style.css"

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="title">
          <img src={logo} alt="image" />
          my travel journal.
        </div>
      </div>
    </header>
  );
}
