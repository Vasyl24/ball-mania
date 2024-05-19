import BallsList from 'components/BallsList/BallsList';
import Blog from 'components/Blog/Blog';
import Hero from 'components/Hero/Hero';
import Overstock from 'components/Overstock/Overstock';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Overstock />
      <BallsList />
      <Blog />
    </>
  );
};

export default HomePage;
