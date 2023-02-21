import { Dna } from 'react-loader-spinner';

import {
  CurrencyStyled,
  ListStyled,
  ListLI,
  TypeStyled,
  ImgStyledVector,
  ImgStyledRectangle,
  ListLISale,
} from './Currency.styled';

import { useFetchCurrency } from 'components/hooks/useFetchCurrency';
import Vector from '../../images/Header/Vector.png';
import Rectangle from '../../images/Header/Rectangle.png';
import { useState } from 'react';

const LOCAL_KEY = 'currency';

export const Currency = () => {
  const [details, setDetails] = useState([]);
  const data = useFetchCurrency();
  console.log(data);

  let allCurrency;

  if (data.length > 0) {
    const usd = data[0];
    const eur = data[1];
    allCurrency = [usd, eur];
  }

  if (allCurrency) {
    localStorage.setItem(
      LOCAL_KEY,
      JSON.stringify({ ...allCurrency, newDate: Date.now() })
    );
    console.log('allCurrency 111 :>> ', allCurrency);
  }

  const newCurrency = JSON.parse(window.localStorage.getItem(LOCAL_KEY));
  if (!newCurrency) {
    console.log('newCurrency 222:>> ', newCurrency);

    const delta = Date.now() - newCurrency.newDate;
    console.log(888, delta);

    if (delta < 3600000) {
      setDetails(newCurrency);
      return;
    }
  }

  console.log(555, details);

  return (
    <>
      {!data.length > 0 ? (
        <Dna
          height="150"
          width="150"
          ariaLabel="dna-loading"
          wrapperStyle={{
            // position: 'absolute',
            bottom: 'auto',
            left: 'auto',
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
            <ListLISale>Sale</ListLISale>
          </ListStyled>
          <ImgStyledVector src={Vector} alt="img" />
          <TypeStyled>
            {newCurrency.map(({ rateBuy, currencyCodeA, rateSell }) => (
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
