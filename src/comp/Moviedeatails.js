import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";

export default function Moviedeatails({
  selectedid,
  isloading,
  setisloading,
  rating,
  setrating,
  setselectedrating,
  selectedrating,
  handlewatched,
  setselectedid,
  watched,
}) {
  const [selecctedmovie, setselectedmovie] = useState({});
  // const [selectedrating, setselectedrating] = useState(0);
  // const [iswatched, setiswatched] = useState();
  const iswatched = watched.map((movie) => movie.imdbID).includes(selectedid);
  // console.log("sees", selectedrating);

  useEffect(
    function () {
      async function req() {
        // setisloading(true);
        // console.log("id", selectedid);
        let res = await fetch(
          `http://www.omdbapi.com/?apikey=f84fc31d&i=${selectedid}`
        );
        let r = await res.json();
        setselectedmovie(r);
        // console.log("movie");
        // console.log(r);
      }
      req();
    },
    [selectedid]
  );
  function addmovie() {
    const watched = {
      name: "bhushan",
    };
    handlewatched(selecctedmovie);
    setselectedid();
  }
  function handleselectedid() {
    setselectedid(null);
  }
  return (
    <div>
      {console.log(selectedrating)}
      <div style={{ display: "flex", gap: "30px" }}>
        <div style={{ position: "relative" }}>
          <button
            onClick={handleselectedid}
            style={{ position: "absolute", fontSize: "30px", margin: "5px" }}
          >
            &larr;
          </button>
          <img
            src={selecctedmovie.Poster}
            style={{ width: "150px", height: "150px" }}
            alt="bhushan"
          ></img>
        </div>

        <div>
          <h2>{selecctedmovie.Title}</h2>
          <p>{selecctedmovie.Released}</p>
          <p>{selecctedmovie.Runtime}</p>
          <p>{selecctedmovie.Genre}</p>
          <p>⭐{selecctedmovie.imdbRating} imdbRating</p>
        </div>
      </div>
      <div>
        {!iswatched ? (
          <>
            {" "}
            <StarRating
              key={selectedid}
              size={10}
              color={"yellow"}
              setselectedrating={setselectedrating}
              selectedrating={selectedrating}
            ></StarRating>
            {/* // {console.log(selectedrating)} */}
            {selectedrating > 0 && (
              <button onClick={addmovie}>Add to list</button>
            )}{" "}
          </>
        ) : (
          <p> you rated:⭐{selectedrating}</p>
        )}
      </div>
      <div>
        {selecctedmovie.Plot}

        <p>directed by{selecctedmovie.Director}</p>
      </div>
    </div>
  );
}
