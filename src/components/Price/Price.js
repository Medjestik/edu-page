import React from 'react';
import './Price.css';
import free from '../../images/free.png';
import standard from '../../images/standard.png';
import premium from '../../images/premium.png';

function Price() {
  return (
    <section className="price" id="price">
      <div className="container">
        <h2 className="price__title">Choose Your Plan</h2>
        <p className="price__subtitle">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        <ul className="price__list">
          <li className="price__item">
            <img className="price__item-img" src={free} alt="free"></img>
            <h3 className="price__item-title">Free Plan</h3>
            <ul className="price__item-services">
              <li className="price__item-service">Unlimited Bandwitch</li>
              <li className="price__item-service">Encrypted Connection</li>
              <li className="price__item-service">No Traffic Logs</li>
              <li className="price__item-service">Works on All Devices</li>
            </ul>
            <p className="price__item-cost">Free</p>
            <button className="price__item-button">Select</button>
          </li>
          <li className="price__item">
            <img className="price__item-img" src={standard} alt="standard"></img>
            <h3 className="price__item-title">Standard Plan</h3>
            <ul className="price__item-services">
              <li className="price__item-service">Unlimited Bandwitch</li>
              <li className="price__item-service">Encrypted Connection</li>
              <li className="price__item-service">Yes Traffic Logs</li>
              <li className="price__item-service">Works on All Devices</li>
              <li className="price__item-service">Connect Anyware</li>
            </ul>
            <p className="price__item-cost">$9 <span className="price__item-cost_font_subtitle">/ mo</span></p>
            <button className="price__item-button">Select</button>
          </li>
          <li className="price__item">
            <img className="price__item-img" src={premium} alt="premium"></img>
            <h3 className="price__item-title">Premium Plan</h3>
            <ul className="price__item-services">
              <li className="price__item-service">Unlimited Bandwitch</li>
              <li className="price__item-service">Encrypted Connection</li>
              <li className="price__item-service">Yes Traffic Logs</li>
              <li className="price__item-service">Works on All Devices</li>
              <li className="price__item-service">Connect Anyware</li>
              <li className="price__item-service">Get New Features</li>
            </ul>
            <p className="price__item-cost">$12 <span className="price__item-cost_font_subtitle">/ mo</span></p>
            <button className="price__item-button">Select</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Price;