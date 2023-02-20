import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  padding: 20px 18px;
  background-color: var(--white-text-color);

  @media (min-width: 768px) {
    padding: 20px 32px;
  }
  @media (min-width: 1280px) {
    padding: 20px 16px;
  }
`;
export const HeaderLine = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  @media (max-width: 767px) {
    margin: 0 auto;
    max-width: 280px;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const H2 = styled.h2`
  margin-left: 15px;
  line-height: 1.18;
  font-weight: 700;
  font-size: 24px;
  @media (min-width: 768px) {
    margin-left: 20px;
    font-size: 30px;
    line-height: 1.5;
  }
`;

export const Name = styled.p`
  @media (max-width: 767px) {
    margin-right: 8px;
  }
  font-size: 18px;
  font-weight: 400;
  line-height: 1.18;
  color: var(--gray-text-color);
`;

export const ImgDel = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin: 0 12px;
  }
`;
export const ImgWallet = styled.img`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.18;
  border: none;
  background: none;
  cursor: pointer;
`;
export const Exit = styled.p`
  @media (max-width: 767px) {
    display: none;
  }
  color: var(--gray-text-color);
  margin-left: 8px;
`;
