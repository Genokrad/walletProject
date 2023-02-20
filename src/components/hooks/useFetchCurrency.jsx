import { useEffect, useState } from 'react';
import axios from 'axios';

// const LOCAL_KEY = 'currency';

export async function fetchMonoApi() {
  const response = await axios('https://api.monobank.ua/bank/currency');
  return response.data;
}

export const useFetchCurrency = () => {
  const [details, setDetails] = useState([]);
  // JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ()
  // );

  useEffect(() => {
    // const data = JSON.parse(window.localStorage.getItem(LOCAL_KEY));
    // // console.log('data :>> ', data);
    // if (data && details && details.newDate) {
    //   console.log('data :>> ', data);
    //   // console.log('details :>> ', details);

    //   const delta = Date.now() - details.newDate;
    //   console.log(delta);
    //   if (delta < 3600000) {
    //     setDetails(data);
    //     return;
    //   }
    // }

    fetchMonoApi().then(data => {
      console.log(data);
      setDetails(data);
    });
    // .then(() => {
    //   console.log('details :>> ', details);
    //   localStorage.setItem(
    //     LOCAL_KEY,
    //     JSON.stringify({ ...details, newDate: Date.now() })
    //   );
    // });
  }, [details]);

  // if (details) {
  //   localStorage.setItem(
  //     LOCAL_KEY,
  //     JSON.stringify({ ...details, newDate: Date.now() })
  //   );
  // }

  return details;
};
