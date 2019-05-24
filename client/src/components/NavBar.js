import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/kickfleuncer_logo.png';
import '../styles/navbar.scss';

export class NavBar extends Component {
    state = {
        current: true
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav">
                        <div className="nav__wrapper">
                            <Link to="/inventory" className="nav__logo-link">
                                <img src={logo} alt="BandSite logo" className="nav__logo" />
                            </Link>
                            <ul className="nav__links">
                                <Link to="/">
                                    <li className="nav__links-login" >Login</li>
                                </Link>
                                <Link to="/">
                                    <button>Get Started</button>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
