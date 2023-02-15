import { CurrencyStyled } from './Currency.styled';
import { useFetchCurrency } from 'components/hooks/useFetchCurrency';

export const Currency = () => {
  const data = useFetchCurrency();
  console.log(333, data);
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
            <td>EUR</td>
            <td>Bit</td>
          </tr>
        </tbody>
      </CurrencyStyled>
    </>
  );
};
