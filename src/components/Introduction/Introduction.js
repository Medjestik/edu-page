import React from 'react';
import './Introduction.css';
import illustration from '../../images/introduction.gif';

function Introduction() {
  return (
    <section className="introduction container" id="introduction">
      <div className="introduction__container">
        <h1 className="introduction__title">Высшее<span className="introduction__title_type_bolder"> дистанционное </span>образование в ИЭФ РУТ&nbsp;(МИИТ)
        </h1>
        <p className="introduction__subtitle">
          Начни обучаться из любой точки мира<span className="introduction__subtitle_type_bolder"> в удобном режиме. </span> 
        </p>
        <button className="introduction__button">Оставить заявку</button>
      </div>
      <img className="introduction__img" src={illustration} alt="illustration"></img>
    </section>
  );
}

export default Introduction;