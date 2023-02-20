// import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router';
import { Header } from 'components/Header/Header';
import { DashBoard } from 'components/DashBoard/DashBoard';
import { StyledMain, StiledLeftPart, StyledContainer } from './Layout.styled';
// import { Login } from 'pages/LoginPage/LoginPage';
// import { Registration } from 'pages/RegistrationsPage/RegistrationsPage';
import { useState, useRef, useEffect } from 'react';
import { selectIsHideBalance } from 'redux/finance/finance-selectors';
import { useSelector } from 'react-redux';
import { Currency } from 'components/Currency/Currency';

export const Layout = () => {
  const [sizeLayout, setSizeLayout] = useState(false);
  const ref = useRef();
  const showBalance = useSelector(selectIsHideBalance);

  const resizeHandler = () => {
    const { clientWidth } = ref.current || {};
    if (clientWidth > 767) return setSizeLayout(true);
    setSizeLayout(false);
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
            <DashBoard props={sizeLayout} />
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
