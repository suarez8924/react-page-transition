import React from 'react';
import './intro-block.scss';

const IntroBlock = ({ title, description, image }) => {
  return (
    <section className='intro-block inner-content'>
      <h2 className='title heading heading-huge'>{title}</h2>
      <p className='description copy copy-medium'>{description}</p>
      <picture className='image-wrapper'>
        <img src={image.src} alt={image.alt} className='image' />
      </picture>
    </section>
  );
};

export default IntroBlock;
