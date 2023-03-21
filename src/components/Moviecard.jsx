import React from "react";
import StarRatingComponent from "react-star-rating-component";

const Moviecard = (props) => {
  const deletmovie = (e) => {
    console.log(props.id);
    props.setmovielist(
      props.movielist.filter((movie) => movie.id !== props.id)
    );
  };

  return (
    <div className="MovieCard">
      <div>
        <img
          style={{ width: "180px", height: 300 }}
          src={props.src}
          alt={props.title}
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
    </div>
  );
};

export default Moviecard;
