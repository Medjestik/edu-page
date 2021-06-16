import React from 'react';
import './Discount.css';
import discount from '../../images/discount.png';

function Discount() {

  return (
    <section className="discount" id="discount">
      <div className="discount__container">
        <div className="container">
          <div className="discount__flex-container">
            <div className="discount__info">
              <h3 className="discount__title">Система скидок</h3>
              <p className="discount__subtitle">В&nbsp;нашем университете существует система скидок для&nbsp;поступающих на&nbsp;бакалавриат очно.</p>
            </div>
            <div className="discount__img-container">
              <img className="discount__img" src={discount} alt="request"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;