import React from 'react';
import error from '../../../images/error.png';

function SuccessPopup() {

  return (
    <figure className="popup__description">
      <img className="popup__img" src={error} alt="contact us"></img>
      <figcaption className="popup__figcaption">
        <h2 className="popup__title">К сожалению, при&nbsp;отправке заявки произошла ошибка!</h2>
        <p className="popup__caption">Пожалуйста свяжитесь с нашей службой поддержки или попробуйте отправить заявку позднее.</p>
        <div className="popup__contacts">
          <h4 className="popup__contacts__title">Наши контакты</h4>
          <div className="popup__items">
            <span className="popup__contacts__item popup__contacts__item_type_email">priem@edu.emiit.ru</span>
            <span className="popup__contacts__item popup__contacts__item_type_phone">+7 (916) 333-13-11</span>
          </div>
        </div>
      </figcaption>
    </figure>
    )
}

export default SuccessPopup;