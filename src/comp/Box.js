import React, { useState } from "react";
import Movielist from "./Movielist";
// import { c } from "tar";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

export default function Box({
  children,
  marginleft = 0,
  marginright = 0,
  key,
}) {
  function handleclick() {
    setisopen(!isopen);
  }
  const [isopen, setisopen] = useState(false);
  return (
    <>
      (
      <div className="box">
        {/* {children */}
        <button
          style={{
            position: "absolute",
            right: "30px",
            top: "30px",
            width: "30px",
            fontSize: "20px",
            borderRadius: "50%",
          }}
          onClick={handleclick}
        >
          {isopen ? "-" : "+"}
        </button>
        {isopen && children}
      </div>
      )
    </>
  );
}
