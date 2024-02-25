import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  //   flex-grow: 1;

  //   @media screen and (max-width: 767.98px) {
  //     max-width: 375px;
  //   }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
