import React from 'react';
import './Programs.css';
import data from '../../data/programs.js';
import { STEP_COUNT_PROGRAMS } from '../../utils/config.js';

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

const timeOfStudy = (program) => {
  if (program.level === 'bak') {
    if (program.form === 'oz') {
      return '5 лет'
    }
    return '4 года'
  }
  if (program.level === 'mag') {
    if (program.form === 'oz') {
      return '2 года и 3 месяца'
    }
    return '2 года'
  } 
  return 'Не определено'
}

const formOfStudy = (form) => {
  if (form === 'oz') {
    return 'Очно-заочная'
  }
  return 'Очная'
}

function Programs() {

  const [programs, setPrograms] = React.useState(data);
  const [searchWord, setSearchWord] = React.useState('');
  const [countPrograms, setCountPrograms] = React.useState(STEP_COUNT_PROGRAMS);
  const [activeMenuButton, setActiveMenuButton] = React.useState({
    all: true,
    bak: false,
    mag: false,
    och: false,
    oz: false
  })

  function showMorePrograms() {
    setCountPrograms(countPrograms + STEP_COUNT_PROGRAMS);
  }

  function changeActiveButton(type) {
    switch(type) {
      case "bak":
        setPrograms(data.filter((item) => item.level === type));
        setActiveMenuButton({
          all: false,
          bak: true,
          mag: false,
          och: false,
          oz: false
        })
        break;
      case "mag":
        setPrograms(data.filter((item) => item.level === type));
        setActiveMenuButton({
          all: false,
          bak: false,
          mag: true,
          och: false,
          oz: false
        })
        break;
      case "och":
        setPrograms(data.filter((item) => item.form === type));
        setActiveMenuButton({
          all: false,
          bak: false,
          mag: false,
          och: true,
          oz: false
        })
        break;
      case "oz":
        setPrograms(data.filter((item) => item.form === type));
        setActiveMenuButton({
          all: false,
          bak: false,
          mag: false,
          och: false,
          oz: true
        })
        break;
      default: 
        setPrograms(data);
        setActiveMenuButton({
          all: true,
          bak: false,
          mag: false,
          och: false,
          oz: false
        })
      }
  }

  function searchProgram(evt) {
    evt.preventDefault();
    setPrograms(data.filter((item) => item.name.toLowerCase().includes(searchWord.toLowerCase())));
  }

  function changeInput(e) {
    setSearchWord(e.target.value);
    setPrograms(data);
    setActiveMenuButton({
      all: false,
      bak: false,
      mag: false,
      och: false,
      oz: false
    })
  }

  React.useEffect(() => { 
    setCountPrograms(STEP_COUNT_PROGRAMS);
  },[programs])

  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="programs__container">
          <h2 className="programs__title">Программы обучения</h2>
          <nav className="programs__nav">
            <ul className="programs__menu">
              <li className="programs__menu-item">
                <button 
                  className={`programs__menu-button ${activeMenuButton.all ? "programs__menu-button_type_active" :""}`} id="all" type="button"
                  onClick={(e) => changeActiveButton(e.target.id)}>
                  Все
                </button>
              </li>
              <li className="programs__menu-item">
                <button 
                  className={`programs__menu-button ${activeMenuButton.bak ? "programs__menu-button_type_active" :""}`} id="bak" type="button"
                  onClick={(e) => changeActiveButton(e.target.id)}>
                  Бакалавриат
                </button>
              </li>
              <li className="programs__menu-item">
                <button 
                  className={`programs__menu-button ${activeMenuButton.mag ? "programs__menu-button_type_active" :""}`} id="mag" type="button"
                  onClick={(e) => changeActiveButton(e.target.id)}>
                  Магистратура
                </button>
              </li>
              <li className="programs__menu-item">
                <button 
                  className={`programs__menu-button ${activeMenuButton.och ? "programs__menu-button_type_active" :""}`} id="och" type="button"
                  onClick={(e) => changeActiveButton(e.target.id)}>
                  Очные
                </button>
              </li>
              <li className="programs__menu-item">
                <button 
                  className={`programs__menu-button ${activeMenuButton.oz ? "programs__menu-button_type_active" :""}`} id="oz" type="button"
                  onClick={(e) => changeActiveButton(e.target.id)}>
                  Очно-заочные
                </button>
              </li>
            </ul>

            <form className="programs__search" name="search-programs" action="#" noValidate onSubmit={searchProgram}>
              <input 
              className="programs__search-input"
              onChange={(e) => changeInput(e)}
              placeholder="Поиск по названию"
              type="text" 
              id="search"
              name="search"
              minLength="2" 
              maxLength="40" 
              required
              autoComplete="off"
              pattern="[А-Яа-яЁё -]{1,}"
              >
              </input>
              <button className="programs__search-button" type="submit"></button>
            </form>
          </nav>

          <ul className="programs__item-container">
            {
              programs.slice(0, countPrograms).map((elem) => (
                <li className="programs__item" key={elem.id}>
                  <div className="programs__item-top">
                    <div className="programs__item-description">
                      <span className="programs__item-tag">{directionOfProgram(elem.profile)}</span>
                      <p className="programs__item-name">{elem.name}</p>
                    </div>
                    <div className={`programs__img programs__img_type_${elem.img}`}></div>
                  </div>
                  <div className="programs__item-bottom">
                    <div className="programs__description-bottom">                
                      <span className="programs__item-form">{formOfStudy(elem.form)}</span>
                      <span className="programs__item-time">{timeOfStudy(elem)}</span>
                    </div>
                    <button className="programs__button-bottom" type="button">Подробнее</button>

                  </div>
                </li>
              ))
            }
          </ul>
          {
            (programs.length > countPrograms)
            &&
            <button className="programs__btn-add" onClick={showMorePrograms}>Показать ещё</button>
          }
        </div>
      </div>
    </section>
  );
}

export default Programs;