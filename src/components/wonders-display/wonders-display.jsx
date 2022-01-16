import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import sevenWonders from '../../data/seven-wonders';
import WonderCard from '../wonder-card/wonder-card';
import './wonders-display.scss';
import scrollAnimations from '../../animations/general/scroll-animations';
import staggerFade from '../../animations/general/stagger-fade';
import { gsap } from 'gsap';

const WondersDisplay = () => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !listRef.current) return;
    const children = gsap.utils.toArray(listRef.current.children);

    const animation = staggerFade(children);

    scrollAnimations(sectionRef.current, animation);
  }, []);

  return (
    <section ref={sectionRef} className="wonders-display">
      <ul ref={listRef} className="wonders-list">
        {sevenWonders.map((wonder) => (
          <li key={wonder.id} className="wonder-item">
            <Link to={wonder.path} className="wonder-link">
              <WonderCard wonder={wonder} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WondersDisplay;
