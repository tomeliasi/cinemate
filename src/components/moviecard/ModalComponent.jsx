import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ratingstar from "../../images/rating-star.png";
import YoutubeIcon from "../../images/youtube-icon.png"; 
import { Skeleton } from "@mui/material";

const ModalComponent = (props) => {
  /*   const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" },
      ];
      

  const getGenreName = (genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : "Unknown";
  };

  */
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      movie={props.movie}
      dialogClassName="custom-modal"
      contentClassName="custom-modal-content"
      size="xl"
    >
      <Modal.Body className="modal-body">
        <img
          className="modal-img"
          src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}
        />
        <div className="modal-close-button">
          <Button
            className="modal-close-button button-styling"
            variant="secondary"
            onClick={props.handleClose}
          >
            X
          </Button>
        </div>
        <div className="modal-details">
          <h3>{props.movie.title ? props.movie.title : props.movie.name}</h3>
          <div className="modal-rating">
            <img
              src={ratingstar}
              alt="Rating Star"
              className="rating-star-image"
            />
            <div className="vote-rating" >
            {props.movie.vote_average.toFixed(1)}
            </div>
          </div>
          <p>{props.movie.overview}</p>
          <button className="trailer-button">Play Trailer  
              <img className="icon-button" src={YoutubeIcon}>
              </img></button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
