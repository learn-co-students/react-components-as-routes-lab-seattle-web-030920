import React from 'react';
import { directors } from '../data';
import Movies from './Movies';


const renderDirectors = (directors) => {
return (directors.map(director => {return <div className="director"><h2>{director.name}</h2>Movies:<ul>{director.movies.map(movie => {return <li>{movie}</li>})}</ul><br></br><br></br></div>}))
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors(directors)}
    </div>
  );
}

export default Directors
