import { useEffect, useState } from 'react';
import { useRef } from 'react/cjs/react.development';
import './images-showcase.scss';
import imagesShowcaseAnimation from '../../animations/intro-block/images-showcase-animation';
import scrollAnimations from '../../animations/general/scroll-animations';
import Modal from '../modal/modal';
import useMountTransition from '../../hooks/useMountTransition';

const ImagesShowcase = ({ images, shouldAnimate }) => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasModalTransitionedIn = useMountTransition(isModalOpen, 500);

  useEffect(() => {
    if (shouldAnimate) {
      const animation = imagesShowcaseAnimation(listRef.current, {
        delay: 0.2,
      });

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

  const onImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section ref={sectionRef} className='images-showcase inner-content'>
      <ul ref={listRef} className='images-list'>
        {images.map((image, index) => (
          <li key={`${image.alt} - ${index}`} className='images-list-item'>
            <button
              className='image-button'
              onClick={() => onImageClick(index)}
            >
              <picture className='image-wrapper'>
                <img className='image' src={image.src} alt={image.alt} />
              </picture>
            </button>
          </li>
        ))}
      </ul>

      {(hasModalTransitionedIn || isModalOpen) && (
        <Modal
          className={`${hasModalTransitionedIn && 'modal-in'} ${
            isModalOpen && 'modal-visible'
          }`}
          setIsModalOpen={setIsModalOpen}
        >
          <picture className='selectd-image'>
            <img
              className='image'
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
            />
          </picture>
        </Modal>
      )}
    </section>
  );
};

export default ImagesShowcase;
