import React from 'react';
import { actors } from '../data';

const renderActors = (actors) => {
return (actors.map(actor => {return <div className="actor"><h2>{actor.name}</h2>Movies: {actor.movies.join(", ")}<br></br><br></br></div>}))
}

const Actors = () => {
  return (
    <div>
      <h1> Actors Page </h1>
      {renderActors(actors)}
    </div>
  );
};

export default Actors;
