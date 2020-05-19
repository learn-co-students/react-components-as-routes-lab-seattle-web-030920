import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieList = () => {
    return movies.map(movie => {
      return(
      <div>
        <h2>{movie.title}</h2>
        <h3>{movie.time}</h3>
        <h3>Genres</h3>
        <ul>
          {movie.genres.map(genre => {
            return <ul>{genre}</ul>
          })}
        </ul>
      </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {movieList()}
    </div>
  );
};

export default Movies;
