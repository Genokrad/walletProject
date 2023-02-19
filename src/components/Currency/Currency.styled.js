import styled from 'styled-components';

export const CurrencyStyled = styled.div`
  width: 280px;
  height: 174px;
  position: relative;
  left: 20px;
  top: 144px;

  background: #4a56e2;
  border-radius: 30px;
`;

export const ListStyled = styled.ul`
  display: flex;

  gap: 28px;

  margin-bottom: 12px;
  margin-left: 20px;
  width: 280px;
  height: 50px;
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

  width: 280px;
  height: 50px;

  background: #ffffff;
  opacity: 0.2;
  border-radius: 30px 30px 0px 0px;
`;

export const ImgStyledVector = styled.img`
  position: absolute;
  top: 80px;
  left: auto;
  width: 280px;
  height: 93px;
`;

export const TypeStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 17px;

  li {
    display: flex;
    justify-content: space-between;
    gap: 55px;

    width: 240px;
    height: 24px;

    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: calc(24 / 16);

    color: white;
  }
`;
