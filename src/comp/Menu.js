import React, { useEffect } from "react";
import Box from "./Box";
// import Box1 from "./Box1";
import Movielist from "./Movielist";
import { useState } from "react";
import Watchedlist from "./Watchedlist";
import { Loading } from "./Project";
import { Err } from "./Project";
import Watchedsummary from "./Watchedsummary";
import Moviedeatails from "./Moviedeatails";

export default function Menu({
  query,
  movies,
  setmovies,
  selectedid,
  setselectedid,
  isloading,
  errmsg,
  setisloading,
}) {
  const [watched, setwatched] = useState([]);
  function handleisshow() {
    // setisshow((isshow) => !isshow);
  }
  const [selectedrating, setselectedrating] = useState(0);
  // console.log("selectrating", selectedrating);
  function handlewatched(movie) {
    // watched.map((movie1)=>movie.imdbID===movie1.imdbID)
    setwatched((watched) => [...watched, movie]);

    console.log("selected", movie);
  }

  return (
    <div className="menu">
      <Box key={1}>
        {isloading && <Loading></Loading>}
        {console.log(errmsg)}
        {!isloading && errmsg && <Err errmsg={errmsg}></Err>}{" "}
        {!isloading && !errmsg && (
          <Movielist
            key={1}
            movies={movies}
            selectedid={selectedid}
            setselectedid={setselectedid}
            marginleft={"250"}

            // err={err}
          />
        )}
      </Box>

      <Box key={2}>
        {selectedid ? (
          <Moviedeatails
            key={selectedid}
            isloading={isloading}
            setisloading={setisloading}
            selectedid={selectedid}
            selectedrating={selectedrating}
            setselectedrating={setselectedrating}
            handlewatched={handlewatched}
            setselectedid={setselectedid}
            watched={watched}
            marginright={"250"}
          />
        ) : (
          <>
            <Watchedsummary
              selectedid={selectedid}
              // rating={rating}
            ></Watchedsummary>
            <Watchedlist
              selectedid={selectedid}
              setselectedid={setselectedid}
              watched={watched}
            ></Watchedlist>
          </>
        )}
      </Box>
    </div>
  );
}
