import LoginForm from 'components/Login/Login';
import sprite from '../../iconsSprite/icons.svg';
import LogTabletX1 from '../../images/Login-Reg/login_tablet.png';
import LogTabletX2 from '../../images/Login-Reg/login_tablet_2x.png';
import LogDeskX1 from '../../images/Login-Reg/login_desk.png';
import LogDeskX2 from '../../images/Login-Reg/login_desk_2x.png';
import { useEffect, useState, useRef } from 'react';
import {
  ContainerLog,
  TitleLog,
  LogLink,
  TitleLogCont,
  Container,
  Imglog,
  TitleImg,
  Backdrop,
} from './LoginPage.styled';

export const LoginPage = () => {
  const [size, setSize] = useState(false);
  const ref = useRef();

  const resizeHandler = () => {
    const { clientWidth } = ref.current || {};
    if (clientWidth > 767) return setSize(true);

    setSize(false);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <Container ref={ref}>
      {size && (
        <Imglog>
          <picture>
            <source
              srcSet={`${LogDeskX1} 1x, ${LogDeskX2} 2x`}
              width="435"
              media="(min-width: 1280px)"
              type="image/png"
            />
            <source
              srcSet={`${LogTabletX1} 1x, ${LogTabletX2} 2x`}
              width="260"
              media="(min-width: 768px)"
              type="image/png"
            />
            <img src={LogDeskX1} width="435" alt="Group" />
          </picture>
          <TitleImg>Finance App</TitleImg>
        </Imglog>
      )}
      <Backdrop>
        <ContainerLog>
          <TitleLogCont>
            <svg width="30" height="30">
              <use href={sprite + '#icon-wallet'}></use>
            </svg>
            <TitleLog>Wallet</TitleLog>
          </TitleLogCont>

          <LoginForm />
          <LogLink to="/registration">Register</LogLink>
        </ContainerLog>
      </Backdrop>
    </Container>
  );
};
