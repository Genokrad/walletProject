import { CurrencyStyled, ListStyled, TypeStyled } from './Currency.styled';
import { useFetchCurrency } from 'components/hooks/useFetchCurrency';

export const Currency = () => {
  const data = useFetchCurrency();
  console.log(333, data.data[0]);

  return (
    <>
      <CurrencyStyled>
        <ListStyled>
          <li>Currency</li>
          <li>Purchase</li>
          <li>Sale</li>
        </ListStyled>
        <TypeStyled>
          {data.map(item => console.log(444, item))}
          <li>USD</li>
          <li>EUR</li>
          <li>Bit</li>
        </TypeStyled>
      </CurrencyStyled>
    </>
  );
};

// {
//   data.map(item => console.log(444, item));
// }
