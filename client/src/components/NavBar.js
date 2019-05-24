import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/kickfleuncer_logo.png";
import "../styles/navbar.scss";

export class NavBar extends Component {
  state = {
    current: true
  };

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
                  <li className="nav__links-trending">Trending</li>
                </Link>
                <Link to="/">
                  <li className="nav__links-pricing">Pricing</li>
                </Link>
                <Link to="/">
                  <li className="nav__links-about">About</li>
                </Link>
                <Link to="/">
                  <li className="nav__links-learn">Learn</li>
                </Link>
                <Link to="/">
                  <li className="nav__links-login">Login</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
