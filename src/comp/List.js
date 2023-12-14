import React from "react";

export default function List({ movie }) {
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
        </p>
        <p>🗓️{movie.Year}</p>
      </div>
    </div>
  );
}
