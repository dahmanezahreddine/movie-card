import "./App.css";
import { useState } from "react";
import Movielist from "./components/Movielist";
import Navbarmovie from "./components/Navbarmovie";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movielist, setmovielist] = useState([
    {
      title: "My Name Is Vendetta",
      src: "./images/My Name Is Vendetta.jpg",
      description:
        "When enemies from the past kill his wife and brother-in-law, a former mafia enforcer and his daughter flee to Milan to plot their revenge.",
      rating: 5,
      id: Math.random(),
    },
    {
      title: "The Last Of Us",
      src: "./images/The Last Of Us.jpg",
      description:
        "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
      rating: 3,
      id: Math.random(),
    },
    {
      title: "We Have a Ghost",
      src: "./images/We Have a Ghost.jpg",
      description:
        "After finding a ghost with a murky past haunting their new house, a family becomes internet sensations — and the targets of a shadowy government agency.",
      rating: 4,
      id: Math.random(),
    },
  ]);
  const [inputvalue, setInputvalue] = useState("");
  const [ratingvalue, setRatingvalue] = useState(1);
  console.log(ratingvalue);

  return (
    <div className="App">
      <Navbarmovie
        movielist={movielist}
        setmovielist={setmovielist}
        setInputvalue={setInputvalue}
        setRatingvalue={setRatingvalue}
        ratingvalue={ratingvalue}
      />
      <Movielist
        movielist={movielist.filter(
          (el) =>
            el.title.toLowerCase().includes(inputvalue.toLowerCase()) &&
            el.rating >= ratingvalue
        )}
        setmovielist={setmovielist}
      />
    </div>
  );
}

export default App;
