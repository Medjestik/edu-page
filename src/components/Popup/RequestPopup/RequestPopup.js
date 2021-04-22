import React from 'react';
import contact from '../../../images/contact.png';
import InputMask from 'react-input-mask';

function RequestPopup({ isOpen, sendRequest, loadingRequest, }) {

  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [blockSubmitButton, setBlockSubmitButton] = React.useState(true);
 
  function handleSubmit(e) {
    e.preventDefault();
    sendRequest({ fullname: name + ' ' + surname, phone: phone, text: comment, })
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeSurname(e) {
    setSurname(e.target.value);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  function handleChangeComment(e) {
    setComment(e.target.value);
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13 && blockSubmitButton) {
        event.preventDefault();
    }
  }  

  React.useEffect(() => {
    setName('');
    setSurname('');
    setPhone('');
    setComment('');
  }, [isOpen]);

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
    <>
      <figure className="popup__description">
        <img className="popup__img" src={contact} alt="contact us"></img>
        <figcaption className="popup__figcaption">
          <h2 className="popup__title">Оставьте заявку, заполнив поля формы!</h2>
          <p className="popup__caption">Прием документов на обучение с&nbsp;20&nbsp;июня.</p>
          <p className="popup__caption">Укажите удобное для Вас время, чтобы специалист приемной комиссии с вами связался.</p>
        </figcaption>
      </figure>
      <form className="popup__form" name="request-form" action="#" noValidate onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <div className="popup__form-line">
          <input 
            className="popup__input"
            placeholder="Имя"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChangeName}
            minLength="2"
            maxLength="40"
            required
            autoComplete="off"
          >
          </input>
          <span className={`popup__form-line-separator ${name.length < 2 ? "popup__form-line-separator_type_error" : ""}`}></span>
          <input 
            className="popup__input"
            placeholder="Фамилия"
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={handleChangeSurname}
            minLength="2"
            maxLength="40"
            autoComplete="off"
          >
          </input>
        </div>
        <div className="popup__form-line">
          <InputMask mask="+7 (999) 999-99-99" 
            className="popup__input"
            placeholder="Номер телефона"
            type="tel"
            id="telephone"
            name="telephone"
            value={phone}
            onChange={handleChangePhone}
            required
            autoComplete="off"
          />
          <span className={`popup__form-line-separator ${phone.replace(/-|_/g, "").length < 16 ? "popup__form-line-separator_type_error" : ""}`}></span>
          <input 
            className="popup__input"
            placeholder="Время для звонка или комментарий"
            type="text"
            id="comment"
            name="comment"
            value={comment}
            onChange={handleChangeComment}
            minLength="2"
            autoComplete="off"
          >
          </input>
        </div>
        <button 
        className={`popup__submit-button ${blockSubmitButton ? "popup__submit-button_type_block" : ""} ${loadingRequest ? "popup__submit-button_type_loading" : ""}`} 
        type="submit"
        >{loadingRequest ? "Отправка.." : "Отправить заявку"}
        </button>
      </form>
    </>
  )
}

export default RequestPopup;