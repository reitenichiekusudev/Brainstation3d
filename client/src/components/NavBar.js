import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/kickfluencer_logo.svg';
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
                                <Link to="/inventory">
                                    <li className="nav__links-login" >Login</li>
                                </Link>
                                <Link to="/locations">
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
