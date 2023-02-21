// import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';
import { Header } from 'components/Header/Header';
import { DashBoard } from 'components/DashBoard/DashBoard';
import { StyledMain, StiledLeftPart, StyledContainer } from './Layout.styled';
// import { Login } from 'pages/LoginPage/LoginPage';
// import { Registration } from 'pages/RegistrationsPage/RegistrationsPage';
import { useRef, useEffect } from 'react';
import { selectIsHideBalance } from 'redux/finance/finance-selectors';
import { useSelector } from 'react-redux';
import { Currency } from 'components/Currency/Currency';
import { useDispatch } from 'react-redux';
import { getSizeViewport } from 'redux/auth/auth-selectors';
import { mobSizeHandler, sizeHandler } from 'redux/auth/auth-slice';

export const Layout = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const showBalance = useSelector(selectIsHideBalance);
  const sizeLayout = useSelector(getSizeViewport);

  const resizeHandler = () => {
    const { clientWidth } = ref.current || {};

    if (clientWidth > 767) {
      dispatch(mobSizeHandler())
    } else {
      dispatch(sizeHandler())
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div ref={ref}>
      <Header />
      <StyledMain className="main">
        <StyledContainer>
          <StiledLeftPart>
            <DashBoard />
          </StiledLeftPart>
          <div>
            {sizeLayout && <Outlet />}
            {!sizeLayout && (showBalance ? <Outlet /> : <Currency />)}
          </div>
        </StyledContainer>
      </StyledMain>
    </div>
  );
};
