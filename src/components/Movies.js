import React from "react";
import { movies } from "../data";

const movieDisplay = movies.map((movie) => {
  return <div key={movie.title}>
    Title: {movie.title}
    Time: {movie.time}
    <ul>
     {movie.genres.map((genre) => {
       return <li key={genre}>{genre}</li>
     })}
    </ul>
  </div>
})

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movieDisplay}
  </div>;
}

export default Movies;
