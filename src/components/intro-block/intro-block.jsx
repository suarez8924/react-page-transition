import React from 'react';

const IntroBlock = ({ title, description, image }) => {
  return (
    <section className="intro-block inner-content">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <picture className="image-wrapper">
        <img src={image.src} alt={image.alt} className="image" />
      </picture>
    </section>
  );
};

export default IntroBlock;
