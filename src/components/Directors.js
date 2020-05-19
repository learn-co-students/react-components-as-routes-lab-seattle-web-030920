import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorList = () => {
    return directors.map(director => {
      return (
        <div>
          <h2>{director.name}</h2>
          <h3>Movies</h3>
          <ul>
            {director.movies.map(movie => {
              return <li>{movie}</li>
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directorList()}
    </div>
  );
}

export default Directors
