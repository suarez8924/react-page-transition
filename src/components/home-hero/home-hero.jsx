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
    // const q = gsap.utils.selector(backgroundWrapper);

    backgroundTimeline.current = gsap.timeline({
      repeat: -1,
      paused: true,
      ease: 'none',
    });

    images.reverse().forEach((image, index) => {
      const tl = gsap.timeline();
      if (index === 0) {
        tl.set(image, { autoAlpha: 1 });
      }
      tl.to(image, { scale: 1.2, duration: 2 }).to(
        image,
        { autoAlpha: 0, duration: 0.5 },
        '-=0.1'
      );

      backgroundTimeline.current.add(tl);
    });

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
      <h2 className='hero-title'>Discover the 7 world wonders</h2>
      <button>
        <span>Scroll</span>
        <span>>></span>
      </button>
    </section>
  );
};

export default HomeHero;
