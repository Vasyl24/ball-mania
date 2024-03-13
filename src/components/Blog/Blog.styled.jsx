import styled from 'styled-components';

export const BlogBackground = styled.section`
  padding-left: 24px;
  padding-right: 24px;

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

export const Title = styled.h2`
  margin-bottom: 24px;
  //   font-family: 'Open Sans';
  font-size: 24px;
  font-weight: 700;
  line-height: normal;

  color: var(--text-color);
  text-align: center;
`;

export const BlogItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;


export const BlogImage = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;

  //   max-width: 330px;
  //   width: 100%;
  //   height: 443px;
  border-radius: 16px;
`;
export const Date = styled.p`
  margin-bottom: 24px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  color: #aba7a7;
`;
export const BlogTitle = styled.h3`
  margin-bottom: 24px;

  font-size: 20px;
  font-weight: 700;
  line-height: normal;

  color: var(--text-color);
`;
export const SeeBtn = styled.button`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  color: var(--accent-color);
  background-color: transparent;
  border: none;
`;
// export const BlogBackground = styled.section``;
