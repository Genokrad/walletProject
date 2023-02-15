import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { StatisticsPage } from 'pages/Statistics/StatisticsPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegistrationPage } from 'pages/RegistrationsPage/RegistrationsPage';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        {/* <Route path="/" element={<PrivateRoute redirectTo="/login" component={<Layout />} />}> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/statistics_page" element={<StatisticsPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
