import { useEffect } from 'react';
import { useRef } from 'react/cjs/react.development';
import './images-showcase.scss';
import imagesShowcaseAnimation from '../../animations/intro-block/images-showcase-animation';
import scrollAnimations from '../../animations/general/scroll-animations';

const ImagesShowcase = ({ images, shouldAnimate }) => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (shouldAnimate) {
      const animation = imagesShowcaseAnimation(listRef.current);

      scrollAnimations(sectionRef.current, animation, {
        start: 'top 80%',
      });
    }
  }, [shouldAnimate]);

  useEffect(() => {
    const children = [...listRef.current.children];

    children.forEach((element) => {
      setCardRotation(element);
    });
  }, []);

  const setCardRotation = (element) => {
    element.style.setProperty(
      '--rotation',
      `${Math.floor(Math.random() * (15 + 15) - 15)}deg`
    );
  };

  return (
    <section ref={sectionRef} className='images-showcase inner-content'>
      <ul ref={listRef} className='images-list'>
        {images.map((image, index) => (
          <li key={`${image.alt} - ${index}`} className='images-list-item'>
            <picture className='image-wrapper'>
              <img className='image' src={image.src} alt={image.alt} />
            </picture>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImagesShowcase;
