import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function MovieListByGenre({ movieByGenre }) {
  return (
    <div className="row mt-3">
      {movieByGenre.slice(0, 4).map((item, index) => {
        return (
          <div className="col-md-3 col-sm-6" key={index}>
            <div className="card">
              <Link to={`/movie/${item.id}`}>
                <img
                  className="img-fluid"
                  src={item.poster}
                  alt={item.title}
                ></img>
              </Link>
            </div>
            <div className="mt-3">
              <p style={{ fontWeight: "bold", fontSize: "22px" }}>
                {item.title}
              </p>
              <p>Rated: {item.rating}</p>
              <ReactStars
                count={item.rating}
                size={20}
                color={"#f4c10f"}
                edit={false}
              ></ReactStars>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieListByGenre;
