import styled from 'styled-components';

export const CurrencyStyled = styled.div`
  margin-top: 32px;

  width: 280px;
  height: 174px;
  position: relative;
  background: #4a56e2;
  border-radius: 30px;

  @media (min-width: 768px) {
    width: 336px;
    height: 182px;
  }

  @media (min-width: 1280px) {
    width: 393px;
    height: 331px;
  } ;
`;

export const ListStyled = styled.ul`
  display: flex;
  gap: 28px;

  padding-left: 20px;
  margin-bottom: 12px;
  width: 280px;
  height: 50px;

  @media (min-width: 768px) {
    width: 100%;
    padding-left: 41px;
  }

  @media (min-width: 1280px) {
    margin-left: 40px;
    padding-left: 0px;
    margin-bottom: 20px;
    gap: 60px;
  } ;
`;

export const ListLI = styled.li`
  margin-top: 11px;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
  color: white;
`;
export const ImgStyledRectangle = styled.img`
  position: absolute;
  top: auto;
  left: auto;

  width: 100%;
  height: 50px;

  background: #ffffff;
  opacity: 0.2;
  border-radius: 30px 30px 0px 0px;
`;

export const ImgStyledVector = styled.img`
  position: absolute;
  bottom: 0px;
  left: auto;

  width: 100%;
  height: 93px;

  @media (min-width: 768px) {
    height: 119px;
  }

  @media (min-width: 1280px) {
  } ;
`;

export const TypeStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
    align-items: center;

    gap: 24px;
  }

  li {
    display: flex;
    justify-content: space-between;
    gap: 70px;

    width: 240px;
    height: 24px;

    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: calc(24 / 16);

    color: white;

    p {
      margin-left: 0;
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 1280px) {
      gap: 90px;
      justify-content: center;
      width: 100%;
    }
  }
`;
