import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import IntroBlock from '../components/intro-block/intro-block';

import sevenWonders from '../data/seven-wonders.js';
const WonderPage = () => {
  const { pathname } = useLocation();
  const pageWonder = sevenWonders.filter(
    (element) => element.id === pathname.replace('/', '')
  )[0];
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <main className="wonder-page section-container site-page">
      {pageWonder && (
        <IntroBlock {...pageWonder.introBlock} shouldAnimate={shouldAnimate} />
      )}
    </main>
  );
};

export default WonderPage;
