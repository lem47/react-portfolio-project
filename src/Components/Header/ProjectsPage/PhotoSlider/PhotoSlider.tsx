import React, { useState } from 'react';
import './PhotoSlider.scss';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { SliderData } from './SliderData';

export const PhotoSlider: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const length = 5;

  const prevPhoto = () => {
    setCurrentPhoto(currentPhoto === 0 ? length - 1 : currentPhoto - 1);
  };

  const nextPhoto = () => {
    setCurrentPhoto(currentPhoto === length - 1 ? 0 : currentPhoto + 1);
  };

  return (
    <section className="PhotoSlider">
      <FaArrowAltCircleLeft className="PhotoSlider__leftArrow" onClick={prevPhoto} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === currentPhoto ? 'PhotoSlider__container active' : 'PhotoSlider__container'}
            key={slide.photo}
          >
            {index === currentPhoto && (
              <img
                src={slide.photo}
                alt="Slide pic"
                className="PhotoSlider__photo"
              />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className="PhotoSlider__rightArrow" onClick={nextPhoto} />
    </section>
  );
};
