import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5px;

  &:hover,
  &:focus {
    font-weight: 700;
  }

  &.active {
    font-weight: 700;
  }
`;

export const Styledlist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledSVG = styled.svg`
  fill: var(--house-hold);
  border-radius: 2px;

  &:hover,
  &:focus {
    fill: var(--bcg-red-color);
  }

  &.active {
    fill: var(--bcg-red-color);
  }
`;
