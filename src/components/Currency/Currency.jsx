import { CurrencyStyled } from './Currency.styled';

export const Currency = () => {
  return (
    <>
      <CurrencyStyled>
        <ul>
          <li>Currency</li>
          <li>Purchase</li>
          <li>Sale</li>
        </ul>

        <ul>
          <li>USD</li>
          <li>EUR</li>
          <li>Bit</li>
        </ul>
      </CurrencyStyled>
    </>
  );
};
