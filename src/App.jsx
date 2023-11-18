import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavbarMainLogo from "./images/navbar-main-logo.png";
import About from "./components/About";
import Series from "./Pages/Series";
import MovieSearchPage from "./Pages/MovieSearchPage";
import FavouritesPage from "./Pages/FavouritesPage";
import {
  FavouritesProvider,
  useFavourites,
} from "./services/FavouritesContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
    <FavouritesProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Series" element={<Series />} />
          <Route exact path="/MovieSearch" element={<MovieSearchPage />} />
          <Route exact path="/Favourites" element={<FavouritesPage />} />
        </Routes>
      </Router>
      </FavouritesProvider>
    </div>
  );
};

export default App;
