import { useEffect, useRef } from 'react';
import imagesCrossfadeAnimation from '../../animations/general/images-crossfade-animation';
import sevenWonders from '../../data/seven-wonders';
import './home-hero.scss';

const HomeHero = () => {
  const backgroundWrapperRef = useRef(null);
  const backgroundTimeline = useRef(null);

  useEffect(() => {
    const backgroundWrapper = backgroundWrapperRef.current;

    backgroundTimeline.current = imagesCrossfadeAnimation(backgroundWrapper);

    backgroundTimeline.current.play();
  }, []);

  return (
    <section className='home-hero'>
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
      <h2 className='hero-title heading heading-huge'>
        Discover the seven world wonders
      </h2>
      <button>
        <span>Scroll</span>
        <span>>></span>
      </button>
    </section>
  );
};

export default HomeHero;
