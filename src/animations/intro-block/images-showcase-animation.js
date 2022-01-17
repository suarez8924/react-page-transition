import gsap from 'gsap';

const imagesShowcaseAnimation = (container, config = {}) => {
  const children = gsap.utils.toArray(container.children);

  return gsap.from(children, {
    opacity: 0,
    yPercent: 5,
    stagger: 0.2,
    delay: 0.25,
    duration: 1,
    ease: 'power4.out',
    ...config,
  });
};

export default imagesShowcaseAnimation;
