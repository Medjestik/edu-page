import React from 'react';
import './Subscribe.css';

function Subscribe({ onClickButton }) {
  return (
    <section className="subscribe">
      <div className="container subscribe__container">
        <div className="subscribe__info">
          <h3 className="subscribe__title">Сделайте первый шаг к&nbsp;высшему образованию!</h3>
          <p className="subscribe__subtitle">Прием документов на обучение с 20 июня.</p>
        </div>
        <button className="subscribe__button" type="button" onClick={onClickButton}>Подать заявку</button>
       </div>
    </section>
  );
}

export default Subscribe;