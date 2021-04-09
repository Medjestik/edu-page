import React from 'react';
import './Advantages.css';
import diploma from '../../images/advantages/diploma.png';
import discount from '../../images/advantages/discount.png';
import payment from '../../images/advantages/payment.png';
import graph from '../../images/advantages/graph.png';
import credit from '../../images/advantages/credit.png';
import delay from '../../images/advantages/delay.png';

function Advantages() {
  return (
    <section className="advantages" id="price">
      <div className="container">
        <h2 className="advantages__title">Преимущества</h2>
        <p className="advantages__subtitle">при обучение с использованием дистанционных образовательных технологий</p>
        <ul className="advantages__list">
          <li className="advantages__item">
            <img className="advantages__item-img" src={diploma} alt="free"></img>
            <h3 className="advantages__item-title">Государственный диплом ведущего транспортного вуза</h3>
          </li>
          <li className="advantages__item">
            <img className="advantages__item-img" src={discount} alt="free"></img>
            <h3 className="advantages__item-title">Дешевле на 30% при&nbsp;очно-заочной форме&nbsp;обучения</h3>
          </li>
          <li className="advantages__item">
            <img className="advantages__item-img" src={payment} alt="free"></img>
            <h3 className="advantages__item-title">Рассрочка оплаты обучения с&nbsp;графиком платежей</h3>
          </li>
          <li className="advantages__item">
            <img className="advantages__item-img" src={graph} alt="free"></img>
            <h3 className="advantages__item-title">Гибкий график обучения без&nbsp;отрыва от&nbsp;производства</h3>
          </li>
          <li className="advantages__item">
            <img className="advantages__item-img" src={credit} alt="free"></img>
            <h3 className="advantages__item-title">Образовательный кредит&nbsp;с&nbsp;льготным периодом</h3>
          </li>
          <li className="advantages__item">
            <img className="advantages__item-img" src={delay} alt="free"></img>
            <h3 className="advantages__item-title">Отсрочка от воинской службы на&nbsp;весь период обучения</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Advantages;