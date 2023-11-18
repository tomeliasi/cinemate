import axios from "axios";
import Card from "../components/moviecard/Card";
import { useState, React } from "react";
import { Skeleton } from "@mui/material";

const api_key = "b19f01d37a3c74652fd8a097c5d5501d";
const baseurl = `https://api.themoviedb.org/3`;
const discover = `/discover/movie?api_key=${api_key}&language=en-US`;
const discoverurl = baseurl + discover;
const popularurl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "b19f01d37a3c74652fd8a097c5d5501d",
  },
};

const movieSearch = async (searchValue) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&include_adult=false&query=${searchValue}`
  );
  console.log(response.data);
  return response.data;
};

const DiscoverMovies = async () => {
  try {
    const response = await axios.get(discoverurl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching discovered movies:", error);
  }
};

const PopularMovies = async () => {
  try {
    const response = await axios.get(popularurl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching discovered movies:", error);
  }
};

const List = ({ movies, handleOnClick, isFavourite }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setShowModal(true);
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const imgHandleOnClick = (movie) => {
    openModal(movie);
  };
  return (
    <div className="movie-list-display">
      {movies &&
        movies?.map((movie, index) => (
          <div key={index} className="image-container">
              <Card
              movie={movie}
              CardHandleOnClick={handleOnClick}
              favComponent={isFavourite}
              imgClick={imgHandleOnClick}
            />
          </div>
        ))}
    </div>
  );
};

export { movieSearch, DiscoverMovies, PopularMovies, List };
