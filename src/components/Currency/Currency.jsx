import {
  CurrencyStyled,
  ListStyled,
  ListLI,
  TypeStyled,
  ImgStyledVector,
  ImgStyledRectangle,
} from './Currency.styled';

// import { FetchCurrency } from 'components/hooks/FetchCurrency';
import { Loader } from 'components/Loader/Loader';
import Vector from '../../images/Header/Vector.png';
import Rectangle from '../../images/Header/Rectangle.png';
import { useEffect, useState } from 'react';
import { fetchMonoApi } from 'components/hooks/FetchCurrency';

export const Currency = () => {
  // const data = useFetchCurrency().then(data => data);

  const [usd, setUsd] = useState('');
  const [eur, setEur] = useState('');

  // console.log(333, data);

  // const usd = data?.data[0];
  // const eur = data?.data[1];
  const allCurrency = [usd, eur];

  console.log('object :>> ', allCurrency);

  useEffect(() => {
    console.log('qweqwe');
    fetchMonoApi().then(data => {
      setUsd(data.data[0]);
      setEur(data.data[1]);
    });
  }, []);

  return (
    <>
      {!usd ? (
        <Loader />
      ) : (
        <CurrencyStyled>
          <ImgStyledRectangle src={Rectangle} alt="img" />
          <ListStyled>
            <ListLI>Currency</ListLI>
            <ListLI>Purchase</ListLI>
            <ListLI>Sale</ListLI>
          </ListStyled>

          <ImgStyledVector src={Vector} alt="img" />
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
        </CurrencyStyled>
      )}
    </>
  );
};
