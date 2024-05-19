import data from "../data";
import locationImg from "../img/location.png";
import "../style.css";

export default function Post({
  id,
  coverImg,
  imgAlt,
  country,
  title,
  arrival,
  departure,
  description,
}) {
  console.log(data);
  return (
    <>
      <div className="posts" key={id}>
        <div className="contentTop">
          <img src={coverImg} alt={imgAlt} />
        </div>

        <div className="contentBottom">
          <div className="location">
            <span>
              <img src={locationImg} alt="Location Icon" />
              {country}
            </span>
            <a
              href="#"
              className="map"
              aria-label="link to location on google map">
              View on Google Maps
            </a>
          </div>

          <h2 className="country">{title}</h2>
          <small className="date">{`${arrival} - ${departure}`}</small>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  );
}
