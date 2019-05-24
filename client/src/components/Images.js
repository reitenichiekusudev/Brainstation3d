import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img1 from '../images/isaac-smith-1182056-unsplash@3x.jpg';
import img2 from '../images/maddi-bazzocco-1178337-unsplash@3x.jpg';
import img3 from '../images/thought-catalog-214785-unsplash@3x.jpg';
import '../styles/images.scss';
import img4 from '../images/Avg backers (1).png';
import img5 from '../images/Avgraised (1).png';
import img6 from '../images/most successful sub category.png';
import img7 from '../images/fashion success proportion.png';


export class Images extends Component {
    render() {
        return (
            <div>
                <div className="images__wrapper">
                    <div className="images__image-container">
                        <img src={img1} alt="img1" />
                        <p>
                            See trends and success rate
                        </p>
                    </div>
                    <div className="images__image-container">
                        <img src={img2} alt="img2" />
                        <p>
                            Set realistic goals
                        </p>
                    </div>
                    <div className="images__image-container">
                        <img src={img3} alt="img3" />
                        <p>
                            Choose an achievable timeline
                        </p>
                    </div>
                </div>
                <div className="charts">
                    <img src={img7} alt="img3" />
                    <img src={img4} alt="img3" />
                    <img src={img5} alt="img3" />
                    <img src={img6} alt="img3" />
                </div>
            </div>
        )
    }
}

export default Images;
