import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class HeroCarousel extends Component {
	render(){
		return(
			<Carousel showThumbs={false}>
			                <div>
			                    <img src={require("../images/hero-image@3x.jpg")} />
			                    <p className="legend">Legend 1</p>
			                </div>
			                <div>
			                    <img src={require("../images/hero-image@3x.jpg")} />
			                    <p className="legend">Legend 2</p>
			                </div>
			                <div>
			                    <img src={require("../images/hero-image@3x.jpg")} />
			                    <p className="legend">Legend 3</p>
			                </div>
		    </Carousel>
		);
	}
}
