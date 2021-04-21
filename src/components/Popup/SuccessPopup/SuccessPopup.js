import React from 'react';
import send from '../../../images/send.png';

function SuccessPopup() {

  return (
    <figure className="popup__description">
      <img className="popup__img" src={send} alt="contact us"></img>
      <figcaption className="popup__figcaption">
        <h2 className="popup__title">Спасибо, ваша заявка успешно принята!</h2>
        <p className="popup__caption">В указанное время для консультации с Вами свяжется наш специалист.</p>
      </figcaption>
    </figure>
    )
}

export default SuccessPopup;