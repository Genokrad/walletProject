import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    /* width: 1280px; */
  }
`;

// export const StyledContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 320px;
//   height: 100%;
//   padding: 40px 16px;
//   @media screen and (min-width: 768px) {
//     width: 768px;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//   }
// `;
