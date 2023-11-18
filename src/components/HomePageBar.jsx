import React from "react";
import NavbarMainLogo from "../images/navbar-main-logo.png"

const HomePageBar = () => {
  return (
    <nav className="nav-container">
      <img className="nav-logo" src={NavbarMainLogo}></img>
      <div className="nav-categories">
        <div className="category">Movies</div>
        <div className="category">Tranding</div>
        <div className="category">Discover</div>
        <div className="category">Series</div>
      </div>
    </nav>
  );
};

export default HomePageBar;
