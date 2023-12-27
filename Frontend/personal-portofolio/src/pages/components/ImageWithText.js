import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';



const ImageWithText = ({ width, height, imageUrl, altText, caption, linkTo,  blur, brightness}) => {
  
  const imageStyle = {
    filter: `blur(${blur}px) brightness(${brightness})`,
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  };
  
  return (
    <div className={`border border-blue-500 border-4 shadow-md-red mx-auto overflow-hidden z-0 transform`} style={{ width: width, height: height, overflow: 'hidden'}}>
      <Link to={linkTo}>
        <img
            src={imageUrl}
            alt={altText}
            style={imageStyle}
            className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-5xl font-semibold text-center text-yellow-500">{caption}</p>
        </div>
      </Link>

    </div>
  );
};

export default ImageWithText;
