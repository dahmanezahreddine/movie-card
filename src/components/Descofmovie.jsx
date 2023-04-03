import React from "react";
import { useParams } from "react-router-dom";

const Descofmovie = ({ movielist }) => {
  const params = useParams();
  const desc = movielist.find((el) => el.id === +params.movieid);
  return <div>{desc.description}</div>;
};

export default Descofmovie;
