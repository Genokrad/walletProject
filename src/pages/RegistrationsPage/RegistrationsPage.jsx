import RegistrationForm from 'components/Registration/Registration';
import sprite from '../../iconsSprite/icons.svg';
import RegTabletX1 from '../../images/Login-Reg/reg_tablet.png';
import RegTabletX2 from '../../images/Login-Reg/reg_tablet_2x.png';
import RegDeskX1 from '../../images/Login-Reg/reg_desk.png';
import RegDeskX2 from '../../images/Login-Reg/reg_desk_2x.png';
import { useEffect, useState, useRef } from 'react';
import {
  ContainerReg,
  TitleReg,
  RegLink,
  TitleRegCont,
  Container,
  ImgReg,
  TitleImg,
  Backdrop,
} from './RegistrationsPage.styled';



export const RegistrationPage = () => {
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
        <ImgReg>
          <picture>
            <source
              srcSet={`${RegDeskX1} 1x, ${RegDeskX2} 2x`}
              width="435"
              media="(min-width: 1280px)"
              type="image/png"
            />
            <source
              srcSet={`${RegTabletX1} 1x, ${RegTabletX2} 2x`}
              width="260"
              media="(min-width: 768px)"
              type="image/png"
            />
            <img src={RegDeskX1} width="435" alt="Group" />
          </picture>
          <TitleImg>Finance App</TitleImg>
        </ImgReg>
      )}
      <Backdrop>
        <ContainerReg>
          <TitleRegCont>
            <svg width="30" height="30">
              <use href={sprite + '#icon-wallet'}></use>
            </svg>
            <TitleReg className="title">Wallet</TitleReg>
          </TitleRegCont>

          <RegistrationForm />
          <RegLink to="/login">Log in</RegLink>
        </ContainerReg>
      </Backdrop>
    </Container>
  );
};
