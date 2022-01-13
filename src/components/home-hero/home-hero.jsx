import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import sevenWonders from '../../data/seven-wonders';
import './home-hero.scss';

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundWrapperRef = useRef(null);
  const backgroundTimeline = useRef(null);

  useEffect(() => {
    const backgroundWrapper = backgroundWrapperRef.current;
    const images = gsap.utils.toArray(backgroundWrapper.children);

    backgroundTimeline.current = gsap.timeline({
      repeat: -1,
      paused: true,

      defaults: { duration: 2, ease: 'linear' },
    });

    gsap.set(images, { opacity: 0 });
    gsap.set(images[0], { opacity: 1 });

    backgroundTimeline.current.set(images[0], { zIndex: 0 });

    images.slice(1).forEach((image) => {
      backgroundTimeline.current.to(image, { opacity: 1 }, '+=2');
    });

    backgroundTimeline.current
      .set(images[0], { zIndex: 1 }, '+=2')
      .fromTo(
        images[0],
        { opacity: 0 },
        { opacity: 1, immediateRender: false }
      );

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
