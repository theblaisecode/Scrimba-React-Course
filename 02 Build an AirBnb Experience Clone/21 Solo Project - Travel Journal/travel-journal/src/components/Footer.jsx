import "../style.css";

export default function Footer() {
  return (
    <footer>
      <p>Made with ❤️ by TheBlaiseCode</p>
      
      <ul className="social">
        <li>
          <a
            href="https://twitter.com/theblaisecode"
            target="_blank"
            aria-label="Link to TheBlaiseCode twitter">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/theblaisecode"
            target="_blank"
            aria-label="Link to TheBlaiseCode linkedin">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/theblaisecode"
            target="_blank"
            aria-label="Link to TheBlaiseCode github">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </li>

        <li>
          <a
            href="https://instagram.com/theblaisecode"
            target="_blank"
            aria-label="Link to TheBlaiseCode linkedin">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
