import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorList = () => {
    return actors.map(actor => {
      return(
        <div>
          <h2>{actor.name}</h2>
          <h3>Movies</h3>
          <ul>
            {actor.movies.map(movie => {
              return <li>{movie}</li>
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actorList()}
    </div>
  );
};

export default Actors;
