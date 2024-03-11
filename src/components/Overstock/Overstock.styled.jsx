import styled from 'styled-components';
import imgMob from '../../assets/overstock-mob.png';
import img from '../../assets/overstock.png';

export const OverstockBackground = styled.section`
  padding-top: 48px;
  width: 100%;
  height: 194px;
  background-image: url(${imgMob});
  //   background-image: linear-gradient(#2e2f42b3, #2e2f42b3), url(${imgMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  //   @media screen and (min-width: 768px) {
  //     .hero-section {
  //       background-image: linear-gradient(#2e2f42b3, #2e2f42b3),
  //         url('../images/people-office-tablet.jpg');
  //     }
  //   }
  @media screen and (min-width: 1440px) {
    .hero-section {
      //   background-image: linear-gradient(#2e2f42b3, #2e2f42b3), url(${img});
      background-image: url(${img});
    }
  }
`;

export const Title = styled.h2`
  color: var(--background-color);

  font-family: 'Open Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
