import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const scrollAnimations = (trigger, animation, options) => {
  return ScrollTrigger.create({
    trigger,
    start: 'top center',
    animation,
    ...options,
  });
};

export default scrollAnimations;
