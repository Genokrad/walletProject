import styled from 'styled-components';

export const CurrencyStyled = styled.div`
  width: 280px;
  height: 174px;
  left: 20px;
  top: 144px;

  background: #4a56e2;
  border-radius: 30px;
`;

export const ListStyled = styled.ul`
  padding: 10px;
  max-width: 100%;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  gap: 30px;

  width: 280px;
  height: 50px;
  left: 20px;
  top: 144px;

  border-radius: 30px 30px 0px 0px;
`;

export const ListLI = styled.li`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: white;

  text-align: right;
`;

export const TypeStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 20px;

  li {
    display: flex;
    gap: 55px;
    color: white;
  }
`;
