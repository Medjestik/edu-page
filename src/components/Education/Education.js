import React from 'react';
import './Education.css';
import education from '../../images/education.png';

function About() {
  return (
    <section className="education" id="education">

      <div className="container">
        <div className="education__container">
          <img className="education__img" src={education} alt="education"></img>
          <div className="education__info">
            <h2 className="education__title">Процесс обучения</h2>
            <p className="education__subtitle">Вы получаете знания и&nbsp;используете единую современную и&nbsp;удобную<span className="education__subtitle_weight_bold"> образовательную платформу. </span>Все лекциии задания хранятся в&nbsp;одном месте.</p>
            <p className="education__subtitle">Записи онлайн-занятий и&nbsp;лекций доступны для&nbsp;студентов в&nbsp;любое время, вы&nbsp;всегда сможете к&nbsp;ним обратиться.</p>
            <p className="education__subtitle">Проверочные работы по итогам каждого семестра: студенты проходят тестирования, а&nbsp;также сдают зачеты и&nbsp;экзамены в&nbsp;режиме вебинара.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;