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
  const [countPrograms, setCountPrograms] = React.useState(STEP_COUNT_PROGRAMS);
  const [activeMenuButton, setActiveMenuButton] = React.useState({
    all: true,
    bak: false,
    mag: false,
  })

  function showMorePrograms() {
    setCountPrograms(countPrograms + STEP_COUNT_PROGRAMS);
  }

  function changeActiveButton(type) {
    if (type === "bak") {
      setPrograms(data.filter((item) => item.level === type));
      setActiveMenuButton({
        all: false,
        bak: true,
        mag: false,
      })
    }
    else if (type === "mag") {
      setPrograms(data.filter((item) => item.level === type));
      setActiveMenuButton({
        all: false,
        bak: false,
        mag: true,
      })
    }
    else {
      setPrograms(data);
      setActiveMenuButton({
        all: true,
        bak: false,
        mag: false,
      })
    }
  }

  React.useEffect(() => { 
    setCountPrograms(STEP_COUNT_PROGRAMS);
  },[programs])

  console.log(data)

  return (
    <section className="programs container">
      <h2 className="programs__title">Программы обучения</h2>

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
      </ul>

      <ul className="programs__container">

        {
          programs.slice(0, countPrograms).map((elem) => (
            <li className="programs__item" key={elem.id}>
              <div className="programs__item-top">
                <div className="programs__item-description">
                  <span className="programs__item-tag">{directionOfProgram(elem.profile)}</span>
                  <p className="programs__item-name">{elem.name}</p>
                </div>
                <div className={`programs__img programs__img_type_${elem.profile}`}></div>
              </div>
              <div className="programs__item-bottom">
                <span className="programs__item-form">{formOfStudy(elem.form)}</span>
                <span className="programs__item-time">{timeOfStudy(elem)}</span>
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
      
    </section>
  );
}

export default Programs;