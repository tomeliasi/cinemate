import React, { useState, useEffect } from "react";
import { Carousel} from "react-bootstrap";
import { PopularMovies } from "../services/MovieService";
import YoutubeIcon from "../images/youtube-icon.png";


const CarouselMovies = () => {
  const [index, setIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await PopularMovies();
      setMovies(popularMovies?.results.slice(5,9));
    };

    fetchMovies();
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="main-carousel">
      {movies?.map((movie, index) => (
        <Carousel.Item key={index}>
          <img
            className="carousel-movie-img"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <Carousel.Caption>
            <div className="carousel-movie-details">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <button className="trailer-button">Play Trailer  
              <img className="icon-button" src={YoutubeIcon}>
              </img></button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselMovies;
