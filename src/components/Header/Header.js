import React from 'react';
import LogoIcon from '../../images/Header/logo-icon'
import Delimetr from '../../images/Header/delimetr'
import ExitIcon from '../../images/Header/exit-icon'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (

        <header>
            <NavLink to="/">
                <img src={LogoIcon} alt="logo" />
                <h2>Wallet</h2>
            </NavLink>
            <div>
                <NavLink to="/???">
                    <p>username</p>
                </NavLink>
                <img src={Delimetr} alt="delimetr" />
                <button type="Button" onClick='modal'>
                    <img src={ExitIcon} alt="exit icon" />
                    <p>Exit</p>
                </button>
            </div>
        </header>
    );
};

export default Header;