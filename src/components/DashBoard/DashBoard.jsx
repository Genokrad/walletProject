import { Navigation } from '../Navigation/Navigation';

import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { StyledDiv } from './DashBoard.styled';

export const DashBoard = () => {
  return (
    <>
      <StyledDiv>
        <Navigation />
        <Balance />
      </StyledDiv>
      <Currency />
    </>
  );
};
