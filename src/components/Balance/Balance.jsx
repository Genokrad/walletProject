import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';
import { StyledDiv, StyledPBalance, StyledPTite } from './Balance.styled';

export const Balance = () => {
  const { balance } = useSelector(getUserName);

  return (
    <StyledDiv>
      <StyledPTite>Your balance</StyledPTite>
      <StyledPBalance>₴ {balance}</StyledPBalance>
    </StyledDiv>
  );
};
