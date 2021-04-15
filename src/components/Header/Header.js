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
          <li className="header__link"><Link to="about" smooth={true} offset={0} duration= {500}>О нас</Link></li>
          <li className="header__link"><Link to="advantages" smooth={true} offset={0} duration= {1000}>Преимущества</Link></li>
          <li className="header__link"><Link to="programs" smooth={true} offset={0} duration= {1500}>Программы</Link></li>
          <li className="header__link"><Link to="education" smooth={true} offset={0} duration= {2000}>Обучение</Link></li>
          <li className="header__link"><Link to="footer" smooth={true} offset={0} duration= {2500}>Контакты</Link></li>
        </ul>
        <button className="header__button" type="button">Образовательный портал</button>
      </nav>
    </header>
  );
}

export default Header;