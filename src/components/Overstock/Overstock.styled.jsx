import styled from 'styled-components';
import img from '../../assets/overstock.jpg';

export const Image = styled.section`
  width: 100%;
  background-size: cover;
  background-image: linear-gradient(#2e2f42b3, #2e2f42b3), url(${img});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
