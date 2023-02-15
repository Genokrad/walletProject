import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { StatisticsPage } from 'pages/Statistics/StatisticsPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegistrationPage } from 'pages/RegistrationsPage/RegistrationsPage';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage';

import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';
import { useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from './../redux/auth/auth-selectors';

export const App = () => {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  return (
    !isFetchingCurrentUser && (
      <>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          {/* <Route path="/" element={<PrivateRoute redirectTo="/login" component={<Layout />} />}> */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/diagram"
              element={
                <PrivateRoute>
                  <StatisticsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    )
  );
};
