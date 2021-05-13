import React from 'react';
import './Partner.css';
import netflix from '../../images/netflix.png';
import reddit from '../../images/reddit.png';
import amazon from '../../images/amazon.png';
import spotify from '../../images/spotify.png';

function Partner() {
  return (
    <section className="partner">

      <div className="container">
        <ul className="partner__list">
          <li className="partner__item"><img className="partner__img" src={netflix} alt="netflix"></img></li>
          <li className="partner__item"><img className="partner__img" src={reddit} alt="reddit"></img></li>
          <li className="partner__item"><img className="partner__img" src={amazon} alt="amazon"></img></li>
          <li className="partner__item"><img className="partner__img" src={spotify} alt="spotify"></img></li>
        </ul>

      </div>
    </section>
  );
}

export default Partner;