import gsap from 'gsap';

const staggerFade = (elements, options = {}) => {
  return gsap.fromTo(
    elements,
    { autoAlpha: 0, ...options.from },
    { autoAlpha: 1, stagger: { amount: 0.8 }, ...options.to }
  );
};

export default staggerFade;
