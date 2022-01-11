import { useParams } from 'react-router-dom';
import IntroBlock from '../components/intro-block/intro-block';

import sevenWonders from '../data/seven-wonders.js';
const WonderPage = () => {
  const { wonder } = useParams();
  const pageWonder = sevenWonders.filter((element) => element.id === wonder)[0];

  return (
    <main className='wonder-page section-container'>
      <IntroBlock {...pageWonder.introBlock} />
    </main>
  );
};

export default WonderPage;
