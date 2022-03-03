import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);
  return (
    <>
      {type === "watchlist" && (
        <div className="btns">
          <div className="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => addMovieToWatched(movie)}
            >
              <FontAwesomeIcon icon={faEye} className="faEye" />
            </button>
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              <FontAwesomeIcon icon={faXmark} className="faEye" />
            </button>
          </div>
        </div>
      )}

      {type === "watched" && (
        <>
          <div className="btns">
            <div className="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => moveToWatchlist(movie)}
              >
                <FontAwesomeIcon icon={faEyeSlash} className="faEyeSlash" />
              </button>
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={() => removeFromWatched(movie.id)}
              >
                <FontAwesomeIcon icon={faXmark} className="faEye" />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
