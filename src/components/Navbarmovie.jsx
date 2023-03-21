import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import StarRatingComponent from "react-star-rating-component";
import Addmovie from "./Addmovie";

const Navbarmovie = (props) => {
  const handleInput = (e) => {
    props.setInputvalue(e.target.value);
  };
  const handleRating = (e) => {
    props.setRatingvalue(e);
  };
  return (
    <Navbar>
      <span>
        <Addmovie
          movielist={props.movielist}
          setmovielist={props.setmovielist}
        />
      </span>
      <span>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={props.ratingvalue}
          onStarClick={handleRating}
        />
      </span>
      <span className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleInput}
        />
        <Button variant="outline-success">Search</Button>
      </span>
    </Navbar>
  );
};

export default Navbarmovie;
