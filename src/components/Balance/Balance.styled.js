import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 280px;
  height: 80px;
  margin-top: 12px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  padding: 8px 40px;
  justify-content: center;

  background-color: var(--bcg-white-color);
  border-radius: 30px;

  @media (min-width: 768px) {
    width: 395px;
    margin-top: 28px;
    margin-bottom: 0px;
  }

  @media (min-width: 1280px) {
    width: 395px;
  } ;
`;

export const StyledPBalance = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
`;

export const StyledPTite = styled.div`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: var(--balance-text-color);
`;
// export const CurrencyStyled = styled.table`
//   padding: 5px;
//   margin-top: 50px;
//   margin-left: 40px;
//   width: 280px;
//   height: 174px;
//   left: 20px;
//   top: 144px;
//   color: white;

//   background: #4a56e2;
//   border-radius: 30px;
//   thead {
//   }

//   tbody {
//   }
// `;
