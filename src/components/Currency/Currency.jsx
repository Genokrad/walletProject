import {
  CurrencyStyled,
  ListStyled,
  ListLI,
  TypeStyled,
} from './Currency.styled';
import { useFetchCurrency } from 'components/hooks/useFetchCurrency';

export const Currency = () => {
  const data = useFetchCurrency();

  console.log(333, data);
  const usd = data.data[0];
  const eur = data.data[1];
  const allCurrency = [usd, eur];

  console.log('object :>> ', allCurrency);

  return (
    <>
      {data && (
        <CurrencyStyled>
          <ListStyled>
            <ListLI>Currency</ListLI>
            <ListLI>Purchase</ListLI>
            <ListLI>Sale</ListLI>
          </ListStyled>

          <TypeStyled>
            {/* <li>
              <p>USD</p> <p>{usd.rateBuy}</p>
              <p>{usd.rateSell.toFixed(2)}</p>
            </li>
            <li>
              <p> EUR</p>
              <p>{eur.rateBuy}</p>
              <p>{eur.rateSell.toFixed(2)}</p>
            </li> */}

            {allCurrency.map(({ rateBuy, currencyCodeA, rateSell }) => (
              <li key={currencyCodeA}>
                {(currencyCodeA === 840 && <p>USD</p>) ||
                  (currencyCodeA === 978 && <p>EUR</p>)}
                <p>{rateBuy}</p>
                <p>{rateSell.toFixed(2)}</p>
              </li>
            ))}
          </TypeStyled>
        </CurrencyStyled>
      )}
    </>
  );
};
