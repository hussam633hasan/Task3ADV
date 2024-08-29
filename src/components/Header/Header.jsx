import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== 3) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 3) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(3);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (

    <div className="slider">
      <button className="btn-slide" onClick={prevSlide}>
        <FontAwesomeIcon icon={faCircleChevronLeft} size="lg" style={{ color: "#f32525", width: 75, height: 50 }} />
      </button>
      {Array.from({ length: 3 }).map((item, index) => (
        <div
          key={index}
          className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
        >
          <img src={`./images/banner-0${index + 1}.jpg`} />
        </div>
      ))}
      <span className='headertxt'>
        <h4>Toronto,</h4>
        <h1>HURRY!GET THE BEST VILLA FOR YOU</h1>
      </span>
      <button className="btn-slide2" onClick={prevSlide}>
        <FontAwesomeIcon icon={faCircleChevronRight} style={{ color: "#f32525", width: 75, height: 50 }} />
      </button>
      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Header;