import { useSelector } from 'react-redux';
import { selectIsTotalBalance } from 'redux/finance/finance-selectors';
import { StyledDiv, StyledPBalance, StyledPTite } from './Balance.styled';

export const Balance = () => {
  const userMoneyBalance = useSelector(selectIsTotalBalance);
  return (
    <StyledDiv>
      <StyledPTite>Your balance</StyledPTite>
      <StyledPBalance>₴ {userMoneyBalance}</StyledPBalance>
    </StyledDiv>
  );
};
