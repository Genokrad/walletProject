import {
  StyledNavLink,
  Styledlist,
  StyledItem,
  StyledSVG,
} from './Navigation.styled';
import sprite from '../../iconsSprite/mySprite.svg';

export const Navigation = () => {
  return (
    <>
      <nav>
        <Styledlist>
          <StyledItem>
            <StyledSVG width="18" height="18">
              <use href={sprite + '#icon-home'}></use>
            </StyledSVG>
            <StyledNavLink to="/">Home</StyledNavLink>
          </StyledItem>
          <StyledItem>
            <StyledSVG width="18" height="18">
              <use href={sprite + '#icon-stat'}></use>
            </StyledSVG>
            <StyledNavLink to="diagram">Statistics</StyledNavLink>
          </StyledItem>
        </Styledlist>
      </nav>
    </>
  );
};
