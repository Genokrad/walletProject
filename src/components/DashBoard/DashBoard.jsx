import { Navigation } from '../Navigation/Navigation';

import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';

export const DashBoard = () => {
  return (
    <>
      <Navigation />
      <Balance />
      <Currency />
    </>
  );
};
