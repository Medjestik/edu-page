import React from 'react';
import './Request.css';
import InputMask from 'react-input-mask';
import request from '../../images/request.png';

function Request({ sendRequest, loadingRequest }) {

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [blockSubmitButton, setBlockSubmitButton] = React.useState(true);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  function handleChangeComment(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendRequest({ fullname: name, phone: phone, text: comment, })
    window.ym(65286603,'reachGoal','otpravil_formu_podval');
    window.gtag('event', 'otpravil_formu', {
     'event_category': 'otpravil_formu',
    });
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13 && blockSubmitButton) {
        event.preventDefault();
    }
  }  

  React.useEffect(() => {
    if(name.length > 2) {
      if (phone.replace(/-|_/g, "").length > 15) {
        setBlockSubmitButton(false);
      } else {
        setBlockSubmitButton(true);
      }
    } 
    else {
      setBlockSubmitButton(true);
    }
  }, [name, phone]);

  return (
    <section className="request" id="about">
      <div className="request__container">
        <div className="container">
          <div className="request__flex-container">
            <div className="request__img-container">
              <img className="request__img" src={request} alt="request"></img>
            </div>
            <form className="request__form" name="request-form" action="#" noValidate onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                <h3 className="request__form-title">Оставьте заявку, заполнив поля формы!</h3>
                <input 
                  className="request__form-input"
                  placeholder="Имя"
                  type="text"
                  id="name-popup"
                  name="name"
                  value={name}
                  onChange={handleChangeName}
                  minLength="2"
                  maxLength="40"
                  required
                  autoComplete="off"
                ></input>
                <InputMask mask="+7 (999) 999-99-99" 
                  className="request__form-input"
                  placeholder="Номер телефона"
                  type="tel"
                  id="telephone-popup"
                  name="telephone"
                  value={phone}
                  onChange={handleChangePhone}
                  required
                  autoComplete="off"
                />
                <input 
                className="request__form-input"
                placeholder="Время для звонка или комментарий"
                type="text"
                id="comment-popup"
                name="comment"
                value={comment}
                onChange={handleChangeComment}
                minLength="2"
                autoComplete="off"
              ></input>
                <button 
                className={`popup__submit-button request__form-submit ${blockSubmitButton ? "popup__submit-button_type_block" : ""} ${loadingRequest ? "popup__submit-button_type_loading" : ""}`} 
                type="submit"
                >{loadingRequest ? "Отправка.." : "Отправить заявку"}
                </button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Request;