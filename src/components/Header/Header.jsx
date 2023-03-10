import React from 'react';
import LogoIcon from 'images/Header/logo-icon.svg';
import Delimetr from 'images/Header/delimetr.svg';
import ExitIcon from 'images/Header/exit-icon.svg';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useOpenModalLogout } from 'components/modalHooks/hooks';
import { getIsModalLogoutOpen } from 'redux/auth/auth-selectors';
import {
  Button,
  Container,
  Exit,
  H2,
  HeaderLine,
  ImgDel,
  ImgWallet,
  Logo,
  Name,
  Wrapper,
} from './Header.styled';
import { getUserName } from 'redux/auth/auth-selectors';
import { ModalLogout } from 'components/ModalLogout/ModalLogout';
export const Header = () => {
  const { username } = useSelector(getUserName);
  const openModal = useOpenModalLogout();
  const isModalOpen = useSelector(getIsModalLogoutOpen);

  return (
    <Container>
      <HeaderLine>
        <Logo to="/">
          <ImgWallet src={LogoIcon} alt="logo" />
          <H2>Wallet</H2>
        </Logo>
        <Wrapper>
          <NavLink to="/???">
            <Name>{username}</Name>
          </NavLink>
          <ImgDel src={Delimetr} alt="delimetr" />
          <Button type="button" onClick={openModal}>
            <img src={ExitIcon} alt="exit icon" />
            <Exit>Exit</Exit>
          </Button>
          {isModalOpen && <ModalLogout />}
        </Wrapper>
      </HeaderLine>
    </Container>
  );
};
