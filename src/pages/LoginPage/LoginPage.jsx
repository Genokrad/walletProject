import  LoginForm  from 'components/Login/Login';
import sprite from '../../iconsSprite/icons.svg';
import Grouptablet from '../../images/Login-Reg/group_tablet.png';
import GroupDesk from '../../images/Login-Reg/group_desk.png';
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

const tabletSise = window.matchMedia('(min-width: 767px)').matches;
const deskSise = window.matchMedia('(min-width: 1200px)').matches;

export const LoginPage = () => {
  return (
    <Container>
      {tabletSise && (
        <Imglog>
          <img
            src={deskSise ? GroupDesk : Grouptablet}
            alt="Group"
          ></img>
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
