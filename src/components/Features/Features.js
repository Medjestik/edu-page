import React from 'react';
import './Features.css';
import aboutEducation from '../../images/about-education.png';

function Features({ onClickButton }) {
  return (
    <section className="features" id="features">

      <div className="features__container">

      <div className="container">
        <div className="features__flex-container">
          <div className="features__info">
            <h2 className="features__title">Что такое дистанционное обучение?</h2>
            <p className="features__subtitle">Дистанционное обучение – технология организации учебного процесса, применяемая при любой из существующих форм обучения.</p>
            <p className="features__subtitle">Технология, позволяющая получить высшее образование везде, где только есть<span className="features__subtitle_weight_bold"> доступ к интернету </span>и необходимые технические средства, а именно<span className="features__subtitle_weight_bold"> компьютер, веб-камера и микрофон.</span></p>
            <button className="introduction__button features__button" onClick={onClickButton} type="button">Оставить заявку</button>
          </div>
          <img className="features__img" src={aboutEducation} alt="illustration"></img>
        </div>
      </div>

      <div className="wave-features">
          <svg className="wave-svg" viewBox="0 0 500 150" preserveAspectRatio="none">
            <path className="wave-path_color_blue" d="M0.00,49.98 C214.73,14.30 286.39,10.36 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"></path>
          </svg>
      </div>

      </div>

    </section>
  );
}

export default Features;