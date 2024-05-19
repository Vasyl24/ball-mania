import styled from 'styled-components';
import imgMob from '../../assets/images/overstock-mob.png';
import img from '../../assets/images/overstock.png';

export const OverstockBackground = styled.section`
  padding-top: 48px;
  padding-bottom: 40px;

  width: 100%;
  height: 194px;
  background-image: url(${imgMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;

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

export const Container = styled.div`
  padding-right: 24px;
  padding-left: 24px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-family: 'Open Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  color: var(--background-color);
`;

export const Buybtn = styled.button`
  padding: 12px 48px;
  border: none;
  border-radius: 12px;
  background-color: var(--accent-color);

  color: var(--text-color);
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
`;
