import { LoginForm } from 'components/Login/Login';
import sprite from '../../iconsSprite/icons.svg';
import {
  ContainerLog,
  TitleLog,
  LogLink,
  TitleLogCont,
} from './LoginPage.styled';

export const LoginPage = () => {
  return (
    <>
      <ContainerLog>
        <TitleLogCont>
          <svg width="30" height="30">
            <use href={sprite + '#icon-wallet'}></use>
          </svg>
          <TitleLog className="title">Wallet</TitleLog>
        </TitleLogCont>

        <LoginForm />
        <LogLink to="/registration">Register</LogLink>
      </ContainerLog>
    </>
  );
};
