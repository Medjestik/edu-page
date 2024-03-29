import React from 'react';
import './Detail.css';
import InputMask from 'react-input-mask';
import Accordion from '../Accordion/Accordion.js';

const directionOfProgram = (type) => {
  if (type === 'economic') {
    return 'Экономика'
  }
  if (type === 'inform') {
    return 'Бизнес-информатика'
  }
  if (type === 'management') {
    return 'Менеджмент'
  }
  if (type === 'personal') {
    return 'Управление персоналом'
  }
  return 'Не определено'
}

const countDiscount = (level, form) => {
  if (level === "bak" && form === "o") {
    return (
      <div className="detail__discount">
        <p className="detail__discount-description"><span className="detail__discount-description_weight_bold">Скидка на&nbsp;обучение:</span> в&nbsp;нашем университете предоставляется скидка на&nbsp;весь период обучения для&nbsp;абитуриентов поступающих на&nbsp;бакалавриат очной формы обучения. Скидка зависит от&nbsp;среднего балла по&nbsp;ЕГЭ.</p>
        <ul className="detail__discount-list">
          <li className="detail__discount-item">
            <span className="detail__discount-percent">-15%</span>
            <p className="detail__discount-text">для&nbsp;абитуриентов со&nbsp;средним баллом от&nbsp;65 баллов до&nbsp;70 баллов</p>
          </li>
          <li className="detail__discount-item">
            <span className="detail__discount-percent">-20%</span>
            <p className="detail__discount-text">для&nbsp;абитуриентов со&nbsp;средним баллом от&nbsp;70 баллов до&nbsp;75 баллов</p>
          </li>
          <li className="detail__discount-item">
            <span className="detail__discount-percent">-25%</span>
            <p className="detail__discount-text">для&nbsp;абитуриентов со&nbsp;средним баллом от&nbsp;75 баллов и&nbsp;выше</p>
          </li>
        </ul>
      </div>
    )
  }
}

const analyticsOfProgram = (type) => {
  if (type === 'economic') {
    return window.ym(65286603,'reachGoal','otpravil_formu_ekomonika');
  }
  if (type === 'inform') {
    return window.ym(65286603,'reachGoal','otpravil_formu_biznes');
  }
  if (type === 'management') {
    return window.ym(65286603,'reachGoal','otpravil_formu_menedzment');
  }
  if (type === 'personal') {
    return window.ym(65286603,'reachGoal','otpravil_formu_upr_personal');
  }
  return false;
}

const levelOfStudy = (level) => {
  if (level === 'bak') {
    return 'Бакалавриат'
  }
  if (level === 'mag') {
    return 'Магистратура'
  }
  return 'Не определено'
}

const timeOfStudy = (program) => {
  if (program.level === 'bak') {
    if (program.form === 'oz') {
      return '5 лет';
    }
    return '4 года';
  }
  if (program.level === 'mag') {
    if (program.form === 'oz') {
      return '2 года и 3 месяца';
    }
    return '2 года';
  } 
  return 'Не определено';
}

const formOfStudy = (form) => {
  if (form === 'oz') {
    return 'Очно-заочная';
  }
  return 'Очная';
}

function Popup({ program, isOpen, onClose, sendRequest, loadingRequest, windowWidth, onClickButton }) {

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [blockSubmitButton, setBlockSubmitButton] = React.useState(true);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendRequest({ fullname: name, phone: phone, text: '' });
    window.gtag('event', 'otpravil_formu_programm', {
      'event_category': 'otpravil_formu_programm',
    });
    analyticsOfProgram(program.direction);
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13 && blockSubmitButton) {
        event.preventDefault();
    }
  }

  React.useEffect(() => {
    setName('');
    setPhone('');
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
      <div className="container">
        <div className="detail">
          <button className="detail__close-button" onClick={onClose} type="button" />
          <div className="detail__popup">
          <span className="detail__tag">{directionOfProgram(program.direction)}</span>
            <div className="detail__container">
              <div className="detail__description">

                <p className="detail__specialization">{program.level === 'mag' ? 'Программа' : 'Профиль'}</p>
                <h2 
                className={`detail__title ${program.name.length > 32 ? "detail__title_type_large" : "detail__title_type_small"}`}>
                  {program.name}
                  </h2>
                <ul className="detail__info-container">
                  <li className="detail__info">
                    <span className="detail__info-item detail__info-item_weight_bold">Уровень&nbsp;образования</span>
                    <span className="detail__info-item">{levelOfStudy(program.level)}</span>
                  </li>
                  <li className="detail__info">
                    <span className="detail__info-item detail__info-item_weight_bold">Форма&nbsp;обучения</span>
                    <span className="detail__info-item">{formOfStudy(program.form)}</span>
                  </li>
                  <li className="detail__info">
                    <span className="detail__info-item detail__info-item_weight_bold">Срок&nbsp;обучения</span>
                    <span className="detail__info-item">{timeOfStudy(program)}</span>
                  </li>
                </ul>
              </div>
              <form className="detail__form" name="detail-form" action="#" noValidate onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
                <h3 className="detail__form-title">Поступить на программу</h3>
                <input 
                  className="detail__form-input"
                  placeholder="Имя"
                  type="text"
                  id="name-detail"
                  name="name"
                  value={name}
                  onChange={handleChangeName}
                  minLength="2"
                  maxLength="40"
                  required
                  autoComplete="off"
                ></input>
                <InputMask mask="+7 (999) 999-99-99" 
                  className="detail__form-input"
                  placeholder="Номер телефона"
                  type="tel"
                  id="telephone-detail"
                  name="telephone"
                  value={phone}
                  onChange={handleChangePhone}
                  required
                  autoComplete="off"
                />
                <button 
                className={`popup__submit-button detail__form-submit ${blockSubmitButton ? "popup__submit-button_type_block" : ""} ${loadingRequest ? "popup__submit-button_type_loading" : ""}`} 
                type="submit"
                >{loadingRequest ? "Отправка.." : "Отправить заявку"}
                </button>
              </form>
            </div>
            {
              program.description &&
              <p className="detail__program-description"><span className="detail__program-description_weight_bold">Цели обучения: </span>{program.description}</p>
            }
            {
              countDiscount(program.level, program.form)
            }
            {
              program.courses && 

              <ul className="detail__course-list">
                {
                program.courses.map((course, index) => (
                  <li className="detail__course-item" key={index}>
                    <Accordion title={`${index + 1}-й курс`}>{course}</Accordion>
                  </li>
                ))
                }
              </ul>
            }
            {
              windowWidth < 760 &&
              <button className="introduction__button detail__button" onClick={onClickButton} type="button">Оставить заявку</button>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popup;