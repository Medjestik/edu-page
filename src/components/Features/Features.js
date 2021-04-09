import React from 'react';
import './Features.css';
import aboutEducation from '../../images/about-education.gif';

function Features() {
  return (
    <section className="features container" id="features">
      <div className="features__info">
        <h2 className="features__title">Что такое дистанционное обучение?</h2>
        <p className="features__subtitle">Дистанционное обучение – технология организации учебного процесса, применяемая при любой из существующих форм обучения.</p>
        <p className="features__subtitle">Технология, позволяющая получить высшее образование везде, где только есть<span className="features__subtitle_weight_bold"> доступ к интернету </span>и необходимые технические средства, а именно<span className="features__subtitle_weight_bold"> компьютер, веб-камера и микрофон.</span></p>
        <button className="introduction__button">Оставить заявку</button>
      </div>
      <img className="features__img" src={aboutEducation} alt="illustration"></img>
    </section>
  );
}

export default Features;