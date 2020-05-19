import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = () => {
    return movies.map(movie => {
      return <div>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        Genres:
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    })
  }
  

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies()}
    </div>
  );
};

export default Movies;
