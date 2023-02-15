import React from 'react';
import LogoIcon from 'images/Header/logo-icon.svg'
import Delimetr from 'images/Header/delimetr.svg'
import ExitIcon from 'images/Header/exit-icon.svg'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Container, Exit, H2, HeaderLine, ImgDel, ImgWallet, Logo, Name, Wrapper } from './Header.styled';
const Header = () => {
    const user = useSelector(state=>state.auth.user.name);
    return (
        <Container>
            <HeaderLine>
                <Logo to="/">
                    <ImgWallet src={LogoIcon} alt="logo" />
                    <H2>Wallet</H2>
                </Logo>
                <Wrapper>
                    <NavLink to="/???">
                        <Name>{user}</Name>
                    </NavLink>
                    <ImgDel src={Delimetr} alt="delimetr" />
                    <Button type="button"
                    //  onClick='open modal'
                    >
                        <img src={ExitIcon} alt="exit icon" />
                        <Exit>Exit</Exit>
                    </Button>
                    {/* {isModalOpen && <ModalLogOut/>} */}
                </Wrapper>
            </HeaderLine>

        </Container>

    );
};

export default Header;