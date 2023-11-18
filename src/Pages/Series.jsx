// Series.js
import React, { useState, useEffect } from "react";
import { PopularSeries } from "../services/SeriesService";
import { List } from "../services/MovieService";
import ListHeading from "../components/ListHeading";
import { useFavourites } from "../services/FavouritesContext";

const Series = () => {
  const [popularTv, setPopularTv] = useState([]);
  const { favourites, addFavourite, removeFavourite } = useFavourites();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const movies = await PopularSeries();
        setPopularTv(movies?.results);
      } catch (error) {
        console.error("Error fetching discovered movies:", error);
      }
    };
    fetchPopularMovies();
  }, []);

  return (
    <div>
      <ListHeading heading="Series" />

      <List
        movies={popularTv}
        handleOnClick={addFavourite}
        isFavourite={false}
      />
    </div>
  );
};

export default Series;
