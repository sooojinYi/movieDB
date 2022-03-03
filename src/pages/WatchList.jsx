import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "../components/MovieCard";
import styledComponents from "styled-components";
import styled from "styled-components";

const Badge = styled.span`
  width: 100px;
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 8px;
`;

function WatchList(props) {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="container">
      <Header />
      <div className="row">
        <h4
          className="col"
          style={{
            color: "#2e6ff2",
            fontWeight: 900,
          }}
        >
          my watchlist
        </h4>
        <Badge className=" badge rounded-pill bg-primary">
          {watchlist.length} {watchlist.length === 0 || 1 ? "Movie" : "Movies"}
        </Badge>
      </div>
      {watchlist.length > 0 ? (
        <div className="row mt-3">
          {watchlist.map((movie) => (
            <MovieCard movie={movie} type="watchlist" />
          ))}
        </div>
      ) : (
        <h2
          className="no-movies"
          style={{
            color: "#2e6ff2",
            fontWeight: "bold",
            fontSize: "44px",
          }}
        >
          No movies in your list, add some!
        </h2>
      )}

      <Footer />
    </div>
  );
}

export default WatchList;
