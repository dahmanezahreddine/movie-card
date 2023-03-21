import React from "react";
import Moviecard from "./Moviecard";

const Movielist = (props) => {
  return (
    <div className="movielistcss">
    
      {props.movielist.map((el) => (
        <Moviecard
          title={el.title}
          src={el.src}
          rating={el.rating}
          id={el.id}
          movielist={props.movielist}
          setmovielist={props.setmovielist}
        />
      ))}
    </div>
  );
};

export default Movielist;
