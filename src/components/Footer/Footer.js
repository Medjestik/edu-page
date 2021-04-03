import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';

function Footer() {
  
  return (
    <footer className="footer" id="footer">
      <div className="container footer__container">
        <div className="footer__info">
          <img className="footer__logo" src={logo} alt="logo"></img>
          <p className="footer__caption"><span className="footer__caption_font_bold">LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
          <ul className="footer__social">
            <li className="footer__social-link"><img className="footer__social-img" src={facebook} alt="facebook"></img></li>
            <li className="footer__social-link"><img className="footer__social-img" src={twitter} alt="twitter"></img></li>
            <li className="footer__social-link"><img className="footer__social-img" src={instagram} alt="instagram"></img></li>
          </ul>
          <span className="footer__copy">&copy;2020LaslesVPN</span>
        </div>
        <ul className="footer__columns">
          <li className="footer__column">
            <h4 className="footer__column-title">Product</h4>
            <ul className="footer__column-links">
              <li className="footer__column-link">Download</li>
              <li className="footer__column-link">Pricing</li>
              <li className="footer__column-link">Locations</li>
              <li className="footer__column-link">Server</li>
              <li className="footer__column-link">Countries</li>
              <li className="footer__column-link">Blog</li>
            </ul>
          </li>
          <li className="footer__column">
            <h4 className="footer__column-title">Engage</h4>
            <ul className="footer__column-links">
              <li className="footer__column-link">LaslesVPN ?</li>
              <li className="footer__column-link">FAQ</li>
              <li className="footer__column-link">Tutorials</li>
              <li className="footer__column-link">About Us</li>
              <li className="footer__column-link">Privacy Policy</li>
              <li className="footer__column-link">Terms of Service</li>
            </ul>
          </li>
          <li className="footer__column">
            <h4 className="footer__column-title">Earn Money</h4>
            <ul className="footer__column-links">
              <li className="footer__column-link">Affiliate</li>
              <li className="footer__column-link">Become Partner</li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;