import React, { useEffect, useRef } from "react";

export default function Search({ query, setquery }) {
  let input = useRef(null);
  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === input.current) return;
        if (e.code === "Enter") {
          input.current.focus();
          setquery("");
        }

        // console.log(input.current);
      }
      document.addEventListener("keydown", callback);
      // return () => document.addEventListener("keydown", callback);
    },
    // [input]
    [setquery]
  );
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        ref={input}
      ></input>
    </div>
  );
}
