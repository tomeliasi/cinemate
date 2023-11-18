import "../App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListHeading from "../components/ListHeading";
import CarouselMovies from "../components/CarouselMovies";
import { DiscoverMovies,List } from "../services/MovieService";
import { DiscoverSeries } from "../services/SeriesService";
import { useFavourites } from "../services/FavouritesContext";
import {Loader} from "../Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [historymovies, setHistoryMovie] = useState([]);
  const [discoveredMovies, setDiscoveredMovies] = useState([]);
  const [discoverSeries, setDiscoverSeries] = useState([]);
  const { favourites, addFavourite, removeFavourite } = useFavourites();

  useEffect(() => {
    const fetchDiscoveredMovies = async () => {
      try {
        const movies = await DiscoverMovies();
        setDiscoveredMovies(movies?.results);
      } catch (error) {
        console.error("Error fetching discovered movies:", error);
      }
    };

    fetchDiscoveredMovies();
  }, []);

  useEffect(() => {
    const fetchDiscoveredSeries = async () => {
      try {
        const series = await DiscoverSeries();
        setDiscoverSeries(series?.results);
      } catch (error) {
        console.error("Error fetching discovered series:", error);
      }
    };

    fetchDiscoveredSeries();
  }, []);

  return (
    <div className="container-fluid movie-app">
      {discoveredMovies?.length && discoverSeries.length ? (
        <div className="homepage-content">
          <div className="carousel-movie">
            <CarouselMovies />
          </div>
  
          <div className="row d-flex align-item-center mt-4 mb-4">
            <ListHeading heading="New Movies" />
          </div>
          <div className="row">
            <List
              movies={discoveredMovies}
              handleOnClick={addFavourite}
              isFavourite={false}
            />
          </div>
          <div className="row d-flex align-item-center mt-4 mb-4">
            <ListHeading heading="New Series" />
          </div>
          <div className="row">
            <List
              movies={discoverSeries}
              handleOnClick={addFavourite}
              isFavourite={false}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
  
};
export default HomePage;
