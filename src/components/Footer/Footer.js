import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';

function Footer() {
  
  return (
    <footer className="footer" id="footer">
      <div className="wave">
        <svg className="wave-svg" viewBox="0 0 500 150" preserveAspectRatio="none">
          <path className="wave-path_color_blue" d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>

      <div className="container footer__container">
        <div className="footer__info">
          <img className="footer__logo" src={logo} alt="logo"></img>
          <p className="footer__caption"><span className="footer__caption_font_bold">LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
          <ul className="footer__social">
            <li className="footer__social-link"><img className="footer__social-img" src={facebook} alt="facebook"></img></li>
            <li className="footer__social-link"><img className="footer__social-img" src={twitter} alt="twitter"></img></li>
            <li className="footer__social-link"><img className="footer__social-img" src={instagram} alt="instagram"></img></li>
          </ul>
          <span className="footer__copy">&copy;2021 Все права защищены, ИЭФ РУТ (МИИТ)</span>
        </div>
        <ul className="footer__columns">
          <li className="footer__column">
            <h4 className="footer__column-title">Навигация</h4>
            <ul className="footer__column-links">
              <li className="footer__column-link">О нас</li>
              <li className="footer__column-link">Преимущества</li>
              <li className="footer__column-link">Программы</li>
              <li className="footer__column-link">Обучение</li>
              <li className="footer__column-link">Отзывы</li>
            </ul>
          </li>
          <li className="footer__column">
            <h4 className="footer__column-title">Ресурсы</h4>
            <ul className="footer__column-links">
              <li className="footer__column-link">Институт экономики и финансов</li>
              <li className="footer__column-link">РУТ (МИИТ)</li>
              <li className="footer__column-link">Образовательный портал</li>
            </ul>
          </li>
          <li className="footer__column">
            <h4 className="footer__column-title">Контакты</h4>
            <ul className="footer__column-links">
              <li className="footer__column-link">priem@edu.emiit.ru</li>
              <li className="footer__column-link">+7 (916) 333-13-11</li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;