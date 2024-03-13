import BallsList from 'components/BallsList/BallsList';
import Blog from 'components/Blog/Blog';
import Overstock from 'components/Overstock/Overstock';

const HomePage = () => {
  return (
    <>
      {/* <Background></Background> */}
      <Overstock />
      <BallsList />
      <Blog />
    </>
  );
};

export default HomePage;
