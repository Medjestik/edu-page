import React from 'react';
import './Introduction.css';
import illustration from '../../images/first-illustration.png';

function Introduction() {
  return (
    <section className="introduction container" id="introduction">
      <div className="introduction__container">
        <h1 className="introduction__title">Want anything to be easy with <span className="introduction__title_type_bolder">LaslesVPN.</span></h1>
        <p className="introduction__subtitle">
          Provide a network for all your needs with ease and fun using 
          <span className="introduction__subtitle_type_bolder"> LaslesVPN </span> 
          discover interesting features from us.
        </p>
        <button className="introduction__button">Get Started</button>
      </div>
      <img className="introduction__img" src={illustration} alt="illustration"></img>
    </section>
  );
}

export default Introduction;