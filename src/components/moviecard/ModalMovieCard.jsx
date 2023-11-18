import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; 

const ModalMovieCard = (props) => {
  return (
    <div className="model-background">
      <Modal>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body className='modal-body'>
        <img
            className="carousel-movie-img"
            src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}
            alt={props.movie.title}
          />
        <div className='model-container'>
            <div className='model-title'>{props.movie.title}</div>
            <div className='model-body'>{props.movie.overview}</div>
            <div className='model-footer'></div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClose} variant="secondary">Close</Button>
        </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ModalMovieCard;
