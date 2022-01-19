import gsap from 'gsap';

const introBlockTimeline = (
  wrapper,
  timelineConfig = { duration: 0.6, ease: 'power2.out' }
) => {
  const q = gsap.utils.selector(wrapper);
  const title = q('.title');
  const description = q('.description');
  const imageContainer = q('.image-container');
  const image = q('.image');

  const timeline = gsap.timeline({
    paused: true,
    ...timelineConfig,
  });

  timeline
    .from(title, { yPercent: 100 })
    .from(description, { opacity: 0, yPercent: 15 }, '-=0.2')
    .from(imageContainer, { opacity: 0, yPercent: 10 }, '-=0.2')
    .from(image, { scale: 1.3, duration: 4, ease: 'expo.out' }, '-=0.4');

  return timeline;
};

export default introBlockTimeline;
