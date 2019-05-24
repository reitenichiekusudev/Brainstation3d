import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Carousel from "./components/hero.js";
import Datadisplay from "./components/datadisplays.js";
import "./styles/_master.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Carousel />
	<Datadisplay />
      </BrowserRouter>
    </div>
  );
}

export default App;
