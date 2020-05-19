import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    return directors.map(director => {
      return (<div>{director.name} {renderMovies(director)}</div>)
    } )
  }

  const renderMovies = (director) => {
    return director.movies.map(movie => <ul>{movie}</ul>)
  }
  
  

  return (
    <div>
      <h1>Directors Page</h1>
        {renderDirectors()}
    </div> 
  );
}

export default Directors
