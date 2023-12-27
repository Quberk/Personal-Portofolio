import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
};

const HorizontalImageSlider = ({ images }) => {
  return (
    <div className="slide-container pt-5 overflow-hidden w-full">
      <Slide>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img 
            style={{ ...divStyle }}
            src={imageUrl}
            className = 'px-10 w-full object-cover'
            >

            </img>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default HorizontalImageSlider;
