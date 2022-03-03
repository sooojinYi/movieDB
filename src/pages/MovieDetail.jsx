import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  fetchCasts,
  fetchMovieDetail,
  fetchMovieVideos,
  fetchSimilarMovie,
} from "../service";

//bootstrap, icon, player, star
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import ReactPlayer from "react-player";
import ReactStars from "react-rating-stars-component";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/movieDetail.css";

export function MovieDetail() {
  let params = useParams();
  let genres = [];
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [video, setVideo] = useState([]);
  const [casts, setCasts] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
      setCasts(await fetchCasts(params.id));
      setSimilarMovie(await fetchSimilarMovie(params.id));
    };

    fetchAPI();
  }, [params.id]);

  genres = detail.genres;
  console.log(video);

  const MoviePlayerModal = (props) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=`;
    if (video == undefined) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ color: "#2e6ff2", fontWeight: "bold" }}
            >
              {detail.title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: "#2e6ff2" }}>
            <p style={{ color: "#ffffff" }}>youtube URL is not found...</p>
          </Modal.Body>
        </Modal>
      );
    } else {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              style={{ color: "#2e6ff2", fontWeight: "bold" }}
            >
              {detail.title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: "#2e6ff2" }}>
            <ReactPlayer
              className="container-fluid"
              url={youtubeUrl + video.key}
              playing
              width="100%"
            ></ReactPlayer>
          </Modal.Body>
        </Modal>
      );
    }
  };

  let genreList;
  if (genres) {
    genreList = genres.map((g, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <button type="button" className="btn btn-outline-info">
            {g.name}
          </button>
        </li>
      );
    });
  }

  const castList = casts.slice(0, 4).map((c, i) => {
    return (
      <div className="col-md-3 text-center" key={i}>
        <img
          className="img-fluid rounded-circle mx-auto"
          src={c.img}
          alt={c.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/img/no-cast.png";
          }}
        ></img>
        <p
          className="font-weight-bold text-center mt-3"
          style={{ fontWeight: 900, fontSize: "22px" }}
        >
          {c.name}
        </p>
        <p
          className="font-weight-light text-center"
          style={{ color: "#2e6ff2" }}
        >
          {c.character}
        </p>
      </div>
    );
  });

  const similarMovieList = similarMovie.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p
            style={{ fontWeight: "bolder", color: "#2e6ff2", fontSize: "22px" }}
          >
            {" "}
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
  });
  {
    console.log(detail.backdrop_path, similarMovie);
  }
  return (
    <div className="container">
      <Header />
      {detail.backdrop_path ? (
        <div className="row mt-2">
          <MoviePlayerModal
            show={isOpen}
            onHide={() => {
              setIsOpen(false);
            }}
          ></MoviePlayerModal>
          <div
            className="col text-center detail-image"
            style={{ width: "100%" }}
          >
            <img
              className="img-fluid"
              src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
              alt={detail.title}
            />
            <FontAwesomeIcon
              onClick={() => {
                setIsOpen(true);
              }}
              fontSize={95}
              color="#2e6ff2"
              icon={faCirclePlay}
              style={{ cursor: "pointer" }}
              className="faCirclePlay"
            />
          </div>
        </div>
      ) : (
        <div className="row mt-2">
          <MoviePlayerModal
            show={isOpen}
            onHide={() => {
              setIsOpen(false);
            }}
          ></MoviePlayerModal>
          <div
            className="col text-center detail-image"
            style={{ width: "100%" }}
          >
            <img
              className="img-fluid"
              src={"/img/no-backDropPoster.png"}
              alt={detail.title}
            />
            <FontAwesomeIcon
              onClick={() => {
                setIsOpen(true);
              }}
              fontSize={95}
              color="#2e6ff2"
              icon={faCirclePlay}
              style={{ cursor: "pointer" }}
              className="faCirclePlay"
            />
          </div>
        </div>
      )}

      <div className="row mt-5  mb-5">
        <div className="col">
          <p
            style={{
              color: "#2e6ff2",
              fontWeight: "900",
              fontSize: "28px",
              textAlign: "center",
            }}
          >
            {detail.title}
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <p style={{ color: "#2e6ff2", fontWeight: "900", fontSize: "24px" }}>
            GENRE
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">{genreList}</ul>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="text-center">
            <ReactStars
              count={detail.vote_average}
              size={20}
              color={"#f4c10f"}
              edit={false}
            ></ReactStars>
          </div>
          <div className="mt-3 mb-5">
            <p
              style={{ color: "#2e6ff2", fontWeight: "500", fontSize: "20px" }}
            >
              {detail.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col md-3">
          <p style={{ color: "#2e6ff2", fontWeight: "bold", fontSize: "22px" }}>
            RELEASE DATE
          </p>
          <p style={{ color: "#2e6ff2" }}>{detail.release_date}</p>
        </div>
        <div className="col md-3">
          <p style={{ color: "#2e6ff2", fontWeight: "bold", fontSize: "22px" }}>
            RUN TIME
          </p>
          <p style={{ color: "#2e6ff2" }}>{detail.runtime}</p>
        </div>
        <div className="col md-3">
          <p style={{ color: "#2e6ff2", fontWeight: "bold", fontSize: "22px" }}>
            BUDGET
          </p>
          <p style={{ color: "#2e6ff2" }}>{detail.budget}</p>
        </div>
        <div className="col md-3">
          <p style={{ color: "#2e6ff2", fontWeight: "bold", fontSize: "22px" }}>
            HOMEPAGE
          </p>
          <p style={{ color: "#2e6ff2" }}>{detail.homepage}</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <p style={{ color: "#2e6ff2", fontWeight: 900, fontSize: "24px" }}>
            CASTS
          </p>
        </div>
      </div>

      <div className="row mt-5">{castList}</div>

      <div className="row mt-5">
        <div className="col">
          <p style={{ color: "#2e6ff2", fontWeight: 900, fontSize: "24px" }}>
            SIMILAR MOVIES
          </p>
        </div>
      </div>

      {similarMovie.length == 0 ? (
        <div className="row mt-5 center" style={{ fontWeight: 500 }}>
          <span>There is no Movies !</span>
        </div>
      ) : (
        <div className="row mt-5">{similarMovieList}</div>
      )}

      <Footer />
    </div>
  );
}
