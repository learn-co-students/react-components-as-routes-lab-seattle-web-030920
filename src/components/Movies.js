import React from 'react';
import { movies } from '../data';

const Movies = () => {


  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return <div key={movie.title}>{movie.title}: {movie.time}
            {movie.genres.map(g => {
              return <ul>{g}</ul>
            })}
          </div>
        })}
    </div>
  );
};

export default Movies;
