import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director,directorIndex) => {
        return (<div key={directorIndex}>{director.name} <ul>{director.movies.map((movie,movieIndex) => 
          {return (<li key={movieIndex}>{movie}</li>)})}</ul></div>)
      })}
    </div>
  );
}

export default Directors
