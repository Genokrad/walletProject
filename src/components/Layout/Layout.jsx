// import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';
import { DashBoard } from 'components/DashBoard/DashBoard';
import Header from 'components/Header/Header';
// import { Login } from 'pages/LoginPage/LoginPage';
// import { Registration } from 'pages/RegistrationsPage/RegistrationsPage';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <DashBoard />
        <Outlet />
      </main>
    </>
  );
};
