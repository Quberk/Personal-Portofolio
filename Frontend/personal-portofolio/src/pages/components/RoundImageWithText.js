import React from 'react';


const RoundImageWithText = ({ imageUrl, altText, caption }) => {
  return (
    <div className="justify-self-center">
      <div className="rounded-full overflow-hidden shadow-lg shadow-red-500/50">
        <img
          src={imageUrl}
          alt={altText}
          className="object-cover"
        />
      </div>
      <p className="text-center text-xs lg:text-sm pt-2">{caption}</p>
    </div>
  );
};



  export default RoundImageWithText;