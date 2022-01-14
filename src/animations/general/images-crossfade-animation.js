import gsap from 'gsap';

const imagesCrossfadeAnimation = (container, duration = 2) => {
  const images = gsap.utils.toArray(container.children);
  const timeline = gsap.timeline({
    repeat: -1,
    paused: true,

    defaults: { duration, ease: 'linear' },
  });

  gsap.set(images.slice(1), { opacity: 0 });

  timeline.set(images[0], { zIndex: 0 });

  images.slice(1).forEach((image) => {
    timeline.to(image, { opacity: 1 }, `+=${duration}`);
  });

  timeline
    .set(images[0], { zIndex: 1 }, `+=${duration}`)
    .fromTo(images[0], { opacity: 0 }, { opacity: 1, immediateRender: false });

  return timeline;
};

export default imagesCrossfadeAnimation;
