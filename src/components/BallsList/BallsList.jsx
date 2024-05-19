import {
  Background,
  BallCardList,
  BallCardItem,
  BallCardImg,
  BallCardTitle,
  RatingContainer,
  StarList,
  StarItem,
  StarIcon,
  CommentAmount,
  PriceContainer,
  OldPrice,
  NewPrice,
  DiscountAmount,
  SeeBtn,
} from './BallsList.styled';
import icon from '../../assets/images/sprite.svg';
import img1 from '../../assets/images/basketball-1-min.jpg';
import img2 from '../../assets/images/football-1-min.jpg';
import img3 from '../../assets/images/water-polo-ball-1-min.jpg';

const BallsList = () => {
  return (
    <Background>
      <BallCardList>
        <BallCardItem>
          <BallCardImg src={img1} alt="Basketball" width={300} height={300} />
          <BallCardTitle>Wilson NCAA Elevate Basketball</BallCardTitle>

          <RatingContainer>
            <StarList>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
            </StarList>

            <CommentAmount>(15)</CommentAmount>
          </RatingContainer>

          <PriceContainer>
            <OldPrice>32$</OldPrice>
            <NewPrice>24$</NewPrice>
          </PriceContainer>

          <DiscountAmount>Save 45 %</DiscountAmount>
        </BallCardItem>

        <BallCardItem>
          <BallCardImg src={img2} alt="Football" width={300} height={300} />
          <BallCardTitle>
            Football ball Select Futsal Master IMS v22
          </BallCardTitle>

          <RatingContainer>
            <StarList>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
            </StarList>

            <CommentAmount>(10)</CommentAmount>
          </RatingContainer>

          <PriceContainer>
            <OldPrice>48$</OldPrice>
            <NewPrice>26$</NewPrice>
          </PriceContainer>

          <DiscountAmount>Save 45 %</DiscountAmount>
        </BallCardItem>

        <BallCardItem>
          <BallCardImg
            src={img3}
            alt="Water polo ball"
            width={300}
            height={300}
          />
          <BallCardTitle>Mikasa W6608 Youth Water Polo Ball</BallCardTitle>

          <RatingContainer>
            <StarList>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
              <StarItem>
                <StarIcon>
                  <use href={`${icon}#icon-star`}></use>
                </StarIcon>
              </StarItem>
            </StarList>

            <CommentAmount>(10)</CommentAmount>
          </RatingContainer>

          <PriceContainer>
            <OldPrice>32$</OldPrice>
            <NewPrice>24$</NewPrice>
          </PriceContainer>

          <DiscountAmount>Save 25 %</DiscountAmount>
        </BallCardItem>
      </BallCardList>

      <SeeBtn>See all...</SeeBtn>
    </Background>
  );
};

export default BallsList;
