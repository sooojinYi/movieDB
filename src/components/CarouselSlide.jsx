import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "../style/carouselSlide.css";

function CarouselSlide({ nowPlaying }) {
  return (
    <Carousel
      autoPlay={true}
      autoFocus={true}
      interval={5000}
      swipeable={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
    >
      {nowPlaying.slice(0, 5).map((item, index) => {
        return (
          <div className="carousel-container" key={index}>
            <div>
              <Link to={`/movie/${item.id}`}>
                <img
                  style={{ height: 600 }}
                  src={item.backPoster}
                  alt={item.title}
                />
              </Link>
              <div className="text-box" style={{ backgroundColor: "#ffffff" }}>
                <span className="movie-title">{item.title}</span>
                <span className="movie-date">{item.releaseDate}</span>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselSlide;
