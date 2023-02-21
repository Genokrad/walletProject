import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 320px;
  height: 100%;
  padding: 40px 16px;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const StiledLeftPart = styled.div`
  @media screen and (min-width: 1280px) {
    height: 100%;
    width: 480px;
    border-right: 1px solid #e7e5f2;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
