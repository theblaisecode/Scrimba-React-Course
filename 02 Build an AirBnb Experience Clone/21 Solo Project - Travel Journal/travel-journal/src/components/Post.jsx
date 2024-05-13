import "../style.css";

export default function Post(props) {
  return (
    <>
      <div className="posts">
        <div className="contentTop">
          <img src={`/${props.coverImg}`} alt={props.imgAlt} />
        </div>

        <div className="contentBottom">
          <div className="location">
            <span>
              <img src="/location.png" alt="Location Icon" />
              {props.country}
            </span>
            <a
              href="#"
              className="map"
              aria-label="link to location on google map">
              View on Google Maps
            </a>
          </div>

          <h2 className="country">{props.title}</h2>
          <small className="date">{`${props.arrival} - ${props.departure}`}</small>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </>
  );
}
