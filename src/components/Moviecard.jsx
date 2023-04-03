import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import Descofmovie from "./Descofmovie";
import Videoofmovie from "./Videoofmovie";

const Moviecard = (props) => {
  const deletmovie = (e) => {
    props.setmovielist(
      props.movielist.filter((movie) => movie.id !== props.id)
    );
  };

  return (
    <div className="MovieCard">
      <div>
        <link rel="stylesheet" href="" />
        <img
          style={{ width: "180px", height: 300 }}
          src={props.src}
          alt={props.title}
          link
        />
      </div>
      <div>{props.title}</div>
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={props.rating}
          //onStarClick={this.onStarClick.bind(this)}
        />
        <button onClick={() => deletmovie(props.movielist)}>
          <i class="fa-sharp fa-solid fa-trash"></i>
        </button>
      </div>

      <div>
        <Link to={"/Descofmovie/" + props.id}>
          <button>Description</button>
        </Link>
        <Link to={"/Videoofmovie/" + props.id}>
          <button>Video</button>
        </Link>
      </div>
    </div>
  );
};

export default Moviecard;
