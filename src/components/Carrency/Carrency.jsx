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
          <ul>
            <li>USD</li>
            <li>EUR</li>
            <li>Bit</li>
          </ul>
        </tbody>
      </CurrencyStyled>
    </>
  );
};
