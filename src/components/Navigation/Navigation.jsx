import {
  StyledNavLink,
  Styledlist,
  StyledItem,
  StyledSVG,
} from './Navigation.styled';
import sprite from '../../iconsSprite/mySprite.svg';
import { useDispatch } from 'react-redux';
import { hideBalance, showBalance } from 'redux/finance/finance-slice';

export const Navigation = ({ props }) => {
  const dispatch = useDispatch();
  const size = props;

  const hide = () => dispatch(showBalance());
  const show = () => dispatch(hideBalance());

  return (
    <>
      <nav>
        {size ? (
          <Styledlist>
            <StyledItem>
              <StyledSVG width="18" height="18">
                <use href={sprite + '#icon-home'}></use>
              </StyledSVG>
              <StyledNavLink to="/" onClick={show}>
                Home
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledSVG width="18" height="18">
                <use href={sprite + '#icon-stat'}></use>
              </StyledSVG>
              <StyledNavLink to="diagram" onClick={show}>
                Statistics
              </StyledNavLink>
            </StyledItem>
          </Styledlist>
        ) : (
          <Styledlist>
            <StyledItem>
              <StyledNavLink to="/" onClick={show}>
                <StyledSVG width="38" height="38">
                  <use href={sprite + '#icon-home'}></use>
                </StyledSVG>
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink to="diagram" onClick={show}>
                <StyledSVG width="38" height="38">
                  <use href={sprite + '#icon-stat'}></use>
                </StyledSVG>
              </StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink to="/" onClick={hide}>
                <StyledSVG width="38" height="38">
                  <use href={sprite + '#icon-Exclude'}></use>
                </StyledSVG>
              </StyledNavLink>
            </StyledItem>
          </Styledlist>
        )}
      </nav>
    </>
  );
};
