import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>        
        {movies.map((movie,movieIndex) => (
          <div key={movieIndex}>
            <h3>Movie: {movie.title}</h3>
            <h4>Running time:{movie.time}</h4>
            <p>Genres:</p>
            <ul>{movie.genres.map((genre,genreIndex) => 
            (<li key={genreIndex}>{genre}</li>))}</ul></div>
        ))}
    </div>
  );
};

export default Movies;
