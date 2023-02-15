import HomeTab from 'components/HomeTab/HomeTab';

import { useDispatch } from 'react-redux';
import { getAllTransactions } from 'redux/transactionsController/operations';

export const HomePage = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getAllTransactions());
  };

  return (
    <>
      <p>Home Page</p>
      <button onClick={handleClick}>get transaction</button>
      <HomeTab />
    </>
  );
};
