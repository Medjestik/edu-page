import React from 'react';
import './Numbers.css';
import user from '../../images/user.png';
import location from '../../images/location.png';
import server from '../../images/server.png';

function Numbers() {
  return (
    <section className="numbers container">
      <ul className="numbers__container">
        <li className="numbers__item">
          <img className="numbers__img" src={user} alt="user"></img>
          <div className="numbers__item-description">
            <span className="numbers__number">90+</span>
            <p className="numbers__caption">Users</p>
          </div>
        </li>
        <li className="numbers__item">
        <img className="numbers__img" src={location} alt="location"></img>
          <div className="numbers__item-description">
            <span className="numbers__number">30+</span>
            <p className="numbers__caption">Locations</p>
          </div>
        </li>
        <li className="numbers__item">
        <img className="numbers__img" src={server} alt="server"></img>
          <div className="numbers__item-description">
            <span className="numbers__number">50+</span>
            <p className="numbers__caption">Servers</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Numbers;