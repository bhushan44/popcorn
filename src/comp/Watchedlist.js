import React, { useState } from "react";

export default function Watchedlist({
  movie,
  selectedid,
  setselectedid,
  watched,
}) {
  // const [watchedlist, setwatchedlist] = useState([]);
  return (
    <div>
      {watched?.map((movie) => {
        return (
          <div className="list">
            <List movie={movie} key={movie.imdbID}></List>
          </div>
        );
      })}
    </div>
  );
}
function List({ movie }) {
  return (
    <div
      style={{
        display: "flex",
        // margin: "50px",
        gap: "50px",
        borderBottom: "2px solid",
        borderColor: "red",
        padding: "20px",

        // width: "100px",
      }}
    >
      <img
        src={movie.Poster}
        style={{ width: "80px", height: "80px" }}
        alt="bhushan"
      ></img>
      <div>
        <p style={{ backgroundColor: "red", fontSize: "30px" }}>
          {movie.Title}
          {console.log("tit", movie.Title)}
        </p>
        <p>🗓️{movie.Year}nbncccz</p>
      </div>
    </div>
  );
}
