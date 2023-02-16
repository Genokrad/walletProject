import { CurrencyStyled, ListStyled, TypeStyled } from './Currency.styled';

export const Currency = () => {
  return (
    <>
      <CurrencyStyled>
        <ListStyled>
          <li>Currency</li>
          <li>Purchase</li>
          <li>Sale</li>
        </ListStyled>

        <TypeStyled>
          <li>USD</li>
          <li>EUR</li>
          <li>Bit</li>
        </TypeStyled>
      </CurrencyStyled>
    </>
  );
};
