import React from "react";
import { MovieControls } from "./MovieControls";
import { Link } from "react-router-dom";

function MovieCard({ movie, type }) {
  return (
    <div
      style={{ position: "relative" }}
      className="col-md-3 col-sm-6"
      key={movie.id}
    >
      <div className="card mb-4">
        <Link to={`/movie/${movie.id}`}>
          <img
            id="posters"
            className="img-fluid"
            src={movie.poster}
            alt={movie.title}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "img/no-image.png";
            }}
          />
        </Link>
      </div>
      <div className="hoverImg">
        <MovieControls type={type} movie={movie} />
      </div>
    </div>
  );
}

export default MovieCard;
