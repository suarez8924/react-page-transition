import HomeHero from '../components/home-hero/home-hero';
import WondersDisplay from '../components/wonders-display/wonders-display';

const Homepage = () => {
  return (
    <main className="homepage section-container site-page">
      <HomeHero />
      <WondersDisplay />
    </main>
  );
};

export default Homepage;
