import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Slider.css';

function Slider({ items }) {

  return (
    <div className="slider">
      <Carousel
      itemsToShow={3} 
      enableAutoPlay={true} 
      autoPlaySpeed={10000}
      >
        {items.map((item) => (
          <div className="slider__item" key={item.id}>
            <div className="slider__person">
              <img className="slider__person-img" src={item.image} alt={item.name}></img>
              <div className="slider__person-info">
                <h4 className="slider__person-name">{item.name}</h4>
                <p className="slider__person-town">{item.town}</p>
              </div>
              <span className="slider__person-rating">{item.rating}</span>
            </div>
            <p className="slider__item-text">{item.text}</p>
          </div>
          ))}  
      </Carousel>
    </div>
  );
}

export default Slider;