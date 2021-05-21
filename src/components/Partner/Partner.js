import React from 'react';
import './Partner.css';

function Partner() {
  return (
    <section className="partner">

      <div className="container">
        <h2 className="partner__title">Компании-партнеры нашего университета</h2>
        <ul className="partner__list">
          <li className="partner__item partner__item_type_mintrans"></li>
          <li className="partner__item partner__item_type_rzd"></li>
          <li className="partner__item partner__item_type_rosdornii"></li>
        </ul>
      </div>

    </section>
  );
}

export default Partner;