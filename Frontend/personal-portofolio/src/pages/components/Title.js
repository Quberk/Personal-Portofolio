import React from 'react';

const Title = ({ title }) => {
    return (
      <h1 className='pt-10 pb-10 text-4xl relative text-left'>
        <span className="text-shadow">{title}</span>
      </h1>
    );
  };

export default Title;