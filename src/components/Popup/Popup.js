import React from 'react';
import './Popup.css';
import contact from '../../images/contact.png';
import send from '../../images/send.png';
import InputMask from 'react-input-mask';

function Popup({ isOpen, onClose }) {

  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [sendApplication, setSendApplication] = React.useState(false);
  const [blockSubmitButton, setBlockSubmitButton] = React.useState(true);
 
  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      name: name,
      surname: surname,
      phone: phone,
      comment: comment,
    });
    setSendApplication(true);
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
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={onClose} type="button" />
        { !sendApplication ?
          <>
            <figure className="popup__description">
              <img className="popup__img" src={contact} alt="contact us"></img>
              <figcaption className="popup__figcaption">
                <h2 className="popup__title">Оставьте заявку, заполнив поля формы!</h2>
                <p className="popup__caption">Прием документов на обучение с&nbsp;20&nbsp;июня.</p>
                <p className="popup__caption">Укажите удобное для Вас время, чтобы специалист приемной комиссии с вами связался.</p>
              </figcaption>
          </figure>
          <form className="popup__form" name="request-form" action="#" noValidate onSubmit={handleSubmit}>
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
                required
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
                required
                autoComplete="off"
              >
              </input>
            </div>
            <button className={`popup__submit-button ${blockSubmitButton ? "popup__submit-button_type_block" : ""}`} type="submit">Отправить заявку</button>
          </form>
        </>
        :
        <>
          <figure className="popup__description">
            <img className="popup__img" src={send} alt="contact us"></img>
            <figcaption className="popup__figcaption">
              <h2 className="popup__title">Спасибо, ваша заявка успешно принята!</h2>
              <p className="popup__caption">В указанное время для консультации с Вами свяжется наш специалист.</p>
            </figcaption>
          </figure>
        </>
        }
        
      </div>
    </section>
  )
}

export default Popup;