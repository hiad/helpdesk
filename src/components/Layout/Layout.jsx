import React from 'react';
import TopMenu from '../Header/Header';
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';

const Layout = ({ children }) => (
    <>
        <header>
            <TopMenu />
            <Menu />
            <Banner title="Help desk" />
        </header>
        <main>{children}</main>
        <footer />
    </>
);

export default Layout;
