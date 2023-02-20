import { useEffect, useState } from 'react';
import axios from 'axios';

const LOCAL_KEY = 'currency';

export async function fetchMonoApi() {
  const response = await axios('https://api.monobank.ua/bank/currency');
  return response;
}

export const useFetchCurrency = () => {
  const [details, setDetails] = useState(
    JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ?? []
  );

  useEffect(() => {
    if (Date.now() - details.newDate < 3600000) {
      return;
    }
    fetchMonoApi().then(setDetails);
  }, [details]);

  localStorage.setItem(
    LOCAL_KEY,
    JSON.stringify({ ...details, newDate: Date.now() })
  );

  // const oldTime = JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ?? [];
  // console.log('old', oldTime);

  // console.log(222, details);
  return details;
};
