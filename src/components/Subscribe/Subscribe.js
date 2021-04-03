import React from 'react';
import './Subscribe.css';

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="container subscribe__container">
        <div className="subscribe__info">
          <h3 className="subscribe__title">Subscribe Now for Get Special Features!</h3>
          <p className="subscribe__subtitle">Let's subscribe with us and find the fun.</p>
        </div>
        <button className="subscribe__button" type="button">Subscribe Now</button>
       </div>
    </section>
  );
}

export default Subscribe;