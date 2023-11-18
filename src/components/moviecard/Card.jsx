import React, { useState } from "react";
import AddFavourites from "../AddFavourites";
import RemoveFavourites from "../RemoveFavourites";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Skeleton } from "@mui/material";
import ModalComponent from "./ModalComponent";

const Card = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [favComponent, setFavComponent] = useState(props.favComponent);

  const CardhandleOnClick = () => {
    props.CardHandleOnClick(props.movie);
    setFavComponent(!favComponent);
  };

  const openModal = (movie) => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const imgHandleOnClick = (movie) => {
    openModal(movie);
  };

  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}
        alt={props.movie.title}
        className="card-poster"
        onClick={imgHandleOnClick}
      />

      <div className="overlay" onClick={CardhandleOnClick}>
        {favComponent ? <RemoveFavourites /> : <AddFavourites />}
      </div>
      <ModalComponent
        show={showModal}
        handleClose={closeModal}
        movie={props.movie}
      />
    </div>
  );
};

export default Card;
