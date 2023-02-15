import { Navigation } from '../Navigation/Navigation';
// import { Outlet } from 'react-router';
import { Balance } from 'components/Balance/Balance';
import { Carrency } from 'components/Carrency/Carrency';

export const DashBoard = () => {
  return (
    <>
      <Navigation />
      <Balance />
      <Carrency />
    </>
  );
};
