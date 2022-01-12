import { useEffect, useRef } from 'react';
import introBlockTimeline from '../../animations/intro-block/intro-block-timeline';
import './intro-block.scss';

const IntroBlock = ({ title, description, image, shouldAnimate }) => {
  const introBlockRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const introBlockWrapper = introBlockRef.current;

    timelineRef.current = introBlockTimeline(introBlockWrapper);
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      timelineRef.current.play();
    }
  }, [shouldAnimate]);

  return (
    <section ref={introBlockRef} className='intro-block inner-content'>
      <div className='title-wrapper'>
        <h2 className='title heading heading-huge'>{title}</h2>
      </div>
      <p className='description copy copy-medium'>{description}</p>
      <div className='image-container'>
        <picture className='image-wrapper'>
          <img src={image.src} alt={image.alt} className='image' />
        </picture>
      </div>
    </section>
  );
};

export default IntroBlock;
