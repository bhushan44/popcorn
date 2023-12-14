import React from "react";
import List from "./List";
import { Loading } from "./Project";

export default function Movielist({ movies, selectedid, setselectedid, err }) {
  function handleselectedid(id) {
    setselectedid((id1) => (id1 === id ? null : id));
  }
  return (
    <div>
      {movies?.map((movie) => {
        return (
          <div className="list" onClick={() => handleselectedid(movie.imdbID)}>
            <List movie={movie} key={movie.imdbID}></List>
          </div>
        );
      })}
    </div>
  );
}
