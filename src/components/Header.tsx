import React, { FC, ReactElement } from 'react';
import headerLogo from './../images/header__logo.svg';

const Header: FC = (): ReactElement => (
  <header className="header">
    <img src={headerLogo} alt="Логотип Место" className="header__logo" />
  </header>
);

export default Header;
