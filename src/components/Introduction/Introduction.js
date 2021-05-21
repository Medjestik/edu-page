import React from 'react';
import './Introduction.css';
import illustration from '../../images/introduction.gif';

function Introduction({ onClickButton }) {
  return (
    <section className="introduction" id="introduction">
      <div className="container">
        <div className="introduction__container">
          <div className="introduction__description">
            <h1 className="introduction__title">Высшее&nbsp;образование в&nbsp;ИЭФ&nbsp;РУТ&nbsp;(МИИТ)<span className="introduction__title_type_bolder"> дистанционно </span>
            </h1>
            <p className="introduction__subtitle">
              Начни обучаться из любой точки мира<span className="introduction__subtitle_type_bolder"> в удобном режиме. </span> 
            </p>
            <button className="introduction__button" onClick={onClickButton} type="button">Оставить заявку</button>
          </div>
          <img className="introduction__img" src={illustration} alt="illustration"></img>
          </div>
      </div>
    </section>
  );
}

export default Introduction;