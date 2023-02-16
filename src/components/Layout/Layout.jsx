// import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';
import { Header } from 'components/Header/Header';
import { DashBoard } from 'components/DashBoard/DashBoard';
import { StyledMain, StiledLeftPart, StyledContainer } from './Layout.styled';
// import { Login } from 'pages/LoginPage/LoginPage';
// import { Registration } from 'pages/RegistrationsPage/RegistrationsPage';

export const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain className="main">
        <StyledContainer>
          <StiledLeftPart>
            <DashBoard />
          </StiledLeftPart>
          <div>
            <Outlet />
          </div>
        </StyledContainer>
      </StyledMain>
    </>
  );
};
