import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor,index)=>(
        <div key={index}>
          <h3>Name: {actor.name}</h3>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((movie,index)=>(
              <div key={index}>
                <li>{movie}</li>
              </div>
            ))}
            </ul>        
          </div>
      ))}
    </div>
  );
};

export default Actors;
