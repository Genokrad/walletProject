import { Dna } from 'react-loader-spinner';

import {
  CurrencyStyled,
  ListStyled,
  ListLI,
  TypeStyled,
  ImgStyledVector,
  ImgStyledRectangle,
} from './Currency.styled';

import { useFetchCurrency } from 'components/hooks/useFetchCurrency';
import Vector from '../../images/Header/Vector.png';
import Rectangle from '../../images/Header/Rectangle.png';

export const Currency = () => {
  const data = useFetchCurrency();
  const usd = data?.data[0];
  const eur = data?.data[1];
  const allCurrency = [usd, eur];

  return (
    <>
      {!data ? (
        <Dna
          height="150"
          width="150"
          ariaLabel="dna-loading"
          wrapperStyle={{
            position: 'absolute',
            bottom: 'auto',
            left: 'auto',
            zIndex: '100',
          }}
          wrapperClass="dna-wrapper"
          visible={true}
        />
      ) : (
        <CurrencyStyled>
          <ImgStyledRectangle src={Rectangle} alt="img" />
          <ListStyled>
            <ListLI>Currency</ListLI>
            <ListLI>Purchase</ListLI>
            <ListLI>Sale</ListLI>
          </ListStyled>

          <TypeStyled>
            {allCurrency.map(({ rateBuy, currencyCodeA, rateSell }) => (
              <li key={currencyCodeA}>
                {(currencyCodeA === 840 && <p>USD</p>) ||
                  (currencyCodeA === 978 && <p>EUR</p>)}
                <p>{rateBuy}</p>
                <p>{rateSell.toFixed(2)}</p>
              </li>
            ))}
          </TypeStyled>
          <ImgStyledVector src={Vector} alt="img" />
        </CurrencyStyled>
      )}
    </>
  );
};
