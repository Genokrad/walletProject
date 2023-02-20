import { Navigation } from '../Navigation/Navigation';

import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { StyledDiv, StyledContainer } from './DashBoard.styled';

import { selectIsHideBalance } from 'redux/finance/finance-selectors';
import { useSelector } from 'react-redux';

export const DashBoard = ({ props }) => {
  const showBalance = useSelector(selectIsHideBalance);
  const size = props;

  return (
    <StyledContainer>
      <StyledDiv>
        <Navigation props={props} />
        {showBalance && <Balance />}
      </StyledDiv>
      {size && <Currency />}
    </StyledContainer>
  );
};
