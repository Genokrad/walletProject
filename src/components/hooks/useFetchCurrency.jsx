import { useEffect, useState } from 'react';
import axios from 'axios';

// const LOCAL_KEY = 'currency';

export async function fetchMonoApi() {
  const response = await axios('https://api.monobank.ua/bank/currency');
  return response;
}

export const useFetchCurrency = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (details) {
      return;
    }
    fetchMonoApi().then(setDetails);
  }, [details]);

  // useEffect(() => {
  //   // const time = details.data[0].date;
  //   // console.log(555, time);
  //   localStorage.setItem(LOCAL_KEY, JSON.stringify(details.data[0].date));

  //   const oldTime = JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ?? [];
  //   console.log('old', oldTime);
  //   return oldTime;
  // }, [details]);
  // console.log(222, details);

  return details;
};
