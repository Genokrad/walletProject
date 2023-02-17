import { useEffect, useState } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://api.monobank.ua/bank/currency';
// const LOCAL_KEY = 'currency';

export async function fetchMonoApi() {
  const response = await axios('https://api.monobank.ua/bank/currency');
  return response;
}

export const FetchCurrency = () => {
  const [details, setDetails] = useState(null);
  console.log(111, details);
  // useEffect(() => {
  //   console.log('hello');
  //   if (details) {
  //     return;
  //   }

  return fetchMonoApi().then(data => data);
  // fetchMonoApi().then(setDetails);
  // }, [details]);

  // useEffect(() => {
  //   // const time = details.data[0].date;
  //   // console.log(555, time);
  //   localStorage.setItem(LOCAL_KEY, JSON.stringify(details.data[0].date));

  //   const oldTime = JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ?? [];
  //   console.log('old', oldTime);
  //   return oldTime;
  // }, [details]);
  // console.log(222, details);

  // return details;
};
