import React from "react";

export default function Search({ query, setquery }) {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      ></input>
    </div>
  );
}
