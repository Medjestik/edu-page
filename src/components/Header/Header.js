import React from 'react';
import './Header.css';
import { Link } from "react-scroll";
import logo from '../../images/logo.png';

function Header() {
  return (
    <header className="header container">
      <nav className="header__nav">
        <img className="header__logo" src={logo} alt="logo"></img>
        <ul className="header__links">
          <li className="header__link"><Link to="introduction" smooth={true} offset={0} duration= {500}>About</Link></li>
          <li className="header__link"><Link to="features" smooth={true} offset={0} duration= {500}>Features</Link></li>
          <li className="header__link"><Link to="price" smooth={true} offset={0} duration= {500}>Pricing</Link></li>
          <li className="header__link"><Link to="testimonials" smooth={true} offset={0} duration= {500}>Testimonials</Link></li>
          <li className="header__link"><Link to="footer" smooth={true} offset={0} duration= {500}>Help</Link></li>
        </ul>
        <button className="header__button" type="button">Sign Up</button>
      </nav>
    </header>
  );
}

export default Header;