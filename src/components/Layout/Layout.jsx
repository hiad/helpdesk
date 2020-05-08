import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../Footer/Footer';
import TopMenu from '../Header/Header';
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import GlobalStyle, { theme } from '../../theme/theme';

import 'normalize.css';

const Main = styled.main`
    background-color: #fafafa;
    padding-bottom: 100px;
`;

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap" rel="stylesheet" />
        </Helmet>
        <GlobalStyle />
        <header>
            <TopMenu />
            <Menu />
            <Banner title="Help desk" />
        </header>
        <Main>{children}</Main>
        <Footer />
    </ThemeProvider>
);

export default Layout;
