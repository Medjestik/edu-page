import React from 'react';
import './About.css';
import aboutUniversity from '../../images/about-university.gif';

function About() {
  return (
    <section className="about container" id="features">
      <img className="about__img" src={aboutUniversity} alt="about university"></img>
      <div className="about__info">
        <h2 className="about__title">Институт экономики и финансов РУТ (МИИТ) сегодня</h2>
        <p className="about__subtitle">Институт экономики и финансов РУТ (МИИТ) сегодня
        Российский университет транспорта – <span className="about__subtitle_weight_bold">ведущий национальный транспортный вуз,</span> основанный в 1896 году, являющийся передовым межтранспортным и&nbsp;общетранспортным научно-образовательным центром.</p>
        <p className="about__subtitle">В состав университета входит Институт экономики и финансов, организующий широкое внедрение<span className="about__subtitle_weight_bold"> современных образовательных технологий </span>в социально-экономическое образование всех уровней, разработку и использование методологии и технологии практико-ориентированного обучения в РУТ (МИИТ) и ОАО «РЖД».</p>
      </div>
    </section>
  );
}

export default About;