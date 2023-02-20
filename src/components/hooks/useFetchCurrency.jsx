import { useEffect, useState } from 'react';
import axios from 'axios';

const LOCAL_KEY = 'currency';

export async function fetchMonoApi() {
  const response = await axios('https://api.monobank.ua/bank/currency');
  return response;
}

export const useFetchCurrency = () => {
  const [details, setDetails] = useState(null);
  // JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ()
  // );

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem(LOCAL_KEY));
    console.log('data :>> ', data);
    if (data) {
      const delta = Date.now() - details.newDate;
      if (delta < 3600000) {
        setDetails(data);
        return;
      }
    }

    fetchMonoApi().then(setDetails);
  }, [details]);

  if (details) {
    localStorage.setItem(
      LOCAL_KEY,
      JSON.stringify({ ...details, newDate: Date.now() })
    );
  }

  return details;
};
