import React from 'react';
import './Features.css';
import illustration from '../../images/second-illustration.png';

function Features() {
  return (
    <section className="features container" id="features">
      <img className="features__img" src={illustration} alt="illustration"></img>
      <div className="features__info">
        <h2 className="features__title">We Provide Many Features You Can Use</h2>
        <p className="features__subtitle">You can explore the features that we provide with fun and have their own functions each feature.</p>
        <ul className="features__list">
          <li className="features__item">Powerfull online protection.</li>
          <li className="features__item">Internet without borders.</li>
          <li className="features__item">Supercharged VPN</li>
          <li className="features__item">No specific time limits.</li>
        </ul>
      </div>
    </section>
  );
}

export default Features;