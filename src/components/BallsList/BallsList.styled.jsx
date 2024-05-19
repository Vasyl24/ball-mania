import styled from 'styled-components';

export const Background = styled.section`
  // margin-bottom: 48px;
  padding-top: 48px;
  padding-bottom: 24px;

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
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const BallCardList = styled.ul`
  margin-bottom: 24px;

  display: flex;

  //   @media screen and (max-width: 767.98px) {
  flex-direction: column;
  align-items: center;
  //   }
`;

export const BallCardItem = styled.li`
  position: relative;

  padding: 16px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const BallCardImg = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 36px;
`;

export const BallCardTitle = styled.h2`
  margin-bottom: 12px;

  font-size: 24px;
  font-weight: 700;
  line-height: normal;

  color: var(--text-color);
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const StarList = styled.ul`
  display: flex;
  margin-right: 8px;
`;

export const StarItem = styled.li`
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const StarIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: none;
  stroke: #f55700;
`;

export const CommentAmount = styled.span`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;

  color: var(--text-color);
`;

export const PriceContainer = styled.div`
  display: flex;
`;

export const OldPrice = styled.span`
  margin-right: 12px;

  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  text-decoration: line-through;

  color: var(--text-color);
`;

export const NewPrice = styled.span`
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;

  color: var(--orange);
`;

export const DiscountAmount = styled.p`
  position: absolute;
  top: 0;

  padding: 4px 16px;
  border-radius: 8px;

  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;

  background-color: var(--orange);
  color: var(--text-color);
`;

export const SeeBtn = styled.button`
  display: block;
  margin-right: 0;
  margin-left: auto;

  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  color: var(--orange);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
