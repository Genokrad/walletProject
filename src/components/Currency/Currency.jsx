import { CurrencyStyled } from './Currency.styled';

export const Currency = () => {
  return (
    <>
      <CurrencyStyled>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
          </tr>
          <tr>
            <td>EUR</td>
          </tr>
          <tr>
            <td>Bit</td>
          </tr>
        </tbody>
      </CurrencyStyled>
    </>
  );
};
