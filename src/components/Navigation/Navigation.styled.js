import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 32px;

  &:hover,
  &:focus {
    color: #2f89b3;
  }

  &.active {
    color: #41d8bf;
  }
`;

export const Styledlist = styled.ul`
  display: flex;
  gap: 40px;
`;
