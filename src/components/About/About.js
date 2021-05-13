import React from 'react';
import './About.css';
import aboutUniversity from '../../images/about.png';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="wave-about">
          <svg className="wave-svg" viewBox="0 0 500 150" preserveAspectRatio="none">
            <path className="wave-path_color_blue" d="M0.00,49.98 C152.64,97.20 318.56,91.28 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
          </svg>
        </div>
        
        <div className="container">
          <div className="about__flex-container">
            <div className="about__img-container">
              <img className="about__img" src={aboutUniversity} alt="about university"></img>
            </div>
            <div className="about__info">
              <h2 className="about__title">Институт экономики и финансов РУТ (МИИТ) сегодня</h2>
              <p className="about__subtitle">Российский университет транспорта – <span className="about__subtitle_weight_bold">ведущий национальный транспортный вуз,</span> основанный в&nbsp;1896 году, являющийся передовым межтранспортным и&nbsp;общетранспортным научно-образовательным центром.</p>
              <p className="about__subtitle">В состав университета входит Институт экономики и&nbsp;финансов, организующий широкое внедрение<span className="about__subtitle_weight_bold"> современных образовательных технологий </span>в&nbsp;социально-экономическое образование всех уровней, разработку и&nbsp;использование методологии и&nbsp;технологии практико-ориентированного обучения в&nbsp;РУТ (МИИТ) и&nbsp;ОАО «РЖД».</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;