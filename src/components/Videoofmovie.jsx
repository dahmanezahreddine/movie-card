import React from "react";
import { useParams } from "react-router-dom";

const Videoofmovie = ({ movielist }) => {
  const params = useParams();
  const video = movielist.find((el) => el.id === +params.movieid);
  return (
    <div>
      <a href={video.srcvideo} target="_blank">
        Lien
      </a>
    </div>
  );
};

export default Videoofmovie;
