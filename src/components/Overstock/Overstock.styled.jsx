import styled from 'styled-components';
import img from '../../assets/overstock-mob.png';

export const Image = styled.section`
  width: 100%;
  height: 194px;
  background-image: url(${img});
  //   background-image: linear-gradient(#2e2f42b3, #2e2f42b3), url(${img?.src});
  background-color: #2e2f42;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
