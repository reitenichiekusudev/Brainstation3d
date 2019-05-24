import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class HeroCarousel extends Component {
	render(){
		return(
			<Carousel showThumbs={false} showStatus={false}>
			                <div>
			                    <img src={require("../assets/jakob-owens-518866-unsplash.jpg")} />
						<p >Legend 1</p>
			                </div>
			                <div>
			                    <img src={require("../assets/jakob-owens-518866-unsplash.jpg")} />
			                </div>
			                <div>
			                    <img src={require("../assets/jakob-owens-518866-unsplash.jpg")} />
			                </div>
		    </Carousel>
		);
	}
}
