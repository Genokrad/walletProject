import RegistrationForm from 'components/Registration/Registration';
import sprite from '../../iconsSprite/icons.svg';
import GroupRegTablet from '../../images/Login-Reg/group_reg_tablet.png';
import GroupRegDesk from '../../images/Login-Reg/group_reg_desk.png';
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

const tabletSise = window.matchMedia('(min-width: 767px)').matches;
const deskSise = window.matchMedia('(min-width: 1200px)').matches;

export const RegistrationPage = () => {
  return (
    <Container>
      {tabletSise && (
        <ImgReg>
          <img src={deskSise ? GroupRegDesk : GroupRegTablet} alt="Group"></img>
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
