import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Carousel from './components/hero.js';
import './styles/_master.scss';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
          <NavBar />
	  <Carousel />
    </BrowserRouter>

    </div>
  );
}

export default App;
