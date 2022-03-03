import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../style/footer.css";

function Footer() {
  return (
    <div className="main-div">
      <hr className="mt-5 mb-5" style={{ borderTop: "1px solid #2e6ff2" }}></hr>

      <div className="row mt-3">
        <div className="col-md-8 col-sm-6" style={{ color: "#2e6ff2" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#2e6ff2" }}>
            ABOUT ME
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
            consequuntur cum aut, odit omnis eos numquam sunt reiciendis!
            Incidunt mollitia, ratione nihil voluptatum aliquid maxime delectus
            nobis iusto laudantium veritatis?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
            consequuntur cum aut, odit omnis eos numquam sunt reiciendis!
            Incidunt mollitia, ratione nihil voluptatum aliquid maxime delectus
            nobis iusto laudantium veritatis?
          </p>
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <a href="/" style={{ color: "#2e6ff2" }}>
                <FontAwesomeIcon icon={faFacebookSquare} className="facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" style={{ color: "#2e6ff2" }}>
                <FontAwesomeIcon icon={faYoutubeSquare} className="youtube" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" style={{ color: "#2e6ff2" }}>
                <FontAwesomeIcon icon={faTwitterSquare} className="twitte" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" style={{ color: "#2e6ff2" }}>
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="instagram"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-6" style={{ color: "#2e6ff2" }}>
          <h3 style={{ fontSize: "18px", fontWeight: 900, color: "#2e6ff2" }}>
            KEEP IN TOUCH
          </h3>
          <ul className="list-unstyled">
            <li>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faGlobe} />
                </strong>{" "}
                Address: city, state, country
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faComment} />
                </strong>{" "}
                Phone: +01 00 00 00
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faEnvelope} className="Envelope" />
                </strong>{" "}
                Email: info@infomail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
