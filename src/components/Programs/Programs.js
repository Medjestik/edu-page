import React from 'react';
import './Programs.css';
import Preloader from '../Preloader/Preloader.js';
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

function Programs({ programs, onDetail, showDetailPopup, isLoadingPrograms, windowWidth={windowWidth} }) {

  const [samplePrograms, setSamplePrograms] = React.useState([]);
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
        setSamplePrograms(programs.filter((item) => item.level === type));
        setActiveMenuButton({
          all: false,
          bak: true,
          mag: false,
          och: false,
          oz: false
        })
        break;
      case "mag":
        setSamplePrograms(programs.filter((item) => item.level === type));
        setActiveMenuButton({
          all: false,
          bak: false,
          mag: true,
          och: false,
          oz: false
        })
        break;
      case "o":
        setSamplePrograms(programs.filter((item) => item.form === type));
        setActiveMenuButton({
          all: false,
          bak: false,
          mag: false,
          och: true,
          oz: false
        })
        break;
      case "oz":
        setSamplePrograms(programs.filter((item) => item.form === type));
        setActiveMenuButton({
          all: false,
          bak: false,
          mag: false,
          och: false,
          oz: true
        })
        break;
      default: 
        setSamplePrograms(programs);
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
    setSamplePrograms(programs.filter((item) => item.name.toLowerCase().includes(searchWord.toLowerCase())));
  }

  function changeInput(e) {
    console.log(samplePrograms)
    setSearchWord(e.target.value);
    setSamplePrograms(programs);
    setActiveMenuButton({
      all: false,
      bak: false,
      mag: false,
      och: false,
      oz: false
    })
  }

  function detailProgram(program) {
    onDetail(program);
    showDetailPopup();
  }

  React.useEffect(() => { 
    setCountPrograms(STEP_COUNT_PROGRAMS);
  },[samplePrograms]);

  React.useEffect(() => { 
    setSamplePrograms(programs);
  },[programs]);

  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="programs__container">
          <h2 className="programs__title">Программы обучения</h2>
          

          <ul className="programs__item-container">
            { isLoadingPrograms 
            ?
              <Preloader />
            :
              samplePrograms.slice(0, countPrograms).map((elem) => (
                <li className="programs__item" key={elem.id}>
                  <div className="programs__item-top">
                    <div className="programs__item-description">
                      <span className="programs__item-tag">{directionOfProgram(elem.direction)}</span>
                      <p className="programs__item-name">{elem.name}</p>
                    </div>
                    <div className={`programs__img programs__img_type_${elem.img}`}></div>
                  </div>
                  <div className="programs__item-bottom">
                    <div className="programs__description-bottom">                
                      <span className="programs__item-form">{formOfStudy(elem.form)}</span>
                      <span className="programs__item-time">{timeOfStudy(elem)}</span>
                    </div>
                    <button className="programs__button-bottom" type="button" onClick={() => detailProgram(elem)}>Подробнее</button>

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