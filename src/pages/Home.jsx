import React, { useEffect, useState } from "react";
import {
  fetchGenre,
  fetchMovieByGenre,
  fetchMovies,
  fetchPersons,
  fetchTopratedMovie,
} from "../service";

//icons
import { MdLocalMovies } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { MdHotelClass } from "react-icons/md";

// bootstrap
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

// components
import Header from "../components/Header";
import CarouselSlide from "../components/CarouselSlide";
import MovieListByGenre from "../components/MovieListByGenre";
import PersonsList from "../components/PersonsList";
import TopRatedList from "../components/TopRatedList";
import Footer from "../components/Footer";
import "../style/home.css";

export const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [genreName, setGenreName] = useState("MOVIE LIST");

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre());
      setPersons(await fetchPersons());
      setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const setGenreTitleName = (genreName) => {
    let reName = genreName.toUpperCase() + " MOVIE LIST";
    setGenreName(reName);
  };

  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleGenreClick(item.id);
            setGenreTitleName(item.name);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });

  return (
    <div className="container">
      <Header />

      <div className="row mt-2">
        <div className="col">
          <CarouselSlide nowPlaying={nowPlaying} />
        </div>
      </div>

      <div className="list">
        <ul className="list-inline mt-5">{genreList}</ul>
      </div>

      <div className="row mt-3">
        <div className="col">
          <p className="list-title">
            <MdLocalMovies style={{ fontSize: "40px" }} /> {genreName}
          </p>
        </div>
      </div>

      <MovieListByGenre movieByGenre={movieByGenre} />

      <div className="row mt-3">
        <div className="col">
          <p className="list-title">
            <MdPersonPin style={{ fontSize: "40px" }} /> TRENDING PERSON ON THIS
            WEEK
          </p>
        </div>
      </div>

      <PersonsList persons={persons} />

      <div className="row mt-3">
        <div className="col">
          <p className="list-title">
            <MdHotelClass style={{ fontSize: "40px" }} /> TOP RATED MOVIES
          </p>
        </div>
      </div>

      <TopRatedList topRated={topRated} />

      <Footer />
    </div>
  );
};

export default Home;
