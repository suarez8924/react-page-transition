import { useEffect, useRef } from 'react';
import imagesCrossfadeAnimation from '../../animations/general/images-crossfade-animation';
import sevenWonders from '../../data/seven-wonders';
import './home-hero.scss';

import { ReactComponent as DoubleArrows } from '../../assets/svg/double-arrows.svg';

const HomeHero = () => {
  const backgroundWrapperRef = useRef(null);
  const backgroundTimeline = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const backgroundWrapper = backgroundWrapperRef.current;

    backgroundTimeline.current = imagesCrossfadeAnimation(backgroundWrapper);

    backgroundTimeline.current.play();
  }, []);

  const onScrollDownClick = () => {
    window.scrollBy({
      top: sectionRef.current.getBoundingClientRect().height,
      behavior: 'smooth',
    });
  };

  return (
    <section ref={sectionRef} className='home-hero'>
      <div ref={backgroundWrapperRef} className='background-wrapper'>
        {sevenWonders.map((wonder) => (
          <div
            key={wonder.id}
            className='background-image'
            style={{
              backgroundImage: `url(${wonder.homeHeroImage})`,
            }}
          />
        ))}
      </div>
      <div className='home-hero-content-wrapper'>
        <h2 className='hero-title heading heading-huge'>
          Discover the seven world wonders
        </h2>
        <button className='scroll-down-cta' onClick={onScrollDownClick}>
          <span className='scroll-down-copy heading heading-large'>
            Scroll to discover
          </span>
          <DoubleArrows className='double-arrow-icon' />
        </button>
      </div>
    </section>
  );
};

export default HomeHero;
