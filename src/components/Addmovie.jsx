import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import StarRatingComponent from "react-star-rating-component";

function Addmovie(props) {
  const [show, setShow] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const movieChange = (e) => {
    setMovieInfo({ ...movieInfo, [e.target.name]: e.target.value });
  };
  const addingMovie = () => {
    props.setmovielist([
      ...props.movielist,
      { ...movieInfo, id: Math.random() },
    ]);
    handleClose();
  };

  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ textAlign: "center" }}>
            <Form.Group>
              <Form.Label>Title: </Form.Label>
              <Form.Control
                placeholder="Title of the movie "
                name="title"
                onChange={movieChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image source:</Form.Label>
              <Form.Control
                placeholder="Image source of the movie "
                name="src"
                onChange={movieChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                placeholder="Description of the movie "
                name="description"
                onChange={movieChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating of the movie:</Form.Label>
              <StarRatingComponent
                name="rating"
                starCount={5}
                onStarClick={(rate) =>
                  setMovieInfo({ ...movieInfo, rating: rate })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addingMovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Addmovie;
