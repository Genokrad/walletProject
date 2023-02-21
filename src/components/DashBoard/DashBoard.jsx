import { Navigation } from '../Navigation/Navigation';

import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { StyledDiv, StyledContainer } from './DashBoard.styled';

import { selectIsHideBalance } from 'redux/finance/finance-selectors';
import { useSelector } from 'react-redux';
import { getSizeViewport } from 'redux/auth/auth-selectors';

export const DashBoard = ({ props }) => {
  const showBalance = useSelector(selectIsHideBalance);
  // const size = props;
  const sizeLayout = useSelector(getSizeViewport);
  return (
    <StyledContainer>
      <StyledDiv>
        <Navigation />
        {showBalance && <Balance />}
      </StyledDiv>
      {sizeLayout && <Currency />}
    </StyledContainer>
  );
};
