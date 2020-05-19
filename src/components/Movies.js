import React from 'react';
import { movies } from '../data';

const renderMovies = (movies) => {
return (movies.map(movie => {return <div className="movie"><h2>{movie.title}</h2>Score: {movie.metascore}<br></br>Run time: {movie.time}<br></br>Genres<ul>{movie.genres.map(genre => {return <li>{genre}</li>})}</ul><br></br><br></br></div>}))
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies(movies)}
    </div>
  );
};

export default Movies;
