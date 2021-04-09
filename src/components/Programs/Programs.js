import React from 'react';
import './Programs.css';

function Programs() {
  return (
    <section className="programs container">
      <h2 className="programs__title">Программы</h2>
      <ul className="programs__container">
        <li className="programs__item">
          <div className="programs__item-top">
            <div className="programs__item-description">
              <span className="programs__item-tag">Экономика</span>
              <p className="programs__item-name">Экономика предприятий и&nbsp;организаций</p>
            </div>
            <div className="programs__img"></div>
          </div>
          <div className="programs__item-bottom">
            <span className="programs__item-form">Бакалавриат</span>
            <span className="programs__item-time">4 года</span>
          </div>
        </li>

        <li className="programs__item">
          <div className="programs__item-top">
            <div className="programs__item-description">
              <span className="programs__item-tag">Бизнес-информатика</span>
              <p className="programs__item-name">Информационные системы в&nbsp;бизнесе</p>
            </div>
            <div className="programs__img_type_info"></div>
          </div>
          <div className="programs__item-bottom">
            <span className="programs__item-form">Бакалавриат</span>
            <span className="programs__item-time">4 года</span>
          </div>
        </li>
       
      </ul>
    </section>
  );
}

export default Programs;