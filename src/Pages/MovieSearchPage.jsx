import { React, useEffect, useState } from "react";
import { movieSearch, List } from "../services/MovieService";
import SearchBox from "../components/SearchBox";
import ListHeading from "../components/ListHeading";
import { useFavourites } from "../services/FavouritesContext";

const MovieSearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { favourites, addFavourite, removeFavourite } = useFavourites();

  useEffect(() => {
    getMoviesBySearch();
  }, [searchValue]);

  const getMoviesBySearch = async () => {
    const movies = await movieSearch(searchValue);
    console.log(movies);
    setMovies(movies?.results);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-item-center mt-4 mb-4">
        <ListHeading heading="Search for a Movie.." />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <List
          movies={movies}
          handleOnClick={addFavourite}
          isFavourite={false}
        />
      </div>
    </div>
  );
};

export default MovieSearchPage;
