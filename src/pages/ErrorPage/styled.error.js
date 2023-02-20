import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Number = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 120px;
  line-height: 1.2;
  padding-left: 60px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;

  &:hover,
  &:focus {
    font-weight: 700;
  }

  &.active {
    font-weight: 700;
  }
`;
