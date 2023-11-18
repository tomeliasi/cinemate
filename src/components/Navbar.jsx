import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import NavbarMainLogo from "../images/navbar-main-logo.png";
import About from "./About";
import Series from "../Pages/Series";
import MovieSearchPage from "../Pages/MovieSearchPage";
import FavouritesPage from "../Pages/FavouritesPage";
import { FavouritesProvider } from "../services/FavouritesContext";

const Navbar = () => {
  return (
    <div className="background-image">
      <nav className="nav-container">
        <img className="nav-logo" src={NavbarMainLogo} alt="logo" />
        <div className="nav-categories">
          <Link to="/" className="category">
            Discover
          </Link>
          <Link to="/MovieSearch" className="category">
            Search
          </Link>
          <Link to="/Favourites" className="category">
            Favourites
          </Link>
          <Link to="/Series" className="category">
            Series
          </Link>
          <Link to="/About" className="category">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
