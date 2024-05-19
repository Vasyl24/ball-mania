// import img from '../../assets/overstock.jpg';
import {
  OverstockBackground,
  Container,
  Title,
  Buybtn,
} from './Overstock.styled';

const Overstock = () => {
  return (
    <>
      <OverstockBackground>
        <Container>
          <Title>Overstock & clearance line</Title>
          <Buybtn>Buy now</Buybtn>
        </Container>
      </OverstockBackground>
    </>
  );
};

export default Overstock;
