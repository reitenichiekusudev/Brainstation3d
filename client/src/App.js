import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Carousel from './components/hero.js';
import Datadisplay from "./components/datadisplays.js";
import Images from './components/Images.js';
import './styles/_master.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Carousel />
          <Images />
	{/* <Datadisplay /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
