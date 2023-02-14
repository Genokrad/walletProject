import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';
// import { Login } from 'pages/LoginPage/LoginPage';
// import { Registration } from 'pages/RegistrationsPage/RegistrationsPage';

export const Layout = () => {
  return (
    <>
      <header className="Header"></header>
      <main className="main">
        <Navigation />
        <Outlet />
      </main>
    </>
  );
};
