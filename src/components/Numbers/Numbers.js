import React from 'react';
import './Numbers.css';
import experienceIcon from '../../images/experience-icon.png';
import programsIcon from '../../images/programs-icon.png';
import teacherIcon from '../../images/teacher-icon.png';

function Numbers() {
  return (
    <section className="numbers container">
      <ul className="numbers__container">
        <li className="numbers__item">
          <img className="numbers__img" src={experienceIcon} alt="user"></img>
          <div className="numbers__item-description">
            <span className="numbers__number">11+</span>
            <p className="numbers__caption">лет опыта проведения дистанционного&nbsp;обучения</p>
          </div>
        </li>
        <li className="numbers__item">
        <img className="numbers__img" src={programsIcon} alt="location"></img>
          <div className="numbers__item-description">
            <span className="numbers__number">14+</span>
            <p className="numbers__caption">программ и профилей набора&nbsp;абитуриентов</p>
          </div>
        </li>
        <li className="numbers__item">
        <img className="numbers__img" src={teacherIcon} alt="server"></img>
          <div className="numbers__item-description">
            <span className="numbers__number">200+</span>
            <p className="numbers__caption">тьюторов (преподавателей-&nbsp;практиков)</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Numbers;