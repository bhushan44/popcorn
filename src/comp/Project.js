import React, { useState } from "react";
import Found from "./Header/Found.js";
import Header from "./Header/Header.js";
import Menu from "./Menu.js";
// import A from "./A.js";
import "./project.css";
import Search from "./Header/Search.js";
import { useEffect } from "react";
import { signal } from "nodemon/lib/config/defaults.js";

export default function Project() {
  const [query, setquery] = useState("");
  // const [isshow, setisshow] = useState(true);
  const [movies, setmovies] = useState([]);
  const [selectedid, setselectedid] = useState("");
  const [isloading, setisloading] = useState(false);
  const [errmsg, seterrmsg] = useState("");
  let key = "f84fc31d";
  useEffect(
    function () {
      document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          setselectedid(null);
          console.log("opening");
        }
      });
      return function () {
        document.removeEventListener("keydown", (e) => {
          if (e.code === "Escape") {
            setselectedid(null);
          }
        });
      };
    },
    [setselectedid]
  );
  useEffect(
    function () {
      let controller = new AbortController();
      async function req() {
        try {
          setisloading(true);
          let res = await fetch(
            `http://www.omdbapi.com/?apikey=f84fc31d&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            throw new Error(" something went wrong");
          }

          let r = await res.json();
          if (r.Response === "False") {
            throw new Error("movie not found");
          }

          setmovies(r.Search);
          console.log(r.Search);
          seterrmsg("");
        } catch (e) {
          if (e.name !== "AbortError") {
            seterrmsg(e.message);
          }
        } finally {
          setisloading(false);
          // seterrmsg("");
        }

        // console.log(r.Actors);
      }
      if (query.length < 3) {
        seterrmsg();
        setmovies([]);
        return;
      }
      req();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  let len = movies?.length;
  // console.log(selectedid);
  return (
    <div className="project">
      <Header>
        <Search query={query} setquery={setquery}></Search>
        <Found len={len}></Found>
      </Header>

      <Menu
        query={query}
        movies={movies}
        setmovies={setmovies}
        selectedid={selectedid}
        setselectedid={setselectedid}
        isloading={isloading}
        errmsg={errmsg}
        setisloading
      ></Menu>
    </div>
  );
}
export function Loading() {
  return <div>loading...</div>;
}
export function Err({ errmsg }) {
  return <div>{errmsg}</div>;
}
// export { Project };
