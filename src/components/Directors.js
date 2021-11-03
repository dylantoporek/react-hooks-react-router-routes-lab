import React from "react";
import { directors } from "../data";

const directorDisplay= directors.map((director) => {
  return <div key={director.name}>
    {director.name}
    <ul>{director.movies.map((movie) => {
      return <li key={movie}>{movie}</li>
    })}</ul>
  </div>
})
function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directorDisplay}
  </div>;
}

export default Directors;
