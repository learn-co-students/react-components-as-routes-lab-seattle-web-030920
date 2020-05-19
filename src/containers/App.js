import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Directors from '../components/Directors';
import Movies from '../components/Movies'
import Actors from '../components/Actors'
import Home from '../components/Home'

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/" exact component={Home}/>
        <Route path="/actors"  component={Actors}/>
        <Route path="/directors"  component={Directors}/>
        <Route path="/movies"  component={ Movies }/>
      </div>
    </Router>
  );
};

export default App
