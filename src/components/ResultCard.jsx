import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

function ResultCard({ movie }) {
  const AddWatchlistButton = styled(Button)`
    width: 200px;
    height: 40px;
  `;

  const AddWatchedButton = styled(Button)`
    width: 200px;
    height: 40px;
    margin-right: 10px;
  `;

  const FillerPoster = styled(Link)`
    display: block;
    width: 100%;
    max-width: 200px;
    height: 250px;
    background-color: #eee;
    margin: 0 auto;
  `;

  const PosterImg = styled.img`
    margin: 0 auto;
    margin-bottom: 60px;
  `;

  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storeMovie = watchlist.find((o) => o.id === movie.id);
  let storeMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storeMovie
    ? true
    : storeMovieWatched
    ? true
    : false;

  const watchedDisabled = storeMovieWatched ? true : false;

  return (
    <div className="row mt-5 row-ml-auto" style={{ position: "relative" }}>
      <div className="col">
        <Link to={`/movie/${movie.id}`}>
          <PosterImg
            className="img-fluid"
            src={"https://image.tmdb.org/t/p/original/" + movie.poster}
            alt={movie.title}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "img/no-image.png";
            }}
          />
        </Link>
      </div>

      <div className="col-9">
        <div>
          <h3
            style={{
              textAlign: "left",
              color: "#2e6ff2",
              fontWeight: 700,
              fontSize: "22px",
            }}
          >
            {movie.title}
          </h3>
          <h4 style={{ color: "#2e6ff2", fontWeight: 500, fontSize: "18px" }}>
            {movie.releaseDate ? movie.releaseDate.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="col-6 mt- mb-1">
          <AddWatchlistButton
            type="primary"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </AddWatchlistButton>
        </div>
        <div className="col-6">
          <AddWatchedButton
            type="primary"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </AddWatchedButton>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
