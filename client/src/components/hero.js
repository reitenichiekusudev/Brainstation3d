import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../styles/hero.scss';

export default class HeroCarousel extends Component {
	render(){
		return(
			<div>
				<Carousel showThumbs={false}>
					<div>
						<img src={require("../images/hero-image@3x.jpg")} />
					</div>
					<div>
						<img src={require("../images/hero-image@3x.jpg")} />
					</div>
					<div>
						<img src={require("../images/hero-image@3x.jpg")} />
					</div>
				</Carousel>
				<h1 className="Expand-your-brand-gl">
					Expand 
					your brand 
					globally
				</h1>
				<button className="hero__button">Get Started</button>
			</div>
		);
	}
}
