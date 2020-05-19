import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
       <h1>Directors Page</h1>
      {directors.map(director=> <div className="director">{director.name}
      <ul>
                  {director.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
      </div>)}
      {/*{code here}*/}
    </div>
  );
}

export default Directors
