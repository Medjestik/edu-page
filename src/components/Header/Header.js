import React from 'react';
import './Header.css';
import { Link } from "react-scroll";
import logoColor from '../../images/logo-rut-color.png';
import logoWhite from '../../images/logo-rut-white.png';

function Header({ windowWidth, setWindowWidth }) {

  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (windowWidth > 600) {
        setShowMenu(false);
    }
  // eslint-disable-next-line
}, [windowWidth])

  const navMenu = (
    <>
      <ul className="header__links">
        <li className="header__link"><Link to="about" smooth={true} offset={0} duration= {500}>О нас</Link></li>
        <li className="header__link"><Link to="advantages" smooth={true} offset={0} duration= {1000}>Преимущества</Link></li>
        <li className="header__link"><Link to="programs" smooth={true} offset={0} duration= {1500}>Программы</Link></li>
        <li className="header__link"><Link to="education" smooth={true} offset={0} duration= {2000}>Обучение</Link></li>
      </ul>
      <span className="header__phone">+7(916)333-13-11</span>
      <a className="header__button" href="http://edu.emiit.ru/" target="_blank" rel="noreferrer">Учебный портал</a>
    </>
  )

  const mobileMenu = (
    <div className={`mobile-menu ${showMenu ? 'mobile-menu_type_show' : 'mobile-menu_type_hide'}`}>

      <div className="mobile__wave">
        <svg className="wave-svg" viewBox="0 0 500 150" preserveAspectRatio="none">
          <path className="wave-path_color_light" d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>

      <div className="mobile-menu__container">
        <div className="mobile-menu__top-bar">
          <img className="header__logo" src={logoWhite} alt="logo"></img>
          <button className="mobile-menu__close-button" type="button" onClick={() => setShowMenu(false)}></button>
        </div>
        <div className="mobile-menu__main-bar">
          <ul className="mobile-menu__links">
            <li className="mobile__link"><Link to="about" smooth={true} offset={0} duration= {500} onClick={() => setShowMenu(false)}>О нас</Link></li>
            <li className="mobile__link"><Link to="advantages" smooth={true} offset={0} duration= {1000} onClick={() => setShowMenu(false)}>Преимущества</Link></li>
            <li className="mobile__link"><Link to="programs" smooth={true} offset={0} duration= {1500} onClick={() => setShowMenu(false)}>Программы</Link></li>
            <li className="mobile__link"><Link to="education" smooth={true} offset={0} duration= {2000} onClick={() => setShowMenu(false)}>Обучение</Link></li>
          </ul>
          <a className="mobile__link-button" href="http://edu.emiit.ru/" target="_blank" rel="noreferrer">Учебный портал</a>
          <span className="mobile-menu__info">priem@edu.emiit.ru</span>
          <span className="mobile-menu__info">+7 (916) 333-13-11</span>
          <span className="mobile-menu__info">Москва, Новосущевская&nbsp;22 стр.&nbsp;2, аудитория&nbsp;3213</span>
        </div>
      </div>
    </div>
  )

  
  function getMenu (width) {
    if (width > 1000) { 
      return (
        <nav className="header__nav">
          <img className="header__logo" src={logoColor} alt="logo"></img>
          {navMenu}
        </nav>
      )
    } else {
      return (
        <nav className="header__nav">
          <img className="header__logo" src={logoColor} alt="logo"></img>
          <span className="header__phone">+7(916)333-13-11</span>
          <button className={`header__hamburger-button ${showMenu ? 'header__hamburger-button_type_show' : ''}`} type="button" onClick={() => setShowMenu(true)}></button>
          {mobileMenu}
        </nav>
      )
    }
  }

  return (
    <header className="header" id="main">
      <div className="container">
        {getMenu(windowWidth)}
      </div>
    </header>
  );
}

export default Header;