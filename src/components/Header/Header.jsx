import { Link } from 'react-router-dom';
import icon from '../../assets/images/sprite.svg';
import {
  HeaderContainer,
  HeaderSection,
  IconLogo,
  IconNav,
  NavList,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Link to={'/'}>
          <IconLogo>
            <use href={`${icon}#icon-logo`}></use>
          </IconLogo>
        </Link>

        <NavList>
          <li>
            <IconNav>
              <use href={`${icon}#icon-search`}></use>
            </IconNav>
          </li>
          <li>
            <Link to={'/profile'}>
              <IconNav>
                <use href={`${icon}#icon-person`}></use>
              </IconNav>
            </Link>
          </li>
          <li>
            <Link to={'/cart'}>
              <IconNav>
                <use href={`${icon}#icon-cart`}></use>
              </IconNav>
            </Link>
          </li>
          <li>
            <button type="button">
              <IconNav>
                <use href={`${icon}#icon-burger-menu`}></use>
              </IconNav>
            </button>
          </li>
        </NavList>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
