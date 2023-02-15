import { useEffect, useState } from 'react';
import axios from 'axios';

// const KEY = '2fdffbc73ca59cbf450fa0d66de3e7b7';
axios.defaults.baseURL = 'https://api.monobank.ua/bank/currency';

export async function fetchMonoApi() {
  const response = await axios();

  console.log(111, response);
  return response;
}

export const useFetchCurrency = response => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // if (!details) return;
    fetchMonoApi(response).then(setDetails);
  }, [details, response]);

  console.log(222, details);

  return details;
};
