import React from 'react';
import './Footer.css';
import { Link } from "react-scroll";
import logo from '../../images/logo.png';
import vk from '../../images/vk.png';
import youtube from '../../images/youtube.png';
import instagram from '../../images/instagram.png';

function Footer() {
  
  return (
    <footer className="footer" id="footer">
      <div className="wave footer__wave">
        <svg className="wave-svg" viewBox="0 0 500 150" preserveAspectRatio="none">
          <path className="wave-path_color_blue" d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>

      <div className="container">
        <div className="footer__container">
          <div className="footer__info">
            <img className="footer__logo" src={logo} alt="logo"></img>
            <p className="footer__caption"><span className="footer__caption_font_bold">Подпишитесь</span> на&nbsp;нас в&nbsp;социальных сетях!</p>
            <ul className="footer__social">
              <li className="footer__social-link"><a href="https://vk.com/ief_rut" target="_blank" rel="noreferrer"><img className="footer__social-img" src={vk} alt="vkontacte"></img></a></li>
              <li className="footer__social-link"><a href="http://www.youtube.com/user/miitief" target="_blank" rel="noreferrer"><img className="footer__social-img" src={youtube} alt="youtube"></img></a></li>
              <li className="footer__social-link"><a href="https://www.instagram.com/ief_rut/?igshid=1bxmewdtjj3xi" target="_blank" rel="noreferrer"><img className="footer__social-img" src={instagram} alt="instagram"></img></a></li>
            </ul>
            <span className="footer__copy">&copy;2021 Все права защищены, ИЭФ&nbsp;РУТ&nbsp;(МИИТ)</span>
          </div>
          <ul className="footer__columns">
            <li className="footer__column">
              <h4 className="footer__column-title">Навигация</h4>
              <ul className="footer__column-links">
                <li className="footer__column-item"><Link className="footer__column-link" to="main" smooth={true} offset={0} duration= {2500}>Главная</Link></li>
                <li className="footer__column-item"><Link className="footer__column-link" to="about" smooth={true} offset={0} duration= {2000}>О нас</Link></li>
                <li className="footer__column-item"><Link className="footer__column-link" to="advantages" smooth={true} offset={0} duration= {1500}>Преимущества</Link></li>
                <li className="footer__column-item"><Link className="footer__column-link" to="programs" smooth={true} offset={0} duration= {1000}>Программы</Link></li>
                <li className="footer__column-item"><Link className="footer__column-link" to="testimonials" smooth={true} offset={0} duration= {500}>Отзывы</Link></li>
              </ul>
            </li>
            <li className="footer__column">
              <h4 className="footer__column-title">Ресурсы</h4>
              <ul className="footer__column-links">
                <li className="footer__column-item"><a className="footer__column-link" href="https://miit-ief.ru/" target="_blank" rel="noreferrer">Институт экономики и финансов</a></li>
                <li className="footer__column-item"><a className="footer__column-link" href="https://www.miit.ru/" target="_blank" rel="noreferrer">РУТ (МИИТ)</a></li>
                <li className="footer__column-item"><a className="footer__column-link" href="http://edu.emiit.ru/" target="_blank" rel="noreferrer">Образовательный портал</a></li>
              </ul>
            </li>
            <li className="footer__column">
              <h4 className="footer__column-title">Контакты</h4>
              <ul className="footer__column-links">
                <li className="footer__column-item">priem@edu.emiit.ru</li>
                <li className="footer__column-item">+7 (916) 333-13-11</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;