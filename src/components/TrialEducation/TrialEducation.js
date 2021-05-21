import React from 'react';
import './TrialEducation.css';
import trial from '../../images/trial-education.png';
import first from '../../images/trial-courses/first.png';
import second from '../../images/trial-courses/second.png';

function About() {
  return (
    <section className="trial" id="trial">

      <div className="container">
        <div className="trial__container">
          <div className="trial__info">
            <h2 className="trial__title">Примеры online-лекций</h2>
            <p className="trial__subtitle">Вы можете ознакомиться с&nbsp;примерами методических материалов, используемых в&nbsp;обучении.</p>
            <ul className="trial__course">
              <li className="trial__course-item">
                <img className="trial__course-item__img" src={first} alt="иконка программы"></img>
                <div className="trial__course-item__info">
                  <a className="trial__course-item__name" href="https://edu.emiit.ru/emiit/courses/competence/index.html" target="_blank" rel="noreferrer">Компетенции HR менеджера</a>
                  <span className="trial__course-item__caption">Магистерская программа &laquo;Стратегическое управление персоналом&raquo;</span>
                </div>
              </li>
              <li className="trial__course-item">
                <img className="trial__course-item__img" src={second} alt="иконка программы"></img>
                <div className="trial__course-item__info">
                  <a className="trial__course-item__name" href="https://edu.emiit.ru/emiit/courses/accounting/index.html" target="_blank" rel="noreferrer">Учет на&nbsp;забалансовых счетах</a>
                  <span className="trial__course-item__caption">Профиль обучения &laquo;Экономика предприятий и&nbsp;организаций&raquo;</span>
                </div>
              </li>
            </ul>
            
          </div>
          <img className="trial__img" src={trial} alt="education"></img>
        </div>
      </div>

    </section>
  );
}

export default About;