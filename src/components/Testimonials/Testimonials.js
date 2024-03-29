import React from 'react';
import './Testimonials.css';
import Slider from '../Slider/Slider.js';
import firstImg from '../../images/testimonials/1.jpg';
import secondImg from '../../images/testimonials/2.jpg';
import thirdImg from '../../images/testimonials/3.jpg';
import fourthImg from '../../images/thirdImg.png';
import fifthImg from '../../images/testimonials/5.jpg';
import sixthImg from '../../images/testimonials/6.jpg';
import seventhImg from '../../images/testimonials/7.jpg';

const testimonials = [
  {id: 1, name: 'Эргашев Бекзод', town: 'Магистр, 1й-курс', rating: 5, text: 'Интересная форма обучения, много видеоматериалов с разъяснениями, а также вебинаров по сопутствующим тематикам. Структурированное расписание с чёткими сроками. Есть кураторы, которые активизируют и мотивируют учиться, следят за успеваемостью, в любой момент можно задать и решить любой вопрос.', image: firstImg},
  {id: 2, name: 'Хмелевских Артем', town: 'Магистр, 2й-курс', rating: 5, text: 'Дистанционная форма обучения очень удобна в плане совмещения с работой. И система дистанционного обучения, как раз даёт такую возможность. Материалы дисциплин представлены лекциями, вебинарами, симуляциями, тестированием, практическими заданиями. Наглядно, достаточно полно с примерами для самостоятельной работы.', image: secondImg},
  {id: 3, name: 'Лим Кристина', town: 'Бакалавр, 3й-курс', rating: 4.6, text: 'Обучаться очень комфортно. Материалы хорошо представлены и структурированы. Поддержка практически 24/7. Удобные чаты и обсуждения, всегда есть кому задать вопрос. И всегда есть кому на него ответить. Была возможность постоянного общения с преподавателем, что очень важно, если вдруг что-то не понятно.', image: thirdImg},
  {id: 4, name: 'Новичков Степан', town: 'Магистр, 2й-курс', rating: 5, text: 'Очень удобно, что за вами сохраняются все льготы обычного очного обучения (отсрочка от армии, проездной), но обучение проходит в дистанционном формате. Можно начинать строить карьеру и получать высшее образование одновременно.', image: fourthImg},
  {id: 5, name: 'Шацкая Дарья', town: 'Бакалавр, 4й-курс', rating: 4.8, text: 'Обучение понравилось. Все материалы всегда доступны на едином портале дистанционного обучения, который очень прост и удобен в освоении. Материал подается преподавателями очень методично и грамотно. Самостоятельные работы над проектами.', image: fifthImg},
  {id: 6, name: 'Комаров Вячеслав', town: 'Бакалавр, 4й-курс', rating: 4.7, text: 'Возможность обучения онлайн без отрыва от работы, нужная и полезная информация, грамотные преподаватели, много практических занятий и получение навыков, государственный диплом. Есть возможность разбить оплату по месяцам. Мне все нравится, планирую поступать в магистратуру.', image: sixthImg},
  {id: 7, name: 'Мамонов Игорь', town: 'Бакалавр, 4й-курс', rating: 4.5, text: 'Главный плюс такой формы обучения в том, что вы обучаетесь, когда удобно и не тратите лишнее время на дорогу. Интерфейс портала, на котором проходит обучение очень удобный и интуитивно понятный, есть видеоинструкции. За вашей успеваемостью всегда следят кураторы и помогают с любыми вопросами.', image: seventhImg},
]

function Testimonials({ windowWidth }) {
  return (
    <section className="testimonials" id="testimonials">
        <h2 className="testimonials__title">Отзывы об обучении</h2>
        <p className="testimonials__subtitle">прочитайте отзывы наших студентов об обучение с использованием дистанционных образовательных технологий</p>
        <Slider items={testimonials} windowWidth={windowWidth} />
    </section>
  );
}

export default Testimonials;