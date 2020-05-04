import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from '../Footer/Footer';
import TopMenu from '../Header/Header';
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import GlobalStyle, { theme } from '../../theme/theme';
import 'normalize.css';

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <header>
            <TopMenu />
            <Menu />
            <Banner title="Help desk" />
        </header>
        <main>{children}</main>
        <Footer />
    </ThemeProvider>
);

export default Layout;
